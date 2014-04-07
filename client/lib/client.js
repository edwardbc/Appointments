
Client = {};


// Pattern influenced by
// https://github.com/DiscoverMeteor/Microscope/blob/master/client/helpers/errors.js
Client.Messages = {
  data  : new Meteor.Collection(null),
  add   : function(message, type){
    this.data.insert({message: message, seen: false, type: type});
  },
  showSuccess: function(message){
    this.add(message, 'success');
  },
  showInfo: function(message){
    this.add(message, 'info');
  },
  showWarning: function(message){
    this.add(message, 'warning');
  },
  showError: function(message){
    this.add(message, 'danger');
  },
  clear : function(){
    this.data.remove({seen: true});
  }
};