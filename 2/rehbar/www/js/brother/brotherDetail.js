
app
.controller('brotherDetailCtrl', function($scope, $state, parseFactory, $stateParams) {

	$scope.broToShow = {};

	$scope.$on('$ionicView.enter', function() {
		// Code you want executed every time view is opened
		console.log('Opened!');
		var i = parseFactory.getBrotherDetail($stateParams.brotherId);
		console.log(JSON.stringify(i));
		$scope.brother = i;
        $scope.broToShow.name = i.get("broname");
		$scope.broToShow.phone = i.get("phone");
		$scope.broToShow.threeday = i.get("threeday");
		$scope.broToShow.fortyday = i.get("fortyday");
		$scope.broToShow.fourmonts = i.get("fourmonts");
		$scope.broToShow.foreign = i.get("foreign");
		$scope.broToShow.masturat3day = i.get("masturat3day");
		$scope.broToShow.masturat40day = i.get("masturat40day");
		$scope.broToShow.student = i.get("student");
	})

		$scope.editBrother = function() {
			$state.go("tab.brother-edit",{"brotherId":$stateParams.brotherId},null);
		}


})