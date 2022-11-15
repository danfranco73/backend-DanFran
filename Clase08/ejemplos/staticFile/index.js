const express = require('express'); // import express
const app = express(); // create express app instance

app.use(express.static('public')); // use static files
app.use(express.static('files')); // use static files


const port = 8060; // define port

app.listen(port, () => { // start server
    console.log(`Server running on port ${port}`);
});

