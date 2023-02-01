 import carsModel from '../models/cars.js'
 export const getSingleCar= async (req,res)=>{
const{carId}=req.params
    try{
        // console.log(carId)
        const car = await carsModel.findOne({"carID":carId});

        // console.log(car)
        res.json({"message":"Ok", "data":car});
       

    }
    catch(e){
        return null

    }
 }
 