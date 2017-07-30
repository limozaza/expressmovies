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
    res.render('movies');
});
app.get('/movies/add',(req,res)=>{
    res.send("Formulaire movies");
});
app.get('/movies/:id/',(req,res)=>{
    const id = req.params.id;
    res.render('movie-details',{ movieid: id});
});

app.listen(PORT,()=>{
    console.log('listen on port 3000');
})