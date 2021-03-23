// Import SQLite library.
// Use verbose mode to give more detailed error outputs
const sqlite3 = require("sqlite3").verbose();

// Connect to the database.
// Function is callback when connection completed.
// err is any error message that occurs
let db = new sqlite3.Database("SupremeDining.db", function(err) {
    // If an error, print it out.
    if (err) {
        return console.error(err.message);
    }
    console.log("Connected to Supreme Dining Database.");
});

// Import express.js
const express = require("express");

// Create express app
var app = express();

// Add static files location
app.use(express.static("static"));


// Create a get for /STAFF
app.get("/STAFF", function(req, res) {
    var sql = "SELECT * FROM STAFF";
    db.all(sql, function(err, rows) {
        if (err) {
            return console.error(err);
        }
        res.json(rows);
    });
});

app.get("/CUSTOMER", function(req, res) {
    var sql = "SELECT * FROM CUSTOMER";
    db.all(sql, function(err, rows) {
        if (err) {
            return console.error(err);
        }
        res.json(rows);
    });
});

app.get("/ORDER", function(req, res) {
    var sql = "SELECT * FROM ORDER";
    db.all(sql, function(err, rows) {
        if (err) {
            return console.error(err);
        }
        res.json(rows);
    });
});

app.get("/MENU", function(req, res) {
    var sql = "SELECT * FROM MENU";
    db.all(sql, function(err, rows) {
        if (err) {
            return console.error(err);
        }
        res.json(rows);
    });
});

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


app.get("/DIETARY_PROVISIONS", function(req, res) {
    var sql = "SELECT * FROM DIETARY_PROVISIONS";
    db.all(sql, function(err, rows) {
        if (err) {
            return console.error(err);
        }
        res.json(rows);
    });
});


app.get("/ITEM_DIET", function(req, res) {
    var sql = "SELECT * FROM  ITEM_DIET";
    db.all(sql, function(err, rows) {
        if (err) {
            return console.error(err);
        }
        res.json(rows);
    });
});



// Start server on port 3000
app.listen(3000);