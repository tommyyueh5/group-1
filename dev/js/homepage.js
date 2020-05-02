document.write("<script type='text/javascript' src='../dest/js/var.js'></script>");

//swiper---------------------------------------------------------------------
$(window).ready(function() {
        var swiper1 = new Swiper('.swiper-container ', {
            direction: 'vertical',
            speed: 1000,
            // spaceBetween: 500,
            autoHeight: true,
            effect: "slide",
            watchOverflow: true,
            loop: true,
            grabCursor: true,
            touchAngle: 45,

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                // dynamicBullets:true,
                renderBullet: function(index, className) {
                    // let year = Array.from(document.querySelectorAll('.swiper-slide'))[index];
                    let year = document.querySelectorAll('.data')[index + 1].getAttribute('data-year');
                    return `<span class="${className}"> ${year} </span>`;
                },
            },

            cubeEffect: {
                slideShadows: true,
                shadow: true,
            },


        });
    })
    // -----SOP--------------------------------------------------------------------------------
window.addEventListener('load', function() {
    let h = document.getElementsByClassName('fluid')[0];
    let thermometer = document.getElementsByClassName('sop-thermometer')[0];
    let v = 0;
    let c = true;
    let clear;

    setInterval(function() {
        v += 5;
        h.style.height = `${check(v)}%`;
        document.getElementsByClassName('base')[0].innerHTML = `${check(v)}<sup>o</sup>`;
        if (v == 45) {
            v = 0;
        }

    }, 500);
    //檢查是否大於 10 
    function check(number) {
        if (number <= 5) {
            number = "0" + number;
            return number;
        } else {
            number = parseInt(number);
            return number;
        }
    }
});

window.addEventListener('load', function() {
    let washHand = document.getElementsByClassName('wash-hand')[0];
    let sopWater = document.getElementsByClassName('sop-water');
    washHand.addEventListener('mouseover', function() {
        sopWater[0].classList.add('-w1');
        sopWater[1].classList.add('-w2');
        sopWater[2].classList.add('-w3');
    });
    washHand.addEventListener('mouseleave', function() {
        sopWater[0].classList.remove('-w1');
        sopWater[1].classList.remove('-w2');
        sopWater[2].classList.remove('-w3');
    });
});
// -----you can also like:--------------------------------------------------------------------------------

// window.addEventListener('load',function(){

var swiper2 = new Swiper('.swiper-container-games', {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    setWrapperSize: true,
    width: 1600,
    // autoWidth:true,
    loop: true,

    // slideNextClass : 'mynext',
    // slidePrevClass : 'myprev',
    // init: true,
    pagination: {
        el: '.paginations',
        clickable: true,
        dynamicBullets: true,
    },

    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    }
    //   });
});
// 即時訊息=================================================

window.addEventListener('load', function() {

    let taiwanplp = ['台北市:116',
            '台中市:40',
            '台南市:16',
            '高雄市:44',
            '基隆市:7',
            '新竹市:11',
            '嘉義市:4',
            '新北市:90',
            '桃園市:51',
            '新竹縣:6',
            '宜蘭縣:2',
            '苗栗縣:3',
            '彰化縣:18',
            '南投縣:2',
            '雲林縣:5',
            '嘉義縣:2',
            '屏東縣:12',
            '澎湖縣:0',
            '花蓮縣:0',
            '台東縣:0',
            '金門縣:0',
            '連江縣:0'
        ]
        // let showtext = document.querySelector('.textillate-Start');
    let type = new Typed('#textillate-Start', {
        strings: taiwanplp,
        typeSpeed: 0,
        fadeOut: true,
        loop: true,
        smartBackspace: false,

    });
});