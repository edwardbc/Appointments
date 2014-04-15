Chart = window.Chart || {};

Chart.bars = function(dataset, options){
  if (!options) return;

  // Dimensions and style attributes
  var margin = { 
      top: 20, right: 30, bottom: 30, left:40
    },
    w = options.width - margin.left - margin.right,
    h = options.height - margin.top - margin.bottom;

  var ranges = {
    start: new Date(2014, 0, 1),
    end  : new Date(2014, 11, 31)
  };

  var intervals = d3.time.month.range(ranges.start, ranges.end),
      barWidth = Math.floor(w / intervals.length)-10;

  // Bar Chart
  var chart = d3.select(options.element)
    .append('svg')
      .attr('width',  w+margin.left+margin.right)
      .attr('height', h+margin.top+margin.bottom)
    .append('g')
      .attr('transform', 'translate('+margin.left+','+margin.top+')');   

  // Scales
  var x = d3.time.scale()
    .domain([ranges.start, ranges.end])
    .nice(d3.time.month)
    .range([0, w]);

  var y = d3.scale.linear()
    .rangeRound([h,0]);

  // Axis
  var axis = {};
  axis.x = d3.svg.axis()
      .scale(x)
      .orient('bottom')
      .ticks(d3.time.months, 1)
      .tickFormat(d3.time.format("%m/%y"))

  axis.y = d3.svg.axis()
    .scale(y)
    .ticks(1)
    .orient('left');

  chart.append('g')
      .attr('class', 'x axis')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0, '+ h + ')')
      .call(axis.x);

  chart.append('g')
      .attr('class', 'y axis')
      .call(axis.y)
    .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end')
      .text('Frecuencia');


  this.parseData = function(dataset){
    // Group data by month
    var nestFunction = d3.nest().key( function(d){
      var format = d3.time.format("%m/%Y");
      return format(new Date(d.date)); 
    });

    this.data = nestFunction.entries(dataset.fetch());
    this.data.forEach(function(dateGroup){
      dateGroup.count = dateGroup.values.length;
      dateGroup.values.forEach(function(row){
        dateGroup.date = row.date;
      });
    });
  };

  this.update = function(dataset){
    if (dataset){
      this.parseData(dataset);
    }
    
    y.domain([0, d3.max(this.data, function(d){ return (d.count) } )]);
    
    var bar = chart.selectAll('.bar')
      .data(this.data, function(d){ return d.key });

    bar.enter().append("rect")
      .attr("class", "bar")
      .attr("width", barWidth)
      .attr("x", function(d) { 
        return x(d3.time.month.floor( new Date(d.date))); 
      })
      .attr("y", h)
      .style("fill-opacity", 0);


    bar.transition().duration(750)
      .attr("y", function(d) { return y(d.count); })
      .attr("height", function(d) { return h - y(d.count); })
      .style("fill-opacity", 1);

    bar.exit()
      .transition()
      .style("fill-opacity", 0)
      .remove()

    axis.y.ticks(d3.max(this.data, function(d){ return (d.count) } ))
    var t = chart.select('.y.axis')
      .transition()
        .call(axis.y)
    
  };


    
  this.update(dataset);

  return this;

};