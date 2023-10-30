const express = require('express');

const router= express.Router();

const usercontroller= require('../controller/player');

router.post('/add-player',usercontroller.addPlayer);

router.get('/get-players/:name',usercontroller.getPlayer);

router.delete('/delete-player/:id',usercontroller.deletePlayer);

//router.put('/edit-user/:id',usercontroller.editUser);

module.exports= router;