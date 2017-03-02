// grab the mongoose module
var mongoose = require('mongoose');

// define our User model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('User', {
	firstName: {type: String},//, required: 'firstName is required!'
    lastName: {type: String},//, required: 'lastName is required!
    username: {
        type: String,
        unique: true
      },
      salt: {type: String},//, required: 'salt-Key is required!'
      hashedPwd: {type: String},//, required: 'hashedPassword is required!'
});
