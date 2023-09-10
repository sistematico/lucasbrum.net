---
layout: post
title: "Criando uma WebRádio com o ShoutCast + sc_trans"
tags:
  - shoutcast
  - tutoriais
published: true
---

Olá pessoal!

Aqui vai uma dica que achei um pouco útil.

sc_trans é o daemon responsável por carregar um lista de músicas que serão tocadas através do sc_serv(ShoutCast), lembrando que esse é o software mais popular para se montar um webrádio.

Este simples script recarrega uma lista de músicas sem parar o ShoutCast:

```  

#!/bin/sh
#
# sct_refresh.sh: Create and Refresh a SC Trans playlist
#
# Developed by Lucas Saliés Brum a.k.a. sistematico, <lucas@archlinux.com.br>
# Based on "Dytut" work:
# http://forums.winamp.com/showpost.php?p=1806538&postcount=6
#
# Suggested cronjob: */60 * * * * /bin/sh /home/shoutcast/bin/sct_refresh.sh
#

# Vars
TRANS_HOME="/home/radio"
TRANS_PID=$(pidof sc_trans)
TRANS_FIND=$(which find)
TRANS_KILL=$(which kill)
TRANS_CHOWN=$(which chown)
TRANS_PATH="${TRANS_HOME}/musicas"
TRANS_LIST="${TRANS_HOME}/lista.lst"
TRANS_USER="radio"
TRANS_GROUP="radio"

# DONT CHANGE BELOW
# Create playlist
$TRANS_FIND $TRANS_PATH -iname "*.mp3" > $TRANS_LIST

# Reload new playlist(try one of above, maybe need root permissions)
#$TRANS_KILL -s USR1 $TRANS_PID
#$TRANS_KILL -USR1 $TRANS_PID
sudo $TRANS_KILL -SIGUSR1 $TRANS_PID

# turn shuffle on/off
# $TRANS_KILL -s USR2 $TRANS_PID

# Change permissions
# $TRANS_CHOWN ${TRANS_USER}:${TRANS_GROUP} $TRANS_LIST
```  

Abaixo seguem alguns Gists que podem ser úteis.

{% gist sistematico/8c8480c5c5ba7c8a154ed353d0700e89 %}

Post original: <http://forums.winamp.com/showthread.php?p=3023643#post3023643>

Forte Abraço..  
&#45;&#45;  
Lucas Saliés Brum    
a.k.a. sistematico
