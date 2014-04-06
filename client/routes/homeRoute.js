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
        controller :  HomeController
    });
});
