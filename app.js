
var app = angular.module("firstApp", []);
app.controller("MyFirstController", function($scope){
	$scope.name = "Severus Snape";
})

app.controller("ExercisesController", function($scope){
	$scope.favColor = "Blue"
	$scope.secondsInACentury = 100 * 365 * 24 * 60 * 60
	$scope.rightNow = new Date()
})

app.controller("ngProperties", function($scope, $sce){
	$scope.names = ["Harry", "Ron", "Hermione", "Sirius", "Hedwig", "Tonks",];
	$scope.symbols = ["&spades;", "&clubs;", "&hearts;", "&diams;",];
	$scope.duplicates = [1,1,2,5,6,9,9,9];
	$scope.cameras =     [
        {
            title: "Nikon D3100 DSLR",
            image: "http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg",
            rating: 3.4,
            price: 369.99,
            onSale: true
        },
        {
            title: "Canon EOS 70D",
            image: "http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg",
            rating: 2.0,
            price: 1099.0,
            onSale: false
        },
        {
            title: "Nikon D810A",
            image:"http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg",
            rating: 4.2,
            price: 3796.95,
            onSale: true
        }
    ];
})

app.controller("eventHandlers", function($scope){
	$scope.number = 5;
	$scope.pickRandomNumber = function(){
		$scope.number = Math.floor(Math.random() * 10) + 1
	}
})

app.controller("reverseButton", function($scope){
	$scope.reverseWord = function(){
		$scope.wordEnter = $scope.wordEnter.split("").reverse().join("")
	}
})

app.controller("pingPongGame", function($scope){
	$scope.playerOneScore = 0
	$scope.playerTwoScore = 0
	var winningColor = "#33CC33";
	var losingColor = "#CC0000";
	var defaultColor = "#3399FF";
	var gameOver = false;
	$scope.servingCounter = 0;
	$scope.playerOneColor = defaultColor
	$scope.playerTwoColor = defaultColor
	
	$scope.addPoints = function(){
		$scope.playerOneScore += 1
	}

	$scope.playerOnePoint = function(){
		$scope.servingCounter += 1
		if ($scope.servingCounter >= 2) {
			console.log("working")
			$scope.servingCounter = 0;
		};
		if ($scope.playerOneScore != 11 && gameOver == false) {
			$scope.playerOneScore += 1;
		};
		if ($scope.playerOneScore == 11){
			  $scope.playerOneColor = winningColor;
			  $scope.playerTwoColor = losingColor;
			  gameOver = true
		} 
	}
				

	$scope.playerTwoPoint = function(){
		$scope.servingCounter += 1
		if ($scope.servingCounter >= 2) {
			$scope.servingCounter = 0;
		};
		if ($scope.playerTwoScore != 11 && gameOver == false) {
			$scope.playerTwoScore += 1;
		};
		if ($scope.playerTwoScore == 11){
			  $scope.playerTwoColor = winningColor;
			  $scope.playerOneColor = losingColor;
			  gameOver = true

		} 
	}

	$scope.resetScore = function(){
		$scope.playerOneScore = 0;
		$scope.playerTwoScore = 0;
		$scope.playerOneColor = defaultColor;
		$scope.playerTwoColor = defaultColor;
		$scope.servingCounter = 0;
		gameOver = false;
	}

})

app.controller('contactsApp', ['$scope', function($scope){
	$scope.master = [];

	$scope.update = function(user){

		var newUser = {
			name: user.name,
			email: user.email,
			phone: user.phone
		}
		$scope.master.push(newUser);
	}

}]);