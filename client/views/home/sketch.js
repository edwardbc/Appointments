// Scatterplot



// var dataset = [
//       [500, 120],
//       [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
//       [410, 12], [475, 44], [25, 67], [85, 21], [220, 88], [600, 80]
//     ]
//     padding = 30;

// var domains = {
//   x : [
//     d3.min(dataset, function(d){return d[0]-5; }),
//     d3.max(dataset, function(d){return d[0]; })
//   ],
//   y : [
//     d3.max(dataset, function(d){return d[1]; }),
//     d3.min(dataset, function(d){return d[1]-5; }),
//   ]
// };


// var xScale = d3.scale.linear()
//     .domain(domains.x)
//     .range([padding, w - padding]);

// var yScale = d3.scale.linear()
//     .domain(domains.y)
//     .range([padding, h - padding]);

// var rScale = d3.scale.linear()
//      .domain([ domains.y[1], domains.y[0] ])
//      .range([2, 10]);

// var xAxis = d3.svg.axis()
//     .scale(xScale)
//     .orient('bottom')
//     .ticks(5);

// var yAxis = d3.svg.axis()
//     .scale(yScale)
//     .orient('left')
//     .ticks(5);

// svg.selectAll('circle')
//     .data(dataset)
//     .enter()
//   .append('circle')
//     .attr('cx', function(d){
//       return xScale(d[0]);
//     })
//     .attr('cy', function(d){
//       return yScale(d[1]);
//     })
//     .attr('r', function(d){
//       return rScale(d[1]);
//     });

// svg.selectAll('text')
//     .data(dataset)
//     .enter()
//     .append('text')
//   .text(function(d){
//       return d.join(',');
//     })
//     .attr('x', function(d){
//       return xScale(d[0]);
//     })
//     .attr('y', function(d){
//       return yScale(d[1]);
//     })
//     .attr('fill','red')
//     .attr('font-family', 'sans-serif')
//     .attr('font-size', 10);


// svg.append('g')
//     .attr('class', 'axis')
//     .attr('transform', 'translate(0, '+(h-padding)+')')
//     .call(xAxis);

// svg.append('g')
//     .attr('class', 'axis')
//     .attr('transform', 'translate('+(padding)+', 0)')
//     .call(yAxis);


// var line = d3.svg.line()
//     .x(function(d) { return xScale(d[0]); })
//     .y(function(d) { return yScale(d[1]); })
//     .interpolate("monotone");
//     // .interpolate("basis");

// var lineData = [ { "x": 5,   "y": 20},  { "x": 480,  "y": 90},
//                   { "x": 40,  "y": 10}, { "x": 60,  "y": 40},
//                   { "x": 80,  "y": 5},  { "x": 100, "y": 60}];

// GroupedBar
// var bar = chart.selectAll('g')
//     .data(dataset)
//   .enter().append('g')
//     .attr('transform', function(d, i){
//       return 'translate('+(x(d.name))+', 0)';
//     });

// bar.append('rect')
//     .attr('y', function(d){return y(d.value)})
//     .attr('width', x.rangeBand())
//     .attr('height', function(d){
//       return h-y(d.value);
//     });

// bar.append('text')
//   .attr('x', function(d){
//     return x.rangeBand()/2
//   })
//   .attr('y', function(d){ return y(d.value)+3 })
//   .attr('dy', '.75em')
//   .text(function(d){return(d.value)});




// var x = d3.scale.ordinal()
//   // .domain(dataset.map(function(d){ return d.name }))
//   // .rangeRoundBands([0, w],.1);
