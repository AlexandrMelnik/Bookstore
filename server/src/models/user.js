const UserModel = (sequelize, type) => {
  return sequelize.define('user', {
    email: type.STRING,
    password: type.STRING,
    token: type.STRING,
    username: type.STRING,
    ban: type.INTEGER
  },{timestamps: false})
}

export default UserModel;
