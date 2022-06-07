const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('dog', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id:{
      type: DataTypes.UUID,
      allowNull : false,
      primaryKey: true,
    },
    weight_min:{
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    weight_max:{
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    height:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    life:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    image:{
      type:DataTypes.STRING,
      
    },
    dogApi:{
      type:DataTypes.ARRAY(Sequelize.STRING),
      allowNull:true,
    }
  });
};
