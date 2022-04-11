const Trip = require('../models/trip');



function index(req, res) {
    Trip.find({}, function(err, trips){
        res.render('trips/index', {
        trips,
        title: 'Welcome,'
        })
    })
}





function show(req, res){
    Trip.findById(req.params.id, function(err,tripDb){
        res.render('trips/show', { title: 'Your Reservations', trip: tripDb})
    })
}





function newTrip(req, res) {
    res.render("trips/new", { title: "Plan a Vacation" });
  }
  








module.exports = {
    index,
    show,
    new: newTrip
  };