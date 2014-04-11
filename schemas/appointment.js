AppointmentSchema = new SimpleSchema({
  _id: {    // Server-side validation
    type     : String,
    optional : true
  },
  userId: { // Server-side validation
    type     : String,
    optional : true
  },
  date: {
    type  : Date,
    label : "Fecha"
  },
  doctor: {
    type     : Object
  },
  'doctor._id': {
    type     : String,
    optional : true
  },
  'doctor.name': {
    type     : String,
    optional : true
  },
  'doctor.specialties': {
    type     : [String],
    optional : true
  },
  tags: {
    type     : [String],
    label    : "Etiquetas",
    minCount : 1,
  },
  notes: {
    type  : String,
    label : "Notas",
    optional: true
  }
}, {
  defineBuiltInRegExMessages : false
});