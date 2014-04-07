Template.doctorForm.events({
  'click button[type=submit]' : function(e, t){
    e.preventDefault();
    // Parse form fields
    var form = $(t.find('form')),
        fields = Utils.forms.objectify(form),
        isValid;

    // Parse specialties and validate
    fields.specialties = ($.trim(fields.specialties).length>0) ? 
      fields.specialties.split(' ') : [];
    isValid = DoctorSchema.namedContext("add").validate(fields);
    
    // Clear previous warnings
    Client.Messages.clear();

    if (!isValid){
      // Map schema invalid keys
      var invalidKeys = DoctorSchema.namedContext("add")
          .invalidKeys().map(function(field){
            return field.name;
          });

      // Highlight invalid inputs
      form.find('input, select').each(function(){
        var name   = $(this).attr('name'),
            parent = $(this).parent(), 
            isInvalid = _.contains(invalidKeys, name);
        
        parent.toggleClass('has-error', isInvalid)
              .toggleClass('has-success', !isInvalid);
        
      });
      // Display Error
      Client.Messages.showError('Por favor ingrese todos los datos');
    } else {
      form.find('.form-group').removeClass('has-error has-success');
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
});