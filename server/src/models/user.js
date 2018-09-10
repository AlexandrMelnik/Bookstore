const UserModel = (sequelize, type) => {
  return sequelize.define('user', {
    id:
    {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: type.STRING,
    password: type.STRING,
    token: type.STRING,
    username: type.STRING,
    confirm: type.INTEGER
  },{timestamps: false})
}

export default UserModel;
