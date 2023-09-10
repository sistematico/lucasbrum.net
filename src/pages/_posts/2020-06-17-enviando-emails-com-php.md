---
layout: post
title: "Enviando e-mails com PHP"
tags:
  - php
  - snippets
published: true
---

Neste artigo vou ensinar como enviar e-mails com PHP puro sem dependências usando a função `mail()` do próprio PHP.

## Server-Side

### Arquivo: mail.php

```php  
<?php

foreach($_POST as $key => $value) {
	if (empty($value)) {
		echo "O campo <strong>" . $key . "</strong> não pode estar vazio";
		exit;
	}	
}

extract($_POST);

$to = 'contato@lucasbrum.net';
$from = 'noreply@lucasbrum.net';

$headers = 'MIME-Version: 1.0' . "\r\n";
# Enviar e-mails em formato HTML pode fazer com que seu cliente de e-mail reconheça como spam!
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
$headers .= "From: \"Site\" <" . $from . ">\r\n" . "Reply-To: " . $from . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$body = "Nome: " . $nome . "<br />";
$body .= "E-mail: " . $email . "<br />";
$body .= "Assunto: " . $assunto . "<br />";
$body .= "Mensagem: <br /><br />" . $mensagem;

if (@mail($to, 'Contato do site', $body, $headers, '-f' . $from)) {
	echo 'E-mail enviado com sucesso';
} else {
	echo 'Erro ao enviar e-mail';
}
```

## Client-Side

### Arquivo: contato.php

```html  
<!doctype html>
<html lang="pt-br">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Formulário de Contato</title>
</head>
<body>
    <form action="mail.php" method="post">
        <label for="nome">Nome</label>
        <input type="text" id="nome" name="nome" placeholder="Seu nome">

        <label for="email">E-mail</label>
        <input type="email" id="email" name="email" placeholder="Seu e-mail">

        <label for="assunto">Assunto</label>
        <input type="assunto" id="assunto" name="assunto" placeholder="Assunto">

        <label for="mensagem">Mensagem</label>
        <textarea id="mensagem" name="mensagem" placeholder="Sua mensagem..." style="height:200px"></textarea>

        <input type="submit" value="Enviar">
    </form>
</body>
</html>
```

## Configuração de DNS

### Registros MX

```html  
Em breve...
```

## SPAM

### O e-mail só chega na caixa SPAM

Leia o seguinte:  

- [https://pt.stackoverflow.com/a/65212/7759](https://pt.stackoverflow.com/a/65212/7759)

Lembre-se:  

- Os registros MX tem que estar setados para seu servidor ou para um servidor de terceiros.
- O sendmail precisa estar instalado na sua VPS.

Espero ter ajudado.

Forte Abraço..  
&#45;&#45;  
Lucas Saliés Brum    
a.k.a. sistematico
