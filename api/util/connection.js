const Sequelize = require("sequelize").Sequelize;

const sequelize = new Sequelize("todo", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
