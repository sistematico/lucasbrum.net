---
layout: post
title: "Usando o git.io, gist e ix.io por linha de comando"
tags:
  - dicas
  - pastebin
  - url
published: true
---

Como usar os Git.io, gist e o ix.io direto da linha de comando:

## Encurtando uma URL  
#### git.io:  

```bash
curl -i https://git.io -F "url=https://github.com/url/muito/longa"
```  

## Enviando um trecho de código ou texto para o Github:  
#### gists:  

Instalando o gist no Arch Linux:  

```bash
sudo pacman -S gist
```  

Fazendo o login:  

```bash
gist --login
```   

Enviando o código:

```bash
gist arquivo.txt
```  

#### ix.io:  

Colando um arquivo de texto em http://ix.io

```bash
cat arquivo.txt | curl -F 'f:1=<-' ix.io
```    

Instalando o ix:  

```bash
curl ix.io/client > ix  
chmod +x ix  
sudo mv ix /usr/bin/
```  

Usando:

```bash
ix arquivo.txt
```  

Alguns serviçoes de encurtamento de URL e pastebin em: [links](/links)  
Exemplos de funções para o Fish Shell: [config.fish](/https://github.com/sistematico/caos/blob/master/home/lucas/.config/fish/config.fish)  

Fontes:  
[Github Blog](https://github.com/blog/985-git-io-github-url-shortener)  
[Gist](https://github.com/defunkt/gist)
[ix.io](https://ix.io)
