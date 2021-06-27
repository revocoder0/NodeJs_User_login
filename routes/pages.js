const express=require('express');
const router=express.Router();

//For Index
router.get('/',(req,res)=>{
    res.render('index');
})
//For Register
router.get('/register',(req,res)=>{
    res.render('register');
})
//For login
router.get('/login',(req,res)=>{
    res.render('login');
})

//Export
module.exports=router;