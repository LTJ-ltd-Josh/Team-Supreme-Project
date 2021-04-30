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

    $scope.price = 0;

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