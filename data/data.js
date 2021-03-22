"use strict";

// Import SQLite3 library
const sqlite3 = require("sqlite3");

// Import the data object modules for use in queries
const data_objects = require("../data_objects.js");

// connect to database

const databaseName = "SupremeDining.db"
var db = new sqlite3.Database(`./${databaseName}`, function(err){

    // check for error
    if (err){
        return console.err(err.message);
    }

    // confirm connection to database on console
    console.log("connected to the restaurant database");
});


// functions that query the database. Set up as exports so they can be used in routes in app.js


// Function to get all menu items.

exports.getMenu = function(callback){

    // SQL query to get all items and information (bar info that will require a join)
    // Info requiring join will be gathered from another query in nested function
    var sql = `

        SELECT 
                Item_id,
                Item_name,
                Description,
                Category_id,
                Price

        FROM 
                MENU;    
    `

    // Execute query to db
    db.all(sql, function(err, rows){

        // check for error
        if (err){
            console.err(err.message);
        };

        // empty array of menu items
        var menuItems = []

        // for loop to create an object of each menu item and append to menu_item array
        for (var row of rows){

            // second SQL string to make a request for all dietary provisions linked to this menu item
            var sql2 = `
                SELECT

                    DIETARY_PROVISIONS.name as name
                
                FROM

                    DIETARY_PROVISIONS
                    JOIN                    
                    ITEM_DIET 
                    ON DIETARY_PROVISIONS.Diet_code = ITEM_DIET.Diet_code
                
                // I know there is an issue with the below - need to work it out.
                WHERE

                    ITEM_DIET.item_id = '${row.Item_id}'
            `
            // initiate empty array to hold dietary provisions names
            var dietaryProvisions = []

            // request to database for dietary provisions information
            db.all(sql2, function(err, rows){

                    // check for error
                    if (err){
                        console.log(err.message);
                    }

                    // for each row in the results, append the name to the dietary provisions array
                    for(var row of rows){
                        dietaryProvisions.push(row.name);
                    };
                });

            // create an object for the menu item
            var menuItem = new data_objects.MenuItem(row.Item_id, 
                                                      row.Item_name,
                                                      row.Description,
                                                      row.Price,
                                                      row.Category_id,
                                                      dietaryProvisions);
            

            // append the menu item to the menu items array
            menuItems.push(menuItem);
        };

        // define the callback function taking the menuItems array
        callback(menuItems);

    });
};

// Function to get order information from database
exports.getOrders = function(callback){

    // SQL string
    var sql = `SELECT
                        Order.Order_number,
                        Order.TableNumber,
                        Staff.FirstName,
                        Staff.Surname
                
                FROM
                        Order
                    JOIN
                        Staff 
                    ON
                        Order.Staff_id = Staff.Staff_id
                
                WHERE
                        Order.Order_completed = false;
        
                        `

    // execute query to db
    db.all(sql, function(err, rows){


        // Initiate empty array for order objects
        var orders = []
        // for each row, create an Order object
        

    });
};