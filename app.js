const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("Bonjour Zakaria");
});

app.listen(3000,()=>{
    console.log('====================================');
    console.log('listen on port 3000');
    console.log('====================================');
})