const express=require('express');
const mysql=require('mysql');
const path=require('path');
const dotenv=require('dotenv');
const cookieParser=require('cookie-parser');

dotenv.config({path:'./.env'});
const app=express();
const publicDirectory=path.join(__dirname, './public');
app.set('view engine', 'hbs');
app.use(express.static(publicDirectory));
app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use(cookieParser());




//Database
const db=mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE
});
db.connect((error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Mysql is Connected!");
    }
});
//Define Routes
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));

 //Careting Server
app.listen(5000,()=>{
    console.log("Server is running at Port 5000!");
})