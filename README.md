# https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/

# Curso de JavaScript e TypeScript do básico ao avançado 2021

## BABEL
* npm i --save-dev @babel/cli @babel/preset-env @babel/core
- Gera o bundle
* npx babel main.js -o bundle.js --presets=@babel/env
* npm run babel
* npm i --save-dev 
* npm i express -E
    - Versão exata
* npm update
* npm i express --save-dev
* npm i express --save-prod
* npm i express@2.1.0 --save-prod -E
* npm uninstall express
* npm ls
    - lista as dependências
* npm ls --depth=0
* npm ls --depth=1
* npm outdated
    - arquivos desatualizados

### Script para desistalar e instalar Node no linux
- Pasta do arquivo\ /bin/bash instalador.txt

- Conteúdo do arquivo
```
# REMOVE O NODE ANTERIOR
sudo apt purge --auto-remove nodejs -y
sudo rm /etc/apt/sources.list.d/nodesource.list*

# INSTALA O CURL
sudo apt install curl -y

# BAIXA E INSTALA O NODE X
curl -sL https://deb.nodesource.com/setup_12.x | sudo bash -
sudo apt install nodejs -y

```

## 13: API REST - JavaScript, Node, Express e SQL (MySQL ou MariaDB)

### Eslint
- npm i eslint@6.6.0 --save-dev
- npx eslint --init
> 3 opção
> javascript modules
> None
> n
> node
> use a popula
> airbnb
> js
> y

### Settings
- Engrenagem
  - settintgs
  - open settings json

------------------------
### Sucrase
- npm i nodemon sucrase --save-dev
- nodemon.json
```
{
  "execMap": {
    "js": "node -r sucrase/register"
  }
}
```
### Database
- npm i sequelize mariadb
- npm i -D sequelize-cli
- CREATE DATABASE mydatabase CHARACTER SET utf8 COLLATE utf8_general_ci;
- npx sequelize migration:create --name=alunos
- npx sequelize db:migrate
- npx sequelize db:migrate:undo
- npm i jsonwebtoken
- npm i multer
- npm i sucrase

### Criar seeds
- npx sequelize seed:generate --name criar-usuarios
- npx sequelize db:seed:all
- npx sequelize migration:create --name=mudar-email-aluno-unique
- npx sequelize db:migrate
- npx sequelize migration:create --name=criar-tabela-de-foto-do-aluno


### Deploy
#### Google Clould
- No package.json
  - npm run build
- pm2 start /home/usuario/api/dist/server.js --name=api
- curl http://seudominio
- cd /etc/nginx/sites-enabled/
- ls
- sudo cp DNS novo_arquivo
- nano novo_arquivo
- sudo systemctl stop nginx
- sudo certbot certonly --standalone -d novo_arquivo
  - tem que aparecer congratulations
- sudo systemctl start nginx
- sudo nano /etc/nginx/nginx.conf
  - em http {
    - client_max_body_size 10M;
- sudo systemctl restart nginx
##### Nunca alterar no servidor
  - Ir no dev de sua máquina local
  - corrigir
  - gerar o build
  - subir para produção

- pm2 restart api

![Tipos On Delete](Curso_JS_TS_básico_avançado_2021\img\tipos_onDelete.png)

## 14: React com componentes de classe (Básico) - JavaScript (Lista de Tarefas)

### Criando a aplicação
- npm uninstall -g create-react-app
- yarn global remove create-react-app
- npm i -g create-react-app
- npx create-react-app .
- npm i eslint babel-eslint -D
- npx eslint --init
- npm i react-icons
- npm prop-types

## 15.1: TypeScript - Instalação

## 15.2: TypeScript - Tipos básicos



## GIT

…or create a new repository on the command line
echo "# -my-guide-js-ts" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/andresgois/-my-guide-js-ts.git
git push -u origin main
…or push an existing repository from the command line
git remote add origin https://github.com/andresgois/-my-guide-js-ts.git
git branch -M main
git push -u origin main

git diff --name-only --staged