app.controller('showPosts', ['$scope', function($scope){
	$scope.posts = [];
	$scope.clicked = false;
	$scope.like = 0

		$scope.update = function(isValid, post){

				console.log(post)

				var newUser = {
					title: post.title,
					author: post.author,
					imageUrl: post.imageUrl,
					description: post.description,
					votes: 0,
					date: $scope.postDate = new Date(),
				} 

				

				$scope.posts.push(newUser);
	}

	$scope.addComment = function(isValid,comment,post) {
		console.log(post)
		if(post.comments == undefined){
			post.comments = []
			post.comments.push(comment)
		} else {
			post.comments.push(comment)
		}
	}

	$scope.likes = function(post){
		post.votes += 1
	};

	$scope.dislikes = function(post){
		post.votes -= 1
	};


}]);

app.controller('HomeController', function($scope){
	$scope.name = "House Name";
	$scope.message = "Welcome";

});

app.controller('DogsController', function($scope){
	$scope.message = "Woof Woof!"

});