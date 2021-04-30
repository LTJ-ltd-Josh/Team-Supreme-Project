"use strict";

// get the main app
var mainApp = angular.module("mainApp", []);

// create the controller
mainApp.controller("ordersController", function($scope, $http){

    // get request for order data
    $http.get("/orderslist").then(function(response){

        // assign order data to scope.orders so it can be accessed in HTML page
        $scope.orders = response.data;
    }); 
});