var app = angular.module("redditClone", ['ui.bootstrap', 'ngAnimate', 'ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      .when('/dogs', {
        templateUrl: 'partials/dogs.html',
        controller: 'DogsController'
      })
      .otherwise({ 
        redirectTo:'/'
        // Possibley need it to direct to /#/
      });

      // HTML5 History API
      $locationProvider.html5Mode(true)
});



