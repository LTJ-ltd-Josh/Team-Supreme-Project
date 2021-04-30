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

    $scope.completeOrder = function(orderNumber){

        // add order number to json object for posting
        var body = {order: orderNumber}
        // POST request to server to update order to complete
        $http.post("/ordercomplete", body).then(function(response){

            // get request to referesh the list of orders.
            $http.get("/orderslist").then(function(response){

                // set new set of orders as the scope.orders for display in html.
                $scope.orders = response.data;
            });
        });
    };
});