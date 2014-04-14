Template.home.rendered = function(){
  var self = this;

  Deps.autorun(function () {
    var data = Appointments.find();
    if (!self.chart){
      self.chart = new Chart.bars('#canvas', data);
    } else {
      self.chart.update(data);
    }
  });

}