---
layout: post
title: "Usando o xclip"
tags:
  - arch linux
  - shell
  - xclip
published: true
---

Um breve guia de como usar o [xclip](https://github.com/astrand/xclip).  

Copiar o conteúdo de um arquivo para a área de transferência:  

```
xclip -sel clip < arquivo.txt
```

Copiando a saída de comando para a área de transferência:  

```
comando | xsel -i -b
```

Agora é só usar o CTRL+v ou CTRL+SHIFT+v e colar!

Boa sorte! :wink:
