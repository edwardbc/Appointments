Template.appointmentList.helpers({
  appointments: function(){
    var options = (this.limit) ? { limit:this.limit } : {};
    return Appointments.find({}, _.extend(options,  { sort: { date: -1}  }));
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