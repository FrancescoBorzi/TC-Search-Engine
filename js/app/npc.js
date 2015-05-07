(function () {

  var app = angular.module('engine');

  app.controller("NpcController", function($scope, $stateParams, $http) {

    /* get creature template */
    var request = app.api + "creature/template/" + $stateParams.id;

    $http.get( request )
    .success(function(data, status, header, config) {
      $scope.template = data[0];
    })
    .error(function(data, status, header, config) {
      console.log("Error in CREATURE TEMPLATE $http.get request");
    });

    /* get creature spawns */
    request = app.api + "creature/spawn/id/" + $stateParams.id;

    $http.get( request )
      .success(function(data, status, header, config) {

      if (data.length > 0) {
        $scope.npcSpawnsCount = data.length;
        $scope.npcSpawns = data;
        angular.element(document.querySelector("#tab-npc-spawn")).removeClass("hidden");
      }
    })
      .error(function(data, status, header, config) {
      console.log("Error in CREATURE SPAWNS $http.get request");
    });

    /* get npc vendors */
    request = app.api + "vendor/creature/" + $stateParams.id;

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
    request = app.api + "loot/creature/" + $stateParams.id;

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
    request = app.api + "loot/skinning/" + $stateParams.id;

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

    /* get pickpocketing loot template */
    request = app.api + "loot/pickpocketing/" + $stateParams.id;

    $http.get( request )
      .success(function(data, status, header, config) {

      if (data.length > 0) {
        $scope.pickpocketingLootsCount = data.length;
        $scope.pickpocketingLoots = data;
        angular.element(document.querySelector("#tab-pickpocketing-loot")).removeClass("hidden");
      }
    })
      .error(function(data, status, header, config) {
      console.log("Error in PICKPOCKETING LOOT $http.get request");
    });

    /* get creature queststarter */
    request = app.api + "creature/queststarter/id/" + $stateParams.id;

    $http.get( request )
    .success(function(data, status, header, config) {
      if (data.length > 0) {
        $scope.npcQueststartersCount = data.length;
        $scope.npcQueststarters = data;
        angular.element(document.querySelector("#tab-npc-queststarters")).removeClass("hidden");
      }
    })
    .error(function(data, status, header, config) {
      console.log("Error in CREATURE QUESTSTARTER $http.get request");
    });

    /* get creature questenders */
    request = app.api + "creature/questender/id/" + $stateParams.id;

    $http.get( request )
    .success(function(data, status, header, config) {
      if (data.length > 0) {
        $scope.npcQuestendersCount = data.length;
        $scope.npcQuestenders = data;
        angular.element(document.querySelector("#tab-npc-questenders")).removeClass("hidden");
      }
    })
    .error(function(data, status, header, config) {
      console.log("Error in CREATURE QUESTENDER $http.get request");
    });

  });

})()
