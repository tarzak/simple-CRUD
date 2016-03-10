var CustomerModel = Backbone.Model.extend({
});

var CustomersCollection = Backbone.Collection.extend({
  url: "http://localhost:3000/customers"
});