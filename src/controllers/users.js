let users = [];
function createUser(request, response){
    const { name, age} = request.body;
    
        //criando o objeto de users e salvando
        const newUser = {
            //criando um ID para o user (post)
            id: users.length ? users.length+ 1: 1,
            name,
            age};
    
            //adiciona o valor dos objetos do newUser dentro do array users
        users.push(newUser);
            //traz o retorno do servidor sobre o user
        return response.status(201).json(newUser);     
}
function listUsers(request,response){
        return response.status(200).json(users)}

function listUserDetail(request, response){
        const currentUser = users.find(
            (user) => user.id === parseInt(request.params.id));
    
    if (!currentUser){
        return response.status.json(404)('nao foi possivel encontrar nenhum user');}


    return response.status(200).json(currentUser)
        }

//Deletar user
function deleteUser(request, response){
    const index = users.findIndex(
        (user) => user.id === parseInt(request.params.id));
    
    if (index === -1){ return response.send("nao foi encontrado nenhum User.")}

    users.splice(index, 1);
    return response.status(200).json("usuario excluido com sucesso!")
}

function updateUser(request, response){
    const {age, name} = request.body
    const index = users.findIndex(
        (user) => user.id === parseInt(request.params.id));
    
    if (index === -1){ return response.status(404).json("nao foi encontrado nenhum User.")}
    
    const updateUser = {
        id:users[index].id,
        name,
        age
    }
    users[index] = updateUser;
    return response.status(200).json('User atualizado com sucesso!')
}
module.exports = {createUser, listUsers, listUserDetail, deleteUser, updateUser};