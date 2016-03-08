var express = require('express')
  , bodyParser = require('body-parser')
  , customers = require('./routes/customers')
  , app = express()
  ;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/customers', customers.findAllCustomers);
app.get('/customers/:id', customers.findCustomer);
app.post('/addCustomer', customers.addCustomer);
app.put('/updateCustomer/:id', customers.updateCustomer);
app.delete('/removeCustomer/:id', customers.removeCustomer);
  
app.listen(3000);
console.log('Listening on port 3000...');