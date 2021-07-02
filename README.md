# Backend Node.js <img src="https://www.moovin.com.br/assets/images/svg/logo2.svg" width="50">

### Desafio

Desenvolver uma solução em formato de API com a utilização de node.js e Typescript.

### Recursos utilizados
- [Knex](http://knexjs.org/) - Criador de consultas SQL.
  - SQLite3

### Como realizar

Faça o fork do repositório, realize os seus commits e ao final envie o link do seu repositório para o e-mail rh@moovin.com.br. Este repositório já possui uma base para iniciar o desenvolvimento, utilize-a como achar necessário. 

Para iniciar você deve instalar as dependências:
```zsh
  foo@bar:~$ npm i
```

Após a instalação das dependências, você deve rodar a migration e o seed do banco de dados.
```zsh
  foo@bar:~$ npm run knex:migrate
  foo@bar:~$ npm run knex:seed
```

Em seguida você poderá executar exemplos de utilização do sistema criado através do comando:
```zsh
  foo@bar:~$ npm run dev
```

### Rotas do sistema
Você pode importar o arquivo `insomnia.routes` que se encontra na raiz do projeto no [Insomnia](https://insomnia.rest/download)
para testar as rotas do sistema.

### Instruções

Em um pequeno país do planeta Cyber, a moeda vigente é o biteris cuja sigla é B$.

Você precisa desenvolver um algoritmo para um caixa eletrônico, seguindo os requisitos descritos abaixo:

- O banco possui dois tipos de conta: Conta Corrente e Conta Poupança;
- Limite de Saque: B$ 600,00;
- Cada operação de Saque possui uma taxa de operação que deve ser descontado do saldo: B$ 0,30;
- O recurso de Depósito deve receber um código de conta e o valor a ser depositado;
- O recurso de Saque deve receber um código de conta e o valor a ser retirado além de validar se a conta possui saldo e se o valor não excede o limite;

> **ATENÇÃO**: Não é necessário realizar interação com banco de dados (opcional).

### Dúvidas

Em caso de dúvida entre em contato pelo skype **matheusmoovin**

