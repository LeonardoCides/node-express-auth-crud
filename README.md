# User Management API 🚀

Esta é uma API RESTful completa para o gerenciamento de utilizadores, desenvolvida como parte dos meus estudos em **Node.js** e **Express**.

O projeto simula um sistema de utilizadores onde é possível criar, listar, atualizar e eliminar registos (CRUD), utilizando middlewares para segurança e organização com o padrão de Controllers.

## 🛠 Tecnologias Utilizadas

* **Node.js** - Ambiente de execução JavaScript.
* **Express** - Framework para a criação das rotas e servidor.
* **JavaScript (ES6+)** - Lógica de programação.

## 📋 Funcionalidades

- [x] **Saúde da API**: Rota simples para verificar se o servidor está online.
- [x] **Listar Utilizadores**: Retorna todos os utilizadores guardados.
- [x] **Detalhes do Utilizador**: Procura um utilizador específico pelo ID.
- [x] **Criar Utilizador**: Adiciona um novo utilizador ao sistema.
- [x] **Atualizar Utilizador**: Modifica os dados de um utilizador existente.
- [x] **Remover Utilizador**: Elimina um utilizador do sistema.
- [x] **Middleware de Autenticação**: Proteção nas rotas de criação, edição e remoção.

## 🛣 Rotas da API

| Método | Rota | Descrição | Autenticação |
| :--- | :--- | :--- | :--- |
| GET | `/health` | Verifica o estado da API | Não |
| GET | `/users` | Lista todos os utilizadores | Não |
| GET | `/users/:id` | Detalhes de um utilizador | Não |
| POST | `/users` | Cria um novo utilizador | **Sim** |
| PUT | `/users/:id` | Atualiza um utilizador | **Sim** |
| DELETE | `/users/:id` | Remove um utilizador | **Sim** |

Desenvolvido por [Leonardo Cides] 
---
