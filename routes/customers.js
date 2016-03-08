var mongoose = require('mongoose')
  , Schema = new mongoose.Schema({  
  name: {
    first: String,
    last: String
  }
})
  ;

mongoose.connect('mongodb://localhost:27017');

mongoose.model('Customer', Schema); 

var Customer = mongoose.model('Customer');

exports.findAllCustomers = function(req, res) {
  Customer.find(function (err, data) {
    if (err) console.log(err);
    
    res.send(data);
  })
};

exports.findCustomer = function(req, res) {
  var id = req.params.id
    ;

  Customer.findById(id, function (err, data) {
    if (err) console.log(err);

    res.send(data);
  });
};

exports.addCustomer = function(req, res) {
  var customer = req.body;
  
  Customer.create(customer, function (err, data) {
    if (err) console.log(err);
    
    res.send(data);
  })
};

exports.updateCustomer = function (req, res) {
  var id = req.params.id
    , data = req.body
    ;

  Customer.findByIdAndUpdate(id, data, function (err, data) {
    if (err) console.log(err);

    res.send(data);
  })
}

exports.removeCustomer = function (req, res) {
  var id = req.params.id
    ;

  Customer.findByIdAndRemove(id, function (err, data) {
    if (err) console.log(err);

    res.send(data);
  })
}