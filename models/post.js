module.exports = function (sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
        // The email cannot be null, and must be a proper email before creation

        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }

        },

        content: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]

        },

        skillList: {
            type: DataTypes.STRING
        },

        volunteerID: {
            type: DataTypes.INTEGER
        }


    });

    // Relational setup between posts and clients
    Post.associate = function (models) {
        Post.belongsTo(models.Client, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    return Post;
};
