Template.appointmentList.helpers({
  appointments: function(){
    return Appointments.find();
  },
  count : function(){
    return Appointments.find().count();
  }
});

Template.appointmentList.events({
  'click tr .remove' : function(e){
    e.preventDefault();
    if(this._id){
      Appointments.remove(this._id);
    }
  }
})