 import mongoose from 'mongoose'
import carsModel from '../models/cars.js'
import { DeleteFromCloudinary } from '../utils/DeleteFromCloudinary.js'
 export const deleteCar= async (req,res)=>{
const{carId}=req.params
    try{
       
                     
        await DeleteFromCloudinary(carId,res).then(async(_req,res) => {
            const car = await carsModel.findOneAndDelete({"carID":carId});
        
            console.log(car)
            res.json({message:"destroyed", "data":car});
            if(!car){
                res.json({message:`car with id ${carId} does not exist`, "data":car});
                throw new Error(`car with id ${carId} does not exist`);
            }
        });
        
       

    }
    catch(e){
        console.log(e);
        res.status(500).json({message: 'Error while deleting the car', error: e});


    }
 }
 