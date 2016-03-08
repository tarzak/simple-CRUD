var mongoose = require('mongoose')
  , Schema = require('../model/customer.js')()
  , customerClass = require('../customer-class.js')
  , Customers
  ;

mongoose.connect('mongodb://localhost:27017');

mongoose.model('Customer', Schema); 

Customers = mongoose.model('Customer');

exports.findAllCustomers = function(req, res) {
  Customers.find(function (err, data) {
    if (err) console.log(err);
    
    res.send(data);
  })
};

exports.findCustomer = function(req, res) {
  var id = req.params.id
    ;

  Customers.findById(id, function (err, data) {
    if (err) console.log(err);

    res.send(data);
  });
};

exports.addCustomer = function(req, res) {
  var data = req.body
    , customer = customerClass(data.first, data.last, data.date, data.company, data.mobile, data.work, data.skype)
    ;

  Customers.create(customer, function (err, data) {
    if (err) console.log(err);

    res.send(data);
  })
};

exports.updateCustomer = function (req, res) {
  var id = req.params.id
    , data = req.body
    , customer = customerClass(data.first, data.last, data.date, data.company, data.mobile, data.work, data.skype)
    ;

  Customers.findByIdAndUpdate(id, customer, function (err, data) {
    if (err) console.log(err);

    res.send(data);
  })
}

exports.removeCustomer = function (req, res) {
  var id = req.params.id
    ;

  Customers.findByIdAndRemove(id, function (err, data) {
    if (err) console.log(err);

    res.send(data);
  })
}