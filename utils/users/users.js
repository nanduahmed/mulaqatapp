
var app = angular.module('rehbarUserCreator', []);
app.controller('users', function($scope, $http) {

	$scope.username = "";
	$scope.password = "";
	$scope.password2 = "";
	$scope.email = "";
	
	$scope.result = "";

	$scope.createUser = function() {
	
		$scope.result = "Wait.... Operation in progress";
		if ($scope.username.length < 4 && $scope.password.length < 4 ) {
				alert("Please enter atleast 4 digits for fields");
				return;
			}
			
			if ($scope.password != $scope.password2) {
				alert("Passwords do not match");
				return;
			}
			
		Parse.initialize("9wRXecWCzaavrNKO74jz1e0WCH78wS4kTadYsn3U", "5Jbr4LUv83VoOQJxzOrgV80PUwPMzlbtlkvClHk1");

		var user = new Parse.User();
		user.set("username", $scope.username);
		user.set("password", $scope.password);
		user.set("email", $scope.email);

		user.signUp(null, {
		success: function(user) {
			// Hooray! Let them use the app now.
			console.log("Success");
			$scope.result = JSON.stringify(user);
			alert(JSON.stringify(user));
		},
		error: function(user, error) {
			// Show the error message somewhere and let the user try again.
			$scope.result = "Error: " + error.code + " " + error.message;
			alert("Error: " + error.code + " " + error.message);
		}
		});
	}
});

