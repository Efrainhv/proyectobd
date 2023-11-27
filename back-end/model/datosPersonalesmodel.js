const { Sequelize, Model, DataTypes } = require("sequelize")

const sequelize = new Sequelize("ejemplo", "root" ,"123456",{
    host: "localhost",
    dialect: "mysql",
    port: 3306
});
class datospersonales extends Model{}
datospersonales.init({
    idDatosPersonales:{
        type:DataTypes.UUID,
        primaryKey:true
    },
    nombre:{
        type:DataTypes.STRING,
    },
    apellidoPaterno:{
        type:DataTypes.STRING,
    }
}, {
    sequelize: sequelize, // esto es lo que te falta
    modelName: 'datosPersonales',
    tableName: 'datos_personales', // el nombre de la tabla en la base de datos
    schema: 'public' // el esquema al que pertenece la tabla
});
module.exports = datospersonales;
async function testConecction() {
    try{
        await sequelize.authenticate();
        console.log("Base de datos ")
    }
    catch(error){
        console.log("error")
    }
}
testConecction();