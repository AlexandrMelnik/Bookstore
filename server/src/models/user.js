const UserModel = (sequelize, type) => {
  return sequelize.define('user', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: type.STRING
  },{timestamps: false})
}

export default UserModel;
