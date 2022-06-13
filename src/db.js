require('dotenv').config();
const { Sequelize }  = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DATABASE_USER,DATABASE_PASSWORD,DATABASE_HOST,DATABASE_NAME
} = process.env;

const sequelize = new Sequelize(DATABASE_NAME,DATABASE_USER,DATABASE_PASSWORD,{
  host:DATABASE_HOST,
  dialect:'postgres',
  "dialectOptions": {
    "ssl": true,
    rejectUnauthorized: false,
  },
});
const basename = path.basename(__filename);

const modelDefiners = [];

 
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);


const { Dog, Temperament } = sequelize.models;


Dog.belongsToMany(Temperament,{through:"dog-temperament"});
Temperament.belongsToMany(Dog,{through:"dog-temperament"});

module.exports = sequelize;
 // para poder importar los modelos así: const { Product, User } = require('./db.js');
// para importart la conexión { conn } = require('./db.js');
