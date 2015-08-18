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
      });

      $locationProvider.html5Mode(true);
});



