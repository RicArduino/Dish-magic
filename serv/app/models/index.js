const dbConfig = require('../config/db.config.js')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port : dbConfig.PORT,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
})
const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.users = require('./users.model.js')(sequelize, Sequelize); module.exports = db;
db.steps = require('./steps.model.js')(sequelize, Sequelize); module.exports = db;
db.recipe = require('./recipe.model.js')(sequelize, Sequelize); module.exports = db;


const user = require('./users.model.js')(sequelize, Sequelize); module.exports = db;
const recipe = require('./recipe.model.js')(sequelize, Sequelize); module.exports = db;
const steps = require('./steps.model.js')(sequelize, Sequelize); module.exports = db;
const ingredient = require('./ingredient.model.js')(sequelize, Sequelize); module.exports = db;

user.hasOne(recipe);
recipe.belongsTo(user, {foreignKey: 'userId'});
recipe.hasMany(steps);
steps.belongsTo(recipe, {foreignKey: 'recipeId'});
recipe.hasMany(ingredient);
ingredient.belongsTo(recipe, {foreignKey: 'recipeId'});


module.exports = db;