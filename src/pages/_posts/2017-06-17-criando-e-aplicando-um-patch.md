---
layout: post
title: "Criando e aplicando um patch no Linux"
tags:
  - lnx
  - diff
  - patch
published: true
---

Primeiro vamos criar uma copia do arquivo de sistema.
Usarei como exemplo o arquivo /usr/bin/xdg-open presente em diversas distribuições.

```  
sudo cp /usr/bin/xdg-open /usr/bin/xdg-open.new
```

Faça as alterações necessárias no arquivo:

```  
sudo vim /usr/bin/xdg-open.new
```  

Crie o diff:  

```
diff -Naur /usr/bin/xdg-open /usr/bin/xdg-open.new > xdg-open.diff
```

Aplicando o patch com backup:  

```
sudo patch -b /usr/bin/xdg-open xdg-open.diff
```  

Aplicando o patch sem backup:  

```  
sudo patch -p0 /usr/bin/xdg-open xdg-open.diff
```  

Comparando as diferenças:  

```  
diff /usr/bin/xdg-open /usr/bin/xdg-open.orig
``` 

Em breve mais exemplos...

Boa sorte!  
&#45;&#45;  
Lucas Saliés Brum    
a.k.a. sistematico