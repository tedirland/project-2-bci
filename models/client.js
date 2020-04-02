// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");
// Creating our Volunteer model
module.exports = function (sequelize, DataTypes) {
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

    },

    location: {
      type: DataTypes.STRING,

    },

    linkedIn: {
      type: DataTypes.STRING,

    },

    facebook: {
      type: DataTypes.STRING,

    },

    website: {
      type: DataTypes.STRING,

    },

    employer: {
      type: DataTypes.STRING,

    },

    twitter: {
      type: DataTypes.STRING,

    },

    password: {
      type: DataTypes.STRING,

    },

    skillsAccounting: {
      type: DataTypes.BOOLEAN,

    },
    skillsEngineering: {
      type: DataTypes.BOOLEAN,

    },
    skillsEventPlanning: {
      type: DataTypes.BOOLEAN,

    },
    skillsGraphicDesign: {
      type: DataTypes.BOOLEAN,

    },
    skillsPhotography: {
      type: DataTypes.BOOLEAN,

    },
    skillsProjectManagement: {
      type: DataTypes.BOOLEAN,

    },
    skillsWebDevelopment: {
      type: DataTypes.BOOLEAN,

    },
    skillsWriting: {
      type: DataTypes.BOOLEAN,

    },
    skillsGroceryPickup: {
      type: DataTypes.BOOLEAN,

    },
    skillsHomeHealthcare: {
      type: DataTypes.BOOLEAN,

    },
    skillsFurnitureMoving: {
      type: DataTypes.BOOLEAN,

    },
    skillsLandscaping: {
      type: DataTypes.BOOLEAN,

    },
    skillsPlumbing: {
      type: DataTypes.BOOLEAN,

    },
    skillsGeneralRepair: {
      type: DataTypes.BOOLEAN,

    },
    skillsTransportation: {
      type: DataTypes.BOOLEAN,

    }
   

  });
  // Relational setup between Client and Post models
  Client.associate = function (models) {
    Client.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return Client;
};
