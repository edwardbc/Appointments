Template.doctorList.helpers({
  doctors: function(){
    return Doctors.find();
  },
  count : function(){
    return Doctors.find().count();
  }
});

Template.doctorList.events({
  'click tr .remove' : function(e){
    e.preventDefault();
    if(this._id){
      Doctors.remove(this._id);
    }
  }
})