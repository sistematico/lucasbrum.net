---
layout: post
title: "Instalando o Nginx + PHP FastCGI no Windows 10 como um Serviço"
tags:
  - windows
  - nginx
  - php
  - devel
published: true
---

## Instalando o Nginx + PHP FastCGI no Windows 10 como um serviço.

1. Baixe o [WinSW](https://github.com/kohsuke/winsw/releases/download/winsw-v2.1.2/WinSW.NET2.exe)
2. Faça duas cópias do arquivo WinSW.NET2.exe com os seguintes nomes: `c:\svc\php\phpsvc.exe` e `c:\svc\nginx\nginxsvc.exe`
3. Copie [este](#php) arquivo para `c:\svc\php\phpsvc.xml` e [este](#nginx) para `c:\svc\nginx\nginxsvc.xml`
3. Baixe e extraia o [PHP](https://windows.php.net/download#php-7.3)(Non Thread Safe) em `c:\php`
4. Baixe e extraia o [Nginx](http://nginx.org/en/download.html) para Windows em `c:\nginx`
5. Substitua o arquivo `c:\nginx\conf\nginx.conf` pelo [nginx.conf logo abaixo](#nginxconf)
6. Rode o comando `cmd` com **privilégios de administrador**(isso é muito importante!)
7. Dentro do **prompt de comando** execute os seguintes passos:

```  
cd c:\svc\nginx  
nginxsvc.exe install  
cd c:\svc\php  
phpsvc.exe install
```  

8. Abra o `services.msc` e rode os serviços PHP e Nginx.
10. Tudo pronto!

<a name="php"></a>
{% gist d84e04bbd7eec65dc35a76b634726887 phpsvc.xml %}

<a name="nginx"></a>
{% gist d84e04bbd7eec65dc35a76b634726887 nginxsvc.xml %}

<a name="nginxconf"></a>
{% gist d84e04bbd7eec65dc35a76b634726887 nginx.conf %}

Espero que funcione.  
Forte Abraço..  
&#45;&#45;  
Lucas Saliés Brum    
a.k.a. sistematico
