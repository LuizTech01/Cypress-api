# Testes de API RESTful com Cypress

Este repositório contém uma suite de testes para verificar a funcionalidade de uma API RESTful utilizando o Cypress e o plugin `cypress-plugin-api`. Os testes abrangem as operações CRUD (Create, Read, Update, Delete) em produtos e usuários fornecidos pela API [FakeStoreAPI](https://fakestoreapi.com/).

## Tecnologias Utilizadas

- [Cypress]: Framework de teste end-to-end.
- [cypress-plugin-api]: Plugin para realizar chamadas de API com facilidade e exibição detalhada no Cypress.

## Estrutura do Código

Os testes estão organizados em uma descrição geral (`describe`) chamada `Testes de API RESTful lista de produtos` e contêm os seguintes casos de teste:

1. **GET Produtos:** Verifica se a API retorna corretamente a lista de produtos.
2. **GET Categorias de Produtos:** Confirma se a API retorna as categorias de produtos.
3. **GET Produtos por Categoria:** Testa se a API filtra corretamente os produtos por categoria.
4. **GET Produtos com Limite:** Valida a funcionalidade de limitar o número de produtos retornados.
5. **POST Novo Produto:** Verifica a criação de um novo produto.
6. **PUT Atualizar Produto:** Atualiza completamente os dados de um produto existente.
7. **PATCH Atualização Parcial:** Atualiza apenas campos específicos de um produto.
8. **DELETE Produto:** Testa a exclusão de um produto.
9. **GET Lista de Usuários:** Verifica se a API retorna corretamente a lista de usuários com base no `userId`.

## Configuração do Ambiente

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.

2. Instale as dependências do projeto:

   npm install

3. Instale o `cypress-plugin-api`:

   npm install cypress-plugin-api


4. Configure o `cypress-plugin-api` no arquivo `cypress/support/e2e.js`:

   import 'cypress-plugin-api';

   require('cypress-plugin-api');

## Execução dos Testes

Para rodar os testes, utilize os seguintes comandos:

- Executar os testes no modo interativo:
  npx cypress open


- Executar os testes no modo headless:
  npx cypress run
