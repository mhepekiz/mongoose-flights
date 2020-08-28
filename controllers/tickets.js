const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
  new: newTicket,
  create,
  delete: deleteTicket
}

function newTicket(req, res) {
  res.render('tickets/new', { title: 'Flight Operator', section: 'Ticket Sales', flight: req.params.id })
}

function create(req, res) {
  req.body.flight = req.params.id
  Ticket.create(req.body, function(err, tickets) {
    res.redirect(`/flights/${req.params.id}`)
  })
}

function deleteTicket(req, res) {
  Ticket.findByIdAndDelete(req.params.ticket, function (err, ticket) {
      res.redirect(`/flights/${req.params.flight}`);
  });
}