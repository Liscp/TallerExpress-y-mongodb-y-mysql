  const Sequelize = require('sequelize')

  const sequelize = new Sequelize('bse3','root','123456789', {
    host: 'localhost',
    dialect: 'mysql'
  });
  
  let people = sequelize.define('LIBROS', {
  
    titulo: Sequelize.STRING,
    nombre: Sequelize.STRING,
    autor: Sequelize.STRING,
    editorial: Sequelize.STRING
  },
  {
      timestamps: false
  })
  
  module.exports = people;