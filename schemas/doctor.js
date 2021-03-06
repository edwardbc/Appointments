DoctorSchema = new SimpleSchema({
  _id: { // Server-side validation
    type     : String,
    optional : true
  },
  userId: { // Server-side validation
    type     : String,
    optional : true
  },
  name: {
    type  : String,
    label : "Nombre",
  },
  phone: {
    type  : String,
    label : "Teléfono"
  },
  email: {
    type  : String,
    label : "Correo",
    regEx : SimpleSchema.RegEx.Email
  },
  specialty: {
    type     : String,
    label    : "Especialidad"
  },
  clinic: {
    type  : String,
    label : "Clínica"
  }
}, {
  defineBuiltInRegExMessages : false
});