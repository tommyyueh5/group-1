"use strict";document.write("<script type='text/javascript' src='../../dev/js/var.js'><\/script>"),function(u){function a(t){function a(t){return t.population}function e(t){return t.country}var r=40,n=60,i=m-n-5,c=x-r-30,l=u.scaleLinear().domain([0,u.max(t,a)]).range([0,i]),o=u.scaleBand().domain(t.map(e)).range([0,c]).padding(.59),s=f.append("g").attr("transform","translate(".concat(n,",").concat(r,")")),p=u.axisBottom(l).tickFormat(function(t){return u.format(".1s")(t).replace("G","B")}).tickSize(0);s.append("g").call(u.axisLeft(o)).selectAll(".domain, .tick line").remove();var d=s.append("g").call(p).attr("transform","translate(0,".concat(c,")"));d.select(".domain").remove(),d.append("text").attr("class","axis-label").attr("y",30).attr("x",100).attr("fill","black").text("Number of completed quarantines"),s.selectAll("rect").data(t).attr("fill","url(#linear-gradient)").enter().append("rect").attr("rx",2).attr("ry",2).text(function(t){return t}).style("fill","#1e1e1e").attr("y",function(t){return o(e(t))}).transition().duration(1500).attr("width",function(t){return l(a(t))}).attr("height",o.bandwidth()),s.append("text").attr("class","title").attr("font-size",12).attr("x",-50).attr("y",0).text("time"),s.append("text").attr("class","title").attr("font-size",11).attr("x",20).attr("y",-20).text("TAIWAN COVID-19 AREA")}var f=u.select("svg"),m=+f.attr("width"),x=+f.attr("height");u.csv("dev/html/latest-news/map/striat-map/col/data1.json").then(function(t){t.forEach(function(t){t.population=1*t.population}),a(t)})}(d3);