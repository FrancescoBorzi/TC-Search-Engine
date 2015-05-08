(function () {
  var app = angular.module('engine', ['ui.router', 'ui.bootstrap', 'chieffancypants.loadingBar']);

  app.controller("HomeController", function($scope, $http) {

    var request = app.api + "version";

    $http.get( request )
      .success(function(data, status, header, config) {

      if (data.length > 0)
        $scope.version = data[0];
      else
        console.log("Error while retrieving database version.");
    })
      .error(function(data, status, header, config) {
      console.log("Error in VERSION $http.get request");
    });

    $scope.showItems = true;
    $scope.showNPCs = true;
    $scope.showQuests = true;

    var itemPanel = angular.element(document.querySelector("#item-panel"));
    var npcPanel = angular.element(document.querySelector("#npc-panel"));
    var questPanel = angular.element(document.querySelector("#quest-panel"));

    var noItemsFound = angular.element(document.querySelector("#no-items-found"));
    var noNPCsFound = angular.element(document.querySelector("#no-npcs-found"));
    var noQuestsFound = angular.element(document.querySelector("#no-quests-found"));

    $scope.search = function(searchstr) {

      if (typeof searchstr === 'undefined' || searchstr.length < 4) {
        alert("Please insert a string of at least 4 characters.");
        return;
      }

      itemPanel.addClass("hidden");
      npcPanel.addClass("hidden");
      questPanel.addClass("hidden");

      noItemsFound.addClass("hidden");
      noNPCsFound.addClass("hidden");
      noQuestsFound.addClass("hidden");

      /* looking for items... */
      request = app.api + "item/template/" + searchstr;

      $http.get( request )
        .success(function(data, status, header, config) {

        $scope.items = data;
        if ($scope.items.length > 0) { // we found items
          itemPanel.removeClass("hidden");
        } else {  // we didn't find any items
          noItemsFound.removeClass("hidden");
        }

      })
        .error(function(data, status, header, config) {
        console.log("Error in ITEM $http.get");
      });

      /* looking for NPCs... */
      var request = app.api + "creature/template/" + searchstr;

      $http.get( request )
        .success(function(data, status, header, config) {

        $scope.npcs = data;
        if ($scope.npcs.length > 0) { // we found npcs
          npcPanel.removeClass("hidden");
        } else {  // we didn't find any npcs
          noNPCsFound.removeClass("hidden");
        }

      })
        .error(function(data, status, header, config) {
        console.log("Error in NPC $http.get");
      });

      /* looking for Quests... */
      var request = app.api + "quest/template/" + searchstr;

      $http.get( request )
        .success(function(data, status, header, config) {

        $scope.quests = data;
        if ($scope.quests.length > 0) { // we found quests
          questPanel.removeClass("hidden");
        } else {  // we didn't find any quests
          noQuestsFound.removeClass("hidden");
        }

      })
        .error(function(data, status, header, config) {
        console.log("Error in QUEST $http.get");
      });

    };

  });

})()
