# Node Studies
Repository to learn about Node.JS

## Sumário 
1. [Seção 1: Introdução](#introducao) 
2. [Seção 2: Fundamentos de Node.JS](#fundamentos)
3. [Seção 3: Node Core Modules na prática](#node-core)
4. [Seção 4: Fundamentos do npm](#fundamentos-npm) 
5. [Seção 5: Projeto 1: Accounts](#projeto1) 
6. [Seção 6: Introdução ao Express](#introducao-express) 
7. [Seção 7: Template Engine com Express](#template-engine) 
8. [Seção 8: Integração de Node.JS com MySQL](#integracao-mysql) 



<div id='introducao'/> 

## Seção 1: Introdução 
### O que é Node.JS
- O Node.JS é um runtime de Javascript
- Ou seja, é uma biblioteca utilizada por um compilador durante a execução do programa
- Está construída na V8 engine (escrita em C++) da Google
- Possibilitandoo criar softwares em JS no lado do servidor 
- Temos então um código JS rodando em C++ para garantir alta performance

### O que é npm 
- O npm é um gerenciador de pacotes do Node
- Vamos poder utilizar bibliotecas de terceiros, baixando elas pelo npm
- Executar determinados scripts no nosso programa 
- Os módulos externos ficam numa pasta chamada node_modules
- Ele deve ser descartável, ou seja, a cada instalação do projeto baixamos todos os pacotes novamente

### Utilizando um módulo
- Importaremos um módulo do Node: o File System
- Este módulo serve para trabalhar com diretórios, arquivos e etc
- E ele é um Core Module, ou seja, não é necessário instalar
- Veremos mais sobre modules ao longo do curso
- Podemos importar módulos com a instrução import