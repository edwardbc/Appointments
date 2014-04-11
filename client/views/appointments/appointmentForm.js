Template.appointmentForm.helpers({
  isNew: function(){
    return (!this._id);
  }
});

Template.appointmentForm.events({
  'click button[type=submit]' : function(e, t){
    e.preventDefault();
    
    // Clear previous warnings
    Client.Messages.clear();

    // Parse form fields
    var form = $(t.find('form')),
        fields = Utils.forms.objectify(form),
        isValid;

    _.extend(fields,{
      userId : Meteor.userId(),
      date   : fields.date ? new Date(fields.date+' '+fields.time) : null
    });
    
    fields.doctor = (fields.doctor) ? 
      _.pick(Doctors.findOne(fields.doctor), '_id', 'name', 'specialties') : null;

    // Parse tags
    fields.tags = ($.trim(fields.tags).length>0) ? 
      fields.tags.split(',') : [];

    // Remove unused fields to avoid schema conflicts
    delete fields.time;

    // Validate
    isValid = AppointmentSchema.namedContext("form").validate(fields);

    if (!isValid){
      // Map schema invalid keys
      var invalidKeys = [],
          emptyFields = false;

      // Show Error Messages
      AppointmentSchema.namedContext("form")
        .invalidKeys().forEach(function(error){
          invalidKeys.push(error.name);
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
      Utils.forms.highlight(form, null);
      $(window).scrollTop(0,0);
      
      // If editing an existing appointment
      if (this._id){
        Appointments.update(this._id, { $set: fields }, function(err){
          if (err){
            Client.Messages.showError(err.reason);
          } else {
            Client.Messages.showSuccess('Datos actualizados');
          }
        });
      } else {
        Appointments.insert(fields, function(err){
          if (err){
            Client.Messages.showError(err.reason);
          } else {
            Utils.forms.reset(form);
            Client.Messages.showSuccess('Cita agregada correctamente');
          }
        });
      }
    }
  }
});

