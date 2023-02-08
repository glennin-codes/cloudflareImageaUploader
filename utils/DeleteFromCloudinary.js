import carsModel from "../models/cars.js";
import { cloudinary } from "./Cloudinary.js";

export const DeleteFromCloudinary = async (carId, res) => {
  try {
    const car = await carsModel.findOne({ carID: carId });
    if (car) {
      const publicIds = [];
      for (let i = 1; i <= 11; i++) {
        if (car[`public_id${i}`]) {
          publicIds.push(car[`public_id${i}`]);
        } else {
          break;
        }
      }

      // console.log(publicIds);
      const deletePromises = publicIds.map((publicId) => {
        return cloudinary.uploader.destroy(publicId);
      });
      const deletedArray = await Promise.all(deletePromises);
      //  console.log(`Deleted ${deletedArray.deleted.length} images from Cloudinary`);
      // console.log(deletedArray);
      if (deletedArray) {
        console.log(`deleted all images with the id ${car.carID} `);
      } else {
        throw new Error("failed to delete from cloudinary");
      }
    }
  } catch (error) {
    console.error(error);
  }
};
