module.exports = function(sequelize, DataTypes) {
  var MyModel = sequelize.define("MyModel", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING
  });

  return MyModel;
};
