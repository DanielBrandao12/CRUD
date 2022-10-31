var express = require('express');
var router = express.Router();

const controller = require("../controllers/index")



router.get('/', controller.index);
router.post('/', controller.createUser)
router.put('/:user',controller.updateUser)
module.exports = router;
