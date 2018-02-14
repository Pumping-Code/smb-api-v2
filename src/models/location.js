module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    location: DataTypes.GEOMETRY,
  });

  Location.associate = (models) => {
    Location.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return Location;
};
