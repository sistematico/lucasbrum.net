---
layout: post
title: "Emulando o rc.local através do systemd"
tags:
  - lnx
  - systemd
  - dicas
published: true
---

## Execute:
```  
# touch /usr/lib/systemd/system/rc-local.service /etc/rc.local
# chmod +x /usr/lib/systemd/system/rc-local.service /etc/rc.local
# nano /usr/lib/systemd/system/rc-local.service /etc/rc.local
```  

## rc-local.service

```  
[Unit]
Description=/etc/rc.local compatibility

[Service]
Type=oneshot
ExecStart=/etc/rc.local
RemainAfterExit=yes

[Install]
WantedBy=multi-user.target
```  

## /etc/rc.local

```  
#!/bin/sh -e
#
# /etc/rc.local
#
# By default this script does nothing.

algum_comando

exit 0
``` 

## E por último e não meno importante:  
```  
systemctl enable rc-local.service`.  
```  
Todos os comandos executados como _root_.  


Forte Abraço..  
&#45;&#45;  
Lucas Saliés Brum    
a.k.a. sistematico
