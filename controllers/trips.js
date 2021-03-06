const Trip = require('../models/trip');




function show(req, res){
    Trip.findById(req.params.id, function(err, trip){
        
        res.render('trips/show', {
            title: 'Trip Detail', trip: trip
        })
    })
}

function index(req, res) {
    Trip.find({}, function(err, trips){
        res.render('trips/index', {
        trips,
        title: 'Welcome,'
        })
    })
}




function newTrip(req, res) {
    const newTrip = new Trip()
    res.render('trips/new', { 
        
        title: 'Plan a Vacation!'
    })
}
  

function create(req, res) {
    const trip = new Trip(req.body);
    trip.save(function (err){

        // display name in welcome page
        // req.body.userName = req.user.name;
    console.log(err)
    if (err) return res.redirect('trips/new');
   
    res.redirect('/trips')
})
}









module.exports = {
    index,
    show,
    new: newTrip,
    create, 
    
  };