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

