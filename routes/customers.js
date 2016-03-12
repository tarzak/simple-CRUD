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
    response(err, data, res, req);
  })
};

exports.findCustomer = function(req, res) {
  var id = req.params.id
    ;

  Customers.findById(id, function (err, data) {
    response(err, data, res, req);
  });
};

exports.addCustomer = function(req, res) {
  var data = req.body
    , customer = customerClass(data)
    ;
  
  Customers.create(customer, function (err, data) {
    response(err, data, res, req);
  })
};

exports.updateCustomer = function (req, res) {
  var id = req.params.id
    , data = req.body
    , customer = customerClass(data)
    ;

  Customers.findByIdAndUpdate(id, customer, function (err, data) {
    response(err, data, res, req);
  })
}

exports.removeCustomer = function (req, res) {
  var id = req.params.id
    ;

  Customers.findByIdAndRemove(id, function (err, data) {
    response(err, data, res, req);
  })
}


function response (err, data, res, req) {
  if (err) {
    res.statusCode = 500;
    res.send({
      err: err.code
    });
    console.log(err);
  } else {
    res.send(data);
  }
}