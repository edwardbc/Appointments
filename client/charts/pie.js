Chart = window.Chart || {};

Chart.pie = function(dataset, options){
  if (!options) return;

  // Dimensions and style attributes
  var margin = { 
      top: 20, right: 30, bottom: 40, left:40
    },
    w = options.width - margin.left - margin.right,
    h = options.height - margin.top - margin.bottom,
    r = Math.min(w, h) / 2.4;

  var color = d3.scale.category20();

  var arc = d3.svg.arc()
    .outerRadius(r-10)
    .innerRadius(r-(r/3));

  var pie = d3.layout.pie()
    .sort(null)
    .value(function(d){ return d.count; });

  var chart = d3.select(options.element)
    .append('svg')
      .attr('width', w)
      .attr('height', h)
      .attr('class', 'pie')
    .append('g')
      .attr('transform', 'translate('+w/2 + ','+ h/2+')');

  var dataset = this.data  = [
    { name: 'name1', count:50 },
    { name: 'name2', count:30 },
    { name: 'name3', count:10 },
    { name: 'name4', count:10 }
  ];

  this.parseData = function(dataset){
    var nestFunction = d3.nest().key( function(d){
      return d.name; 
    });

    // this.data = nestFunction.entries(dataset.fetch());
    this.data = dataset;
    return;
    this.data = nestFunction.entries(dataset);
    this.data.forEach(function(dateGroup){
      dateGroup.count = dateGroup.values.length;
      // dateGroup.values.forEach(function(row){
      //   dateGroup.date = row.date;
      // });
    });
  };

  // Currently not reactive
  this.update = function(dataset){
    if (dataset){
      this.parseData(dataset);
    }

    var g = chart.selectAll('.arc')
        .data(pie(this.data), function(d){ return d.data.name});

    var pieEnter = g.enter()
      .append('g')
        .attr('class', 'arc');

    pieEnter.append('path')
        .style('fill', function(d){ return color(d.data.name); } )
        .attr('d', arc);
  
    pieEnter.append('text')
      .attr('transform', function(d){ 
        var c = arc.centroid(d);
        return "translate(" + c[0]*1.4 +"," + c[1]*1.4 + ")";
      })
      .attr('dy', '.35em')
      .style('text-anchor', 'middle')
      .text(function(d){ return d.data.name });

  };

  this.update(dataset);

  return this;

};