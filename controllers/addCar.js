import carsModel from '../models/cars.js';
import { cloudinary } from '../utils/Cloudinary.js';

export const addCar = async (req, res) => {
  const { carID, carName, carType, engine, description, images } = req.body;
  let promises = [];
  const image=images[0];
  console.log(image);
  try{
    const response=await cloudinary.uploader.upload(image,{folder:'MilesPhotos'})
    const carImage=response.secure_url;
    const public_id=response.public_id;
    console.log(carImage);
    console.log(public_id);
  }catch(err){
    console.error(err);
  }
}
  

  // try {
  //   if (images) {
  //     console.log(images)
//       images.forEach(async image => {
//         promises.push(cloudinary.uploader.upload(image, { folder: 'MilesPhotos' }));
//       });

//       const response = await Promise.all(promises);
//       console.log(response);
//       const carImages = response.map(r => r.secure_url);
//       const publicIds = response.map(r => r.public_id);

//       await carsModel.create({
//         carID,
//         carName,
//         carType,
//         engine,
//         description,
//         carImg: carImages[0],
//         image2: carImages[1],
//         image3: carImages[2],
//         image4: carImages[3],
//         image5: carImages[4],
//         image6: carImages[5],
//         image7: carImages[6],
//         image8: carImages[7],
//         image9: carImages[8],
//         image10: carImages[9],
//         public_id1: publicIds[0],
//         public_id2: publicIds[1],
//         public_id3: publicIds[2],
//         public_id4: publicIds[3],
//         public_id5: publicIds[4],
//         public_id6: publicIds[5],
//         public_id7: publicIds[6],
//         public_id8: publicIds[7],
//         public_id9: publicIds[8],
//         public_id10: publicIds[9]
//       });

//       return res.status(201).json({ code: 1 });
//     }
//   } catch (error) {
//     return res.status(500).send(`There was an error: ${error.message}`);
//   }
// };



