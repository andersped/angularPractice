// Projects, Bio, Resume

app.controller('projectsController', function($scope){
	$scope.project = 'Here is a list of projects';
});

app.controller('bioController', function($scope){
	$scope.bio = 'Here is my bio';
});

app.controller('resumeController', function($scope){
 $scope.resume = 'Here is my resume'
});

app.controller('additionController', function($scope, $routeParams){
	var x = parseInt($routeParams.x);
	var y = parseInt($routeParams.y);

	var url = $routeParams;
	console.log(url)
	

	$scope.answer = x + y;
});

app.controller('divisionController', function($scope, $routeParams){
	var x = parseInt($routeParams.x);
	var y = parseInt($routeParams.y);

	$scope.answer = x / y;
})