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
        mousewheel: {
            forceToAxis: true,
            invert: true,
            sensitivity: 1,
        },

    });
})



// swiper.on('slideChange',function(){
//     // swiper.params.effect = "coverflow";
//     // console.log(123);

//     // swiper.params.effect === "coverflow"
//     if(swiper.params.effect == "coverflow"){
//         return swiper.params.effect = 'flip';
//     }else if(swiper.params.effect == 'flip'){
//         return swiper.params.effect = 'coverflow';
//     }
// })

//pagepiling js
// $(document).ready(function () {
//     $('#pagepiling').pagepiling({
//         menu: null,
//         direction: 'vertical',
//         verticalCentered: true,
//         sectionsColor: [],
//         anchors: [],
//         scrollingSpeed: 700,
//         easing: 'swing',
//         loopBottom: false,
//         loopTop: false,
//         css3: true,
//         navigation: false,
//         normalScrollElements: null,
//         normalScrollElementTouchThreshold: 5,
//         touchSensitivity: 5,
//         keyboardScrolling: true,
//         sectionSelector: '.section',
//         animateAnchor: false,

//         //events
//         onLeave: function (index, nextIndex, direction) { },
//         afterLoad: function (anchorLink, index) { },
//         afterRender: function () { },
//     });
// });
