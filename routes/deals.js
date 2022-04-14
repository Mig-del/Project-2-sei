const express = require('express');
const router = express.Router();
const performersCtrl = require('../controllers/deals');

router.get('/deals/new', dealsCtrl.new);
router.post('/deals', dealsCtrl.create);
router.post('/trips/:id/deals', dealsCtrl.addToCast);



module.exports = router;