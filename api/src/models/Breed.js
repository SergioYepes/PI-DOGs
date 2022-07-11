const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('breed', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id:{
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      primaryKey:true,
      allowNull:false,
    },
    heightMin:{
      type:DataTypes.STRING,
      allowNull: false,
      get(){
        return this.getDataValue("heightMin")+ " Cm"
      }
    },
    heightMax:{
      type:DataTypes.STRING,
      allowNull: false,
      get(){
        return this.getDataValue("heightMax")+ " Cm"
      }
    },

    weightMin:{
      type: DataTypes.STRING,
      allowNull: false,
      get(){
        return this.getDataValue("weightMin") + " Kg"
      }
    },
    weightMax:{
      type: DataTypes.STRING,
      allowNull: false,
      get(){
        return this.getDataValue("weightMax") + " Kg"
      }
    },
    image:{
      type: DataTypes.STRING(5000000),
      allowNull: false,
    },
    lifeSpan:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }

  },{timestamps:false});
};
