"use strict";

const express = require("express");

const app = express();

// create endpoint for static files - to serve html files.
app.use(express.static("static"));

// Create end-points for transferring data between client and database

// URL for sending requesting menu data from database

app.get("/menu-data", function(req, res){

    // when we have the database here we would call a function to get the menu info from the DB
    // The function to do this would be written in the data.js file, and then referenced here.
    /* e.g function getMenuData(){
        1. use SQL to get menu data from DB
        2. convert that data into JSON to send back to the webpage
        3. send data to webpage
    }*/

    // Just for demonstration here is a JSON string on a couple of menu items which 
    // I'll send to the webpage

    var menu = {
        item1: {id: "M001", name: "burger", price:5.99, description: "delicious burger with cheese"},
        item2: {id: "M002", name: "pizza", price:5.99, description: "cheese and tomato pizza"},
    }

    res.json(menu);

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