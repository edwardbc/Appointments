DoctorSchema = new SimpleSchema({
  _id: {
    type     : String,
    label    : "Nombre",
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
    label : "Correo"
  },
  specialties: {
    type     : [String],
    label    : "Especialidades",
    minCount : 1,
  },
  clinic: {
    type  : String,
    label : "Clínica"
  }
});