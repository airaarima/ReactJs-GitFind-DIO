# GitFind 🔎

O GitFind é uma aplicação web que permite aos usuários pesquisar por qualquer perfil no GitHub e visualizar todos os repositórios públicos associados a esse perfil. Desenvolvido com Next.js, Tailwind CSS e TypeScript, o projeto consome a API pública do GitHub para obter os dados necessários.

## Índice
* [Sobre o Projeto](#sobre-o-projeto)
* [Funcionalidades](#funcionalidades)
* [Tecnologias Utilizadas](#tecnologias-utilizadas)
* [Instalação](#instalação)
* [Como Usar](#como-usar)

## Sobre o Projeto
O GitFind foi desenvolvido como parte de um projeto proposto pela plataforma DIO. Enquanto o projeto original utilizava apenas React, esta versão foi aprimorada com Next.js para melhor performance da aplicação, Tailwind CSS para estilização eficiente e TypeScript para tipagem estática.

## Funcionalidades
* Busca por usuários do GitHub pelo nome de usuário.
* Exibição de informações básicas do perfil, como avatar, nome e username.
* Listagem de todos os repositórios públicos do usuário, com a descrição de cada.

## Tecnologias Utilizadas
* Next.js
* React
* Tailwind CSS
* TypeScript
* API do GitHub

## Instalação
Para executar o GitFind localmente, siga os passos abaixo:

Clone o repositório:
```
git clone https://github.com/airaarima/ReactJs-GitFind-DIO.git
```

Navegue até o diretório do projeto:
```
cd ReactJs-GitFind-DIO
```

Instale as dependências:
```
npm install
```

Inicie o servidor de desenvolvimento:
```
npm run dev
```

## Como Usar

1. Abra o navegador e acesse http://localhost:3000.
2. Digite o nome de usuário do GitHub que deseja pesquisar no campo de busca.
3. Pressione "Enter" ou clique no botão de busca.
4. As informações do perfil e a lista de repositórios serão exibidas na tela.
