const express = require('express');
const app = express();
const PORT = 3000;

app.use('/public', express.static('public'));



app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('index');
});
app.get('/movies',(req,res)=>{
    res.send("Bonjour movies");
});
app.get('/movies/add',(req,res)=>{
    res.send("Formulaire movies");
});
app.get('/movies/:id',(req,res)=>{
    const id = req.params.id;
    res.send(`Bonjour movie ${id}`);
});
app.get('/admin',(req,res)=>{
    res.send("Bonjour Zakaria admin");
});
app.listen(PORT,()=>{
    console.log('listen on port 3000');
})