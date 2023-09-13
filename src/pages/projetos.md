---
title: Projetos - Lucas Saliés Brum
display: Projetos
description: Lista de alguns projetos
# wrapperClass: 'text-center'
projects:
  Atuais:
    - name: 'AgroComm'
      link: 'https://github.com/agro-comm/agrocomm.com.br'
      desc: 'Site feito usando o Vue.js 3 com TypeScript, Setup Syntax e Composition API'
      icon: 'i-logos-nuxt-icon saturate-0'
    - name: 'AgroComm API'
      link: 'https://github.com/agro-comm/api.agrocomm.com.br'
      desc: 'API feita usando o Node.js com Fastify e Prisma'
      icon: 'i-logos-nuxt-icon saturate-0'
---

<Listprojects :projects="frontmatter.projects" />
