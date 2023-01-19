const express = require('express');
const _ = require('lodash');
const mongoose = require('mongoose');
var morgan = require('morgan');

// connect to mongodb
const dbURI = 'mongodb+srv://noureddine:test1234@cluster0.6u8zbf5.mongodb.net/NodeTuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));
// express app
const app = express();

 // register view engine
app.set('view engine', 'ejs');

// listen for request
// app.listen(3000);

// using morgan
// app.use(morgan('dev'));

// middleware
// app.use((req, res, next) => {
//     console.log('New request made: ');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next(); // moving from this function to another one
// });

// app.use((req, res, next) => {
//     console.log('In the next middleware');
//     next();
// });

app.get('/', (req, res) => {
    // with res.send() we dont need to set a header for res (res.setHeader())
    // no need for res.write/res.end
    // it enfers the status code automatically
    //res.send('<p> home page </p>');

    // send files rather than text
    // res.sendFile('./views/index.html', { root: __dirname });

    // send an ejs file
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ]
    res.render('index', { title: 'Home', blogs});
});

app.get('/about', (req, res) => {
    // res.sendFile('./views/about.html', { root: __dirname });
    res.render('about', { title: 'About' });
});


// redirects
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// });

app.get('/blogs/create', (req, res) => {
    res.render('create',{ title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
    // res.statusCode(404).sendFile('./views/404.html', { root: '.' });
    res.status(404).render('404', { title: '404' });
});