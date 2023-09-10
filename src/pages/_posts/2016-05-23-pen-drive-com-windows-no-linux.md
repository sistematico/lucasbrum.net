---
layout: post
title: "Criar um pen-drive bootavel do Windows no Linux"
tags:
  - windows
published: true
---
Criar a partição: `cfdisk /dev/sdb` ou `fdisk /dev/sdb` (partição tipo 7 e flag boot)  

Criar o sistema de arquivos NTFS:    

```
mkfs.ntfs -f /dev/sdb1
```
Escrever a MBR do Windows 7 no Pen-Drive(Funciona para o Windows 8 tambem, e talvez o 10?):  

```
ms-sys -7 /dev/sdb
```
ou  

```
sudo lilo -M  /dev/sdb mbr
```
ou  

```
sudo dd if=/usr/lib/syslinux/bios/mbr.bin of=/dev/sdb
```

Montar a ISO e USB:

```
mkdir -p /mnt/usb /mnt/iso
mount -o loop win7.iso /mnt/iso
mount /dev/sdb1 /mnt/usb
```

Copiar os arquivos:      
```
cp -r /mnt/iso/* /mnt/usb/
```

Use o `sync` para ter certeza que os arquivos foram escritos.  

Pronto.

Agora quando quiser restaurar sua instalação é só usar:

```
dd if=/dev/sdb of=/win7.img
```


Fonte: [ServerFault](http://serverfault.com/questions/6714/how-to-make-windows-7-usb-flash-install-media-from-linux/167060#167060)
