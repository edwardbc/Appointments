var LoginController = RouteController.extend({
  layoutTemplate : 'slimLayout',
  template       : 'login'
});

Router.map(function () {
  this.route('login', {
    path       :  'login',
    controller :  LoginController
  });
});



var RegisterController = RouteController.extend({
  layoutTemplate : 'slimLayout',
  template       : 'register'
});

Router.map(function(){
  this.route('register', {
    path       : 'register',
    controller : RegisterController
  });
});