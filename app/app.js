"use strict";

const express = require("express");

const app = express();

// allow express to understand JSON
app.use(express.json());

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
        // send data to client as json
        res.json(rows);
    });
 });  



// endpoint to get all data from CUSTOMER table 
app.get("/CUSTOMER", function(req, res) {
        // call getCustomers function
        dataFunctions.getCustomers(function(rows){
            // send data to client as json
            res.json(rows);

        });
        
    });


// endpoint to get all data from ORDERS table 
app.get("/ORDERS", function(req, res) {
    // call getOrdersTable function
    dataFunctions.getOrdersTable(function(rows){
        // send data to client as json
        res.json(rows);
    });
 });

// endpoint to get all data from MENU table 
app.get("/MENUTABLES", function(req, res) {
   // call getMenuTable function
    dataFunctions.getMenuTable(function(rows){
        // send data to client as json
        res.json(rows);
    });
        
});


// endpoint to get data from MENU table based on particular food category
app.get("/MENU/category/:Category_id", function(req, res) {
    // call getMenuByCategory function
    dataFunctions.getMenuByCategory(req.params.Category_id, function(rows){
        // send data to client as json
        res.json(rows);

    });
        
});


// endpoint to get data from MENU table based on particular MENU item ID
app.get("/MENU/ID/:Item_id", function(req, res) {
    // call getMenuByID function
    dataFunctions.getMenuByID(req.params.Item_id, function(row){
       // send data to client as json
        res.json(row);

    });
        
});


// endpoint to get all results from DIETARY_PROVISIONS table
app.get("/DIETARY_PROVISIONS", function(req, res) {
    // call getDietaryProvisions function
    dataFunctions.getDietaryProvisions(function(rows){
       // send data to client as json
        res.json(rows);

    });
        
    });


// endpoint to get all results from ITEM_DIET table
app.get("/ITEM_DIET", function(req, res) {
    // call getItemDiet function
    dataFunctions.getItemDiet(function(rows){
       // send data to client as json
        res.json(rows);

    });
        
    });


// POST endpoint to receive orders
app.post("/orderSubmitted", function(req, res){

    // add customer record to DB
    dataFunctions.addCustomer(req.body.customerName, req.body.tableNumber, req.body.emailAddress, function(customerNumber){
        
        dataFunctions.addOrder(req.body.basket, customerNumber, req.body.tableNumber, function(){

            res.send("order received")
        });
    });
    
});

// POST endpoint to reveive message that order has been completed
app.post("/ordercomplete", function(req, res){

    
    dataFunctions.completeOrder(req.body.order, function(){

        res.send("OK");
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