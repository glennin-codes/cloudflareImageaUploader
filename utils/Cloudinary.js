import cloudinaryModule from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config();
 
export const cloudinary=cloudinaryModule.v2;
cloudinary.config({
    Cloud_Name:process.env. Cloud_Name,
    API_Secret:process.env.API_Secret,
    API_Key:process.env.API_Key
});
 
// export default cloudinary;