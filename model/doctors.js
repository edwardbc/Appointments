Doctors = new Meteor.Collection('doctors');

var ownsDocument = function(id, doc){
  return (doc.userId !== Meteor.userId());
};

// Check for ownership of doctor document
Doctors.deny({
  insert: ownsDocument,
  update: ownsDocument,
  remove: ownsDocument
});

// Don't allow updating ownership
Doctors.deny({
  update: function(id, doc, fields, newDoc){
    return (doc.userId!==newDoc['$set'].userId);
  }
});


// Check if all fields are present and there
// are no extra fields added to the model
Doctors.allow({
  insert : function (id, doc, fields) {   
    return DoctorSchema.namedContext("add").validate(doc);
  },
  update : function (id, doc, fields, newDoc) {
    return DoctorSchema.namedContext("add").validate(newDoc['$set']);
  },
  remove : function () {
    return true;
  }
});

Meteor.methods({
  'updateDoctorReferences' : function(id, doc){
    check(id, String);
    check(doc, Object);
    if (!doc)
      throw new Meteor.Error(400, 'Please provide the proper data');

    if (doc.userId!==this.userId)
      throw new Meteor.Error(400, 'Access Denied');

    // Update related appointments to keep integrity
    Appointments.update({
        'doctor._id': id, 
      }, {
        $set: { 
          'doctor.name'      : doc.name, 
          'doctor.specialty' : doc.specialty }
      }, {
        multi: true
      },
      function(err, n){
        console.log('Modified Entries:', n);
        if (err){
          throw new Meteor.Error(err.error, err.reason);
      }
    });

  }
});