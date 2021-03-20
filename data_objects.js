"use strict";

exports.MenuItem = class {

    // class properties
    
    // Item ID
    ID;
    // Item name
    name;
    // Item description
    description;
    // Item price
    price;
    // Item category
    category;
    // Dietary Provisions relevant to the item
    dietaryProvisions;

    constructor(ID, name, description, price, category, dietaryProvisions){
        this.ID = ID;
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.dietaryProvisions = dietaryProvisions;
    }
}