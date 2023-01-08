// importing the fs module ( files)
const fs = require('fs');


// creating a readstream from a certain file (so we can read it as chunks and load a bit of it)
// specifying the argument as an object containing the encoding 'utf8' to put it into a string
const readStream = fs.createReadStream('./Docs/blog3.txt', { encoding: 'utf8' });

// creating a  writestream into a file
// writing chunk by chunk into a file from a data source
const writeStream = fs.createWriteStream('./Docs/blog4.txt');


// printing the chunks with demonstrating the separation between each chunk
// readStream.on('data', (chunk) => {
//     // console.log('---- NEW CHUNK ----');
//     // console.log(chuwnk); 
//     writeStream.write('\nNEW ChUNK\n');  // separating the chunks in the new file
//     writeStream.write(chunk); // writing the chunk that's been read into the new file
// });

// piping
// pipe : the same as before put a much shorter way of writing from a readable file into a writable file

readStream.pipe(writeStream);