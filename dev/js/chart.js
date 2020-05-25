// -------左上圖----------



// if (screen.width <= 767) {
//     document.createElement('svg')

// }


// (function (d3) {
//     'use strict';

//     const titleText1 = 'TAIWAN COVID-19 AREA';
//     const titleText = 'time';
//     const xAxisLabelText = 'Number of completed quarantines';

//     const svg = d3.select('svg');

//     const width = +svg.attr('width');
//     const height = +svg.attr('height');

//     const render = data => {
//         const xValue = d => d['population'];
//         const yValue = d => d.country;
//         const margin = {
//             top: 40,
//             right: 0,
//             bottom: 50,
//             left: 60,
//         };
//         const innerWidth = width - margin.left - margin.right;
//         const innerHeight = height - margin.top - margin.bottom;



//         const xScale = d3.scaleLinear()
//             .domain([0, d3.max(data, xValue)])
//             // .scale(xScale2)
//             // .orient("left")
//             // .ticks(Math.max(width/50, 2))
//             .range([0, innerWidth]);

//         const yScale = d3.scaleBand()
//             .domain(data.map(yValue))
//             .range([0, innerHeight])
//             .padding(0.7);

//         const g = svg.append('g')
//             .attr('transform', `translate(${margin.left},${margin.top})`);

//         const xAxisTickFormat = number =>
//             d3.format('.0s')(number)
//             .replace('G', 'B');

//         const xAxis = d3.axisBottom(xScale)
//             .tickFormat(xAxisTickFormat)
//             .tickSize(0)


//         g.append('g')
//             .call(d3.axisLeft(yScale))
//             .selectAll('.domain, .tick line')
//             .remove();

//         const xAxisG = g.append('g').call(xAxis)
//             .attr('transform', `translate(0,${innerHeight})`);

//         xAxisG.select('.domain').remove();

//         xAxisG.append('text')
//             .attr('class', 'axis-label')
//             .attr('y', 40)
//             .attr('x', 150)
//             .attr('fill', 'black')
//             .text(xAxisLabelText)
//             .attr('font-size', 15);



//         g.selectAll('rect').data(data)
//             .attr('fill', 'url(#linear-gradient)')
//             .enter().append('rect')
//             .attr('rx', 5) //圓角
//             .attr('ry', 5) //圓角
//             .text(function (d) {
//                 return d;
//             })
//             .style('fill', '#1e1e1e')

//             .attr('y', d => yScale(yValue(d)))
//             // .transition()
//             // .duration(1500)
//             .attr('width', d => xScale(xValue(d)))

//             .attr('height', yScale.bandwidth());

//         g.append('text')
//             .attr('class', 'title')
//             .attr('font-size', 15)
//             .attr('x', -40)
//             .attr('y', 0)
//             .text(titleText);

//         g.append('text')
//             .attr('class', 'title')
//             .attr('font-size', 20)
//             .attr('x', 30)
//             .attr('y', -20)
//             .text(titleText1);

//     };

//     d3.csv('/dest/latest-news/map/striat-map/col/data1.json').then(data => {
//         data.forEach(d => {
//             console.log(d);
//             d.population = +d.population * 10;
//         });
//         render(data);
//     });

// })(d3);

// -------右上圖----------


// -------左下圖----------

//Chart.plugins.register(ChartDataSource);
var context = document.getElementById('chart').getContext('2d');
var chart = new Chart(context, {
    type: 'line',
    //plugins: [ChartDataSource],
    data: {
        labels: ['10↓', '10-14', '15-19', '20-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59', '60-64',
            '65-69','70↑'
        ], //項目中的標籤
        datasets: [{
            lineTension: 0.3,
            label: '病例數',
            data: [4,1,20,103,65,61,35,24,18,23,28,24,19,16], //資料以陣列形式存放
            borderColor: "#80b6f4",
            pointBorderColor: "#80b6f4",
            pointBackgroundColor: "#80b6f4",
            pointHoverBackgroundColor: "#80b6f4",
            pointHoverBorderColor: "#80b6f4",
            pointBorderWidth: 0.1,
            pointHoverRadius: 10,
            pointHoverBorderWidth: 10,
            pointRadius: 5,
            fill: false,
            borderWidth: 1,
        }],
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false,
            labels: {
                fontSize: 10,
            },
        },
        layout: {
            padding: {
                right: 0,
            },
        },
        animation: {
            duration: 1500,
        },
        title: {
            text: '2020年冠狀病毒肺炎年齡確定病例統計表-人數/年齡',
            fontSize: 12,
            display: true,
            position: 'top',
        },
        scales: {
            labelString: '111',
            yAxes: [{
                ticks: {
                    margin: 30,
                    padding: 10,
                    fontSize: 12,
                    fontStyle: 'bold',
                    beginAtZero: true,
                },
                scaleLabel: {
                    display: true,
                    labelString: '人數',
                },
            }],
            xAxes: [{
                ticks: {
                    padding: 10,
                    fontSize: 12,
                    fontStyle: 'bold',
                    beginAtZero: true,
                },
                scaleLabel: {
                    display: true,
                    labelString: '年齡',
                },
            }],
        }
    }
});


Chart.helpers.drawRoundedTopRectangle = function(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    // top right corner
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    // bottom right	corner
    ctx.lineTo(x + width, y + height);
    // bottom left corner
    ctx.lineTo(x, y + height);
    // top left	
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
};

Chart.elements.RoundedTopRectangle = Chart.elements.Rectangle.extend({
    draw: function() {
        var ctx = this._chart.ctx;
        var vm = this._view;
        var left, right, top, bottom, signX, signY, borderSkipped;
        var borderWidth = vm.borderWidth;

        if (!vm.horizontal) {
            // bar
            left = vm.x - vm.width / 2;
            right = vm.x + vm.width / 2;
            top = vm.y;
            bottom = vm.base;
            signX = 1;
            signY = bottom > top ? 1 : -1;
            borderSkipped = vm.borderSkipped || 'bottom';
        } else {
            // horizontal bar
            left = vm.base;
            right = vm.x;
            top = vm.y - vm.height / 2;
            bottom = vm.y + vm.height / 2;
            signX = right > left ? 1 : -1;
            signY = 1;
            borderSkipped = vm.borderSkipped || 'left';
        }

        // Canvas doesn't allow us to stroke inside the width so we can
        // adjust the sizes to fit if we're setting a stroke on the line
        if (borderWidth) {
            // borderWidth shold be less than bar width and bar height.
            var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
            borderWidth = borderWidth > barSize ? barSize : borderWidth;
            var halfStroke = borderWidth / 2;
            // Adjust borderWidth when bar top position is near vm.base(zero).
            var borderLeft = left + (borderSkipped !== 'left' ? halfStroke * signX : 0);
            var borderRight = right + (borderSkipped !== 'right' ? -halfStroke * signX : 0);
            var borderTop = top + (borderSkipped !== 'top' ? halfStroke * signY : 0);
            var borderBottom = bottom + (borderSkipped !== 'bottom' ? -halfStroke * signY : 0);
            // not become a vertical line?
            if (borderLeft !== borderRight) {
                top = borderTop;
                bottom = borderBottom;
            }
            // not become a horizontal line?
            if (borderTop !== borderBottom) {
                left = borderLeft;
                right = borderRight;
            }
        }

        // calculate the bar width and roundess
        var barWidth = Math.abs(left - right);
        var roundness = this._chart.config.options.barRoundness || 0.75;
        var radius = barWidth * roundness * 0.75;

        // keep track of the original top of the bar
        var prevTop = top;

        // move the top down so there is room to draw the rounded top
        top = prevTop + radius;
        var barRadius = top - prevTop;

        ctx.beginPath();
        ctx.fillStyle = vm.backgroundColor;
        ctx.strokeStyle = vm.borderColor;
        ctx.lineWidth = borderWidth;

        // draw the rounded top rectangle
        Chart.helpers.drawRoundedTopRectangle(ctx, left, (top - barRadius + 1), barWidth, bottom -
            prevTop, barRadius);

        ctx.fill();
        if (borderWidth) {
            ctx.stroke();
        }

        // restore the original top value so tooltips and scales still work
        top = prevTop;
    },
});

Chart.defaults.roundedBar = Chart.helpers.clone(Chart.defaults.bar);

Chart.controllers.roundedBar = Chart.controllers.bar.extend({
    dataElementType: Chart.elements.RoundedTopRectangle
});

// -------右下圖----------

var ctx = document.getElementById('chart2').getContext('2d');
var myBar = new Chart(ctx, {
    type: 'bar',
    //plugins: [ChartDataSource],
    data: {
        labels: ['2020/01', '2020/02', '2020/03', '2020/04', '2020/05'],
        datasets: [{
            label: '病例數',
            data: [10, 29, 284, 107, 11], //資料以陣列形式存放
            borderColor: "rgba(205, 119, 119)",
            backgroundColor: "rgba(205, 119, 119)",
            fill: false,
            borderWidth: 1,
        }],
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false,
            labels: {
                fontSize: 12,
            },
        },
        layout: {
            padding: {
                right: 15,
            },
        },
        animation: {
            duration: 1500,
        },
        title: {
            text: '2020年冠狀病毒肺炎確定病例統計-人數/月份',
            fontSize: 12,
            display: true,
            position: 'top',
        },
        scales: {
            yAxes: [{
                ticks: {
                    padding: 4,
                    fontSize: 12,
                    fontStyle: 'bold',
                    beginAtZero: true,
                },
                scaleLabel: {
                    display: true,
                    labelString: '人數',
                },
            }],
            xAxes: [{
                ticks: {
                    padding: 0,
                    fontSize: 12,
                    fontStyle: 'bold',
                    beginAtZero: true,
                },
                scaleLabel: {
                    display: true,
                    labelString: '月份',
                },
            }],
        }
    }
});
