---
layout: post
title: "Nginx Snippets"
tags:
  - lnx
  - nginx
  - snippets
published: true
---

Alguns snippets que podem ser úteis.  

## Redirecionar www para não-www  

```  
server {
    server_name www.dominio.com;
    # $scheme é uma variável interna do Nginx. 
    # Se você digitou https://www.dominio.com ele transformará em https://dominio.com
    # E se você digitou http://www.dominio.com ele transformará em http://dominio.com
    return 301 $scheme://$host$request_uri;
}
```  

## Redirecionar http para https  

```  
server {
    listen 80; # IPv4
    listen [::]:80; # IPv6	
    server_name dominio.com;
    return 301 https://$host$request_uri; # Você pode usar $host (variável interna do Nginx) ou dominio.com
}
```  

Forte Abraço..  
&#45;&#45;  
Lucas Saliés Brum    
a.k.a. sistematico
