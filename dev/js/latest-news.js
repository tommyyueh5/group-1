// --------------------------影片----------------------------
window.addEventListener('load', function () { 
    var current = 0,
        $preview = $('#preview'),

        $carouselEl = $('#carousel'),


        $carouselItems = $carouselEl.children(),

        carousel = $carouselEl.elastislide({
            current: current,
            minItems: 3,
            onClick: function (el, pos, evt) {

                changeImage(el, pos);
                evt.preventDefault();

            },
            onReady: function () {

                changeImage($carouselItems.eq(current), current);

            }
        });

    function changeImage(el, pos) {
        $preview.attr('src', el.data('preview'));
        $carouselItems.removeClass('current-img');
        el.addClass('current-img');
    }
});

window.addEventListener('resize', function () {

if (window.innerWidth < 600) {

  
        number4();
  


}
else if ( window.innerWidth < 900) {
  
        number3();


}
else if (window.innerWidth < 1200) {

        number2();


}
else {
 
        number1();
 
};
});

function number4() {
   
    var current = 0,
        $preview = $('#preview'),

        $carouselEl = $('#carousel'),

        
        $carouselItems = $carouselEl.children(),

        carousel = $carouselEl.elastislide({
            current: current,
            minItems: 1,
            onClick: function (el, pos, evt) {

                changeImage(el, pos);
                evt.preventDefault();

            },
            onReady: function () {

                changeImage($carouselItems.eq(current), current);

            }
        });

    function changeImage(el, pos) {
        $preview.attr('src', el.data('preview'));
        $carouselItems.removeClass('current-img');
        el.addClass('current-img');
    }
}
function number3() {

    var current = 0,
        $preview = $('#preview'),

        $carouselEl = $('#carousel'),


        $carouselItems = $carouselEl.children(),

        carousel = $carouselEl.elastislide({
            current: current,
            minItems: 3,
            onClick: function (el, pos, evt) {

                changeImage(el, pos);
                evt.preventDefault();

            },
            onReady: function () {

                changeImage($carouselItems.eq(current), current);

            }
        });

    function changeImage(el, pos) {
        $preview.attr('src', el.data('preview'));
        $carouselItems.removeClass('current-img');
        el.addClass('current-img');
    }
}
function number2() {
   
    var current = 0,
        $preview = $('#preview'),

        $carouselEl = $('#carousel'),


        $carouselItems = $carouselEl.children(),

        carousel = $carouselEl.elastislide({
            current: current,
            minItems: 4,
            onClick: function (el, pos, evt) {

                changeImage(el, pos);
                evt.preventDefault();

            },
            onReady: function () {

                changeImage($carouselItems.eq(current), current);

            }
        });

    function changeImage(el, pos) {
        $preview.attr('src', el.data('preview'));
        $carouselItems.removeClass('current-img');
        el.addClass('current-img');
    }
}
function number1() {

    var current = 0,
        $preview = $('#preview'),

        $carouselEl = $('#carousel'),
        

        $carouselItems = $carouselEl.children(),

        carousel = $carouselEl.elastislide({
            current: current,
            minItems: 4,
            onClick: function (el, pos, evt) {

                changeImage(el, pos);
                evt.preventDefault();

            },
            onReady: function () {

                changeImage($carouselItems.eq(current), current);

            }
        });

    function changeImage(el, pos) {
        $preview.attr('src', el.data('preview'));
        $carouselItems.removeClass('current-img');
        el.addClass('current-img');
    }

};




// --------------------------台灣地圖----------------------------

$(function () {
    $.ajax({
        type: 'get',
        url: '../dest/js/map/taiwanmap/index.json',
        success: function (data) {
            pushDom(data.data);
        },

    });

    function pushDom(data1) {
        var vm = new Vue({
            el: '#app',
            data: {
                filter: "",
                peps: data1

            },

            computed: {
                now_area: function () {
                    var vobj = this;
                    var result = this.peps.filter(function (obj) {
                        return obj.number == vobj.filter;
                    });
                    // console.log(result);
                    if (result.length == 0) {
                        return null;
                    }
                    return result[0];
                }
            }
        });

        $("path").mouseenter(function (e) {
            // console.log($(this).attr("data-name"));
            var tagname = $(this).attr("data-name");
            vm.filter = tagname;

        });
    }
});

// --------------------------疫情統計----------------------------
window.addEventListener('load', function () {
    var xhr = new XMLHttpRequest();
    xhr.open('get', '../dest/js/map/striat-map/col/statistics.json', true);
    xhr.send(null);

    xhr.onload = function () {
        var str = JSON.parse(xhr.responseText);
        var divice = 0;
        var sendcheck = 0;
        var alreadycheck_checkout = 0;
        var finishdivce = 0;
        var covid_19check = 0;
        var yes_covid_19check = 0;
        var yes_sendcheck = 0;
        var yes_alreadycheckcheckout = 0;
        var diviceLen = str.length;

        for (var i = 0; i < diviceLen; i++) {
            if (str[i]['確診'] >= "0") {

                divice += parseInt(str[i]['死亡']);

                var el = document.querySelector('#dead');
                var sickTotal1 = document.createElement('div');
                sickTotal1.textContent = divice;
                el.appendChild(sickTotal1);
            };
            if (str[i]['確診'] >= "0") {

                sendcheck += parseInt(str[i]['送驗']);

                var el = document.querySelector('#sendcheck');
                var sickTotal1 = document.createElement('div');
                sickTotal1.textContent = sendcheck;
                el.appendChild(sickTotal1);
            };
            if (str[i]['確診'] >= "0") {

                alreadycheck_checkout += parseInt(str[i]['排除(新)']);

                var el = document.querySelector('#alreadycheckcheckout');
                str[i]['送驗'].value

                // console.log(str[i]['送驗']);
                var sickTotal1 = document.createElement('div');
                sickTotal1.textContent = alreadycheck_checkout;
                el.appendChild(sickTotal1);
            };
            if (str[i]['確診'] >= "0") {

                finishdivce += parseInt(str[i]['解除隔離']);

                var el = document.querySelector('#finishdivce');
                var sickTotal1 = document.createElement('div');
                sickTotal1.textContent = finishdivce;
                el.appendChild(sickTotal1);
            };
            if (str[i]['確診'] >= "0") {
                covid_19check += parseInt(str[i]['確診']);
                var el = document.querySelector('#covid_19check');
                var sickTotal1 = document.createElement('div');
                sickTotal1.textContent = covid_19check;
                el.appendChild(sickTotal1);
                yes_sendcheck += parseInt(str[i]['昨日送驗']);
                var el = document.querySelector('#yes_sendcheck');
                var sickTotal1 = document.createElement('div');
                sickTotal1.textContent = yes_sendcheck;
                el.appendChild(sickTotal1);
                yes_alreadycheckcheckout += parseInt(str[i]['昨日排除']);
                var el = document.querySelector('#yes_alreadycheckcheckout');
                var sickTotal1 = document.createElement('div');
                sickTotal1.textContent = yes_alreadycheckcheckout;
                el.appendChild(sickTotal1);
                yes_covid_19check += parseInt(str[i]['昨日確診']);
                var el = document.querySelector('#yes_covid_19check');
                var sickTotal1 = document.createElement('div');
                sickTotal1.textContent = yes_covid_19check;
                el.appendChild(sickTotal1);
            };
        };
    };
});
// --------------------------新聞頁籤----------------------------

$(function () {
    $("a.tab").on("click", function (e) {
        e.preventDefault();


        $(this).closest("ul").find("a.tab").removeClass("-on");
        $(this).addClass("-on");
        

        $("div.tab").removeClass("-on");
        $("div.tab." + $(this).attr("data-target")).addClass("-on");
        
    });
    
});

// ----------------------------------------------------------------