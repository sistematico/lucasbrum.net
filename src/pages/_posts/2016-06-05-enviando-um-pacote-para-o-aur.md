---
layout: post
title: "Enviando um pacote para o AUR"
tags:
  - arch linux
  - aur
  - git
published: true
---

Neste breve tutorial explicarei como enviar um pacote para o AUR, usando os novos padrões com o Git.

<!-- mais -->

### Configure suas credenciais.

Edite o arquivo `~/.ssh/config` e adicione as seguintes linhas:  

```bash  
Host aur.archlinux.org
  IdentityFile ~/.ssh/aur
  User aur
```

### Crie uma nova chave SSH(*Pule este passo caso já tenha uma.*):  

```bash  
ssh-keygen
```  

### Copie ou renomeie o arquivo com a chave pública:  

```bash  
cp ~/.ssh/id_rsa.pub ~/.ssh/aur
```

### Copie sua chave:  

```bash  
xclip -sel clip < ~/.ssh/aur  
```

Vá até o [AUR](https://aur.archlinux.org/) > Minha Conta > Chave pública de SSH:  
Cole sua chave com o CTRL+v e clique em Atualizar.  

Crie uma pasta para o(s) seu(s) pacote(s)(pode ser qualquer pasta, na sua home de preferência):  

```bash  
mkdir -p ~/aur/pacote
```

### Copie o prototipo do arquivo PKGBUILD ou crie/edite seu PKGBUILD:  

```bash  
cd ~/aur/pacote
cp /usr/share/pacman/PKGBUILD.proto PKGBUILD
```

### Configure o Git com suas credenciais do AUR(funciona apenas para a pasta contendo o pacote, estas credenciais não são globais):  

```bash  
git config user.name usuario
git config user.email usuario@gmail.com
```

### Edite o PKGBUILD e teste o pacote:  

```bash   
nano PKGBUILD
makepkg -is
```

### Crie o arquivo .SRCINFO e adicione os arquivos ao Git:  

```bash  
makepkg --printsrcinfo > .SRCINFO  
git add PKGBUILD .SRCINFO  
git commit -m "Meu primeiro pacote no AUR"  
git push origin master  
```

Aqui um pequeno helper para automatizar alguns passos deste processo:
{% gist 196107621c492f9db5b774cf0b64255e %}  

Boa sorte e bom empacotamento!

Fontes & Referências:  
* <https://wiki.archlinux.org/index.php/Arch_User_Repository>  
* <https://wiki.archlinux.org/index.php/SSH_keys>  
* <http://rogerdudler.github.io/git-guide/index.pt_BR.html>
