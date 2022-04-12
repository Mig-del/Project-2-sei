const mongoose = require('mongoose');
const Schema = mongoose.Schema;







const reviewSchema = new Schema({
    content: {
    type: String, required: true
    },
    rating: {
    type: Number, min: 1, max: 5, default:5
    },
     user: {type: Schema.Types.ObjectId, ref: 'User'}, 
      userName: String,
      userAvatar: String
    }, {
      timestamps: true
    
    })





const tripSchema = new Schema({
location: {
  type: String
},
hotel: {
type: String,
enum: ['Hilton', 'Marriott', 'Hampton', 'Holiday Inn', 'Best Wester', 'Motel 6'],
required: true
},
guest: {
type: Number
},
checkIn: {
type: Date
},
checkOut: {
type: Date
},
activity: {
type: ['Tour Bus', 'Comedy Show', 'Festival', 'Surfing Lessons', 'None']
},
carRental: {
type: String,
enum: ['Sedan', 'SUV', 'Hybrid', 'Van']
},
reviews: [reviewSchema]


})








    module.exports = mongoose.model('Trip', tripSchema);


    