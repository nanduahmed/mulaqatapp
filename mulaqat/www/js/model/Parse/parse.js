

function initialzeParse() {
	Parse.initialize("9wRXecWCzaavrNKO74jz1e0WCH78wS4kTadYsn3U", "5Jbr4LUv83VoOQJxzOrgV80PUwPMzlbtlkvClHk1");

	/* This was for test
	var TestObject = Parse.Object.extend("TestObject");
	var testObject = new TestObject();
	testObject.save({name: "nandu"}).then(function(object) {
	alert("yay! it worked");
	});

var user = new Parse.User();
user.set("username", "nandu");
user.set("password", "pass");
user.set("email", "nandu.ahmed@gmail.com");

// other fields can be set just like with Parse.Object
user.set("phone", "9253258924");

user.signUp(null, {
success: function(user) {
// Hooray! Let them use the app now.
alert("Sign up success"+JSON.stringify(user));
},
error: function(user, error) {
// Show the error message somewhere and let the user try again.
alert("Error: " + error.code + " " + error.message);
}
});

Parse.User.logIn("nandu", "pass", {
success: function(user) {
// Do stuff after successful login.
alert ("Login Success "+JSON.stringify(user));
},
error: function(user, error) {
// The login failed. Check error to see why.
alert ("Login Error "+JSON.stringify(user)+" ---------"+JSON.stringify(error));
}
});*/
}

function loginUsingParse(username, password) {
	return new Promise(function(successful,errorful) {
		Parse.User.logIn(username, password, {
			success: function(user) {
				successful(user);
			},
			error: function(user, error) {
				errorful(user,error);
			}
		});
	})
}