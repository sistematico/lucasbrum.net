---
layout: post
title: "Shell Script Snippets"
tags:
  - shell
  - script
  - bash
  - snippets
published: true
---

Alguns snippets que podem ser úteis.

## Arrays

### Contando itens de um array:

```bash  
echo ${#array[@]}  
```

### Listagem de diretórios para um array:  

```bash  
i=0
while read linha
do
    arquivos[$i]="$linha"        
    ((i++))
done < <(ls -1 $dir)

echo ${arquivos[0]}
```

### Descobrindo um índice de array com base em seu valor:  

```bash  
array=(vermelho laranja verde)
valor='verde'

for i in "${!array[@]}"; do
   if [[ "${array[$i]}" = "${valor}" ]]; then
       echo "${i}";
   fi
done
```

### Baixando todas as imagens de um site com o wget

```bash  
wget -r -c -nd -p -H -e robots=off --user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:21.0) Gecko/20100101 Firefox/21.0" -A jpg,png https://site.com/media/
```

### Removendo todos os comentários de um arquivo

```bash
sed -e 's/#.*$//' -e '/^$/d' arquivo
```  
Veja essa e outras dicas sobre sed em <a href="/operacoes-com-sed">operações com sed</a>.  

### Pegando um arquivo aleatório de um diretório  

```bash  
ls /dir | shuf -n 1
# ou, um modo mais rápido
find /dir -type f | shuf -n 1
```  

### Redimensionando todas as imagens de um diretório

```bash  
find . -maxdepth 1 -iname "*.jpg" | xargs -L1 -I{} convert -resize 30% "{}" _resized/"{}"
```  
Pode se usar porcentagem ou tamanho, ex: 200x100

### Pegando valores dentro de aspas duplas (")
```bash  
grep -o '".*"' arquivo | sed 's/"//g'
```

### Passando parametros no formato --parametro=valor  
```bash  
for a in $@; do
    pa=$(echo $a | awk -F= '{print $1}')
    va=$(echo $a | awk -F= '{print $2}')

	case $pa in
        -u | --usuario) usuario=$va ;;
		-s | --senha) senha=$va ;;
		-b | --banco) banco=$va ;;
		-c | --caminho) caminho=$va ;;
        *) ajuda ;;
    esac
done  
```  

### Checando se uma variável contem algum valor
```bash  
[ -z $var ] && echo '$var não existe!'
```  

Forte Abraço..  
&#45;&#45;  
Lucas Saliés Brum    
a.k.a. sistematico
