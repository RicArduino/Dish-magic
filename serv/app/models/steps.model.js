module.exports = (sequelize,Sequelize) => {
    const Steps = sequelize.define("steps", {
        description: {
            type: Sequelize.TEXT
        }
    });
    return Steps;
};