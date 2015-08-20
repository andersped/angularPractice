var app = angular.module("portfolioApp", ['ui.bootstrap', 'ngRoute']);

// Projects, Bio, Resume

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'partials/projects.html',
			controller: 'projectsController'
		})
		.when('/bio', {
			templateUrl: 'partials/bio.html',
			controller: 'bioController'
		})
		.when('/resume', {
			templateUrl: 'partials/resume.html',
			controller: 'resumeController'
		})
		.when('/add/:x/:y', {
			templateUrl: 'partials/addition.html',
			controller: 'additionController'
		})
		.when('/add', {
			templateUrl: 'partials/addition.html',
			controller: 'additionController'
		})
		.when('/division/:x/:y', {
			templateUrl: 'partials/division.html',
			controller: 'divisionController'
		})
		.when('/division', {
			templateUrl: 'partials/division.html',
			controller: 'divisionController'
		})
		.otherwise({
			redirectTo: '/'
		});

});