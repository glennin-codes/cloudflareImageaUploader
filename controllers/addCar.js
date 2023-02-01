 import carsModel from '../models/cars.js'
 export const addCar= async (req,res)=>{

    try{

   await carsModel.create(req.body);
  return res.status(201).json({"code":1});
  
    }
    catch(error){
return res.status(500).send(`there was an error ${error.message}`)
    }
 }