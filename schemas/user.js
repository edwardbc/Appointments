UserSchema = new SimpleSchema({
  username: {
    type: String,
    label: "Usuario",
  },
  password: {
    type: String,
    label: "Contraseña"
  },
  name: {
    type: String,
    label: "Nombre"
  },
  gender: {
    type: String,
    label: "Género"
  }
}, {
  defineBuiltInRegExMessages : false
});