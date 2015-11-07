app

.controller('LoginCtrl', function($scope,  $ionicLoading, $state) {
	$scope.data = {};

	$scope.login = function() {
		console.log("LOGIN user: " + $scope.data.username + " - PW: " + $scope.data.password);

		initializeParse();
		$scope.show();

		loginUsingParse($scope.data.username,$scope.data.password)
		.then (function(user){
			$scope.showSpinner = false;
			$scope.hide();
			console.log(JSON.stringify($state.get()));
			$state.go('tab.chats');
		},function(error,user){
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
