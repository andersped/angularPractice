app.controller('searchController', function($scope, $http, $routeParams){
	
	$scope.update = function(search){
		var searchTitle = search.title;
		var title = encodeURI(searchTitle) 
		console.log(title);
	
		$http.get("http://www.omdbapi.com/?s="+title+"&r=json").then(function(result){
			$scope.results = result.data.Search;
			var number = $scope.results[0].imdbID;
			var realNumber = parseInt(number);
			// console.log(number);
		})

	}

	

})

app.controller('showController', function($scope, $http, $routeParams){
	var route = $routeParams.imdbID;
	console.log(route)

	
	$http.get("http://www.omdbapi.com/?i="+route+"&r=json").then(function(result){
		$scope.results = result.data
	})


})
