var EditCustomerView = Backbone.View.extend({
  model: new CustomerModel,
  events: {
    "click .create": "createCustomer",
    "click .update": "updateCustomer"
  },

  initialize: function () {
    this.template = _.template($('#editCustomerView').html());
    this.listenTo(this.model, 'change', this.render);
    this.$el.html(this.template(this.model.toJSON()));
  },

  render: function () {
    var view = this.template(this.model.toJSON())
      ;
      
    this.$el.html(view);

    return this.$el;
  },

  createCustomer: function () {
    var firstName = $('#firstName').val()
      , lastName = $('#lastName').val()
      , dateOfBirth = $('#dateOfBirth').val()
      , companyName = $('#companyName').val()
      , mobilePhone = $('#mobilePhone').val()
      , workPhone = $('#workPhone').val()
      , skype = $('#skype').val()
      , customer = {
          name: {
            first: firstName,
            last: lastName
          },
          dateOfBirth: dateOfBirth,
          companyName: companyName,
          phone: {
            mobile: mobilePhone,
            work: workPhone
          },
          skype: skype
        }
      ;
   
    this.collection.create(customer, {wait: true});
  },

  updateCustomer: function () {
    console.log(this, this.model);
  }
});