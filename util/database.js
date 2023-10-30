const Sequelize= require('sequelize');
const sequelize=new Sequelize('node-complete','root','Soumya#sharp99',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports= sequelize;