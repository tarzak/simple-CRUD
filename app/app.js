var app = app || {};

(function () {
	var customers = new CustomersCollection; 

  app.customersView = new CustomersView({
  	collection: customers,
    el: '#customersTable'
  });

  app.editCustomerView = new EditCustomerView({
  	collection: customers,
  	el: '#customerForm'
  });
})();