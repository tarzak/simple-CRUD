var express = require('express')
  , path = require('path')
  , bodyParser = require('body-parser')
  , customers = require('./routes/customers')
  , app = express()
  ;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'app')));

app.get('/customers', customers.findAllCustomers);
app.get('/customers/:id', customers.findCustomer);
app.post('/customers', customers.addCustomer);
app.put('/updateCustomer/:id', customers.updateCustomer);
app.delete('/customers/:id', customers.removeCustomer);
  
app.listen(3000);
console.log('Listening on port 3000...');