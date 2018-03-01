module.exports = (sequelize, DataTypes) => {
  const SpotRequest = sequelize.define('SpotRequest', {
    fulfilledBy: DataTypes.INTEGER,
  });

  SpotRequest.associate = (models) => {
    SpotRequest.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return SpotRequest;
};
