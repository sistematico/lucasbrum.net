---
layout: post
title: "CRUD em PHP com Banco de Dados SQLite"
tags:
  - php
  - sqlite
  - pdo
  - snippets
published: true
---

Operações básicas de CRUD(Create, Read, Update, Delete) em PHP usando o PDO e SQLite.

## Operações básicas  

### Criar o arquivo do banco de dados(banco.sqlite)  

```php  
if (!is_dir('db'))
  mkdir('db', 0755);

$db = new PDO('sqlite:db/banco.sqlite');
$db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
$db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE,PDO::FETCH_OBJ);
```

### Create  

```php  
$sql = "CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY, apelido TEXT, senha TEXT, email TEXT, role TEXT, acesso INTEGER, cadastro INTEGER)";

try {
  $db->exec($sql);
} catch (\PDOException $e) {
  echo "Erro ao criar tabela: " . $e->getMessage();
}
```

### Read  

```php  
$sql = "SELECT id,apelido,email,role,acesso,cadastro FROM usuarios";

$query = $db->prepare($sql);
$query->execute(); 
$resultado = $query->fetchAll();  

foreach ($resultado as $usuario) {
  echo "--<br />";
  echo "ID: " . $usuario->id . "<br />";
  echo "Apelido: " . $usuario->apelido . "<br />";
  echo "E-mail: " . $usuario->email . "<br />";
  echo "Cargo: " . $usuario->role . "<br />";
}
```

### Update

```php  
$sql = "UPDATE usuarios SET apelido = :apelido, email = :email, role = :role WHERE id = :id";

try {
  $query = $db->prepare($sql);
  $query->bindParam(':id', $id);
  $query->bindParam(':apelido', $id);
  $query->bindParam(':email', $email);
  $query->bindParam(':role', $role);
} catch (\PDOException $e) {
  echo "Erro ao atualizar registro: " . $e->getMessage();
}
```

### Delete

```php  
$sql = "DELETE FROM usuarios WHERE id = :id";

try {
  $query = $db->prepare($sql);
  $query->bindParam(':id', $id);
  $query->execute();
} catch (\PDOException $e) { 
  echo "Erro ao apagar registro: " . $e->getMessage();
}
```

### Insert

```php  
$sql = "INSERT INTO usuarios (apelido, senha, email, role, acesso, cadastro) VALUES (:apelido, :senha, :email, :role, :acesso, :cadastro)";

try {
  $query = $db->prepare($sql);
  $param = array(':apelido' => $apelido, ':senha' => $hash, ':email' => $email, ':role' => $role, ':acesso' => $acesso, ':cadastro' => $cadastro);
  $query->execute($param);
} catch (\PDOException $e) {
  echo "Erro ao inserir registro: " . $e->getMessage();
}
```  

### Drop  

```php  
$sql = "DROP TABLE IF EXISTS usuarios";
try { 
  $db->exec($drop);
} catch (\PDOException $e) {
  echo "Erro ao apagar a tabela: " . $e->getMessage();
}
```  

## Bônus  

### Search

```php  
$sql = "SELECT * FROM usuarios WHERE apelido LIKE :termo OR email LIKE :termo";
$termo = "%" . $termo . "%";

try {
  $query = $db->prepare($sql);
  $query->bindParam(':termo', $termo);
  $query->execute();
  $resultado = $query->fetchAll();
} catch (\PDOException $e) {
  echo "Erro ao ao buscar por $termo: " . $e->getMessage();
}
```  

### Um único registro

```php  
$sql = "SELECT * FROM usuarios WHERE id = :id LIMIT 1";

try {
  $query = $db->prepare($sql);
  $query->bindParam(':id', $id);
  $query->execute();
  $resultado = $query->fetch();
} catch (\PDOException $e) {
  echo "Erro ao ao buscar por $termo: " . $e->getMessage();
}
```  

### Contando resultados

```php  
$sql = "SELECT * FROM usuarios";

try {
  $query = $db->prepare($sql);
  $query->execute();
  $item = $query->fetchAll(); 
  $qtd = count($item);
} catch (\PDOException $e) {
  echo "Erro ao contar resultados: " . $e->getMessage();
}
```  

### Checa se a tabela existe  

```php  
$sql = "SELECT 1 FROM usuarios LIMIT 1";

try {
  $resultado = $db->query($sql);
} catch (\PDOException $e) {
  unset($e);
  $resultado = false;
}

if ($resultado !== false) {
  echo "A tabela usuarios existe.";
} else {
  echo "A tabela usuarios não existe.";
}
``` 

Lembrando que devido ao `PDO::ATTR_DEFAULT_FETCH_MODE,PDO::FETCH_OBJ` nosso resultado será um objeto no formato: `$obj->nome`

Espero ter ajudado.

Forte Abraço..  
&#45;&#45;  
Lucas Saliés Brum    
a.k.a. sistematico
