---
layout: post
title: "Algumas dicas de como usar o comando find para diversas operações"
tags:
  - terminal
  - snippets
  - find
published: true
---

## Arquivos vazios

### Achar diretórios vazios na pasta atual:

```bash
find . -type d -empty
```

Achar e remover(use com cuidado):

```bash
find . -type d -empty -exec rmdir {} \;
```  

ou

```bash
find . -type d -empty -delete
```  

ou

```bash
find . -type d -empty -print0 | xargs -0 -I {} /bin/rm -r "{}"
```

## Mais de um  

### Procurar mais de um padrão por vez:  

```bash
find . -type f \( -name "*cache" -o -name "*xml" -o -name "*html" \)
```

### Procurar em mais de um diretório:  

```bash
find /var /usr /lib -name "*.py"
```  

## Por tamanho  

### Achar arquivos grandes:  

```bash  
find ~ -type f -size +50000k
```  
* Nesse exemplo acima o comando find irá procurar por arquivos com mais de 100MB na sua pasta $HOME.  

## Por data  

### Achar arquivos mais *antigos* que 5 dias.

```bash  
find /path/ -mtime +5
```  

### Achar arquivos mais **novos** que 5 dias.  

```bash  
find /path/ -mtime 5
```  

Fontes:  
<http://www.thegeekstuff.com/2009/03/15-practical-linux-find-command-examples/>
<http://www.thegeekstuff.com/2009/06/15-practical-unix-linux-find-command-examples-part-2/>  
<https://www.cyberciti.biz/faq/find-large-files-linux/>  
`man find`
