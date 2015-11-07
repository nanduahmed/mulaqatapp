function initializeParse() {
	Parse.initialize("9wRXecWCzaavrNKO74jz1e0WCH78wS4kTadYsn3U", "5Jbr4LUv83VoOQJxzOrgV80PUwPMzlbtlkvClHk1");
}

function loginUsingParse(username, password) {
	console.log("loginUsingParse");
	return new Promise(function(successful,errorful) {
		Parse.User.logIn(username, password, {
			success: function(user) {
				console.log("Login Success-->"+JSON.stringify(user));
				successful(user);
			},
			error: function(user, error) {
				console.log("Login Error-->"+JSON.stringify(error));
				errorful(user,error);
			}
		});
	})
}