Template.doctorForm.helpers({
  isNew: function(){
    return (!this._id);
  }
});

Template.doctorForm.events({
  'click button[type=submit]' : function(e, t){
    e.preventDefault();
    // Parse form fields
    var form = $(t.find('form')),
        fields = Utils.forms.objectify(form),
        isValid;

    // Parse specialties
    fields.specialties = ($.trim(fields.specialties).length>0) ? 
      fields.specialties.split(',') : [];
    // Associate with current user
    fields.userId = Meteor.userId();
    // Validate
    isValid = DoctorSchema.namedContext("add").validate(fields);
    
    // Clear previous warnings
    Client.Messages.clear();


    if (!isValid){
      // Map schema invalid keys
      var invalidKeys = [],
          emptyFields = false;

      // Show Error Messages
      DoctorSchema.namedContext("add")
        .invalidKeys().forEach(function(error){
          invalidKeys.push(error.name);
          console.log(error);
          if (error.type=='required' || error.type=='minCount'){
            emptyFields = true;
          } else {
            Client.Messages.showError(error.message);
          }
        });

      if (emptyFields){
        Client.Messages.showError(SimpleSchema._globalMessages.defaultRequired);
      }

      // Highlight invalid inputs
      Utils.forms.highlight(form, invalidKeys);

    } else {
      // Clear form highlights
      form.find('.form-group').removeClass('has-error has-success');
      // If editing an exiting doctor
      if (this._id){
        console.log('update', fields);
        Doctors.update(this._id, { $set: fields }, function(err){
          if (err){
            Client.Messages.showError(err.reason);
          } else {
            form.find('input').eq(0).focus();
            Client.Messages.showSuccess('Datos actualizados');
          }
        });
      } else {
        Doctors.insert(fields, function(err){
          if (err){
            Client.Messages.showError(err.reason);
          } else {
            form.find('input').val('').eq(0).focus();
            Client.Messages.showSuccess('Doctor agregado correctamente');
          }
        });
      }
    }
  }
});