"use strict";

// Import SQLite3 library
const sqlite3 = require("sqlite3");

// Import the data object modules for use in queries
const data_objects = require("../data_objects.js");

// connect to database
// I have commented all of this out as we have not yet created database

/*
const databaseName = "fill this in when database file is create"
var db = new sqlite3.Database(`./${databaseName}`, function(err){

    // check for error
    if (err){
        return console.err(err.message);
    }

    // confirm connection to database on console
    console.log("connected to the restaurant database");
});
*/