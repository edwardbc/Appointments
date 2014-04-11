Meteor.publish('doctors', function (userId) {
  check(userId, String);
  return Doctors.find({userId:userId});
});

Meteor.publish('doctor', function (userId) {
  check(userId, String);
  return Doctors.find(userId);
});
