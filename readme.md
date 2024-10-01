# 🏢 Empresa API

A **Empresa API** é um serviço backend robusto desenvolvido em **Node.js** para facilitar o gerenciamento de empresas. Ela oferece suporte completo às operações CRUD (Criar, Ler, Atualizar e Excluir) voltadas para empresas, sendo ideal para aplicações corporativas ou administrativas. Esta API foi projetada para integrar-se perfeitamente com frontends desenvolvidos em **React Native**, mas também é adequada para qualquer plataforma que necessite de gerenciamento de dados no backend. 📊

## 🛠️ Tecnologias Utilizadas

- **Node.js**: O núcleo da aplicação, permitindo a execução de JavaScript no lado do servidor.
- **Express**: Framework web minimalista para Node.js, utilizado para criar rotas e gerenciar requisições HTTP de forma eficiente.
- **MariaDB**: Sistema de banco de dados relacional utilizado para armazenar e gerenciar informações sobre as empresas.
- **JWT (JSON Web Token)**: Para autenticação e segurança das rotas da API.

## ⚙️ Funcionalidades

- **Gerenciamento Completo de Empresas**:
  - 📥 **Cadastro de Empresas**: Insira os dados necessários para registrar uma nova empresa no banco de dados.
  - 📝 **Atualização de Empresas**: Modifique dados de empresas já existentes.
  - 🗑️ **Exclusão de Empresas**: Remova empresas do banco de dados quando necessário.
  - 🔍 **Consulta de Empresas**: Obtenha informações detalhadas de empresas cadastradas.
  
- **Autenticação Segura**:
  - 🔐 **Autenticação via JWT**: Proteja as rotas da API usando tokens de autenticação. Apenas usuários autenticados podem acessar as rotas protegidas.
  
## 🚀 Como Iniciar a API

Siga os passos abaixo para configurar e iniciar a API:

### 1. Clonar o Repositório

git clone https://github.com/SEU-USUARIO/Empresa-api.git
cd Empresa-api

### 2. Instalar Dependências

Instale as dependências necessárias para o projeto:

npm install

### 3. Configurar Variáveis de Ambiente

Crie um arquivo .env na raiz do projeto, baseado no arquivo .env.example, e configure as variáveis de ambiente, como as credenciais do banco de dados e o segredo do JWT:

DB_HOST=seu_host
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_NAME=nome_do_banco
JWT_SECRET=seu_segredo_jwt

### 4. Rodar o Projeto

Para iniciar o servidor da API, execute o seguinte comando:

node --watch ./src/app.js

Este comando iniciará a aplicação e gerará um JWT para autenticação. Lembre-se de usar o token nas requisições às rotas protegidas da API.

## 🔐 Proteção de Rotas

A API utiliza JWT para proteger as rotas. Para acessar rotas como criar, atualizar ou excluir empresas, é necessário fornecer o token de autenticação no header das requisições HTTP:

Authorization: Bearer <seu_token_jwt>

### Exemplos de Rotas Protegidas:

- POST /empresa - Criação de nova empresa (Requer Token)
- PUT /empresa/:id - Atualização de empresa (Requer Token)
- DELETE /empresa/:id - Exclusão de empresa (Requer Token)
- GET /empresa/:id - Consulta de dados de uma empresa específica (Requer Token)

## 🧑‍💻 Contribuição

Contribuições são sempre bem-vindas! Sinta-se à vontade para enviar pull requests ou abrir issues com melhorias e correções.

---

Feito com 💻 e ☕ por [Seu Nome].
