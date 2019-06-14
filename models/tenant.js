module.exports = function(sequelize, DataTypes) {
    var Tenant= sequelize.define("Tenant", {
      // Giving the Author model a name of type STRING
      id: DataTypes.id,
      name: DataTypes.STRING,
      email_address: DataTypes.STRING,
      date_of_birth: DataTypes.DATEONLY,
      phone_number: DataTypes.INT,
      move_in_date: DataTypes.DATEONLY,
      move_out_date: DataTypes.DATEONLY
      
    });
  
    Unit.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      Unit.hasMany(models.Tenant, {
        onDelete: "cascade"
      });
    };
  
    return Unit;
  };