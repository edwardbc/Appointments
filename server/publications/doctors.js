Meteor.publish('doctors', function () {
    return Doctors.find();
});

