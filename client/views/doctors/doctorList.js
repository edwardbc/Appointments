Template.doctorList.helpers({
  doctors: function(){
    return Doctors.find();
  },
  count : function(){
    return Doctors.find().count();
  }
});