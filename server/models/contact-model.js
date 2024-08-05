const mongoose=require("mongoose");

const contSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
    ,
    message:{
        type:String,
        required:true
    }
})

const Contact=mongoose.model("Contact",contSchema);
module.exports=Contact;