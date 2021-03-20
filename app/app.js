"use strict";

const express = require("express");

const app = express();

// create endpoint for static files - to serve html files.
app.use(express.static("static"));






// initiate server
app.listen(3000, function(err){

    // check for error
    if(err){
        console.error(err.message);
    }

    // write to console that server is listening
    console.log('listening on port 3000');

});