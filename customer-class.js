module.exports = function (object) {
  // TO-DO: some algorithm for checking objects by template
  var name = object.name
    , first = name && name.first
    , last = name && name.last
    , phone = object.phone
    , work = phone && phone.work
    , mobile = phone && phone.mobile
    ;
    
  if (!first || !last || !object.dateOfBirth || !object.companyName || !work || !mobile || !object.skype)
    throw(Error('Fill all fields'));

  return Customer(object);
}

function Person(object) {
  this.name = object.name;
  this.dateOfBirth = object.dateOfBirth;
}

function Customer(object) {
  if (!(this instanceof Customer))
    return new Customer(object);

  Person.apply(this, arguments);
  this.companyName = object.companyName,
  this.phone = object.phone,
  this.skype = object.skype;
}

Customer.prototype = Person.prototype
