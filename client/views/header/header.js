Template.header.events({
  'click li a' : function(e){
    e.preventDefault();
    var action = $(e.currentTarget).attr('data-action');
    switch(action){
      case 'profile': 
        break;
      case 'logout' : 
        Meteor.logout();
        break;
    }
  }
});