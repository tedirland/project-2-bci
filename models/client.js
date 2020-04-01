// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");
// Creating our Volunteer model
module.exports = function(sequelize, DataTypes) {
  var Client = sequelize.define("Client", {
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

    bio: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]

    }
    
  });
// Relational setup between Client and Post models
  Client.associate =  function(models) {
    Client.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };
 
  return Client;
};
