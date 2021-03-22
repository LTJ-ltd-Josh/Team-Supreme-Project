"use strict";

const express = require("express");

const app = express();

// require data.js so that the functions can be used here
const dataFunctions = require("../data/data.js")

// create endpoint for static files - to serve html files.
app.use(express.static("static"));

// Create end-points for transferring data between client and database

// URL forrequesting menu data from database

app.get("/menu-data", function(req, res){

     // call getMenu function to get menu data from db
    dataFunctions.getMenu(function(menuItems){
        // send menuItems to client as JSON
        res.json(menuItems);
    });

});




// initiate server
app.listen(3000, function(err){

    // check for error
    if(err){
        console.error(err.message);
    }

    // write to console that server is listening
    console.log('listening on port 3000');

});