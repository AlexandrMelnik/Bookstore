const BooksModel = (sequelize, type) => {
  return sequelize.define('book', {
    id:
    {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: type.STRING,
    author: type.STRING,
    ganre: type.STRING,
    description: type.STRING,
    image: type.STRING
  },{timestamps: false})
}

export default BooksModel;
