Template.home.rendered = function(){
  var self = this;
  var width = $(this.firstNode).width();

  Deps.autorun(function () {
    var data = Appointments.find();
    if (!self.chartBars){
      self.chartBars = new Chart.bars(data, {
        title   : 'Citas Mensuales',
        element : '#bars',
        width   : width*.5,
        height  : width*.35
      });
    } else {
      self.chartBars.update(data);
    }
    // Non reactive yet
    self.chartPie = new Chart.pie(data, {
      title   : 'Citas por Especialidad',
      element : '#pie',
      width   : width*.5,
      height  : width*.4 
    });
  });
  
}