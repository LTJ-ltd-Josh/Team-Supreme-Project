"use strict";

// get the main app
var mainApp = angular.module("mainApp", []);

// create the controller
mainApp.controller("menuController", function($scope, $http){

    // get request for menu data
    $http.get('/menu-data').then(function(response){

        $scope.items = response.data;
    });    

    $scope.addToBasket = function(id, name){
        
        console.log(id);
        // boolean value to record if the item being added is already in basket
        var inBasketBoolean = 0;
        console.log(inBasketBoolean);

        // for loop to check if an item of same ID is already in basket
        for (var item of $scope.basket){
            if(item.ID == id){
                item.Quantity = item.Quantity + 1

                // update in basket boolean vlue to true
                inBasketBoolean = 1;
            };
        };
        console.log(inBasketBoolean);
        // If statement to verify if item was already in basket
        if (inBasketBoolean == 0){
            console.log(name);
            $scope.basket.push({ID: id, Name: name, Quantity: 1});
        };

        
    };

    $scope.basket = [];
});