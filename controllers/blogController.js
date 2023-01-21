const Blog = require('../models/blogs');

const blog_index = (req, res) => {

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
}

const blog_update_post = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndUpdate(id, req.body)
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch((err) => {
            console.log(err);
        });
}

const blog_update_get = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then((result) => {
            res.render('update', { title: 'Update' ,blogs: result });
        })
        .catch((err) => {
            console.log(err);
        })
}

const blog_create_post = (req, res) => {
    const blog = new Blog(req.body);

    blog.save()
        .then((result) => {
            res.redirect('/');
        })
        .catch((err) => {
            console.log(err);
        })
}

const blog_create_get = (req, res) => {
    res.render('create', { title: 'Create a new blog' });
}

const blog_single = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then((result) => {
            res.render('details', { title: 'Blog Details', blog: result})
        })
        .catch((err) => {
            console.log(err);
        });
}

const blog_delete = (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/blogs' });
        })
        .catch((err) => {
            console.log(err);
        })
}

module.exports = {
    blog_index,
    blog_update_post,
    blog_update_get,
    blog_create_post,
    blog_create_get,
    blog_single,
    blog_delete
}