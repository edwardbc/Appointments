Meteor.publish('doctors', function (userId, options) {
  check(userId, String);
  var queryOptions = _.extend({
    sort: { name:1 }
  }, options);
  return Doctors.find({userId:userId}, queryOptions );
});

Meteor.publish('doctor', function (userId) {
  check(userId, String);
  return Doctors.find(userId);
});
