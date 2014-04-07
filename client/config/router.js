// Check if user is logged for internal pages
Router.onBeforeAction(function() {
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
Router.onBeforeAction(function() {
  if (Meteor.user()){
    Router.go('/');
    this.stop();
  }
}, {only: ['login', 'register']});

// Clear existing messages on navigating
Router.onBeforeAction(function() {
  Client.Messages.clear();
});

Router.configure({
  notFoundTemplate: 'notFound'
});