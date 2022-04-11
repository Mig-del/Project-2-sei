const mongoose = require('mongoose');
const Schema = mongoose.Schema;







const reviewSchema = new Schema({
    content: {
    type: String
    },
    rating: {
    type: Number, min: 1, max: 5
    },
     user: {type: Schema.Types.ObjectId, ref: 'User'}, 
      userName: String,
      userAvatar: String
    }, {
      timestamps: true
    
    })





const tripSchema = new Schema({
hotel: {
type: String,
enum: ['Hilton', 'Marriott', 'Hampton', 'Holiday Inn', 'Best Wester', 'Motel 6'],
required: true
},
guest: {
Type: Number
},
checkIn: {
type: Date
},
checkOut: {
type: Date
},
carRental: {
type: String,
enum: ['Sedan', 'SUV', 'Hybrid', 'Van']
},
reviews: [reviewSchema]


})








    module.exports = mongoose.model('Trip', tripSchema);


    