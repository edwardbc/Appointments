Meteor.publish('doctors', function (userId) {
  return Doctors.find({userId:userId});
});

