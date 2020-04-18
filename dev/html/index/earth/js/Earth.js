
  var rotationDelay = 500
  var scaleFactor = 0.6
  var degPerSec = 6
  var angles = {
    x: -20,
    y: 40,
    z: 0
  }
  var colorWater = '#54a0ff'
  var colorLand = '#B99362' //島嶼F19BFE
  var colorGraticule = '#181236' //181236
  var colorCountry = '#10ac84' //F6C1BC
  var newdataList = [];
  var dataList;
  var selectsItem;


  



  function enter(country) {
    var country = countryList.find(function (c) {
      return c.id === country.id;
    })


    let datenum, confirmed, death, recovered;
    let citys = Object.keys(dataList).find((city) => {
      // console.log(city, country.name.trim());
      if (country != undefined && country.name === city ) {
    // console.log(city);
        return city;
      }
    });
    



    
    if (citys) {
      datenum = dataList[citys].length - 1
      confirmed = dataList[citys][datenum].confirmed
      death = dataList[citys][datenum].deaths;
      recovered = dataList[citys][datenum].recovered;
    Showtable._groups[0][0].style.right = 0;
    Showtable._groups[0][0].style.background = '#ccc';
    Showtable._groups[0][0].style.transition = 'all 1s';
    //將顏色框共同改變
    [curentCitys,curentConfirmed,curentDeath, curentRecovered].forEach(item=>{
      item._groups[0][0].style.border = '1px solid red';
    });
      //顯示地圖資料
      curentCitys.text(country &&
        `地區:${citys} `)
        curentConfirmed.text(country &&
        `確診人數: ${confirmed} `)
        curentDeath.text(country &&
        `死亡人數: ${death}`)
        curentRecovered.text(country &&
        `已完成隔離人數: ${recovered}`) 
    }
  }


  function leave(country) {
    Showtable._groups[0][0].style.right = '-100%';
    Showtable._groups[0][0].style.background = 'none';
    Showtable._groups[0][0].style.transition = 'all 1s';
  [curentCitys,curentConfirmed,curentDeath, curentRecovered].forEach(item=>{
      item.text('');
      item._groups[0][0].style.border = 'none';
    });
  }

  //
  // Variables
  //
  var Showtable = d3.select('.Showtable')
  var curentCitys = d3.select('#curentCitys')
  var curentConfirmed = d3.select('#curentConfirmed')
  var curentDeath = d3.select('#curentDeath')
  var curentRecovered = d3.select('#curentRecovered')
  // var current = d3.select('#current')
  var canvas = d3.select('#globe')
  var context = canvas.node().getContext('2d')
  var water = {
    type: 'Sphere'
  }
  var projection = d3.geoOrthographic().precision(0.1)
  var graticule = d3.geoGraticule10()
  var path = d3.geoPath(projection).context(context)
  var v0 // Mouse position in Cartesian coordinates at start of drag gesture.
  var r0 // Projection rotation as Euler angles at start.
  var q0 // Projection rotation as versor at start.
  var lastTime = d3.now()
  var degPerMs = degPerSec / 1000
  var width, height
  var land, countries
  var countryList
  var autorotate, now, diff, roation
  var currentCountry


  //
  // Functions
  //

  function setAngles() {
    var rotation = projection.rotate()
    rotation[0] = angles.y
    rotation[1] = angles.x
    rotation[2] = angles.z
    projection.rotate(rotation)
  }

  function scale() {
    width = document.documentElement.clientWidth
    height = document.documentElement.clientHeight
    canvas.attr('width', width).attr('height', height)
    projection
      .scale((scaleFactor * Math.min(width, height)) / 2)
      .translate([width / 2, height / 2])
    render()
  }

  function startRotation(delay) {
    autorotate.restart(rotate, delay || 0)
  }

  function stopRotation() {
    autorotate.stop()
  }

  function dragstarted() {
    v0 = versor.cartesian(projection.invert(d3.mouse(this)))
    r0 = projection.rotate()
    q0 = versor(r0)
    stopRotation()
  }

  function dragged() {
    var v1 = versor.cartesian(projection.rotate(r0).invert(d3.mouse(this)))
    var q1 = versor.multiply(q0, versor.delta(v0, v1))
    var r1 = versor.rotation(q1)
    projection.rotate(r1)
    render()
  }

  function dragended() {
    startRotation(rotationDelay)
  }

  function render() {
    context.clearRect(0, 0, width, height)
    fill(water, colorWater)
    stroke(graticule, colorGraticule)
    fill(land, colorLand)
    // strokeRect(currentCountry,'#000')
    if (currentCountry) {
      fill(currentCountry, colorCountry)

    }
  }

  function fill(obj, color) {
    context.beginPath()
    path(obj)
    context.fillStyle = color
    context.fill()
  }

  function stroke(obj, color) {
    context.beginPath()
    path(obj)
    context.strokeStyle = color
    context.stroke()
  }

  function rotate(elapsed) {
    now = d3.now()
    diff = now - lastTime
    if (diff < elapsed) {
      rotation = projection.rotate()
      rotation[0] += diff * degPerMs
      projection.rotate(rotation)
      render()
    }
    lastTime = now
  }

  function loadData(cb) {

    d3.json('../earth/json/worldMap.json', function (error, world) {
      if (error) throw error
      d3.tsv('../earth/json/earth.tsv', function (error, countries) {
        if (error) throw error;
        d3.json('https://pomber.github.io/covid19/timeseries.json', function (error, data) {
          if (error) throw error;
          cb(world, countries, data)
        });


      })
    })
  }

  // https://github.com/d3/d3-polygon
  function polygonContains(polygon, point) {
    var n = polygon.length
    var p = polygon[n - 1]
    var x = point[0],
      y = point[1]
    var x0 = p[0],
      y0 = p[1]
    var x1, y1
    var inside = false
    for (var i = 0; i < n; ++i) {
      p = polygon[i], x1 = p[0], y1 = p[1]
      if (((y1 > y) !== (y0 > y)) && (x < (x0 - x1) * (y - y1) / (y0 - y1) + x1)) inside = !inside
      x0 = x1, y0 = y1
    }
    return inside
  }

  function mousemove() {
    var c = getCountry(this)
    if (!c) {
      if (currentCountry) {
        leave(currentCountry)
        currentCountry = undefined
        render()
      }
      return
    }
    if (c === currentCountry) {
      return
    }
    currentCountry = c
    // console.log(currentCountry);
    render()
    enter(c)


  }

  function getCountry(event) {
    var pos = projection.invert(d3.mouse(event))

    return countries.features.find(function (f) {
      return f.geometry.coordinates.find(function (c1) {
        return polygonContains(c1, pos) || c1.find(function (c2) {
          return polygonContains(c2, pos)
        })
      })
    })
  }


  //
  // Initialization
  //

  setAngles()

  canvas
    .call(d3.drag()
      .on('start', dragstarted)
      .on('drag', dragged)
      .on('end', dragended)
    )
    .on('mousemove', mousemove)

  loadData(function (world, cList, data) {
    land = topojson.feature(world, world.objects.land)
    countries = topojson.feature(world, world.objects.countries)
    countryList = cList
    dataList = data








    window.addEventListener('resize', scale)
    scale()
    autorotate = d3.timer(rotate)
  });



