const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');


router.post('/trips/:id/reviews', reviewsCtrl.create);

router.post('/reviews/:id', reviewsCtrl.delete )


module.exports = router;