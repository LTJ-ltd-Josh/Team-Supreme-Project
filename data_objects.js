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
};

exports.OrderItem = class {
    // name of the item
    name;
    // quantity of the item ordered
    quantity;
    // price of the item
    price;

    constructor(name, quantity, price){
        
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    };
};

exports.Order = class {
    // the number of the order
    orderNumber;
    // the table number that made the order
    tableNumber;
    // the first name of the staff member associated to the order
    staffFirstName;
    // the surname of the staff member associated to the order
    staffSurname;
    // a list of the items associated with the order
    orderItems;

    constructor(orderNumber, tableNumber, staffFirstName, staffSurname, orderItems){
        this.orderNumber = orderNumber;
        this.tableNumber = tableNumber;
        this.staffFirstName = staffFirstName;
        this.staffSurname = staffSurname;
        this.orderItems = orderItems
    }



};