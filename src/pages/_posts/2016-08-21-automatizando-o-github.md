---
layout: post
title: "Automatizando o envio de projetos para o Github"
tags:
  - git
published: true
---

### Configure seu git:  
```  
git config --global user.name "SEU NOME"  
git config --global user.email "SEU EMAIL"
```  

Crie suas chaves SSH e copie-as para a área de transferência:  
```  
ssh-keygen -t rsa -b 4096 -C "seu_email@exemplo.com"  
xclip -sel clip < ~/.ssh/id_rsa.pub  
```  
 
(Para a última linha de comando é necessário o pacote xclip, aprenda aqui neste [outro artigo](/usando-o-xclip/) mais sobre o xclip).


Vá até [aqui](https://github.com/settings/keys) > "New SSH Key" e cole a chave que você acabou de copiar.

Siga [estes](https://help.github.com/articles/create-a-repo/) passos para criar um novo repositório(ou sinta-se livre para dar um fork em um repositório já existente).  

Adicione um upstream e altere o metodo da origem remota:
```  
git remote add upstream https://github.com/USUARIO/REPO.git
git remote set-url origin git+ssh://git@github.com/USUARIO/REPO.git
```  

Altere algum arquivo e envie as modificações:   
```  
touch README.md   
git add .  
git commit -m 'Alterações automáticas...'   
git push origin master  
```  

Acesse seu novo repositório no Github e veja as alterações: <https://github.com/USUARIO/REPO>  

Dica: Para realizar o "push" em suas alterações sem senha, entre na pasta local do seu repositório e digite o seguinte código: `git remote set-url origin git@github.com:USUARIO/REPO.git`  


Fontes:
<https://help.github.com/>   
<http://stackoverflow.com/a/8588786>

Boa sorte e bom git! :laughing:  
&#45;&#45;  
Lucas Saliés Brum    
a.k.a. sistematico
