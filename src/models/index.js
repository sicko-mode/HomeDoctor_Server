const Sequelize = require('sequelize');

const db = {};

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        'host': process.env.DB_HOST,
        'dialect': process.env.DB_TYPE,
        'operatorAliases': false,
    }
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Patient = require('./Patient')(sequelize, Sequelize);
db.Doctor = require('./Doctor')(sequelize, Sequelize);
db.Room = require('./Room')(sequelize, Sequelize);

module.exports = db;
