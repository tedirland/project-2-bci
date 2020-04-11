module.exports = function (sequelize, DataTypes) {
    var Post = sequelize.define("Post", {

        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
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
    
        },
        
        volunteerID: {
            type: DataTypes.INTEGER
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

    
    // Relational setup between posts and clients
    Post.associate = function(models) {
        Post.belongsTo(models.Client, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    return Post;
};
