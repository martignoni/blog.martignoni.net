---
title: Section presentation example
author: Nicolas Martignoni
date: 2025-08-09
lastmod: 2025-08-09
outputs:
  - Reveal
layout: bundle
reveal_hugo:
  theme: simple
  margin: 0.2
---
# Bundle Presentation

Un exemple de présentation par section.

---

{{< slide id="hello" background="#FFF" transition="fade" transition-speed="fast" >}}

Section presentations are completely separate from the root presentation and each other.

---

Additional content files can be placed in the section and will be added to the presentation in the order of their weight.

{{% note %}}
Don't forget to thank the audience.
{{% /note %}}

---

## Un sous-titre

{{% fragment %}}One{{% /fragment %}}

{{% fragment %}}Two{{% /fragment %}}

{{% fragment %}}Three{{% /fragment %}}
