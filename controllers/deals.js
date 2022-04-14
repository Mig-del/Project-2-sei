const Trip = require('../models/trip');


function deals(req, res) {
    Deal.find({}, function(err, ){
        res.render('trips/deals', {
        deals,
        title: 'All Deals,'
        })
    })
}


module.exports = {
    deals
  };