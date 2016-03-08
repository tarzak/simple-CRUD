var mongoose = require('mongoose')
  , Schema = new mongoose.Schema({  
      name: {
        first: String,
        last: String
      },
      dateOfBirth: Date,
      companyName: String,
      phone: {
        mobile: String,
        work: String
      },
      skype: String
    })
  ;

module.exports = function () {
  return Schema;
}