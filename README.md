<h1>Curso de Node Js</h1>

<h1>Apresentação do curso </h1>

- Banco de dados (SQL, MongoDB )
- Fundamentos com CSS
- Node Monololito
- Node API e front com React

<div id='introducao'/>

<h2>JS</h2>

- Interpretador Javascript, que roda fora dos navegadores.

<h2>O que é Node Js?</h2>

- É um interpretador Javascript que roda fora dos navegadores
- Criar aplicações backend
- Programas para inteligencia artificial, ect
- Conecta banco de dados
- Executa JS fora dos navegadores

<h2>Porque usar Node Js </h2>

- Muito leve
- Muito rápido 
- Usa Javascript
- Tem um dos maiores ecossistemas do mundo 
- Está sendo utilizado fortemente no mercado 
- 10x mais requisições mais requisições que php

<h1> Introdução </h1>
<h2> O que é Node Js? </h2>

- É um interpretador Javasctipt, que roda fora dos navegadores
  O Node Js é uma runtime de Javascript
- Ou seja, uma biblioteaca utilizada por um compilador durante a execução do programa
- Está construida na V8 Engine (Escrita em C++ da Google)
- Possibilitando criar softwares em JS no lado do servidor
- Temos então um código JS rodando em C++ para garantir alta performace

<h2> O que posso construir fora dos navegadores? </h2>

- Construir aplicações web end
- Criar aplicacoes pra windows
- Criar aplicacoes de linha de comando

<h2> O que é npm? </h2>

- O npm é um gerenciador de pacotes do Node
- Vamos poder utilizar bibliotecas de terceiros, baixando elas pelo npm
- E também executar determinados scripts no nosso programa
- Dificilmente um software Node.js não utiliza node_modules
- Os modulos externos ficam numa pasta chamada node_modules
- Ele deve ser descartatom ou seja, a cada instalaçào do projeto baixamos todos os pacotes novamente.

<h2>Utilizando um módulo </h2>

- Agora vamos evoluir o nível de todos os nossos programas
- Importaremos um módulo do Node: O File System 
- Este módulo serve para trabalhar com diretório, arquivos, ect 
- E ele é um Core Module, ou seja, não é necessário instalar
- Podemos importar módulos coom a instruçào import

<div id='fundamentos'/>
 
<h1> Fundamentos  </h1>

<h2>O que são módulos </h2>

- Módulos são scripts reaproveitáveis, que utilizamos bastamte programando em Node 
- Eles são divididos em três categorias 
    - Internos: módulos que nós desenvolvemos 
    - Core Modules: Módulos que vem como Node Js
    - Externos: módulos que instalamos via npm
  - São pedaços do seu programa 
  - Servem para não estar em uma única página
  - Separar o seu código em vários arquivos 
  - Módulos para usar uma biblioteca externa

<h2>Módulos internos</h2> 

- Os módulos internos são criados nas pastas do nosso projeto 
- Precisamos exportar o módulo 
- Podemos utilizar a instrução module.exports
- E importar onde precisamos utilizar 
- Para  importar vamos utilizar a instrução require
- Vamos criar um módulo! 


<h2>Core Modules</h2>

- No node temos diversos Core Modules, que são os que vêm prontos para serem utilizados 
- Eles resolvem diversos problemas como: trabalhar com arquivos e diretórios, sevir aplicações e etc.
- Precisamos importar estes módulos pro projeto para poder utilizar

<h3>O que é HTTP</h3>

- Um usuário tem um trabalho  da escola, ele vai ate o Google e o Google vai retorna a pesquisa. 
- O Usuiario só consegue acessar o Google gracas ao HTTP, que é **Protocolo de Transferência de dados** com a web.
- Mandando informacoes para o goodle através do protocolo HTTP. 
- HTTP: **Protocoloco de Trasferencia de dados** 
- Cliente - Servidor 
- Servidor: enviar a resposta
- Cliente: requisição de pesquisa

<h2> Criar um servidor http </h2>

```javascript
    var http = require('http'); 
    http.createServer().listen(8181); 
```

<h1>Express</h1>

- Express um framework para desenvolvimento web backend com o Node Js 
- framework é uma super biblioteca que te ajuda bastante a fazer uma determinada tarefa
- O Express é uma super biblioteca que nos ajuda a construir aplicações web com Node Js 
- O Express é a maneira mais simples de se construir um desenvolvimento web back end com Node Js 
- npm: node package manager

Como começar?

- npm init
- nodemon index.js
