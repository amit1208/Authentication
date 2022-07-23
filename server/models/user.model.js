const mongoose =require('mongoose');

const User=new mongoose.Schema({

name:{type:String,required:true},
email:{type:String,required:true,unique:true},
password:{type:String,required:true},
date:{type:String,deafault:Date.now},
quote:{type:String}
    
},
{collection:'User-data'}
)


module.exports=model=mongoose.model('Userdata',User)