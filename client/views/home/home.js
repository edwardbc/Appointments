Template.home.rendered = function(){
  var self = this;
  var width = $(this.firstNode).width();

  Deps.autorun(function () {
    var data = Appointments.find();
    if (!self.chartBars){
      self.chartBars = new Chart.bars(data, {
        element : '#bars',
        width   : width*.5,
        height  : width*.3
      });
    } else {
      self.chartBars.update(data);
    }
  });
  

  this.chartPie = new Chart.pie(null, {
    element : '#bars',
    width   : width*.5,
    height  : width*.4 
  });
}