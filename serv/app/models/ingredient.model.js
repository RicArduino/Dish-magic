module.exports = (sequelize,Sequelize) => {
    const Ingredient = sequelize.define("ingredient", {
        nameingredient : {
            type: Sequelize.STRING
        },
        quantity: {
            type: Sequelize.STRING
        }
    });
    return Ingredient;
};