const listController = require('../controller/moviList');
const express        = require('express');
const router         = express.Router();

router.post('/addList', listController.addList);
router.get('/getList',listController.getList);

module.exports = router;