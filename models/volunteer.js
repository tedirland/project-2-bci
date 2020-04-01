// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");
// Creating our Volunteer model
module.exports = function(sequelize, DataTypes) {
  var Volunteer = sequelize.define("Volunteer", {
    // The email cannot be null, and must be a proper email before creation

    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    category: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  // Creating a custom method for our Volunteer model. This will check if an unhashed password entered by the Volunteer can be compared to the hashed password stored in our database

  return Volunteer;
};
