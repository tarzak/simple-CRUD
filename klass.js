module.exports = function (first, last, date, company, mobile, work, skype) {
  if (!first || !last || !date || !company || !mobile || !work || !skype)
    throw(Error('Fill all fields'));

  return Customer(first, last, date, company, mobile, work, skype);
}

function Person(first, last, date) {
  this.name = { first: first, last: last};
  this.dateOfBirth = date;
}

function Customer(first, last, date, company, mobile, work, skype) {
  if (!(this instanceof Customer))
    return new Customer(first, last, date, company, mobile, work, skype);

  Person.apply(this, arguments);
  this.companyName = company,
  this.phone = {
    mobile: mobile,
    work: work
  }
  this.skype = skype;
}

Customer.prototype = Person.prototype