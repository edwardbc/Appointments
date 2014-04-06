Template.errors.helpers({
  errors: function() {
    return Client.Messages.data.find();
  }
});

Template.error.rendered = function() {
  var error = this.data;
  Meteor.defer(function() {
    Client.Messages.data.update(error._id, {$set: {seen: true}});
  });
};