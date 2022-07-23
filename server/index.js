const express =require("express");
const app=express();
const cors=require('cors')
const mongoose=require('mongoose')
const user=require('./models/user.model')
const jwt=require('jsonwebtoken')


//mongo
mongoose.connect('mongodb://localhost:27017/login-authentic')



//EXPRESS
app.use(cors())
app.use(express.json())


//REGiSter
app.post('/api/register',async (req,res)=>{
    console.log(req.body)
    
    try{
         await user.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        })

        res.json({status:'ok'})
        }
        catch(err){
            res.json({status:'error',error:'Duplicate email'})
        }
})


//login api serching data in DB
app.post('/api/login',async (req,res)=>{
    const{name,email,password}=req.body
     const testuser=await user.findOne({email,password})
    
     if(testuser){
        const token =jwt.sign({ name,email},'secret123')
        
        return res.json({status:'ok',user:'present'})
     }
     else{return res.json({status:'error',user:'false'}) }

    })


//
app.use(express.static(path.join(__dirname,'build')))
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'build/index.html'))
})
//
app.listen(5000,()=>{
console.log("server started at port 5000");}
)


