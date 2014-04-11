Appointments = new Meteor.Collection('appointments');

var ownsDocument = function(id, doc){
  return (doc.userId !== Meteor.userId());
};

// Check for ownership of doctor document
Appointments.deny({
  insert: ownsDocument,
  update: ownsDocument,
  remove: ownsDocument
});

// Don't allow updating ownership
Appointments.deny({
  update: function(id, doc, fields, newDoc){
    return (doc.userId!==newDoc['$set'].userId);
  }
});


// Check if all fields are present and there
// are no extra fields added to the model
Appointments.allow({
    insert : function (id, doc, fields) {   
      return AppointmentSchema.namedContext("add").validate(doc);
    },
    update : function (id, doc, fields, newDoc) {
      return AppointmentSchema.namedContext("add").validate(newDoc['$set']);
    },
    remove : function () {
        return true;
    }
});

