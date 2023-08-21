---
title: "Deploy your Hugo site through SSH with GitHub Actions"
date: "2022-07-20"
slug: deploy-hugo
description: Static site generation leverages website content management through version-control systems. With the help of CI (continuous integration)  tools, we can set up automatic deployment via SSH. This article shows how to do such deployment using Hugo and GitHub Actions.
categories:
  - Web
  - Informatique
  - Technologie
tags:
  - Hugo
  - Blog
  - Logiciel libre
  - Open Source
  - Git
  - GitHub
---

{{< notice info >}}
This article is an update of <a href="{{< relref "posts/hugo-deployment" >}}">Deploy your Hugo site through SSH with Travis</a>. I don't use Travis CI anymore since they left open source maintainers out in the dust with their new pricing plan in 2020.
{{< /notice >}}

After having [moved my blog from WordPress to Hugo][move], my next objective was to have it built and deployed automatically to [my self-hosted webhosting server][netcup] whenever I push a commit to GitHub. The main reasons to use this process are these:

- I want that any change or addition to the website are as easy to deploy as a simple git commit;
- I want my builds to be reproducible;
- I want a clean state for each build;
- I don't want to be dependent on an external hosting service (no lock-in);
- I don't want to have to worry about a computer crash or about my own Internet connection.

I use this process for more about 4 years to deploy the [MoodleBox][moodlebox] documentation website (more than 1000 web pages!),  and for a few days for deploying this blog (more than 900 pages!). It works great 👍

<!--more-->

There are a lot of articles explaining how to deploy your static website to GitHub pages or similar alternatives, but very few deal with the deployment on your own infrastructure.[^1]

### The tools

- [Hugo][hugo] – Generates my static website
- [GitHub][github] – Hosts the source code and raw contents of the website
- [GitHub Actions][actions] – CI service which builds and deploy the website
- [rsync][rsync] – Transfers the Hugo generated static website to the web hosting server

### The build

Building a web site with Hugo is as simple as calling `hugo`. We have first to instruct GitHub Actions to get Hugo in its virtual machine to build our website. I set the version of Hugo to use with the environment variable `HUGO_RELEASE`. Thus my _.github/workflows/deploy.yml_ file reads[^2]:
```yaml
name: Hugo CI & deploy

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:
    name: Build and deploy website
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          submodules: true
      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: ${{ env.HUGO_RELEASE }}
          extended: true
        env:
          HUGO_RELEASE: '0.101.0'
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '14'
      - name: Cache dependencies
        uses: actions/cache@v2
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-node-
      - name: Run Node
        run: npm ci
      - name: Build website with Hugo
        run: hugo --minify --printI18nWarnings
```
The whole thing should be pretty clear to people using GitHub Actions. Now let's see how to deploy it through SSH.

### The deployment

We'll now deploy the _public_ directory generated by Hugo to the hosting web server through a secure SSH connection. As we want to do this automatically, without having to type in a password to log into the server, we have to use a pair of RSA keys. The public key will be added to the trusted keys of the web server, and the private key will be set in GitHub.

All of this should obviously be done securely so that the private key is never available to the public. And fortunately, GitHub supports [encrypted secrets][secrets], enabling us to keep our secrets secret.

#### Add the RSA key to Action secrets

We generate a dedicated RSA keypair (in case of problem, easier to revoke), by cd'ing to the project's directory and running `ssh-keygen`:

```bash
$ cd <my-blog-project>
$ ssh-keygen -t rsa -b 4096 -C 'GitHub Action' -f ./deploy_rsa
```
This creates the private key: `deploy_rsa` and the public key: `deploy_rsa.pub`. Be careful! The private key should never be published openly. Don't commit anything yet to your git repository.

We can now add a new secret in our GitHub repository (or organization). We choose `DEPLOY_KEY` as the `Name` and copy the private key into the `Value` field.

We copy now the public key to the hosting web server and delete it from the local computer, as well as the private key:

```bash
$ ssh-copy-id -i deploy_rsa.pub <deploy-user>@<web-server-host>
$ rm deploy_rsa deploy_rsa.pub
```

#### Deployment configuration

We're now ready to setup the deployment, which will be done with [rsync][rsync].

As a security measure, we'd like to also keep secret the web hosting server, the user used to do the deployment and the directory where the website resides. We create secrets for these too, named `DEPLOY_HOST`, `DEPLOY_USER` and `DEPLOY_DIRECTORY`, with their adequate value.

We're now ready to add at the end of _.github/workflows/deploy.yml_ the commands to transfer the website data to the web hosting server:

```yaml
      - name: Deploy website with rsync
        uses: burnett01/rsync-deployments@5.2
        with:
          switches: -avzr --quiet --delete
          path: public/
          remote_path: ${{ secrets.DEPLOY_DIRECTORY }}
          remote_host: ${{ secrets.DEPLOY_HOST }}
          remote_user: ${{ secrets.DEPLOY_USER }}
          remote_key: ${{ secrets.DEPLOY_KEY }}
```

If you followed these instructions, you should have a _.github/workflows/deploy.yml_ looking like that:

```yaml
name: Hugo CI & deploy

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:
    name: Build and deploy website
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          submodules: true
      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: ${{ env.HUGO_RELEASE }}
          extended: true
        env:
          HUGO_RELEASE: '0.101.0'
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '14'
      - name: Cache dependencies
        uses: actions/cache@v2
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-node-
      - name: Run Node
        run: npm ci
      - name: Build website with Hugo
        run: hugo --minify --printI18nWarnings
      - name: Deploy website with rsync
        uses: burnett01/rsync-deployments@5.2
        with:
          switches: -avzr --quiet --delete
          path: public/
          remote_path: ${{ secrets.DEPLOY_DIRECTORY }}
          remote_host: ${{ secrets.DEPLOY_HOST }}
          remote_user: ${{ secrets.DEPLOY_USER }}
          remote_key: ${{ secrets.DEPLOY_KEY }}
```

That's all folks! Push now a commit to the main branch of your git repo, and your website is automatically deployed to your host.

  [^1]: One of these few articles is authored by János Rusiczki, and describes [how to deploy a Jekyll blog through SSH][source].
  [^2]: This uses the excellent GitHub Action [`actions-hugo`](https://github.com/peaceiris/actions-hugo) by [Shohei Ueda](https://github.com/peaceiris), provided with a very useful documentation.

  [deploytravis]: {{< relref "posts/hugo-deployment" >}}
  [move]: {{< relref "posts/migration-vers-hugo" >}}
  [moodlebox]: https://moodlebox.net/
  [source]: https://www.rusiczki.net/2018/01/25/use-travis-to-build-and-deploy-your-jekyll-site-through-ssh/
  [hugo]: https://gohugo.io
  [github]: https://github.com
  [actions]: https://github.com/features/actions
  [netcup]: https://www.netcup.de
  [rsync]: https://en.wikipedia.org/wiki/Rsync
  [secrets]: https://docs.github.com/en/actions/security-guides/encrypted-secrets