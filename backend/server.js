const express=require('express');
const mysql= require('mysql');
const cors= require('cors');
// const bodyparse = require('body-parser');

const app=express();
app.use(cors());
app.use(express.json());
// app.use(bodyparse.json());

const db=  mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'signup',
    port:'3306'
});

db.connect((err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("DataBase Has Been Connected");
    }
    // console.log('db ' + connection.state);
})


app.get('/users', (req,res) => {
   res.send({hello: 'world'});
})

app.post('/signup', (req,res)=>{

    console.log(req.body);
    const sql = "INSERT INTO LOGIN(`NAME`,`EMAIL`,`PASSWORD`) VALUES (?)";
    const values= [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    
    db.query(sql,[values], (err,data)=>{
        if (err) {
            return res.json('Error');
        }
        return res.json(data);
    })
})

app.post('/login', (req,res)=>{
console.log(req.body);
    const sql = "select * from login where `email` = ? and `password` = ?";
    
    db.query(sql,[req.body.email,req.body.password], (err,data)=>{
        if (err) {
            return res.json('Error');
        }
        if(data.length>0){
            return res.json("success");
        }
        else {
             return res.json("failure");
        }
    })
})

app.listen(8081, ()=>{
    console.log("server connected!");
});