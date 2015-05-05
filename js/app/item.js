(function () {

  var app = angular.module('engine');

  app.controller("ItemController", function($scope, $stateParams, $http) {

    var request = app.api + "item/template/" + $stateParams.id;

    $http.get( request )
      .success(function(data, status, header, config) {
      if (data.length > 0) {
        $scope.template = data[0];
      } else {
        console.log("Error retrieving item template");
      }
    })
      .error(function(data, status, header, config) {
      console.log("Error in ITEM TEMPLATE $http.get request");
    });

    request = app.api + "vendor/item/" + $stateParams.id;

    $http.get( request )
      .success(function(data, status, header, config) {

      if (data.length > 0) {
        $scope.vendors = data;
      } else {
        // TODO
      }
    })
      .error(function(data, status, header, config) {
      console.log("Error in NPC VENDOR $http.get request");
    });

    request = app.api + "loot/creature/item/" + $stateParams.id;

    $http.get( request )
      .success(function(data, status, header, config) {

      if (data.length > 0) {
        $scope.npcLoots = data;
      } else {
        // TODO
      }
    })
      .error(function(data, status, header, config) {
      console.log("Error in CREATURE LOOT $http.get request");
    });

    request = app.api + "loot/skinning/item/" + $stateParams.id;

    $http.get( request )
      .success(function(data, status, header, config) {

      if (data.length > 0) {
        $scope.skinningLoots = data;
      } else {
        // TODO
      }
    })
      .error(function(data, status, header, config) {
      console.log("Error in SKINNING LOOT $http.get request");
    });

    request = app.api + "loot/gameobject/item/" + $stateParams.id;

    $http.get( request )
      .success(function(data, status, header, config) {

      if (data.length > 0) {
        $scope.gameobjectLoots = data;
      } else {
        // TODO
      }
    })
      .error(function(data, status, header, config) {
      console.log("Error in GAMEOBJECT LOOT $http.get request");
    });

  });

})()
