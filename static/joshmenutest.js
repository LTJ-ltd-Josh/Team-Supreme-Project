"use strict";

// get the main app
var mainApp = angular.module("mainApp", []);

// create the controller
mainApp.controller("menuController", function($scope, $http){

    // get request for menu data
    $http.get('/menu-data').then(function(response){

        // assigne menu data to $scope.items so it can be accessed in HTML page
        $scope.items = response.data;
    });    

    // Function for adding an item to the basket when user presses 'add to basket' button
    $scope.addToBasket = function(id, name, price){
        
        
        // variable to record if the item being added is already in basket
        var inBasket = 0;
        

        // for loop to check if an item of same ID is already in basket
        for (var item of $scope.basket){
            
            // If statement to check if id is already in basket
            if(item.ID == id){
                // Increment quantity of item ordered
                // need to work out how to calculate this to 2 DP.
                item.Quantity = item.Quantity + 1

                // Update price for items ordered
                item.Price = item.Price + price

                // update in basket value to 1
                inBasket = 1;
            };
        };
        
        // If statement to verify if item was already in basket
        if (inBasket == 0){
            
            // add selected item to basket if it was not already in basket
            $scope.basket.push({ID: id, Name: name, Quantity: 1, Price: price});
        };

        //statement to update total price
        $scope.price = $scope.price + price;
        
    };
    // Array to hold values of items in basket
    $scope.basket = [];

    // variable to hold price of items in basket
    $scope.price = 0;

    // function to remove items from basket
    $scope.removeItem = function(id, price){

        // A counter to enable using splice method to remove item from basket array
        // Reference: I followed this post to learn how to remove an item from an array:
        // https://love2dev.com/blog/javascript-remove-from-array/
        var spliceCounter = 0;

        // for loop to find the item in the basket that matches the id of the item
        for (var item of $scope.basket){

            // if statement to see the ID matches that passed into the formular
            if (item.ID == id){

                // check to see if there is more than on in the basket
                if(item.Quantity > 1){
                    
                    // reduce total price for that item by the value of 1 item
                    item.Price = item.Price - price/item.Quantity;

                    // reduce quantity by 1
                    item.Quantity = item.Quantity - 1;

                    
                }
                else {
                    $scope.basket.splice(spliceCounter, 1);
                };
            }

            // update total price
            // reset price to 0
            $scope.price = 0

            // for loop to recalculate price
            for (var item of $scope.basket){
                $scope.price = $scope.price + item.Price;

            };
            // iterate spliceCounter
            spliceCounter = spliceCounter + 1;

        };

    };

    // function to submit order when user presses 'submit order'
    $scope.submitOrder = function(){

        // POST request to server with data that is in basket variable
        $http.post("/orderSubmitted", $scope.basket).then(function(response){

            // log response from server
            console.log(response.data);

            // hide basket data
            document.getElementById("basket").style.visibility = "hidden";
            document.getElementById("submissionConfirmation").style.visibility = "visible";
        });
    };
});