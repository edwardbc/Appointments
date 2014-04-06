var LoginController = RouteController.extend({
  layoutTemplate: 'slimLayout',
  template: 'login'
});

Router.map(function () {
    this.route('login', {
        path :  'login',
        controller :  LoginController
    });
});

