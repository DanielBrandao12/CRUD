const fs = require("fs");

function User(nome,sobrenome, email) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.email = email;
 

}

//acessa minha lista de usuários que está em um JSON
function getAll() {
  const listUsers = JSON.parse(
    fs.readFileSync("database/bd.json", "utf-8")
  );
  return listUsers.map(
    (user) =>
      new User(
        user.nome,
        user.sobrenome,
        user.email,
       
      )
  );
}
function getById(id) {
  const listId = getAll();
  return listId[id];
}
function update(nome, sobrenome, email){
 
  const user = getAll()

  user.nome = nome
  user.sobrenome =sobrenome
  user.email =email
  fs.writeFileSync("database/bd.json.json", JSON.stringify(user));
}
//função que vai receber os dados e salvar na minha lista
function create(nome,sobrenome, email) {
  const newUser = new User(nome,sobrenome, email);
  const listUsers = getAll();
  listUsers.push(newUser);
  fs.writeFileSync("database/bd.json", JSON.stringify(listUsers));
}

module.exports = {
  getAll,
  create,
  getById,
  update,
}