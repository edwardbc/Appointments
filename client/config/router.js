// Check if user is logged for internal pages
Router.before(function() {
  if (!Meteor.user()){
    if (Meteor.loggingIn()){
      this.render(this.loadingTemplate);
    } else {
      Router.go('/login');
    }
    this.stop();
  }
}, {except: ['login', 'register']});

// Check if user is already logged when reaching login/register
Router.before(function() {
  if (Meteor.user()){
    Router.go('/');
    this.stop();
  }
}, {only: ['login', 'register']});

// Clear existing messages on navigating
Router.before(function() {
  Client.Messages.clear();
});

Router.configure({
  notFoundTemplate: 'notFound'
});