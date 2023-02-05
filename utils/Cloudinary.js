import cloudinaryModule from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config();
 
 export const cloudinary=cloudinaryModule.v2;
 cloudinary.config({ 
     cloud_name:process.env.Cloud_Name,
     api_key:process.env.API_Key,
     api_secret:process.env.API_Secret,
     
   
 });
