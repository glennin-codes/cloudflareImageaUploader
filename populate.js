import {cars} from './cars.js'
import connect from './db/config.js'
import carsModel from './models/cars.js'
import dotenv from 'dotenv'
dotenv.config()

const start= async ()=>{
    try{
       
        await connect(process.env.MONGO_URL)
        // await carsModel.deleteMany()//first delete everything in the database
        await carsModel.create(cars)//add the json products
console.log("connection succesful")
process.exit(0)//exit succesfully



    }catch(error){
        console.error(error)
        process.exit(1)
    }
}
start()