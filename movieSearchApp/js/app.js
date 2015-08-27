var app = angular.module("movieSearch", ['ui.bootstrap', 'ngRoute']);



app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'partials/search.html',
			controller: 'searchController'
		})
		.when('/', {
			templateUrl: 'partials/search.html',
			controller: 'searchController'
		})
		.when('/:imdbID/show', {
			templateUrl: 'partials/show.html',
			controller: 'showController'
		})
		// .otherwise({
		// 	redirectTo:'/'
		// });

});