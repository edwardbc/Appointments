Template.login.events({
  'click button[type=submit]' : function(e, t){
    e.preventDefault();
    // Parse form fields
    var form = $(t.find('form')),
        fields = Utils.forms.objectify(form);

    // Clear previous warnings
    Client.Messages.clear();

    if (!fields.username){
      Client.Messages.showWarning('Ingrese el usuario');
      form.find('[name="username"]').focus();
    } else if (!fields.password){
      Client.Messages.showWarning('Ingrese la contraseña');
      form.find('[name="password"]').focus();
    } else {
      Meteor.loginWithPassword(fields.username, fields.password, function(err){
        if (err){
          Client.Messages.showError('Datos incorrectos');
        }
      });
    }
  }
});