---
layout: post
title: "Operações básicas no MySQL em modo texto"
tags:
  - mysql
  - snippets
published: true
---

Conectar ao MySQL:  

```
mysql -u root -p
```

Criar um banco de dados:  

```
CREATE DATABASE banco;
```

Excluir um banco de dados:  

```
DROP DATABASE banco;
```

Criar um usuário e adicionar as permissões específicas de um banco de dados ao usuário criado:  

```
GRANT ALL PRIVILEGES ON banco.* TO "usuario"@"localhost" IDENTIFIED BY "senha";
```

Recarregar os privilégios:  

```
FLUSH PRIVILEGES;
```  

Importar um arquivo SQL para o banco de dados:  

```
mysql -u root -p banco < arquivo.sql
```  

Exportar banco de dados:  

```
mysqldump -u root -p banco > banco.sql
```  

Exportar todos os bancos de dados:  

```
mysqldump -u root -p --all-databases > todos.sql
```  

Em breve mais snippets...
