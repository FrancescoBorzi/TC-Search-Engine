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

    /* get reference loot template */
    request = app.api + "loot/reference/item/" + $stateParams.id;

    $http.get( request )
      .success(function(data, status, header, config) {

      if (data.length > 0) {
        $scope.referenceLootsCount = data.length;
        $scope.referenceLoots = data;
        angular.element(document.querySelector("#tab-reference-loot")).removeClass("hidden");
      }
    })
      .error(function(data, status, header, config) {
      console.log("Error in REFERENCE LOOT $http.get request");
    });

    /* get item loot template */
    request = app.api + "loot/item/item/" + $stateParams.id;

    $http.get( request )
      .success(function(data, status, header, config) {

      if (data.length > 0) {
        $scope.itemLootsCount = data.length;
        $scope.itemLoots = data;
        angular.element(document.querySelector("#tab-item-loot")).removeClass("hidden");
      }
    })
      .error(function(data, status, header, config) {
      console.log("Error in ITEM LOOT $http.get request");
    });

    /* get fishing loot template */
    request = app.api + "loot/fishing/item/" + $stateParams.id;

    $http.get( request )
      .success(function(data, status, header, config) {

      if (data.length > 0) {
        $scope.fishingLootsCount = data.length;
        $scope.fishingLoots = data;
        angular.element(document.querySelector("#tab-fishing-loot")).removeClass("hidden");
      }
    })
      .error(function(data, status, header, config) {
      console.log("Error in FISHING LOOT $http.get request");
    });
    /* get disenchant loot template */
    request = app.api + "loot/disenchant/item/" + $stateParams.id;

    $http.get( request )
      .success(function(data, status, header, config) {

      if (data.length > 0) {
        $scope.disenchantLootsCount = data.length;
        $scope.disenchantLoots = data;
        angular.element(document.querySelector("#tab-disenchant-loot")).removeClass("hidden");
      }
    })
      .error(function(data, status, header, config) {
      console.log("Error in DISENCHANT LOOT $http.get request");
    });

    /* get prospecting loot template */
    request = app.api + "loot/prospecting/item/" + $stateParams.id;

    $http.get( request )
      .success(function(data, status, header, config) {

      if (data.length > 0) {
        $scope.prospectingLootsCount = data.length;
        $scope.prospectingLoots = data;
        angular.element(document.querySelector("#tab-prospecting-loot")).removeClass("hidden");
      }
    })
      .error(function(data, status, header, config) {
      console.log("Error in PROSPECTING LOOT $http.get request");
    });

    /* get milling loot template */
    request = app.api + "loot/milling/item/" + $stateParams.id;

    $http.get( request )
      .success(function(data, status, header, config) {

      if (data.length > 0) {
        $scope.millingLootsCount = data.length;
        $scope.millingLoots = data;
        angular.element(document.querySelector("#tab-milling-loot")).removeClass("hidden");
      }
    })
      .error(function(data, status, header, config) {
      console.log("Error in MILLING LOOT $http.get request");
    });

    /* get pickpocketing loot template */
    request = app.api + "loot/pickpocketing/item/" + $stateParams.id;

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

    /* get spell loot template */
    request = app.api + "loot/spell/item/" + $stateParams.id;

    $http.get( request )
      .success(function(data, status, header, config) {

      if (data.length > 0) {
        $scope.spellLootsCount = data.length;
        $scope.spellLoots = data;
        angular.element(document.querySelector("#tab-spell-loot")).removeClass("hidden");
      }
    })
      .error(function(data, status, header, config) {
      console.log("Error in SPELL LOOT $http.get request");
    });

  });

})()
