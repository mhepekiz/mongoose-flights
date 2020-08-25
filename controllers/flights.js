const Flight = require('../models/flight');

module.exports = {
  index,
  show,
  new: newFlight,
  create
  }

  
function index(req, res) {
  Flight.find({}, function(err, flights) {
  let d = new Date();
  let n = d.toUTCString();
  let checkDateConv = new Date(n).getTime() ;
      res.render('flights/index', { title: 'Flight Operator', section: 'All Flights', checkR: checkDateConv, flights });
    }).sort( { departs: 1 } );
  }

  function show(req, res) {
    let d = new Date();
    let n = d.toUTCString();
    let checkDateConv = new Date(n).getTime() ;
    Flight.findById (req.params.id,function(err, flight) {
      res.render('flights/show', { title: 'Flight Detail', section: 'Flight Details', checkR: checkDateConv, flight });
    });
  }
  
  

  function newFlight(req, res) {
    res.render('flights/new', { title: 'Flight Operator', section: 'Add New Flight'});
  }
  
  function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
      if (err) return res.render('flights/new');
      res.redirect('/flights');
    })
  }


