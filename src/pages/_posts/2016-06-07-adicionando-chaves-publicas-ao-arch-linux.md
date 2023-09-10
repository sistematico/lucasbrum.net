---
layout: post
title: "Adicionando chaves públicas ao Arch Linux"
tags:
  - arch linux
  - gpg
  - pacman-key
published: true
---

Se você já se deparou com o seguinte erro:  

```
┬─[lucas@caos:~/abs/lynx]─[15:01:12]
╰─>$ makepkg
==> Criando o pacote: lynx 2.8.8-4 (Ter Jun  7 15:01:16 AMT 2016)
==> Verificando as dependências de tempo de execução...
==> Verificando as dependências de tempo de compilação...
==> Obtendo fontes...
  -> Baixando lynx2.8.8rel.2.tar.bz2...
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 2526k  100 2526k    0     0  34176      0  0:01:15  0:01:15 --:--:-- 26411
  -> Baixando lynx2.8.8rel.2.tar.bz2.asc...
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   254  100   254    0     0     96      0  0:00:02  0:00:02 --:--:--    96
==> Validando source arquivos com md5sums...
    lynx2.8.8rel.2.tar.bz2 ... Passou
    lynx2.8.8rel.2.tar.bz2.asc ... Ignorada
==> Verificando assinatura de arquivo fonte com gpg...
    lynx2.8.8rel.2.tar.bz2 ... FALHOU (chave pública desconhecida 5DDF8FB7688E31A6)
==> ERRO: Uma ou mais assinaturas PGP não puderam ser verificadas!

```

<!-- mais -->

Segue esta dica:

```
sudo pacman-key -r 5DDF8FB7688E31A6
sudo pacman-key --lsign-key 5DDF8FB7688E31A6
sudo pacman-key --refresh-keys
```

Boa sorte! :wink:  

Fonte: <https://wiki.archlinux.org/index.php/Pacman/Package_signing#Adding_developer_keys>
