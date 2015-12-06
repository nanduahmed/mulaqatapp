
app
.controller('addBrotherCtrl', function($scope, $state, parseFactory) {
	const broname = "name";
	const add1 = "add1";
	const add2 = "add2";
	const city = "city";
	const state = "state";
	const country = "country";
	const phone = "phone";
	const comment = "comment";
	const threeday = "threeday";
	const fortyday = "fortyday";
	const foreign = "foreign";
	const fourmonts = "fourmonts";
	const masturat3day = "masturat3day";
	const masturat40day = "masturat40day";
	const active = "active";
	const date = "date";
	const student = "student";
    const userid = "userid";
            
    $scope.brother = {};

	$scope.goBack = function() {
		console.log("Go Back");
            clearForm();
		$state.go("tab.dash");
	}
            
    $scope.saveBrother2 = function() {
        var todaysDt = new Date();
        if(validateBrother($scope.brother)) {
        console.log($scope.brother);
        
        var name = $scope.brother.name;
        var brotherObj = {
            broname: $scope.brother.name,
            add1: $scope.brother.add1,
            add2: $scope.brother.add2,
            city: $scope.brother.city,
            state: $scope.brother.state,
            country: $scope.brother.country,
            phone: $scope.brother.phone,
            comment: $scope.brother.comment,
            threeday: $scope.brother.threeday,
            fortyday:$scope.brother.fortyday,
            fourmonts:$scope.brother.fourmonts,
            foreign:$scope.brother.foreign,
            masturat3day:$scope.brother.masturat3day,
            masturat40day: $scope.brother.masturat40day,
            student: $scope.brother.student,
            date: todaysDt
        }
        var objWithDefaultValues = assignDefaultValues(brotherObj);
        console.log(objWithDefaultValues);
        parseFactory.saveBrotherToParse(brotherObj)
        .then(function(bro){
              alert("Saved");
              }, function(err){
              alert("Cannot Save "+err.message);
              })
        
        } else {
            console.log("else "+brother);
            alert("Please fill Name");
        }
    
    }
    
    function clearForm() {
        $scope.brother.name = "";
        $scope.brother.phone = "";
        $scope.brother.add1 = "";
        $scope.brother.add2 = "";
        $scope.brother.comment = "";
    }

	function validateBrother(brother) {
		if (typeof(brother) == "undefined") {
			return false;
		}
		else {
			if (typeof(brother.name) == "undefined")
			return false;
			return true;
		}
	}

	function assignDefaultValues(obj) {
		for (var key in obj) {
			if (obj[key] == undefined) {
				//console.log("Key is "+key+" of obj "+obj[key]);
				if (key == threeday || key == fortyday || key == fourmonts || key == foreign || key == masturat40day || key == masturat3day || key == student) {
					obj[key] = false;
				} else {
					obj[key] = "-";
				}
			}
		}
		return obj;
	}
})