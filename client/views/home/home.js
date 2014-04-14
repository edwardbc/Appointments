Template.home.rendered = function(){
  var self = this;
  var width = $(this.firstNode).width(),
      height = width*.4;

  var resizeChart = _.debounce(function(){
    if (self.chart)
      self.chart.update(); // Not working yet
  }, 300);
  $(window).resize(resizeChart);

  Deps.autorun(function () {
    var data = Appointments.find();
    if (!self.chart){
      self.chart = new Chart.bars(data, {
        element : '#canvas',
        width   : width,
        height  : height
      });
    } else {
      self.chart.update(data);
    }
  });

}