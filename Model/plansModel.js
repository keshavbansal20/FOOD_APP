const mongoose = require("mongoose");


mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.ewfdv.mongodb.net/test?authSource=admin&replicaSet=atlas-5uo5vl-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true",
    {useNewUrlParser: true , useUnifiedTopology: true})
  .then((db)=>{
    console.log("connected to plansModel db!!!");
  });

  const reviewObjSchemaInPlan = new mongoose.Schema({
    userId :{
      type:String,
      required:true
    },
    userImage:{
      type:String,
      required:true
    },
    userName:{
      type:String,
      required:true
    },
    message:{
      type:String,
      required:true
    },
    rating:{
      type:Number,
    },
    bookedOn : {
      type:String,
      default:new Date()
    }
  })




  let planSchema = new mongoose.Schema({
      name:{
          type:String,
          required:true,
          maxlength:[40,"length is greater than 40"]
      },
      duration:{
          type:Number,
          required:true,
      },
      price:{
          type:Number,
          required:true,
      },
      discount:{
       type:[reviewObjSchemaInPlan],
      },
      planImage:{
        type:String,
        default:"/images/plans/default.png"
      },
  })

  const planModel = mongoose.model("planscollection",planSchema);

  module.exports = planModel;