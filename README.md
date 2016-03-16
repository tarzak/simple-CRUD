# Simple CRUD
An example of simple CRUD for customers based on NodeJS (with Express and Mongoose), MongoDB and Backbone.

Server api:
- get /customers - get all customers
- get /customers/:id - get customer with specific ID
- post /customers - create new customer
- put /customers/:id - update existing customer with ID
- delete /customers/:id - remove existing customer with ID

Client side is designed and implemented with Backbone. It has two main views: 'table' and 'form'. 
In the table you can see all registered customers and delete any by pressing on garbage bucket.
Via form you are able to create new customer, which will be added to the MongoDB and instantly appeared in the table-view.

## Start
1. To start the app you will need to install [NodeJS](https://nodejs.org/en/), [MongoDB](https://www.mongodb.org/). 
2. After that type `npm i` in the root of the repo and then `bower install`. 
3. `node server` and go to localhost:3000
