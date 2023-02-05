import carsModel from '../models/cars.js';
import { cloudinary } from '../utils/Cloudinary.js';


export const addCar = async (req, res) => {
// try{
//   const { carID, carName, carType, engine, description} = req.body;
// //   let promises = [];
//   let images = [...req.body.images];
//   let imagesBuffer = [];


//   for (let i =0; i < images.length;  i++){
//         const result = await cloudinary.uploader.upload(images[i], {
//         folder: "testing",
//         crop: "scale"
//   });
//   imagesBuffer.push({
//     public_id: result.public_id,
//     url: result.secure_url
//   })
//   console.log(imagesBuffer);
//   return res.status(201).json({ "code": 1 });

// }
// } catch (error) {
//     return res.status(500).send(`There was an error: ${error.message}`);
//   }
// };


  
  









  try {
    const { carID, transmission,carName, carType, engine, description} = req.body;
    // if (images) {
    //   console.log(images)
    //   images.forEach(async image => {
    //     promises.push(cloudinary.uploader.upload(image, { folder: 'MilesPhotos' }));
    //   });

    //   const response = await Promise.all(promises);
    //   console.log(response);
    //   const carImages = response.map(r => r.secure_url);
    //   const publicIds = response.map(r => r.public_id);

     const car= await carsModel.create({
      transmission,
        carID,
        carName,
        carType,
        engine,
        description,
        // carImg: carImages[0],
        // image2: carImages[1],
        // image3: carImages[2],
        // image4: carImages[3],
        // image5: carImages[4],
        // image6: carImages[5],
        // image7: carImages[6],
        // image8: carImages[7],
        // image9: carImages[8],
        // image10: carImages[9],
        // public_id1: publicIds[0],
        // public_id2: publicIds[1],
        // public_id3: publicIds[2],
        // public_id4: publicIds[3],
        // public_id5: publicIds[4],
        // public_id6: publicIds[5],
        // public_id7: publicIds[6],
        // public_id8: publicIds[7],
        // public_id9: publicIds[8],
        // public_id10: publicIds[9]
      });
// const car=carsModel.create(req.body);
      return res.status(201).json({ 'code': 1 });
    }
   catch (error) {
    return res.status(500).send(`There was an error: ${error.message}`);
  }
};



