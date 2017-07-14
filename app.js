const express = require('express');
const app = express();
const PORT = 3000;

app.get('/',(req,res)=>{
    res.send("Bonjour Zakaria");
});

app.get('/admin',(req,res)=>{
    res.send("Bonjour Zakaria admin");
});

app.listen(PORT,()=>{
    console.log('====================================');
    console.log('listen on port 3000');
    console.log('====================================');
})