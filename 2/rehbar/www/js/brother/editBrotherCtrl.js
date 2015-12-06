app
.controller('editBrotherCtrl', function($scope, $state, parseFactory, $stateParams) {

	$scope.broToShow = {};
	$scope.brother = {};

	$scope.$on('$ionicView.enter', function() {
		console.log(' Brother to Edit '+/*JSON.stringify($stateParams) */$stateParams.brotherId);
		var i = parseFactory.getBrotherDetail($stateParams.brotherId);
		console.log("Bro Obj to Edit from parse "+JSON.stringify(i));
		$scope.brother = i;
		$scope.brother.name = i.get("broname");
		$scope.brother.phone = i.get("phone");
		$scope.brother.add1 = i.get("add1");
		$scope.brother.add2 = i.get("add2");
		$scope.brother.city = i.get("city");
		$scope.brother.state = i.get("state");
		$scope.brother.zip = i.get("zip");
		$scope.brother.comment = i.get("comment");
		$scope.brother.threeday = i.get("threeday");
		$scope.brother.fortyday = i.get("fortyday");
		$scope.brother.fourmonts = i.get("fourmonts");
		$scope.brother.foreign = i.get("foreign");
		$scope.brother.masturat3day = i.get("masturat3day");
		$scope.brother.masturat40day = i.get("masturat40day");
		$scope.brother.student = i.get("student");
	})

	$scope.updateBrother = function() {
		setValues();
		parseFactory.updateBrotherToParse($scope.brother).then(function(obj) {
			alert("Saved");
		}, function(err, obj) {
			alert("Save error "+JSON.stringify(obj));
		});
	}

	function setValues() {
		var i = $scope.brother;
		i.set("broname",$scope.brother.name);
		i.set("phone",$scope.brother.phone);
		i.set("add1",$scope.brother.add1);
		i.set("add2",$scope.brother.add2);
		i.set("city",$scope.brother.city);
		i.set("state",$scope.brother.state);
		i.set("zip",$scope.brother.zip);
		i.set("comment",$scope.brother.comment);
		i.set("threeday",$scope.brother.threeday);
		i.set("fortyday",$scope.brother.fortyday);
		i.set("fourmonts",$scope.brother.fourmonts);
		i.set("foreign",$scope.brother.foreign);
		i.set("masturat3day",$scope.brother.masturat3day);
		i.set("masturat40day",$scope.brother.masturat40day);
		i.set("student",$scope.brother.student);

	}
})