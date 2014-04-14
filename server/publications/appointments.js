Meteor.publish('appointments', function (userId) {
  check(userId, String);
  return Appointments.find({userId:userId}, { sort: { date: -1}  });
});

Meteor.publish('appointment', function (userId) {
  check(userId, String);
  return Appointments.find(userId);
});
