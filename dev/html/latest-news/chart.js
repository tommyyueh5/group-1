

// -------左上圖----------
        (function (d3) {
            'use strict';
            const data = [3, 5, 8, 7, 6, 5, 4, 3]
            const titleText1 = 'TAIWAN COVID-19 AREA';
            const titleText = 'time';
            const xAxisLabelText = 'Number of completed quarantines';

            const svg = d3.select('svg');

            const width = +svg.attr('width');
            const height = +svg.attr('height');

            const render = data => {
                const xValue = d => d['population'];
                const yValue = d => d.country;
                const margin = {
                    top: 40,
                    right: 5,
                    bottom: 30,
                    left: 60
                };
                const innerWidth = width - margin.left - margin.right;
                const innerHeight = height - margin.top - margin.bottom;



                const xScale = d3.scaleLinear()
                    .domain([0, d3.max(data, xValue)])
                    .range([0, innerWidth]);

                const yScale = d3.scaleBand()
                    .domain(data.map(yValue))
                    .range([0, innerHeight])
                    .padding(0.59);

                const g = svg.append('g')
                    .attr('transform', `translate(${margin.left},${margin.top})`);

                const xAxisTickFormat = number =>
                    d3.format('.1s')(number)
                    .replace('G', 'B');

                const xAxis = d3.axisBottom(xScale)
                    .tickFormat(xAxisTickFormat)
                    .tickSize(0);

                g.append('g')
                    .call(d3.axisLeft(yScale))
                    .selectAll('.domain, .tick line')
                    .remove();

                const xAxisG = g.append('g').call(xAxis)
                    .attr('transform', `translate(0,${innerHeight})`);

                xAxisG.select('.domain').remove();

                xAxisG.append('text')
                    .attr('class', 'axis-label')
                    .attr('y', 30)
                    .attr('x', 100)
                    .attr('fill', 'black')
                    .text(xAxisLabelText);



                g.selectAll('rect').data(data)
                    .attr('fill', 'url(#linear-gradient)')
                    .enter().append('rect')
                    .attr('rx', 2) //圓角
                    .attr('ry', 2) //圓角
                    .text(function (d) {
                        return d;
                    })
                    .style('fill', '#1e1e1e')

                    .attr('y', d => yScale(yValue(d)))
                    .transition()
                    .duration(1500)
                    .attr('width', d => xScale(xValue(d)))

                    .attr('height', yScale.bandwidth());

                g.append('text')
                    .attr('class', 'title')
                    .attr('font-size', 12)
                    .attr('x', -50)
                    .attr('y', 0)
                    .text(titleText);

                g.append('text')
                    .attr('class', 'title')
                    .attr('font-size', 11)
                    .attr('x', 20)
                    .attr('y', -20)
                    .text(titleText1);

            };

            d3.csv('dest/latest-news/map/striat-map/col/data1.json').then(data => {
                data.forEach(d => {
                    d.population = +d.population * 1;
                });
                render(data);
            });

        })(d3);

// -------右上圖----------


// -------左下圖----------

//Chart.plugins.register(ChartDataSource);
var context = document.getElementById('chart').getContext('2d');
var chart = new Chart(context, {
    type: 'line',
    //plugins: [ChartDataSource],
    data: {
        labels: ['第一週', '第二週', '第三週', '第四週', '第五週', '第六週', '第七週', '第八週', '第九週', '第十週', '第十一週', '第十二週',
            '第十三週',
        ], //項目中的標籤
        datasets: [{
            lineTension: 0.3,
            label: '病例數',
            data: [0, 1, 0, 9, 11, 7, 1, 6, 10, 15, 66, 102, 7], //資料以陣列形式存放
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
            text: '2020年各周確定病例統計表--人數/周數',
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
                    labelString: '年周數',
                },
            }],
        }
    }
});


Chart.helpers.drawRoundedTopRectangle = function (ctx, x, y, width, height, radius) {
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
    draw: function () {
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
    type: 'roundedBar',
    //plugins: [ChartDataSource],
    data: {
        labels: ['紐西蘭', '中國', '印尼', '日本', '澳門', '菲律賓', '卡達', '土耳其', '南非', '埃及', '加拿大', '美國', '奧地利',
            '捷克', '丹麥', '法國', '德國', '義大利', '西班牙', '英國'
        ],
        datasets: [{
            label: '病例數',
            data: [1, 11, 2, 3, 1, 5, 1, 15, 1, 10, 1, 18, 4, 3, 1, 14, 5, 5, 11,
                12
            ], //資料以陣列形式存放
            borderColor: "#80b6f4",
            backgroundColor: "#80b6f4",
            fill: false,
            borderWidth: 4,
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
                right: 10,
            },
        },
        animation: {
            duration: 1500,
        },
        title: {
            text: '冠狀病毒肺炎境外移入確定病例統計-人數/國家',
            fontSize: 12,
            display: true,
            position: 'top',
        },
        scales: {
            yAxes: [{
                ticks: {
                    padding: 0,
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
                    labelString: '國家',
                },
            }],
        }
    }
});



// --------------------------圖表燈箱放大----------------------------


// var pictures = document.querySelectorAll('.svg1 .svg1_1');

// pictures.forEach(function(){
//   document.addEventListener('click', function(e){
//      this.classList.toggle('lightbox');
//   });
// });

// document.getElementsByClassName('svg1_1').addEventListener('click', function(){
//     this.classList.toggle('lightbox');
//  });
