const express = require('express');
const router = express.Router();
const tripsCtrl = require('../controllers/trips');
const isLoggedIn = require('../config/auth');


// localhost:3000/trips
router.get('/', tripsCtrl.index);

router.get('/new', isLoggedIn, tripsCtrl.new);  

router.get('/new', tripsCtrl.new);

// trips/:id <-- user id 
router.get('/:id', tripsCtrl.show);
router.post('/', tripsCtrl.create);


module.exports = router;