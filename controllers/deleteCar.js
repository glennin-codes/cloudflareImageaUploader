 import carsModel from '../models/cars.js'
 export const deleteCar= async (req,res)=>{
const{carId}=req.params
    try{
        console.log(carId)
        const car = await carsModel.findOneAndDelete({"carID":carId});

        console.log(car)
        res.json({"message":"destroyed", "data":car});
       

    }
    catch(e){
        return null

    }
 }
 