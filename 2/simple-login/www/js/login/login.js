app

.controller('LoginCtrl', function($scope,  $ionicLoading, $state, parseFactory) {
	$scope.data = {};

	$scope.login = function() {
		console.log("LOGIN user: " + $scope.data.username + " - PW: " + $scope.data.password);
		parseFactory.initParse();
		$scope.show();

		parseFactory.login($scope.data.username,$scope.data.password)
		.then (function(user){
			$scope.showSpinner = false;
			$scope.hide();
			$state.go('tab.chats');
		},function(error){
			console.log("User and Error "+JSON.stringify(error));
			alert("Error "+error.message);
			$scope.hide();
		});
	}

	$scope.show = function() {
		$ionicLoading.show({
			template: '<ion-spinner></ion-spinner>',
		});
	}

	$scope.hide = function(){
		$ionicLoading.hide();
	}
});
