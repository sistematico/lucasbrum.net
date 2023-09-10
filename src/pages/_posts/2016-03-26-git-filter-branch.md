---
layout: post
title: "Apagando todas as revisões no Git"
tags:
  - git
published: true
---

Lembre-se de fazer BACKUP dos seus dados antes deste processo!!!

Para apagar todas as revisões de um determinado arquivo usando o Git, prossiga da seguinte maneira:

<!-- mais -->

```bash
git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch pasta/arquivo.txt' --prune-empty --tag-name-filter cat -- --all
```
De uma pastas inteira:

```bash
git filter-branch --force --index-filter 'git rm -r --cached --ignore-unmatch pasta/' --prune-empty --tag-name-filter cat -- --all
```

Será preciso forçar o envio da nova versão sem os arquivos e sem as revisões:

```bash
git push origin --force --all
```

Maiores informações no [Github](https://help.github.com/articles/remove-sensitive-data/).

Forte abraço.
