"use strict";
class MenuTable {

  // class properties
  
  // Item ID
  ID;
  // Item name
  name;
  // Item description
  description;      

  category_id;

  price; 
 
  constructor(ID, name, description, category_id, price){
      this.ID = ID;
      this.name = name;
      this.description = description;
      this.category_id = category_id;
      this.price = price;
      
  }
};
