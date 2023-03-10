// importing the http module
const http = require('http');
// importing files module
const fs = require('fs');
// importing lodash module
const _ = require('lodash');


// creating  a server and stocking it into a var
// we need a request and a response in the argument of the function so it runs
const server = http.createServer((req, res) => {
    // request object
    // console.log('request made');
    // console.log(req.url, req.method);
    // repsonse object

    // lodash
    const num = _.random(0, 20);
    console.log(num);



    // call a function once only

    const greet = _.once(() => {
        console.log('hello');
    });

    greet();
    greet();
    

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    // res.write('<head><link rel="stylesheet" href="#"></head>');
    // res.write('<p>Hello</p>');
    // res.write('<p>Hello again</p>');

    let path = './views/';
    
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;

        case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end()
            break;

        default:
            path += '404.html';
            res.statusCode = 404;       
            break;
    }

    // send an html file
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err); 
            res.end();
        } else {
            // res.write(data);
            res.end(data); // pass it directly
        }
    });


});

// creating a listen function 
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});

// to send a request we may use localhost:3000 and a request will pop



// the package nodemon is used to never close the server we are working on, so it automatically reload the server