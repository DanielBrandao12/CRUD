const usersModels = require('../models/index')

function index(req, res) {
    const users = usersModels.getAll()
    res.render('index',{users})
  };
  
  function createUser(req, res) {
    const { nome,sobrenome, email } = req.body
    
    usersModels.create( nome,sobrenome, email)
    return res.redirect("/");
  
  }

  function updateUser(req, res){

    usersModels.update(req.body.nome,req.body.sobrenome, req.body.email)
    console.log(req.body)
    return res.redirect("/")
    
  }


  module.exports ={index, createUser,updateUser};