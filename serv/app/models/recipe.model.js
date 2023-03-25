module.exports = (sequelize,Sequelize) => {
    const Recipe = sequelize.define("recipe", {
        name: {
            type: Sequelize.STRING
        },
        origin: {
            type: Sequelize.STRING
        },
        ingredient: {
            type: Sequelize.STRING
        },
        time: {
            type: Sequelize.INTEGER
        },
        nbrpeople: {
            type: Sequelize.INTEGER
        },
        community: {
            type: Sequelize.BOOLEAN
        }
        

    });
    return Recipe;
};