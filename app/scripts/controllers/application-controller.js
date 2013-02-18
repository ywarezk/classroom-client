//define the application controller
ClassroomClient.ApplicationController = Ember.ObjectController.extend({
    currentPath: '/',
    isHome: true,
    isAbout: false,
    isContact: false,
    serverUrl: 'http://heech-server-dev.herokuapp.com/pages/',
    fblogin: function(){
	  FB.login(function(response) {
	        if (response.authResponse) {
	            // connected
	        } else {
	            // cancelled
	        }
	    });
    }
});



