Meteor.publish('doctors', function (userId) {
  return Doctors.find({userId:userId});
});

Meteor.publish('doctor', function (userId) {
  return Doctors.find(userId);
});
