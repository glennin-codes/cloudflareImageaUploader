 import mongoose from 'mongoose'
import carsModel from '../models/cars.js'
import { DeleteFromCloudinary } from '../utils/DeleteFromCloudinary.js'
 export const deleteCar= async (req,res)=>{
const{carId}=req.params
    try{
       
                     
        await DeleteFromCloudinary(carId,res)
            const car = await carsModel.findOneAndDelete({"carID":carId});
        
            console.log(car)
            if (car) {
                return  res.json({message:"destroyed", "data":car});
            }
              else{
               res.status(404).json('car not found')
                throw new Error ('car not found')
              }
    }
    catch(e){
        console.log(e);
        res.status(500).json({message: 'Error while deleting the car', error: e});


    }
 }
 