const express = require('express');
const router = express.Router();
const tripsCtrl = require('../controllers/trips');


// localhost:3000/trips
router.get('/', tripsCtrl.index);

router.get('/new', tripsCtrl.new);

// trips/:id <-- user id 
router.get('/:id', tripsCtrl.show);


module.exports = router;