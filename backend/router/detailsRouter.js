const detailsController = require('../controller/moviDetails');
const express        = require('express');
const router         = express.Router();

router.post('/addDetails', detailsController.addDetails);
router.get('/getDetails',detailsController.getDetails);

module.exports = router;