var HomeController = RouteController.extend({
  layoutTemplate: 'basicLayout',
  template: 'home',
  yieldTemplates: {
    'header': { to: 'header' },
    'footer': { to: 'footer' }
  }
});

Router.map(function () {
    this.route('home', {
      path :  '/',
      controller :  HomeController,
      waitOn     : function(){
        return [
          Meteor.subscribe('appointments', Meteor.userId()),
          Meteor.subscribe('doctors', Meteor.userId())
        ]
      },
      data       : function(){
        return {
          doctors     : Doctors.find(),
          appointments : Appointments.find()
        }
      },
      action : function(){
        if (this.ready()){
          this.render()
        }
      }
    });
});
