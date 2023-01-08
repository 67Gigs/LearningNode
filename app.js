 const express = require('express');

 // express app
 const app = express();

// listen for request
app.listen(3000);

app.get('/', (req, res) => {


    // with res.send() we dont need to set a header for res (res.setHeader())
    // no need for res.write/res.end
    // it enfers the status code automatically
    //res.send('<p> home page </p>');

    // send files rather than text
    res.sendFile('./views/index.html', { root: __dirname });


});

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname });
});

// redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// 404 page
app.use((req, res) => {
    res.statusCode = 404;
    res.sendFile('./views/404.html', { root: '.' });
});