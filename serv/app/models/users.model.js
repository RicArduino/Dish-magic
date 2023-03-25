module.exports = (sequelize,Sequelize) => {
    const Users = sequelize.define("users", {
        lastname : {
            type: Sequelize.STRING
        },
        firstname: {
            type: Sequelize.STRING
        },  
        email: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        token : { type: Sequelize.STRING, allowNull: true }
        
    });
    return Users;
};

