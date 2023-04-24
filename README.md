# Desafio Final Gama XP47 - Ecommerce [ back-end ]
## ***Repositório referente ao desafio final da Gama xp 47 - Back-end ecommerce***


## ***Requisitos do projeto***

- node.js
- Typescript
- MySQL


## ***Arquitetura/Padrão do Projeto***

- Solid/DDD


## ***Tratamento de Erros***

- Foi aplicado o tratamento de erros através de um middleware
'src/infra/midlewwares/handleError.ts', aplicado na classe App.js(this.server.use(handleError);), onde é declarada toda a 
estrutura do servidor da aplicação, que é instanciado na pasta 'src' do projeto.  


## ***Desempenho das requisições em conjunto com o banco de dados***

- Este desempenho foi efetuado através das dependências 'sequelize' e 'sequelize-cli'


## ***Diagrama e estrutura do banco de dados***

<img src="img/diagrama_banco_de_dados.png" alt="Diagrama banco de dados ecommerce">


## ***Detalhes do projeto***

Este projeto foi construído com as técnicas avançadas de node/express.
Foi aplicado o padrão dot/env onde é criado um arquivo .env que contém constantes de ambiente
cujo os quais guardam os valores sensiveis, tais como: dados de acesso de banco de dados, e chaves secretas(SECRET_KEY).
Além do arquivo .env é criado também um arquivo .env.exampple, que é contém apenas a chave sem o valor. Assim ao
subir um commit para o github apenas esse arquivo(.env.example) sob junto com o restante dos outros arquivos do projeto.
Evitando assim, que o arquivo contendo os dados sensíveis suba para o repositório do github.

Foi aplicado também o padrão de encriptação de senhas com a dependência 'bcryptjs', ao inserir um usuário no banco de dados.
E também o padrão jwt(jasonwebtoken), que quando o usuário loga na api, é retornado um token de autenticação para poder verificar
a autenticidade do usuário em páginas onde requer autenticação. Nesse processo de verificação também é utilizado o 'bcryptjs' para verificar se os valores das senhas batem uma com a outra.

Também é utilizada a dependência multer para aplicação de envio de arquivos(middleware:  'src/infra/middlewwares/upload.ts'), que no caso desse trabalho, foi para o envio de imagens
referentes a parte de categorias, produtos e configuração dos dados da loja(logotipo).

Além de todos os requisitos para a construção dessa api, para ser consumida por uma aplicação front-end em React, também foi aplicado os extras
para a criação de um crud para cupons de desconto, e também para a realização de listagem de produtos por categoria. Todos os endpoints com suas 
funcionalidades, estão na ducumentação da api. Referenciado abaixo neste documento.

## ***Teste automatizados***

A parte de tetes automatizados está na branch 'testes' neste repositório.

## ***Link da documentação da api***

# Desafio Final Gama XP47 - Ecommerce [ back-end ]
## ***Repositório referente ao desafio final da Gama xp 47 - Back-end ecommerce***


## ***Requisitos do projeto***

- node.js
- Typescript
- MySQL


## ***Arquitetura/Padrão do Projeto***

- Solid/DDD


## ***Tratamento de Erros***

- Foi aplicado o tratamento de erros através de um middleware
'src/infra/midlewwares/handleError.ts', aplicado na classe App.js(this.server.use(handleError);), onde é declarada toda a 
estrutura do servidor da aplicação, que é instanciado na pasta 'src' do projeto.  


## ***Desempenho das requisições em conjunto com o banco de dados***

- Este desempenho foi efetuado através das dependências 'sequelize' e 'sequelize-cli'


## ***Diagrama e estrutura do banco de dados***

<img src="img/diagrama_banco_de_dados.png" alt="Diagrama banco de dados ecommerce">


## ***Detalhes do projeto***

Este projeto foi construído com as técnicas avançadas de node/express.
Foi aplicado o padrão dot/env onde é criado um arquivo .env que contém constantes de ambiente
cujo os quais guardam os valores sensiveis, tais como: dados de acesso de banco de dados, e chaves secretas(SECRET_KEY).
Além do arquivo .env é criado também um arquivo .env.exampple, que é contém apenas a chave sem o valor. Assim ao
subir um commit para o github apenas esse arquivo(.env.example) sob junto com o restante dos outros arquivos do projeto.
Evitando assim, que o arquivo contendo os dados sensíveis suba para o repositório do github.

Foi aplicado também o padrão de encriptação de senhas com a dependência 'bcryptjs', ao inserir um usuário no banco de dados.
E também o padrão jwt(jasonwebtoken), que quando o usuário loga na api, é retornado um token de autenticação para poder verificar
a autenticidade do usuário em páginas onde requer autenticação. Nesse processo de verificação também é utilizado o 'bcryptjs' para verificar se os valores das senhas batem uma com a outra.

Também é utilizada a dependência multer para aplicação de envio de arquivos(middleware:  'src/infra/middlewwares/upload.ts'), que no caso desse trabalho, foi para o envio de imagens
referentes a parte de categorias, produtos e configuração dos dados da loja(logotipo).

Além de todos os requisitos para a construção dessa api, para ser consumida por uma aplicação front-end em React, também foi aplicado os extras
para a criação de um crud para cupons de desconto, e também para a realização de listagem de produtos por categoria. Todos os endpoints com suas 
funcionalidades, estão na ducumentação da api. Referenciado abaixo neste documento.

## ***Teste automatizados***

A parte de tetes automatizados está na branch 'testes' neste repositório.

## ***Link da documentação da api***

https://crdigital.github.io/Desafio-Final-Gama-XP47-ecommerce-back-end/


## ***Link do repositório do front-end***
