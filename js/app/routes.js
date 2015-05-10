(function () {
  var app = angular.module('engine');

  // routing
  app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/home");

    $stateProvider
    .state('home', {
      url: '/home',
      controller: 'HomeController',
      templateUrl: 'partials/home.html'
    })
    .state('npc', {
      url: '/npc/:id',
      controller: 'NpcController',
      templateUrl: 'partials/npc.html'
    })
    .state('item', {
      url: '/item/:id',
      controller: 'ItemController',
      templateUrl: 'partials/item.html'
    })
    .state('quest', {
      url: '/quest/:id',
      controller: 'QuestController',
      templateUrl: 'partials/quest.html'
    })
    .state('spell', {
      url: '/spell/:id',
      controller: 'SpellController',
      templateUrl: 'partials/spell.html'
    });


  });

})();
