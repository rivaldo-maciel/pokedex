# Pokedex

## Desktop design

<img src="https://github.com/rivaldo-maciel/pokedex/blob/main/pokedex-desktop.png" />

## Mobile Design

<p align="center">
<img src="https://github.com/rivaldo-maciel/pokedex/blob/main/pokedex-mobile.png" align="center" />
</p>

## Sobre o projeto

Esta aplicação consiste em uma pokedex onde é possível pesquisar personagens do anime Pokemon. Nela é possível obter informações como: nome, altura, peso, tipos e status base.

## Tecnologias utilizadas

- React Js
- Typescript
- Context API
- Tailwind Css

## Como abrir

Acesse a aplicação por meio deste link: https://pokedex-rivaldo-maciel.vercel.app

## Abrir em modo de desenvolvimento local

### Abrindo em sua máquina local

1- Para abrir a aplicação localmente é preciso ter o node instalado em sua máquina ([caso não tenha, clique aqui para instalar](https://www.treinaweb.com.br/blog/instalacao-do-node-js-windows-mac-e-linux)).

2- Clone o repositório utilizando o seguinte link: `git@github.com:rivaldo-maciel/pokedex.git`.

3- Acesse a pasta raiz do projeto.

4- Execute o comando `npm install` para instalar as dependências da aplicação

5- Execute o comando `npm start` para rodar a aplicação no servidor local (verifique se a porta 3000 de sua máquina não está sendo utilizada)

### Abrir Utilizando o Docker

1- Para rodar a aplicação utilizando o Docker é necessário que este esteja instalado em sua máquina ([caso não tenha, clique aqui para instalar](
https://balta.io/blog/docker-instalacao-configuracao-e-primeiros-passos))

2- Clone o repositório utilizando o seguinte link: `git@github.com:rivaldo-maciel/pokedex.git`.

3- Acesse a pasta raiz do projeto.

4- Execute o comando `docker build -t pokedex .` para criar a imagem do container.

5- Após o término da criação da imagem, execute o comando `docker run --name pokedex -p 3000:3000 pokedex` para criar e subir o container da aplicação.

6- Abra o link `localhost:3000` em seu navegador. 









