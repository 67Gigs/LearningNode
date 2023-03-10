const express = require('express');
const _ = require('lodash');
const blogRoutes = require('./routes/blogRoutes');
var morgan = require('morgan');

// express app
const app = express();

// connect to mongodb
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const dbURI = 'mongodb+srv://<userName>:<userKey>@cluster0.6u8zbf5.mongodb.net/NodeTuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        app.listen(3000);
    })
    .catch((err) => {
        console.log(err);
    });

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(morgan('dev'));

 // register view engine
app.set('view engine', 'ejs');

// routes
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    // res.sendFile('./views/about.html', { root: __dirname });
    res.render('about', { title: 'About' });
});

// blog routes
app.use('/blogs', blogRoutes);

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});

// redirects
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// });

// listen for request
// app.listen(3000);

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

// mongoose and mongo sandbox routes

// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'new blog',
//         snippet: 'about my new blog',
//         body: 'more about my new blog'
//     });

//     blog.save()
//         .then((result) => {
//             res.redirect('/');
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// });

// app.get('/single-blog', (req, res) => {
//     Blog.findById('63c97ed4b31d1008e484f1ea')
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// });
