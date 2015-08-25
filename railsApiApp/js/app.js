var app = angular.module("railsApi", ['ui.bootstrap', 'ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'partials/form.html',
			controller: 'formController'
		})
		.otherwise({
			redirectTo:'/'
		});

});