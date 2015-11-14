var app = angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $state) {
	$scope.items = [
	{ id: 0 },
	{ id: 1 },
	{ id: 2 },
	{ id: 3 },
	{ id: 4 },
	{ id: 5 },
	{ id: 6 },
	{ id: 7 },
	{ id: 8 },
	{ id: 9 },
	{ id: 10 },
	{ id: 11 },
	{ id: 12 }
	];

	$scope.test = function() {
		console.log("sdfwefe");
	}

	$scope.addBroButton = function() {
		$state.go("addbrother");
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
		$scope.chat = Chats.get($stateParams.chatId);
	})

	.controller('AccountCtrl', function($scope) {
		$scope.settings = {
			enableFriends: true
		};
	});
