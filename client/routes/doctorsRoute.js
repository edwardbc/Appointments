var DoctorsController = RouteController.extend({
  layoutTemplate: 'basicLayout',
  yieldTemplates: {
    'header': { to: 'header' },
    'footer': { to: 'footer' }
  }
});


Router.map(function () {
    this.route('addDoctor', {
      path       : 'doctors/add',
      template   : 'addDoctor',
      controller :  DoctorsController
    });
});

Router.map(function () {
    this.route('editDoctor', {
      path       : 'doctors/edit/:_id',
      template   : 'editDoctor',
      controller :  DoctorsController,
      waitOn     : function(){
        return Meteor.subscribe('doctor', this.params._id);
      },
      data       : function(){
        return Doctors.findOne();
      }
    });
});

Router.map(function () {
    this.route('doctors', {
      path       : 'doctors',
      template   : 'doctors',
      controller :  DoctorsController,
      waitOn     : function(){
        return Meteor.subscribe('doctors', Meteor.userId());
      },
      data       : function(){
        return Doctors.find();
      }
    });
});

