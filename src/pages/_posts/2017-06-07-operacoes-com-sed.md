---
layout: post
title: "Operações de texto com o SED"
tags:
  - lnx
  - sed
  - regex
published: true
---

### Cortar apenas o espaço em branco no começo das linhas em um arquivo use um dos três exemplos:  

```bash  
sed -i 's/^ *//' arquivo.txt
sed -i 's/^[[:blank:]]*//g' arquivo.txt
sed -i 's/^[[:space:]]*//g' arquivo.txt
```   
ou para remover qualquer espaço em branco(não só no começo dos arquivos):  

```bash   
sed -i 's/ //' arquivo.txt
sed -i 's/[[:blank:]]//g' arquivo.txt
sed -i 's/[[:space:]]//g' arquivo.txt  
```  

### Extrair apenas a primeira palavra de cada linha:  

```bash  
sed -i 's/ .*//' arquivo.txt
``` 

### Omitir N caracteres no início de cada linha:  

```bash  
sed -i 's/^...//' arquivo.txt
```  

Onde os pontos são os números de caracteres a serem omitidos.

### Removendo todos os comentários de um arquivo  

```bash  
sed -e 's/#.*$//' -e '/^$/d' arquivo
```  

### Alterando um linha específica em um arquivo  

```bash  
variavel="Novo começo"
sed -i "0,/^Começo.*/s//${variavel}/" /caminho/arquivo.txt
```  

Forte Abraço..  
&#45;&#45;  
Lucas Saliés Brum    
a.k.a. sistematico