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

    
    
    if (err) return res.redirect('trips/new');
    console.log(trip)
    res.redirect('/trips')
})
}



// function deals(req, res) {
//     Trip.find({}, function(err, trips){
//         res.render('trips/deals', {
//         trips,
//         title: 'Welcome,'
//         })
//     })
// }






module.exports = {
    index,
    show,
    new: newTrip,
    create, 
    // deals
  };