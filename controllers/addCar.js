 import carsModel from '../models/cars.js'
import { cloudinary } from '../utils/Cloudinary.js';
 export const addCar= async (req,res)=>{
  
const {carID,carName,carType,engine,description,images}=req.body
   let promises= [];
try{
    if (images){
      promises.push(images.forEach(async image => {
           cloudinary.uploader.upload(image,{folder:'MilePhotos'})
       }
       ));
       const response=await promises.all(promises);
       console.log(response)
    }
   await carsModel.create({
    carID,carName,carType,engine,description,
    carImage:response[0].secure_url,
    image2:response[1].secure_url,
    image3:response[2].secure_url,
    image4:response[3].secure_url,
    image5:response[4].secure_url,
    image6:response[5].secure_url,
    image7:response[6].secure_url,
    image8:response[7].secure_url,
    image9:response[8].secure_url,
    image10:response[9].secure_url,



});
  return res.status(201).json({"code":1});
  
    }
    catch(error){
return res.status(500).send(`there was an error ${error.message}`)
    }
 }