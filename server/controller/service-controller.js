const Service=require("../models/service-model");
 

const service=async(req,res)=>{
try {
    const data=await Service.find();
    if(!data){
        res.status(400).json({msg :"Error"})
    }
    res.status(200).json({msg:data})

} catch (error) {
    console.log("service error",error);
}
}

module.exports=service;