"use strict";

// Import SQLite3 library
const sqlite3 = require("sqlite3");

// Import the data object modules for use in queries
const data_objects = require("../data_objects.js");

// connect to database

const databaseName = "SupremeDining.db"
var db = new sqlite3.Database(`data/${databaseName}`, function(err){

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
                MENU.Item_id as Item_id,
                MENU.Item_name as Item_name,
                MENU.Description as Description,
                MENU.Category_id as Category_id,
                MENU.Price as Price,
                DIETARY_PROVISIONS.name as dietaryProvisionName


        FROM 
                MENU
            LEFT JOIN
                ITEM_DIET  
                ON
                MENU.Item_id = ITEM_DIET.Item_id
            JOIN  
                DIETARY_PROVISIONS
                ON DIETARY_PROVISIONS.Diet_code = ITEM_DIET.Diet_code
    `

    // Execute query to db
    db.all(sql, function(err, rows){

        // check for error
        if (err){
            console.err(err.message);
        };

        // empty array of menu items
        var menuItems = []
        
        // create an empty ItemIDs array - to hold record of the items that have been added
        var itemIDs = [];

        // for loop to create an object of each menu item and append to menu_item array
        for (var row of rows){

            // if statement to check if menu ID is in the itemIDs array
            // reference https://www.w3schools.com/Jsref/jsref_includes_array.asp

            if(itemIDs.includes(row.Item_id) == false){
                // create an object for the menu item
             var menuItem = new data_objects.MenuItem(row.Item_id, 
                row.Item_name,
                row.Description,
                row.Price,
                row.Category_id,
                []
                );

            // push menuItem to menuItems array
            menuItems.push(menuItem)

            // add item ID to itemIDs
            itemIDs.push(row.Item_id);           

            };  
            
         };  
        // second for loop to add dietary provisions to objects
        // reference - reading about whether for loops are asynchronus https://www.amitmerchant.com/asynchronous-for-loops-in-javascript/
        for (var row of rows){
            
            // for loop to check find the menu item that matches the menuItemId of the row
            for (var menuItem of menuItems){
                
                if (menuItem.ID == row.Item_id){
                    menuItem.dietaryProvisions.push(row.dietaryProvisionName);
                };
            };
        };  
    // define the callback function taking the menuItems array
   callback(menuItems);
        
    });
   
};

// Function to get order information from database
exports.getOrders = function(callback){

    // SQL string
    var sql = `SELECT
                        ORDERS.Order_number as orderNumber,
                        ORDERS.Table_number as tableNumber,
                        STAFF.First_name as staffFirstName,
                        STAFF.Surname as staffSurname,
                        ORDER_DETAILS.quantity as quantity,
                        MENU.Item_name as itemName,
                        MENU.Price as price
                
                FROM
                        ORDERS
                    JOIN
                        STAFF 
                    ON
                        ORDERS.Staff_id = STAFF.Staff_id
                    JOIN
                        ORDER_DETAILS 
                        ON
                        ORDER_DETAILS.Order_number = ORDERS.Order_number
                    JOIN
                        MENU
                        ON
                        ORDER_DETAILS.Item_id = MENU.Item_id
                
                    WHERE
                        ORDERS.Order_Completed = false;
        
                        `

    // execute query to db
    db.all(sql, function(err, rows){
        
        // check for error
        if(err){
            console.log(err.message);
        }

        // Initiate empty array for order objects
        var orders = [];
        // Initiate empty array to record order IDs of added orders
        var orderIDs = []
        // for each row, create an Order object
        for(var row of rows){
           
            // If statement to see if Order object has already been created for this Order ID
            if (orderIDs.includes(row.orderNumber)==false){

                // Create a Order Object for each row and push it to the orders array
                var order = new data_objects.Order( row.orderNumber, 
                                                    row.tableNumber, 
                                                    row.staffFirstName,
                                                    row.staffSurname,
                                                    [] );

                orders.push(order);
                orderIDs.push(row.orderNumber);

            };
                        
        };

        // second for loop to add order item to each order.
        for (var row of rows){
            // iterate through each order in the orders array
            for (var order of orders){

                // check if row orderNumber = object orderNumber
                if(row.orderNumber == order.orderNumber){
                    // create order item object for order item
                    // thanks to VS code for the helpful intelisense as I forgot to reference 'data_objects' when creating this object 
                    var orderItem = new data_objects.OrderItem(row.itemName, row.quantity, row.price);

                    // orderItem object to the order's 'menuItems' array
                    order.orderItems.push(orderItem);
                }
            }
        }
        // call callback function        
        callback(orders);
    });
};

// function to get all data from STAFF table 

exports.getStaff = function(callback){

    // SQL statement
    var sql = "SELECT * FROM STAFF";
    // Query to DB
    db.all(sql, function(err, rows) {
        if (err) {
            return console.error(err);
        };
        // callback function with data returned from DB
        callback(rows);   
        });    
};


// function to get all data from CUSTOMERS table 
exports.getCustomers = function(callback){

    // SQL statement
    var sql = "SELECT * FROM CUSTOMER";
    // query to DB
    db.all(sql, function(err, rows) {
        if (err) {
            return console.error(err);
      }
      // callback with data from DB
      callback(rows);
    });
};

exports.getOrders = function(callback){
    // SQL statement
    var sql = "SELECT * FROM ORDERS";
    // Query to DB
    db.all(sql, function(err, rows) {
        if (err) {
            return console.error(err);
        };
        callback(rows);
});
};