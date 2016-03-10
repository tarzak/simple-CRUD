var CustomerView = Backbone.View.extend({
    tagName: 'tr',

    events: {
        'click tr': 'select',
        'click .remove': 'remove'
    },

    initialize: function () {
        console.log(this);
        this.template = _.template($('#viewCustomer').html());
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'destroy', this.remove);
    },

    render: function () {
        var view = this.template(this.model.toJSON());
        this.$el.html(view);

        return this.$el;
    },

    remove: function () {
        this.model.destroy();
    }
});

var CustomersView = Backbone.View.extend({
    events: {
        "click tr": "select2"
    },

    initialize: function () {
        this.template = _.template($('#viewCustomers').html());
        this.$el.html(this.template());
        this.coll = new CustomersCollection();
        this.coll.fetch();
        this.listenTo(this.coll, "all", this.render());
        this.listenTo(this.coll, "add", this.addCustomer);
    },

    render: function () {
        this.coll.each(function(customer, index) {
            console.log(customer);
        })
    },

    addCustomer: function (model) {
        console.log(this);
        var view = new CustomerView({model: model});

        this.$('.customersList').append(view.render());

    }
});

