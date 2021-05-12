"use strict";

// Get the mainApp
var mainApp = angular.module("mainApp", []);

// Create the controller
mainApp.controller("itemsController", function($scope, $http) {

    $http.get('/MENUTABLES').then(function(response) {
      $scope.menutables = response.data;
    });
  



    $scope.deleteMenuTable = function(Item_id) {
      // Send delete message to /module/code
      $http.delete("/MENUTABLE/" + Item_id).then(function(response) {
        // When request completes, refresh list of modules
        $http.get("/MENUTABLES").then(function(response) {
          $scope.menutables = response.data;
        });
      });
    };
    
    $scope.new_menutable= new MenuTable("", "");

    // Sends a put message to the server
    $scope.createMenuTable = function() {
      // Send post message to /modules
      $http.post("/MENUTABLES", $scope.new_menutable).then(function(response) {
        // When request completes, reset new_module
        $scope.new_menutable = new MenuTable("", "");
        // Then refresh list of modules
        $http.get("/MENUTABLES").then(function(response) {
          $scope.menutables = response.data;
        });
      });
    };
  });