module.exports = ( sequelize, DataTypes ) => {
    const Truck = sequelize.define('Truck', {
        brand: DataTypes.STRING,  
        model: DataTypes.STRING, 
        engine: DataTypes.STRING, 
        load: DataTypes.STRING,        
        
    })
    return Truck
}