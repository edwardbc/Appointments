Meteor.publish('appointments', function (userId) {
  check(userId, String);
  return Appointments.find({userId:userId});
});

Meteor.publish('appointment', function (userId) {
  check(userId, String);
  return Appointments.find(userId);
});
