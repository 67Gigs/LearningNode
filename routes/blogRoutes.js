const express = require('express');
const Blog = require('../models/blogs');

const router = express.Router();

router.get('/blogs', (req, res) => {
    // with res.send() we dont need to set a header for res (res.setHeader())
    // no need for res.write/res.end
    // it enfers the status code automatically
    //res.send('<p> home page </p>');

    // send files rather than text
    // res.sendFile('./views/index.html', { root: __dirname });

    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            // send an ejs file
            res.render('index', { title: 'All Blogs', blogs: result});
        })
        .catch((err) => {
            console.log(err);
        });

});

router.post('/', (req, res) => {
    const blog = new Blog(req.body);

    blog.save()
        .then((result) => {
            res.redirect('/');
        })
        .catch((err) => {
            console.log(err);
        })
});

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then((result) => {
            res.render('details', { title: 'Blog Details', blog: result})
        })
        .catch((err) => {
            console.log(err);
        });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/blogs' });
        })
        .catch((err) => {
            console.log(err);
        })
});


module.exports = router;