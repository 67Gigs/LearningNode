const { strict } = require('assert');
const fs = require('fs');


// reading files
// fs.readFile('./Docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// })

// console.log('last line')
// writing files
// fs.writeFile('./Docs/blog1.txt', 'hello world', () => {
//     console.log('File was written')
// });

// fs.writeFile('./Doc/blog2.txt', 'holaa', () => {
//     console.log('file was written')
// });


// directories
// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if (err){
//             console.log(err);
//         }
//         console.log('folder created');
//     });
// } else {
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('folder deleted')
//     });
// }

// if (!fs.existsSync('./docs/deleteme.txt')){
//     fs.writeFile('./docs/deleteme.txt', '', (err)=> {
//         if (err) {
//             console.log(err);
//         }
//         console.log('file written')
//     });
// }

// deleting files

if (fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err)=> {
        if (err) {
            console.log(err);
        }
        console.log('file deleted')
    });
}