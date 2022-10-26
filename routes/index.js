var express = require('express');
var router = express.Router();

const controller = require("../controllers/index")



router.get('/', controller.index);
router.post('/', controller.createUser)

module.exports = router;
