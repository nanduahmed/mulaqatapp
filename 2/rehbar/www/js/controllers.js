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
            $scope.items = brothers;
              for (var i = 0 ; i < brothers.length ; i++ ) {
                var b = brothers[i];
              var p = b.get("phone");
              $scope.items[i].phonen = p;
              $scope.items[i].addr = b.get("add1")+","+b.get("add2")+","+b.get("city")+","+b.get("state");
              $scope.update = b.get("updatedAt");
              }

		}, function(err){
			alert("Cannot Save "+err.message);
		})

	$scope.navigate = function(add) {
		var defaults = {};
		platform = device.platform.toLowerCase();
		alert("To "+ add+" On Plat "+platform);
		if(platform === "ios") {
			launchnavigator.isGoogleMapsAvailable(function(available){
				defaults.preferGoogleMaps = true;
			});
		}

		launchnavigator.navigate(
			add,null,
			function(){
				alert("Plugin success");
			},
			function(error){
				alert("Plugin error: "+ error);
				}, defaults);
			}
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
