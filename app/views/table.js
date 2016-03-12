var CustomerView = Backbone.View.extend({
  tagName: 'tr',

  events: {
    "click span.glyphicon-trash": "removeCustomer",
    // "click td": "selectCustomer"
  },

  initialize: function () {
    this.template = _.template($('#viewCustomer').html());
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
  },

  render: function () {
    var localeDate = new Date(this.model.toJSON().dateOfBirth).toLocaleDateString()
      , formattedObject = this.model.toJSON()
      ;
    
    formattedObject.dateOfBirth = localeDate;
    
    view = this.template(formattedObject);
    
    this.$el.html(view);

    return this.$el;
  },

  removeCustomer: function () {
    this.model.destroy();
    return false;
  }
// should be implemented later
/*  selectCustomer: function () {
    var json = this.model.toJSON()
      , model = this.model
      ;
    
    app.editCustomerView.model.set(json);
  }*/
});

var CustomersView = Backbone.View.extend({
  events: {
    "click button": "create"
  },

  initialize: function () {
    this.template = _.template($('#viewCustomers').html());
    this.$el.html(this.template());
    this.collection.fetch();
    this.listenTo(this.collection, "all", this.render());
    this.listenTo(this.collection, "add", this.addCustomer);
  },

  render: function () {

  },

  addCustomer: function (model) {
    var view = new CustomerView({model: model})
      ;

    this.$('.customersList').append(view.render());
  }
});