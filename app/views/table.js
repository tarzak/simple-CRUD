var CustomerView = Backbone.View.extend({
    tagName: 'tr',

    events: {
        'click .glyphicon-trash': 'removeCustomer'
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

    removeCustomer: function () {
        this.model.destroy();
    },

/*    remove: function (e) {
        console.log(this)
        console.log('remove');
    }*/
});

var CustomersView = Backbone.View.extend({
    events: {
        "click tr": "select"
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
        console.log(model);
        var view = new CustomerView({model: model});

        this.$('.customersList').append(view.render());

    },

    select: function (e) {
        console.log('select_row')
    }
});

