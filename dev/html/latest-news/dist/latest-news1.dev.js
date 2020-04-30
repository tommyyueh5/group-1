"use strict";

document.write("<script type='text/javascript' src='../../dev/js/var.js'></script>");

(function (d3) {
  'use strict';

  var data = [3, 5, 8, 7, 6, 5, 4, 3];
  var titleText1 = 'TAIWAN COVID-19 AREA';
  var titleText = 'time';
  var xAxisLabelText = 'Number of completed quarantines';
  var svg = d3.select('svg');
  var width = +svg.attr('width');
  var height = +svg.attr('height');

  var render = function render(data) {
    var xValue = function xValue(d) {
      return d['population'];
    };

    var yValue = function yValue(d) {
      return d.country;
    };

    var margin = {
      top: 40,
      right: 5,
      bottom: 30,
      left: 60
    };
    var innerWidth = width - margin.left - margin.right;
    var innerHeight = height - margin.top - margin.bottom;
    var xScale = d3.scaleLinear().domain([0, d3.max(data, xValue)]).range([0, innerWidth]);
    var yScale = d3.scaleBand().domain(data.map(yValue)).range([0, innerHeight]).padding(0.59);
    var g = svg.append('g').attr('transform', "translate(".concat(margin.left, ",").concat(margin.top, ")"));

    var xAxisTickFormat = function xAxisTickFormat(number) {
      return d3.format('.1s')(number).replace('G', 'B');
    };

    var xAxis = d3.axisBottom(xScale).tickFormat(xAxisTickFormat).tickSize(0);
    g.append('g').call(d3.axisLeft(yScale)).selectAll('.domain, .tick line').remove();
    var xAxisG = g.append('g').call(xAxis).attr('transform', "translate(0,".concat(innerHeight, ")"));
    xAxisG.select('.domain').remove();
    xAxisG.append('text').attr('class', 'axis-label').attr('y', 30).attr('x', 100).attr('fill', 'black').text(xAxisLabelText);
    g.selectAll('rect').data(data).attr('fill', 'url(#linear-gradient)').enter().append('rect').attr('rx', 2) //圓角
    .attr('ry', 2) //圓角
    .text(function (d) {
      return d;
    }).style('fill', '#1e1e1e').attr('y', function (d) {
      return yScale(yValue(d));
    }).transition().duration(1500).attr('width', function (d) {
      return xScale(xValue(d));
    }).attr('height', yScale.bandwidth());
    g.append('text').attr('class', 'title').attr('font-size', 12).attr('x', -50).attr('y', 0).text(titleText);
    g.append('text').attr('class', 'title').attr('font-size', 11).attr('x', 20).attr('y', -20).text(titleText1);
  };

  d3.csv('../map/striat-map/col/data1.json').then(function (data) {
    data.forEach(function (d) {
      d.population = +d.population * 1;
    });
    render(data);
  });
})(d3); // d3------------------