  const Sequelize = require('sequelize')

  const sequelize = new Sequelize('bse3','root','', {
    host: 'localhost',
    dialect: 'mysql'
  });
  
  let people = sequelize.define('LIBROS', {
  
    titulo: Sequelize.STRING,
    nombre: Sequelize.STRING,
    autor: Sequelize.STRING
  },
  {
      timestamps: false
  })
  
  module.exports = people;