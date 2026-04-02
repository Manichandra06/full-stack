const express=require('express');
const mysql=require('mysql2');
const cors=require('cors');
const bodyParser=require('body-parser');

const app=express();
app.use(cors());
app.use(bodyParser.json());

const db=mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'VTU25500',
    database: 'student_data'
});

db.connect((err)=>{
    if(err){
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database');
});

app.post('/addData',(req,res)=>{
    const {username,email,dept,phNo,DOB,password} = req.body;

    const query = `
    INSERT INTO students (username, email, dept, phNo, DOB, password)
    VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(query, [username, email, dept, phNo, DOB, password], (err,result)=>{
        if(err){
            res.json({success:false,message:err.message});
        }else{
            res.json({success:true,message:'Registration Successful'});
        }
    });
});

const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});