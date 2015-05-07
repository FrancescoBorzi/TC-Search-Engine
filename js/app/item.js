(function () {

  var app = angular.module('engine');

  app.controller("ItemController", function($scope, $stateParams, $http) {

    /* get item template */
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

    /* get npc vendors */
    request = app.api + "vendor/item/" + $stateParams.id;

    $http.get( request )
      .success(function(data, status, header, config) {

      if (data.length > 0) {
        $scope.vendorsCount = data.length;
        $scope.vendors = data;
        angular.element(document.querySelector("#tab-npc-vendor")).removeClass("hidden");
      }
    })
      .error(function(data, status, header, config) {
      console.log("Error in NPC VENDOR $http.get request");
    });

    /* get creature loot template */
    request = app.api + "loot/creature/item/" + $stateParams.id;

    $http.get( request )
      .success(function(data, status, header, config) {

      if (data.length > 0) {
        $scope.npcLootsCount = data.length;
        $scope.npcLoots = data;
        angular.element(document.querySelector("#tab-npc-loot")).removeClass("hidden");
      }
    })
      .error(function(data, status, header, config) {
      console.log("Error in CREATURE LOOT $http.get request");
    });

    /* get skinning loot template */
    request = app.api + "loot/skinning/item/" + $stateParams.id;

    $http.get( request )
      .success(function(data, status, header, config) {

      if (data.length > 0) {
        $scope.skinningLootsCount = data.length;
        $scope.skinningLoots = data;
        angular.element(document.querySelector("#tab-skinning-loot")).removeClass("hidden");
      }
    })
      .error(function(data, status, header, config) {
      console.log("Error in SKINNING LOOT $http.get request");
    });

    /* get gameobject loot template */
    request = app.api + "loot/gameobject/item/" + $stateParams.id;

    $http.get( request )
      .success(function(data, status, header, config) {

      if (data.length > 0) {
        $scope.gameobjectLootsCount = data.length;
        $scope.gameobjectLoots = data;
        angular.element(document.querySelector("#tab-gameobject-loot")).removeClass("hidden");
      }
    })
      .error(function(data, status, header, config) {
      console.log("Error in GAMEOBJECT LOOT $http.get request");
    });

  });

})()
