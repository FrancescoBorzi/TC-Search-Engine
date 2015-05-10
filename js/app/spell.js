(function () {

  var app = angular.module('engine');

  app.controller("SpellController", function($scope, $stateParams, $http, $sce) {

    if (!app.spellsApi) {
      console.log("Spells API is disabled");
      return;
    }

    /* get spell template */
    var request = app.spellsApi + $stateParams.id;

    $http.get( request )
    .success(function(data, status, header, config) {
      $scope.template = data.spell;
      $scope.template.html = $sce.trustAsHtml(data.html);
    })
    .error(function(data, status, header, config) {
      console.log("Error in SPELL $http.get request");
    });

  });

})();
