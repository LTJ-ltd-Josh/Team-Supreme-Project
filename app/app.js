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
    
    dataFunctions.getOrdersTable(function(rows){

        res.json(rows);
    });
 });

// endpoint to get all data from MENU table 
app.get("/MENUTABLE", function(req, res) {
   
    dataFunctions.getMenuTable(function(rows){

        res.json(rows);
    });
        
});


// endpoint to get data from MENU table based on particular food category
app.get("/MENU/category/:Category_id", function(req, res) {
    
    dataFunctions.getMenuByCategory(req.params.Category_id, function(rows){
        
        res.json(rows);

    });
        
});


// endpoint to get data from MENU table based on particular MENU item ID
app.get("/MENU/ID/:Item_id", function(req, res) {
    
    dataFunctions.getMenuByID(req.params.Item_id, function(row){
        res.json(row);

    });
        
});


// endpoint to get all results from DIETARY_PROVISIONS table
app.get("/DIETARY_PROVISIONS", function(req, res) {
    
    dataFunctions.getDietaryProvisions(function(rows){
        res.json(rows);

    });
        
    });


// endpoint to get all results from ITEM_DIET table
app.get("/ITEM_DIET", function(req, res) {
    
    dataFunctions.getItemDiet(function(rows){
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