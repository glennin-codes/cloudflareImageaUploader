 import mongoose from 'mongoose'
import carsModel from '../models/cars.js'
import { DeleteFromCloudinary } from '../utils/DeleteFromCloudinary.js'
 export const deleteCar= async (req,res)=>{
const{carId}=req.params
    try{
       
                     
        await DeleteFromCloudinary(carId);
        res.json({ message: "Deleted from Cloudinary" });

        const car = await carsModel.findOneAndDelete({"carID":carId});
        

        console.log(car)
        res.json({message:"destroyed", "data":car});
       

    }
    catch(e){
        return null


    }
 }
 