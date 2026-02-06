const { Router, json } = require("express");
const { createUser, listUsers, listUserDetail, deleteUser, updateUser } = require("./controllers/users");
const {verifyToken} = require("./middlewares/AuthMiddleware");
const routes = Router();

//cria uma rota get para testar api
routes.get('/health',(request, response) => {
    return response.status(200).json('Welcome to my API.')
});

//cria uma rota get para listar todos os users.
routes.get('/users' , listUsers);

// cria uma rota get para listar um user em especifico.
routes.get("/users/:id", listUserDetail)

//crie uma rota post para inserir um novo usuario
routes.post('/users', verifyToken, createUser);


//cria uma rota para deletar um usuario
routes.delete("/users/:id", verifyToken, deleteUser);

//cria uma rota para atualizar um user
routes.put("/users/:id", verifyToken,updateUser);

module.exports = routes;