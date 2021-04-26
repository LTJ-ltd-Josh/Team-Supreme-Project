"use strict";

// get the main app
var mainApp = angular.module("mainApp", []);

// create the controller
mainApp.controller("menuController", function($scope, $http){

    // get request for menu data
    $http.get('/menu-data').then(function(response){

        $scope.items = response.data;
    });    

    $scope.addToBasket = function(id){
        console.log(id);
    };

    $scope.basket = [];
});