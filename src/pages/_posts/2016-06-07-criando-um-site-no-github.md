---
layout: post
title: "Como criar um site no Github"
tags:
  - novidades
  - git
  - github
published: true
---

Um novo repositório:

```bash  
echo "# LOGIN.github.io" >> README.md
git init
git add README.md
git commit -m "Meu primeiro commit"
git remote add origin https://github.com/sistematico/LOGIN.github.io.git
git push -u origin master
```

...ou um repositório existente:

```bash  
git remote add origin https://github.com/sistematico/LOGIN.github.io.git
git push -u origin master
```

Para atualizar seu site:

```bash
cd /pasta/do/site/
nano x y z
git add .
git commit -m "Alterados os arquivos x, y e z..."
git push origin master
```

Substitua **LOGIN** com seu nome de usuário do GitHub.  

Saiba mais sobre Git [aqui](/git) e [aqui](/git-filter-branch).

Boa sorte! :wink:
