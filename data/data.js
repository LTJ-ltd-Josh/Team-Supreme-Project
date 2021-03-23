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
            
            menuItems.push(menuItem)

           

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
                        Order.Order_number as orderNumber,
                        Order.TableNumber as tableNumber,
                        Staff.FirstName as staffFirstName,
                        Staff.Surname as staffSurname
                
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
        var orders = [];
        // for each row, create an Order object
        for(var row of rows){
            // initiate an empty array to contain all the order items for the order
            var orderItems = [];

            // SQL string to get order items for the row
            var sql2 = `
                    SELECT 
                            Order_details.quantity as quantity,
                            Menu.Item_name as itemName,
                            Menu.Price as price
                    FROM
                            Order
                        JOIN
                            Order_details 
                            ON
                            Order_details.Order_number = Order.Order_number
                        JOIN
                            Menu
                            ON
                            Order_details.Item_id = Menu.Item_id
                    WHERE
                        Order_details.Order_number = '${row.orderNumber}'

            `
            // make a call to the database for all the order items for the row
            db.all(sql2, function(err, rows){
                // for each row, create an OrderItem object
                for (var row of rows){
                    var orderItem = new data_objects.OrderItem(row.itemName, row.quantity, row.price)
                    orderItems.push(orderItem);
                };         
             });
        // Create a Order Object for each row and push it to the orders array
        var order = new data_objects.Order(row.orderNumber, 
            row.tableNumber, 
            row.staffFirstName,
            row.staffSurname,
            orderItems );

            orders.push(order);
             
        };
        callback(orders);
    });
};