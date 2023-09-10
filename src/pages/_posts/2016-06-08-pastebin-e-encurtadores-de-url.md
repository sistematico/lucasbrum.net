---
layout: post
title: "Definindo aplicativos padrão no Arch Linux"
tags:
  - arch linux
published: true
---

### Usando o xdg-mime:

Instale o pacote [xdg-utils](https://www.archlinux.org/packages/xdg-utils):  

```bash
sudo pacman -S xdg-utils
```  

Ache o tipo do arquivo:  

```bash  
xdg-mime query filetype /path/pagina.html
```

Veja qual aplicativo está associado:  

```bash  
xdg-mime query default text/html
```

Liste os aplicativos instalados:  

```bash
ls /usr/share/applications/
```  
Configure o aplicativo padrão:

```bash
xdg-mime default chromium.desktop text/html
```

Fontes: [Arch Linux Wiki](https://wiki.archlinux.org/index.php/default_applications)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Arch Linux Forums](https://bbs.archlinux.org/viewtopic.php?pid=732285#p732285)

Boa sorte! :wink:
