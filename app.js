const express = require('express');
const app = express();
const bodyParser = require("body-parser");


const PORT = 3000;

app.use('/public', express.static('public'));
//app.use(bodyParser.urlencoded({extended: false}));
let frenchMovies =[];


app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('index');
});
app.get('/movies',(req,res)=>{
    const title = 'Films Francais';
    frenchMovies = [
        {title: "titre 1", year: 2001 },
        {title: "titre 2", year: 2004 },
        {title: "titre 3", year: 2015 },
        {title: "titre 4", year: 1978 }
    ];
    res.render('movies',{ movies: frenchMovies, title: title});
});
app.get('/movies/add',(req,res)=>{
    res.send("Formulaire movies");
});
app.get('/movies/:id/',(req,res)=>{
    const id = req.params.id;
    res.render('movie-details',{ movieid: id});
});

var urlencodedParser = bodyParser.urlencoded({extended:false});

app.post('/movies',urlencodedParser,(req,res) => {
    var movietitle = req.body.movietitle;
    var movieyear = req.body.movieyear;

    const newMovie = { title:movietitle, year:movieyear};
    frenchMovies = [...frenchMovies, newMovie];
    console.log(frenchMovies);
    res.sendStatus(201);
});

app.listen(PORT,()=>{
    console.log('listen on port 3000');
})