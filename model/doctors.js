Doctors = new Meteor.Collection('doctors');


Doctors.allow({
    insert : function (id, doc) {   
      // Check if all fields are present and there
      // are no extra fields added to the model
      return DoctorSchema.namedContext("add").validate(doc);
    },
    update : function () {
        return true;
    },
    remove : function () {
        return true;
    }
});

