"use strict";

const express = require("express");

const app = express();

// require data.js so that the functions can be used here
const dataFunctions = require("../data/data.js")

// create endpoint for static files - to serve html files.
app.use(express.static("static"));

// Create end-points for transferring data between client and database

// URL for requesting menu data from database

app.get("/menu-data", function(req, res){

     // call getMenu function to get menu data from db
    dataFunctions.getMenu(function(menuItems){
        // send menuItems to client as JSON
        res.json(menuItems);
    });

});


// URL for requesting Order information from database

app.get("/orderslist", function(req, res){

    // call getOrders function
    dataFunctions.getOrders(function(orders){
        // send order data to client as JSON
        res.json(orders);
    });
});

// endpoint to get all data from STAFF table 
app.get("/STAFF", function(req, res) {
    
    // call getStaff function
    dataFunctions.getStaff(function(rows){
        res.json(rows);
    });
 });  



// endpoint to get all data from CUSTOMER table 
app.get("/CUSTOMER", function(req, res) {
    
        dataFunctions.getCustomers(function(rows){
            res.json(rows);
        });
        
    });


// endpoint to get all data from ORDERS table 
app.get("/ORDERS", function(req, res) {
    var sql = "SELECT * FROM ORDERS";
    db.all(sql, function(err, rows) {
        if (err) {
            return console.error(err);
        }
        res.json(rows);
    });
});

// endpoint to get all data from MENU table 
app.get("/MENU", function(req, res) {
    var sql = "SELECT * FROM MENU";
    db.all(sql, function(err, rows) {
        if (err) {
            return console.error(err);
        }
        res.json(rows);
    });
});

// endpoint to get data from MENU table based on particular food category
app.get("/MENU/:Category_id", function(req, res) {
    var sql = `
        SELECT item_name, Category_id FROM MENU
        WHERE Category_id = "${req.params.Category_id}"`;
    db.all(sql, function(err, row) {
        if (err) {
            return console.error(err.message);
        }
        res.json(row);
    });
}); 

// endpoint to get data from MENU table based on particular MENU item ID
app.get("/MENU/:Item_id", function(req, res) {
    var sql = `
        SELECT * FROM MENU
        WHERE Item_id = "${req.params.Item_id}"`;
    db.all(sql, function(err, row) {
        if (err) {
            return console.error(err.message);
        }
        res.json(row);
    });
});

// endpoint to get all results from DIETARY_PROVISIONS table
app.get("/DIETARY_PROVISIONS", function(req, res) {
    var sql = "SELECT * FROM DIETARY_PROVISIONS";
    db.all(sql, function(err, rows) {
        if (err) {
            return console.error(err);
        }
        res.json(rows);
    });
});

// endpoint to get all results from ITEM_DIET table
app.get("/ITEM_DIET", function(req, res) {
    var sql = "SELECT * FROM  ITEM_DIET";
    db.all(sql, function(err, rows) {
        if (err) {
            return console.error(err);
        }
        res.json(rows);
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