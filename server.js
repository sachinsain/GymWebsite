const Port =process.env.PORT|| 3000;
const fs= require('fs')
const express=require('express')
const app=express();
const Home=fs.readFileSync('index.html')
const about=fs.readFileSync('about.html')
app.use('/static',express.static('static'));
app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.send(Home);
})
app.get('/about',(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.send(about)
})
app.listen(Port,()=>{
    console.log('server is running')
})