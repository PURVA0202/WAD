const mongoose=require('mongoose')
const Schema=mongoose.Schema

const studentschema = new Schema({
    name:{
        type:String
    },
    roll_no:{
        type:Number
    },
    WAD:{
         type:Number
    
    },
    DSBDA:{
        type:Number
    },
    CNS:{
        type:Number
    },
    CC:{
        type:Number
    },
    AI:{
        type:Number
    }
    

},{timestamps:true})

const Student=mongoose.model('Student',studentschema)
module.exports=Student