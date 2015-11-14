app
.factory('parseFactory', function($q) {
	var data = [];
	return {
		initParse : function() {
         console.log("initParse ABC");
			Parse.initialize("9wRXecWCzaavrNKO74jz1e0WCH78wS4kTadYsn3U", "5Jbr4LUv83VoOQJxzOrgV80PUwPMzlbtlkvClHk1");
         console.log("initParse XYZ");
		},
		
		login : function (username, password) {
			var deferred = $q.defer();
			Parse.User.logIn(username, password, {
				success: function(user) {
					console.log("Login Success-->"+JSON.stringify(user));
					deferred.resolve(user);
				},
				error: function(user, error) {
					console.log("Login Error-->"+JSON.stringify(error));
					deferred.reject(error);
				}
			});
			return deferred.promise;
		},
		
		saveBrotherToParse: function(object) {
         console.log(object);
			var deferred = $q.defer();
			var Brother = Parse.Object.extend("Brother");

			var bro  = new Brother()
			for (var key in object) {
				bro.set(key,object[key]);
			}

			bro.save(null, {
				success: function(brother) {
					deferred.resolve(brother);

					alert('New object created with objectId: ');
				},
				error: function(brother, error) {
					deferred.reject(brother,error);
					alert('Failed to create new object, with error code: ' + error.message);
				}
			});
         
         return deferred.promise;
		},
		
	};


	function createBrother(object) {

		var Brother = Parse.Object.extend("Brother");

		var bro  = new Brother()
		for (var key in object) {
			bro.set(key,object[key]);
		}

		bro.save(null, {
			success: function(gameScore) {
				// Execute any logic that should take place after the object is saved.
				alert('New object created with objectId: ' + gameScore.id);
			},
			error: function(gameScore, error) {
				// Execute any logic that should take place if the save fails.
				// error is a Parse.Error with an error code and message.
				alert('Failed to create new object, with error code: ' + error.message);
			}
		});
	};

});

//function initializeParse() {
	//	Parse.initialize("9wRXecWCzaavrNKO74jz1e0WCH78wS4kTadYsn3U", "5Jbr4LUv83VoOQJxzOrgV80PUwPMzlbtlkvClHk1");
	//}
	//
	//function loginUsingParse(username, password) {
		//	console.log("loginUsingParse");
		//	return new Promise(function(successful,errorful) {
			//		Parse.User.logIn(username, password, {
				//			success: function(user) {
					//				console.log("Login Success-->"+JSON.stringify(user));
					//				successful(user);
					//			},
					//			error: function(user, error) {
						//				console.log("Login Error-->"+JSON.stringify(error));
						//				errorful(user,error);
						//			}
						//		});
						//	})
						//}
						//
						//
						//function createBrother(object) {
							//    
							//    var Brother = Parse.Object.extend("Brother");
							//    
							//    var bro  = new Brother()
							//    for (var key in object) {
								//        bro.set(key,object[key]);
								//    }
								//    
								//    bro.save(null, {
									//                   success: function(gameScore) {
										//                   // Execute any logic that should take place after the object is saved.
										//                   alert('New object created with objectId: ' + gameScore.id);
										//                   },
										//                   error: function(gameScore, error) {
											//                   // Execute any logic that should take place if the save fails.
											//                   // error is a Parse.Error with an error code and message.
											//                   alert('Failed to create new object, with error code: ' + error.message);
											//                   }
											//                   });
											//}