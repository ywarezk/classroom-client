ClassroomClient.Router = Ember.Router.extend({
  root: Ember.Route.extend({
    index: Ember.Route.extend({
      route: '/'
	  /*connectOutlets: function(router){
		    router.get('ApplicationController').connectOutlet('Login', {});
		  }*/
    })
  })
});


//define the links pages etc
ClassroomClient.Router.map(function() {
    this.route("login");
    this.route("about");
    this.route("contact");
});

//init the controllers for the about
ClassroomClient.IndexRoute = Ember.Route.extend({
    setupController: function(controller){
        this.controllerFor('application').set('isHome', true);
        this.controllerFor('application').set('isAbout', false);
        this.controllerFor('application').set('isContact', false);
    }
});

//init the controllers for the about
ClassroomClient.AboutRoute = Ember.Route.extend({
    setupController: function(controller){
        this.controllerFor('application').set('isHome', false);
        this.controllerFor('application').set('isAbout', true);
        this.controllerFor('application').set('isContact', false);
    }
});

//init the controllers for the contact
ClassroomClient.ContactRoute = Ember.Route.extend({
    setupController: function(controller){
        this.controllerFor('application').set('isHome', false);
        this.controllerFor('application').set('isAbout', false);
        this.controllerFor('application').set('isContact', true);
    }
});
