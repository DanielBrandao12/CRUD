const usersModels = require('../models/index')

function index(req, res) {
    const users = usersModels.getAll()
    //console.log(users)
    res.render('index',{users})
  };
  
  function createUser(req, res) {
    
    const {nome,sobrenome, email } = req.body
    
    usersModels.create( nome,sobrenome, email)
    return res.redirect("/");
  
  }

  function updateUser(req, res){

    const users = req.body
    usersModels.update(0,users.nome,users.sobrenome, users.email)
   //console.log(users)
    return res.redirect("/")
    
  }


  module.exports ={index, createUser,updateUser};