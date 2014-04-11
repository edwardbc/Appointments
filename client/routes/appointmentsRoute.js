var AppointmentsController = RouteController.extend({
  layoutTemplate: 'basicLayout',
  yieldTemplates: {
    'header': { to: 'header' },
    'footer': { to: 'footer' }
  }
});


Router.map(function () {
    this.route('addAppointment', {
      path       : 'appointments/add',
      template   : 'addAppointment',
      controller : AppointmentsController,
      waitOn     : function(){ 
        return Meteor.subscribe('doctors', Meteor.userId());
      },
      data       : function(){
        return {
          doctors     : Doctors.find(),
          appointment : {}
        }
      }
    });
});

Router.map(function () {
    this.route('editAppointment', {
      path       : 'appointments/edit/:_id',
      template   : 'editAppointment',
      controller :  AppointmentsController,
      waitOn     : function(){
        return [
          Meteor.subscribe('appointment', this.params._id),
          Meteor.subscribe('doctors', Meteor.userId())
        ]
      },
      data       : function(){
        return {
          doctors     : Doctors.find(),
          appointment : Appointments.findOne()
        }
      }
    });
});

Router.map(function () {
    this.route('appointments', {
      path       : 'appointments',
      template   : 'appointments',
      controller :  AppointmentsController,
      waitOn     : function(){
        return [
          Meteor.subscribe('appointments', Meteor.userId())
        ]
      },
      data       : function(){
        return Appointments.find();
      }
    });
});

