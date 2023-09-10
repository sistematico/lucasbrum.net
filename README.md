# 🌎 [lucasbrum.net](https://lucasbrum.net)

<p align="center">
  <img src="https://github.com/sistematico/lucasbrum.net/raw/main/public/assets/img/logo.svg#gh-dark-mode-only" alt="Lucas Saliés Brum" width="300" />
  <img src="https://github.com/sistematico/lucasbrum.net/raw/main/public/assets/img/logo-dark.svg#gh-light-mode-only" alt="Lucas Saliés Brum" width="300" />
</p>

### 🤖 CI/CD

[![CD](https://github.com/sistematico/lucasbrum.net/actions/workflows/pages.yml/badge.svg)](https://github.com/sistematico/lucasbrum.net/actions/workflows/pages.yml)

### 📰 Descrição

Meu site profissional usando o <b>[Vite](https://vitejs.dev)</b><sup><em>(com foco na velocidade)</em></sup> + [Vue.js](https://vuejs.org) + [TypeScript](https://www.typescriptlang.org)<br>

### 🎉 Demonstração

- [lucasbrum.net](https://lucasbrum.net) (Hospedado no [Github Pages](https://pages.github.com))

### Bibliotecas, frameworks e linguagens

- [Vue.js 3](https://vuejs.org) (Setup Syntax + Composition API)
- [Vite](https://vitejs.dev) (Setup Syntax + Composition API)
- [TypeScript](https://www.typescriptlang.org) (Setup Syntax + Composition API)
- [Twitter Bootstrap 5](https://getbootstrap.com)

### Plugins

```json
  "dependencies": {
    "@popperjs/core": "^2.11.8",
    "bootstrap": "^5.3.1",
    "fs-extra": "^11.1.1",
    "unplugin-vue-markdown": "^0.24.3",
    "vue": "^3.3.4",
    "vue-router": "^4.2.4"
  },
  "devDependencies": {
    "@types/fs-extra": "^11.0.1",
    "@types/node": "^20.6.0",
    "@vitejs/plugin-vue": "^4.2.3",
    "gray-matter": "^4.0.3",
    "sass": "^1.66.1",
    "typescript": "^5.0.2",
    "unplugin-vue-components": "^0.25.2",
    "vite": "^4.4.5",
    "vite-plugin-pages": "^0.31.0",
    "vue-tsc": "^1.8.5"
  }
```

### Context update(Família RHEL)

```bash
chcon -vR system_u:object_r:httpd_sys_content_t:s0 /var/www/lucasbrum.net
setsebool -P httpd_can_network_connect 1
```

### Instruções

Clonar o repositório: 

```bash
git clone git@github.com:sistematico/lucasbrum.net.git
```

Instalar as dependências:

```bash
pnpm install
```

Testar o projeto:

```bash
pnpm run dev
```

Abra a url em seu navegador: [http://localhost:5173](http://localhost:5173) 
Tudo deve funcionar conforme o esperado 🥳

### FAQ

*Erro nos logs do Nginx* 

`failed (13: Permission denied) while connecting to upstream XXXX`

*Solução*

```bash
setsebool -P httpd_can_network_connect 1
```

### 👏 Ajude

Se o meu trabalho foi útil de qualquer maneira, considere doar qualquer valor através do das seguintes plataformas:

[![LiberaPay](https://img.shields.io/badge/LiberaPay-gray?logo=liberapay&logoColor=white&style=flat-square)](https://liberapay.com/sistematico/donate) [![PagSeguro](https://img.shields.io/badge/PagSeguro-gray?logo=pagseguro&logoColor=white&style=flat-square)](https://pag.ae/bfxkQW) [![ko-fi](https://img.shields.io/badge/ko--fi-gray?logo=ko-fi&logoColor=white&style=flat-square)](https://ko-fi.com/K3K32RES9)
[![Buy Me a Coffee](https://img.shields.io/badge/Buy_Me_a_Coffee-gray?logo=buy-me-a-coffee&logoColor=white&style=flat-square)](https://www.buymeacoffee.com/sistematico) [![Open Collective](https://img.shields.io/badge/Open_Collective-gray?logo=opencollective&logoColor=white&style=flat-square)](https://opencollective.com/sistematico)
[![Patreon](https://img.shields.io/badge/Patreon-gray?logo=patreon&logoColor=white&style=flat-square)](https://patreon.com/sistematico)

[![GitHub Sponsors](https://img.shields.io/github/sponsors/sistematico?label=Github%20Sponsors)](https://github.com/sponsors/sistematico)