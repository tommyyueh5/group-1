document.write("<script type='text/javascript' src='/dev/js/var.js'></script>");

//swiper---------------------------------------------------------------------
$(window).ready(function () {
    var swiper = new Swiper('.swiper-container ', {
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
            renderBullet: function (index, className) {
                // let year = Array.from(document.querySelectorAll('.swiper-slide'))[index];
                let year = document.querySelectorAll('.data')[index + 1].getAttribute('data-year');
                return `<span class="${className}"> ${year} </span>`;
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        cubeEffect: {
            slideShadows: true,
            shadow: true,
        },
        

    });
})
// -----SOP--------------------------------------------------------------------------------
        window.addEventListener('load', function () {
            let h = document.getElementsByClassName('fluid')[0];
            let thermometer = document.getElementsByClassName('sop-thermometer')[0];
            let v = 0;
            let c = true;
            let clear;

            setInterval(function () {
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

        window.addEventListener('load', function () {
            let washHand = document.getElementsByClassName('wash-hand')[0];
            let sopWater = document.getElementsByClassName('sop-water');
            washHand.addEventListener('mouseover', function () {
                sopWater[0].classList.add('-w1');
                sopWater[1].classList.add('-w2');
                sopWater[2].classList.add('-w3');
            });
            washHand.addEventListener('mouseleave', function () {
                sopWater[0].classList.remove('-w1');
                sopWater[1].classList.remove('-w2');
                sopWater[2].classList.remove('-w3');
            });
        });