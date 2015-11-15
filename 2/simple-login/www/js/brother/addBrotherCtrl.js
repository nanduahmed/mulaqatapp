
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

	$scope.goBack = function() {
		console.log("Go Back");
		$state.go("tab.dash");
	}
           
	$scope.saveBrother = function(brother) {
		var todaysDt = new Date();
		if(validateBrother(brother)) {
			console.log(brother);
			var name = brother.name;
			var brotherObj = {
				broname: brother.name,
				add1: brother.add1,
				add2: brother.add2,
				city: brother.city,
				state: brother.state,
				country: brother.country,
				phone: brother.phone,
				comment: brother.comment,
				threeday: brother.threeday,
				fortyday:brother.fortyday,
				fourmonts:brother.fourmonts,
				foreign:brother.foreign,
				masturat3day:brother.masturat3day,
				masturat40day: brother.masturat40day,
				student: brother.student,
				date: todaysDt
			}
			var objWithDefaultValues = assignDefaultValues(brotherObj);
			console.log(objWithDefaultValues);
			parseFactory.saveBrotherToParse(brotherObj)
			.then(function(bro){
				alert("Saved Information");
			}, function(err){
				alert("Cannot Save "+err.message);
			})

		} else {
			console.log("else "+brother);
			alert("Please fill Name");
		}

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