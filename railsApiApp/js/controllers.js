app.controller('formController', function($scope, $http){

	$http.get('https://shielded-peak-6345.herokuapp.com/').then(function(message){
		$scope.result = message.data
	})


	$scope.posts = [];

	$scope.update = function(post){

		

		var message = {
			name: post.name,
			content: post.content
		}

		$http.post('https://shielded-peak-6345.herokuapp.com/messages', message).then(function(data){

		});
		
		$scope.posts.push(message);



	}

	// $http.post('https://shielded-peak-6345.herokuapp.com/', newUser).then(function(data){

	// });

});