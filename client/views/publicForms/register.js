Template.register.events({
  'click button[type=submit]' : function(e, t){
    e.preventDefault();
    // Parse form fields
    var form = $(t.find('form')),
        fields = Utils.forms.objectify(form),
        isValid = UserSchema.namedContext("register").validate(fields);

    // Clear previous warnings
    Client.Messages.clear();

    if (!isValid){
      // Map schema invalid keys
      var invalidKeys = UserSchema.namedContext("register")
          .invalidKeys().map(function(field){
            return field.name;
          });

      // Highlight invalid inputs
      Utils.forms.highlight(form, invalidKeys);

      // Display Error
      Client.Messages.showError('Por favor ingrese todos los datos');
    } else {
      // Register User
      Accounts.createUser({
          username : fields.username,
          password : fields.password,
          profile  : _.pick(fields, 'name', 'gender')
      }, function(err){
        if (err){
          if (err.error==403){
            Client.Messages.showWarning('El nombre de usuario no se encuentra disponible');  
            form.find('[name=username]').focus()
                .parent().addClass('has-warning');
          } else {
            Client.Messages.showError(err.reason);  
          }
          
          
        }
      });
    }
  }
});