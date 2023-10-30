const Sequelize= require('sequelize');

const sequelize=require('../util/database');

const Player=sequelize.define('player',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type: Sequelize.STRING,
        allowNull:false
    },
    dob:{
        type:Sequelize.STRING,
        allowNull:false
    },
    photo:{
        type:Sequelize.STRING,
        unique:true

    },
    birth:{
        type: Sequelize.STRING,
        allowNull:false
    },
    career:{
        type:Sequelize.STRING,
        allowNull:false
    },
    match:{
        type:Sequelize.INTEGER,
        allowNull:false

    },
    score:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    fifties:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    centuries:{
        type:Sequelize.INTEGER,
        allowNull:false

    },
    wickets:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    average:{
        type:Sequelize.INTEGER,
        allowNull:false
    }

    }
);
    module.exports=Player;