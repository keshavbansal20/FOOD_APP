const mongoose = require("mongoose");
const crypto = require("crypto");

mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.ewfdv.mongodb.net/test?authSource=admin&replicaSet=atlas-5uo5vl-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true",
    {useNewUrlParser: true , useUnifiedTopology:true})
    .then((db)=>{
        console.log("connected to booking db!!!");
    });

    //bookingPlan schema
    const bookedPlanSchema = new mongoose.Schema({
        planId:{
            type:String , 
            required : true
        } ,
        planImage:{
            type:String , 
            required:true 
        },
        name:{
            type:String , 
            required:true
        } , 
        currentPrice:{
            type: Number , 
            required: true
        } , 
        bookenOn:{
            type:String , 
            default:new Date().toLocaleString()
        } , 
        address :{
            type:String 
        }

    })

    const bookingSchema = new mongoose.Schema({
        userId :{
            type:String , 
            required:true
        } , 
        bookedPlans:{
            type:[bookedPlanSchema] ,
            required: true 
        }
    })

    const bookingModel = mongoose.model("bookingcollection" , bookingSchema);
    module.exports = bookingModel;