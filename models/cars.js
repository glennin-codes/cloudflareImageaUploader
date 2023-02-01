
import mongoose from 'mongoose'
const carsSchema= new mongoose.Schema(
    {
        carID:{
            type:String,
            required:[true,"name must be provided please"],
            trim:true
      
        },
        carName:{
            type:String,
            required:[true,"name must be provided please"],
            trim:true
      
        },
        //car type is same as brand. It was meant to mean brand

        carType:{
            type:String,
            required:[true, "car type must be provided"]
        },
        
        carImg:{
            type:String,
            required:[true, " a product must have an Image"]
        },
       
        image2:{
            type:String,
        },
       
        image3:{
            type:String,
        },
       
        image4:{
            type:String,
        },
       
        image5:{
            type:String,
        },
        image6:{
            type:String,
        },
        image7:{
            type:String,
        },
        image8:{
            type:String,
        },
        image9:{
            type:String,
        },
        image10:{
            type:String,
        },
        color: {
            type: String,
        },

        transmission:{
            type: String,
            required:[true, "specify the transimission"]
        },
        
        fuel:{
        type:String,
         
        },
        bodyStyle:{
            type:String,

        },
        engine:{
            type:String,
        },
       mileage:{
            type:String,
        },
        cubicCentimeters:{
            type: String,
          
        },
        price:{
            type:Number,
        },
        description:{
            type:String
        }
    }
)
export default  mongoose.model("MilesDb",carsSchema  )