/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Notificacao', {
    idNotificacao: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tipo: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    descricao: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false
    },
    estado: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    Tarefa_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Tarefa',
        key: 'id'
      }
    }
  }, {
    tableName: 'Notificacao'
  });
};
