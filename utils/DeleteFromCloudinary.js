import carsModel from "../models/cars.js";
import { cloudinary } from "./Cloudinary.js";


export const DeleteFromCloudinary = async (carId,res) => {
   try{
       const car=await carsModel.findOne({"carID":carId})
       if (!car){
       res.json({message:`car with the id ${carId} is already deleted from the database`})
       }
       if (car){
       const publicIds = [
        car.public_id1,
        car.public_id2,
        car.public_id3,
        car.public_id4,
        car.public_id5,
        car.public_id6,
        car.public_id7,
        car.public_id8,
        car.public_id9,
        car.public_id10,
      ];
      console.log(publicIds);
      const Delete=[]
      publicIds.forEach(async publicId=>{
            Delete.push(await cloudinary.uploader.destroy(publicId))
      })
      const deletedArray = await Promise.all(Delete);
      //  console.log(`Deleted ${deletedArray.deleted.length} images from Cloudinary`);
        console.log(deletedArray);
        if (deletedArray){
        res.status.(200).json({msg:`Deleted all images of the id from Cloudinary`})
        }
       else{
          throw new Error('failed to delete from cloudinary')
        }
    }
       
   }catch(error){
       console.error(error);
   }
}



