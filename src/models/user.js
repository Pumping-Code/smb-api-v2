module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    pushToken: DataTypes.STRING,
    fbid: DataTypes.STRING,
  });

  User.associate = (models) => {
    User.hasMany(models.Location, {
      foreignKey: 'userId',
      as: 'locations',
    });
  };

  return User;
};
