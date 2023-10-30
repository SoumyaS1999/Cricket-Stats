const Player=require('../models/Player');

const addPlayer=  async(req,res,next)=>{
    try{
      if(!req.body.name){
        throw new Error('Name is mandatory')
      }
    const name=req.body.name;
    const dob=req.body.dob;
    const photo=req.body.photo;
    const birth=req.body.birth;
    const career=req.body.career;
    const match=req.body.match;
    const score=req.body.score;
    const fifties=req.body.fifties;
    const centuries=req.body.centuries;
    const wickets=req.body.wickets;
    const average=req.body.average;

  
    const data= await Player.create({name:name,dob:dob,photo:photo,birth:birth,career:career,match:match,
                                    score:score,fifties:fifties,centuries:centuries,wickets:wickets,average:average})
    res.status(201).json({newPlayerDetail: data});
    }catch(err){
      res.status(500).json({
        error: err
      })
    }
  }


const getPlayer= async(req,res,next)=>{
    try{
      const names=req.params.name;
      const players = await Player.findAll({where:{name: names}});
      res.status(200).json({allPlayers:players});
    }catch(error){
      console.log('Get player is failing',JSON.stringify(error))
      res.status(500).json({error: error})
    }
  }

  const deletePlayer= async(req,res)=>{
    try{
      if(req.params.id=='undefined'){
        console.log('ID is missing')
        return res.status(400).json({err:'ID is missing'})
      }
    const uId=req.params.id;
    await Player.destroy({where:{id: uId}});
    res.sendStatus(200);
    }catch(err){
      console.log(err);
      res.status(500).json(err)
    }
  }

  module.exports={
    addPlayer,
    getPlayer,
    deletePlayer
    };