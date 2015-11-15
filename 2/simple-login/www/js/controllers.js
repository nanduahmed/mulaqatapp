var app = angular.module('starter.controllers', [])


.controller('DashCtrl', function($scope, $state, parseFactory) {

	$scope.items = [];


	$scope.addBroButton = function() {
		$state.go("addbrother");
	}

	$scope.$on('$ionicView.enter', function() {
		// Code you want executed every time view is opened
		$scope.refresh();
	})

	$scope.refresh = function() {
		parseFactory.getAllBrothers()
		.then(function(brothers){
			console.log("Brothers "+JSON.stringify(brothers));
			$scope.items= brothers;
		}, function(err){
			alert("Cannot Save "+err.message);
		})
	}

})

.controller('ChatsCtrl', function($scope, Chats) {
	// With the new view caching in Ionic, Controllers are only called
	// when they are recreated or on app start, instead of every page change.
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:
	//
	//$scope.$on('$ionicView.enter', function(e) {
		//});

		$scope.chats = Chats.all();
		$scope.remove = function(chat) {
			Chats.remove(chat);
		};
	})

	.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
		console.log("State Param "+JSON.stringify($stateParams));
		$scope.chat = Chats.get($stateParams.chatId);
	})

	.controller('AccountCtrl', function($scope) {
		$scope.settings = {
			enableFriends: true
		};
	});
