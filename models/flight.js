const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  

const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  arrival: {
    type: Date,
    default: function() {
      const newDate = new Date();
      return newDate.setFullYear(newDate.getFullYear() + 1)
    }
  }
  
}, {
  timestamps: true
});

const flightSchema = new Schema({
  airline: {
      type: String,
      enum: ['American', 'Delta', 'Southwest', 'United']
  },
  airport: {
      type: String,
      enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  flightNo: {
      type: Number,
      min: 10,
      max: 9999
  },
  destinations: [destinationSchema],
  departs: Date },
  
  {
    timestamps: true
  });
  


module.exports = mongoose.model('Flight', flightSchema);

