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
      path       : 'doctors/edit',
      template   : 'editDoctor',
      controller :  DoctorsController
    });
});

Router.map(function () {
    this.route('doctors', {
      path       : 'doctors',
      template   : 'doctors',
      controller :  DoctorsController
    });
});

