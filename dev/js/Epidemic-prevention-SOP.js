window.addEventListener('load', function() {
    
    

    let joke = document.getElementById('joke');
    let miss = document.getElementById('miss');

    let slideContainer = document.getElementById('slideContainer');
    let pinContainer = document.getElementById('pinContainer');
    let mark = document.getElementById('sec1-mark');
    let hint = document.getElementById('sec1-hint');

    let mask = document.getElementById('sec1-mask');
    let maskImg = document.getElementById('sec1-mask-img');

    let equipment = document.getElementById('sec-equipment');
    let v = 0;
    let c = 1;


    let s = 0;
    let inter = 1;

    let slideContainerMove;

    let dranimate = document.getElementById('doctor');

    let pointer1 = document.getElementById('pointer-1');
    let mask1 = document.getElementById('item');
    let mask2 = document.getElementById('item2');
    let mask3 = document.getElementById('item3');
    let bag = document.getElementById('alcohol');
    let sign = document.getElementById('sign');
    document.getElementById('myMeun').style.position = "static";

    // map
    
    let Path = {
        curviness: 3,
        autoRotate: true,
        values: [
            { x: 300, y: -20 },
            { x: 450, y: 10 },
            { x: 700, y: 100 },
            { x: 950, y: -100 },
            { x: 650, y: -50 },
            { x: 800, y: 70 },
            { x: 950, y: -60 },
            { x: 1200, y: -100 },
            { x: 1400, y: 20 },
            { x: 1200, y: 80 },
            { x: 1600, y: -200 },
    
            { x: window.innerWidth, y: -150 },
        ]
    };

    if (window.innerWidth < 1200) {
        Path = {
            curviness: 3,
            autoRotate: true,
            values: [
                { x: 100, y: -20 },
                { x: 150, y: 10 },
                { x: 100, y: 100 },
                { x: 150, y: -100 },
                { x: 150, y: -50 },
                { x: 100, y: 70 },
                { x: 150, y: -60 },
                { x: 100, y: -100 },
                { x: 100, y: 20 },
                { x: 100, y: 80 },
                { x: 100, y: -200 },
                { x: window.innerWidth, y: -150 },
            ]
        }
    }
    
    let tween = new TimelineLite();
    tween.add(
        TweenLite.to('.airplane_pic', 8, {
            bezier: Path,
            ease: Power0.easeNone
        })
    );



    // plane
    // var plane = new TimelineMax();
    // plane.to('.airplane-img', 2, {
    //         y: 100,
    //         rotation: -10,
    //         scale: 1.1,
    //         ease: Power0.easeNone,
    //         delay: 5,
    //     })
    //     .to('.airplane-img', 2, {
    //         y: 200,
    //         rotation: 0,
    //         ease: Power0.easeNone,
    //         scale: 1.2,
    //     })
    //     .to('.airplane-img', 2, {
    //         y: 300,
    //         rotation: 10,
    //         ease: Power0.easeNone,
    //         scale: 1.3,
    //     })
    //     .to('.airplane-img', 2, {
    //         y: 300,
    //         rotation: 0,
    //         scale: 2,

    //     }).to('.stair-img', 1, {
    //         opacity: 1,

    //     })
    //     .to('.joke-small-img', 1, {
    //         opacity: 1,
    //     })
    //     .to(['.joke-small-img'], 1, {
    //         x: 72,
    //         ease: Power0.easeNone,
    //     })
    //     .to(['.joke-small-img'], 1, {
    //         x: 297,
    //         y: 149,
    //     })
    //     .to(['.joke-small-img'], 1, {
    //         y: 68,
    //         scale: 3.4,
    //         opacity: 0,
    //     });
    //     plane.addLabel('spin');
        // var nextLabel = getLabelAfter()
        // tl.tweenTo(nextLabel)
        //
    var plane;
    
    if (window.innerWidth<576) {
        plane = new TimelineMax();
        plane.to('.airplane-img', 2, {
                y: 100,
                rotation: -10,
                scale: 1.1,
                ease: Power0.easeNone,
                delay: 5,
            })
            .to('.airplane-img', 2, {
                y: 200,
                rotation: 0,
                ease: Power0.easeNone,
                scale: 1.2,
            })
            .to('.airplane-img', 2, {
                y: 300,
                rotation: 10,
                ease: Power0.easeNone,
                scale: 1.3,
            })
            .to('.airplane-img', 2, {
                x: -10,
                y: 320,
                rotation: 0,
                scale: 2,

            }).to('.stair-img', 1, {
                opacity: 1,

            })
            .to('.joke-small-img', 1, {
                opacity: 1,
            })
            .to(['.joke-small-img'], 1, {
                x: 18,
                ease: Power0.easeNone,
            })
            .to(['.joke-small-img'], 1, {
                x: 150,
                y: 100,
            })
            .to(['.joke-small-img'], 1, {
                y: 100,
                scale: 3.4,
                opacity: 0,
            });
        plane.addLabel('spin');

        document.getElementById('btn').addEventListener('click',function(){
            joke.style.animationName = 'stop';
            miss.style.animationDelay = '0.1s';
    
            if (document.getElementsByClassName('plane')[0]) {
                document.getElementsByClassName('plane')[0].remove();
            }
            plane.seek('spin');
            this.remove();
        });

    } else {
        timeline();
    }
    
    function timeline() {
        plane = new TimelineMax();
        plane.to('.airplane-img', 2, {
                y: 100,
                rotation: -10,
                scale: 1.1,
                ease: Power0.easeNone,
                delay: 5,
            })
            .to('.airplane-img', 2, {
                y: 200,
                rotation: 0,
                ease: Power0.easeNone,
                scale: 1.2,
            })
            .to('.airplane-img', 2, {
                y: 300,
                rotation: 10,
                ease: Power0.easeNone,
                scale: 1.3,
            })
            .to('.airplane-img', 2, {
                y: 300,
                rotation: 0,
                scale: 2,

            }).to('.stair-img', 1, {
                opacity: 1,

            })
            .to('.joke-small-img', 1, {
                opacity: 1,
            })
            .to(['.joke-small-img'], 1, {
                x: 72,
                ease: Power0.easeNone,
            })
            .to(['.joke-small-img'], 1, {
                x: 297,
                y: 149,
            })
            .to(['.joke-small-img'], 1, {
                y: 68,
                scale: 3.4,
                opacity: 0,
        });
        plane.addLabel('spin');

        document.getElementById('btn').addEventListener('click',function(){
            joke.style.animationName = 'stop';
            miss.style.animationDelay = '0.1s';
    
            if (document.getElementsByClassName('plane')[0]) {
                document.getElementsByClassName('plane')[0].remove();
            }
            plane.seek('spin');
            this.remove();
        });
    }
    
    

    // document.getElementById('btn').addEventListener('click',function(){
    //     joke.style.animationName = 'stop';
    //     miss.style.animationDelay = '0.1s';

    //     if (document.getElementsByClassName('plane')[0]) {
    //         document.getElementsByClassName('plane')[0].remove();
    //     }
    //     plane.seek('spin');
    //     this.remove();
    // });

    setTimeout(function(){
        if (document.getElementById('btn')) {
            document.getElementById('btn').remove();
        }
    },18000);

    // plane
    mask1.onclick = function() {
        // console.log(mask1, mask2, mask3);
        let tag1 = document.createElement('div');
        tag1.innerHTML = `<div id="ther" style="animation-play-state:running">
                            <img src="./image//Epidemic-prevention-SOP/ther.png" alt="">
                        </div>`;
        equipment.appendChild(tag1);
        mask1.remove();


    };
    mask2.onclick = function() {
        let tag1 = document.createElement('div');
        tag1.innerHTML = `<div id="alcohol" style="animation-play-state:running">
        <img src="./image/Epidemic-prevention-SOP/alcohol-gel.png" alt="">
        </div>`;
        equipment.appendChild(tag1);
        mask2.remove();
    };
    mask3.onclick = function() {
        let tag1 = document.createElement('div');
        tag1.innerHTML = `<div id="soap" style="animation-play-state:running">
        <img src="./image/Epidemic-prevention-SOP/soap.png" alt="">
        </div>`;
        equipment.appendChild(tag1);
        mask3.remove();
    };

    //remove map
    setTimeout(function() {
        if (document.getElementsByClassName('plane')[0]) {
            document.getElementsByClassName('plane')[0].remove();
        }
    }, 6000);




    let pin = window.getComputedStyle(slideContainer).getPropertyValue('width').slice(0,-2);
    let slider = window.getComputedStyle(pinContainer).getPropertyValue('width').slice(0,-2);
    key();
    function key() {
        window.addEventListener('keydown', function(e) {
            if (e.keyCode == 39 && c == 1) {
                c = 0;
                setTimeout(function() {
                    v += 200;
                    joke.style.backgroundPosition = `-${v}px 0px`;
                    c = 1;
                }, 200);

                if (inter == 1) {
                    slideContainerMove = setInterval(function() {
                        //
                        if (s == -1010) {
                            dranimate.style.animationPlayState = 'running';
                            mask1.style.animationPlayState = 'running';
                            mask2.style.animationPlayState = 'running';
                            mask3.style.animationPlayState = 'running';
                            pointer1.style.animationPlayState = 'running';
                            let pha = document.getElementsByClassName('pha')[0];
                            let type = document.createElement("p");
                            type.setAttribute('id', 'text');
                            pha.appendChild(type);
                            new TypeIt("#text", {
                                strings: [
                                    "您好~現在是非常時期,請記得以下幾點重要事項:",
                                    "1.記得早晚量測體溫",
                                    "2.勤用肥皂洗手",
                                    "3.定時用酒精消毒 ",
                                    "4.減少出入公共場所 ",
                                    "5.與人保持一公尺以上的社交距離",
                                ],
                                speed: 50,
                                startDelay: 2000,
                            }).go();
                        }


                       
                        if (s == -(   parseInt( window.getComputedStyle(slideContainer).getPropertyValue('width').slice(0,-2) )-my(parseInt(window.getComputedStyle(pinContainer).getPropertyValue('width').slice(0,-2)))       -5)) {
                            sign.style.animationPlayState = 'running';
                            sign.style.backgroundColor ='rgba(187, 187, 187, 0.562)';
                        }
                        if (s == -(   parseInt( window.getComputedStyle(slideContainer).getPropertyValue('width').slice(0,-2) )-my(parseInt(window.getComputedStyle(pinContainer).getPropertyValue('width').slice(0,-2)))       -5)){
                            s =( -   (parseInt( window.getComputedStyle(slideContainer).getPropertyValue('width').slice(0,-2) )-my(parseInt(window.getComputedStyle(pinContainer).getPropertyValue('width').slice(0,-2)))  -  10) );
                        }

                        
                        

                    
                        s -= 5;
                        slideContainer.style.left = `${s}px`;
                    }, 5);
                    inter = 0;
                }

            }

            window.addEventListener('keyup', function(e) {
                clearInterval(slideContainerMove);
                if (e.keyCode == 39) {
                    inter = 1;
                }
            });

            if (e.keyCode == 37 && c == 1) {
                c = 0;
                setTimeout(function() {
                    v += 200;
                    c = 1;
                    joke.style.backgroundPosition = `-${v}px 400px`;
                }, 200);

                if (inter == 1) {
                    slideContainerMove = setInterval(function() {
                        
                        if (s == 0) {
                            s = -5;
                        }
                        s += 5;
                        slideContainer.style.left = `${s}px`;
                    }, 5);
                    inter = 0;
                }
            }
            window.addEventListener('keyup', function(e) {
                clearInterval(slideContainerMove);
                if (e.keyCode == 37) {
                    inter = 1;
                }
            });
        });
    }


    //

    //


    mark.addEventListener('click', function() {
        mark.style.display = 'none';
        hint.classList.add('show-hint');
        mask.classList.add('show-mask');


        new TypeIt("#sec1-hint", {
            strings: "兒子你終於回來了，從國外回來要記得注意事項，採取居家檢疫，並隨時注意身體狀況，若有任何不適，儘速就醫，並告知醫師旅遊史及接觸史，疫情嚴重，記得配戴口罩，保謢別人也保護自己。",
            speed: 50,
            startDelay: 2000,
        }).go();
    });

    maskImg.addEventListener('click', function() {
        mask.classList.add('sec1-mask-move');
        let tag = document.createElement('div');
        tag.innerHTML = `<div class="equipment-mask-pic">
        <img class="equipment-mask-img" src="./image/Epidemic-prevention-SOP/mask.png" alt="">
        </div>`;
        equipment.appendChild(tag);
        equipment.classList.add('equip-show');
        setTimeout(function() {
            mask.remove();
        }, 4000);
    });
    
    window.addEventListener('resize', function(){
        pin = window.getComputedStyle(slideContainer).getPropertyValue('width').slice(0,-2);
        slider = window.getComputedStyle(pinContainer).getPropertyValue('width').slice(0,-2);
    });

    function my(i) {
        return parseInt(i.toString().slice(0,-1) + '0');
    }


    $('#login_btn').click((e) => {//點選註冊按鈕顯示燈箱
        $("#loginBg").toggleClass("on");
        e.stopPropagation();
        $('#sign-in').css('boxShadow', '0 0 5px rgba(0,0,0,.5)');
        $('.sign-in').css('display', 'block');
        $('.sign-up').css('display', 'none');
    })

    $('.login-Box').click((e) => {//阻斷燈箱冒泡事件
        e.stopPropagation();
    })

    $("#btnX,#loginBg,#sign-up,#sign-in").click(() => {//點選任意離開鈕清除所有欄位值
        let inputs = document.querySelectorAll('.input-data');
        inputs.forEach(input => {
            input.value = '';
        })
    });

    $("#btnX,#loginBg").click(() => {//點選關閉鈕及灰背景都可以關閉燈箱
        $("#loginBg").removeClass("on");
        $('#sign-up').css('boxShadow', '');
    });

    $('#sign-up').click(() => {//點選註冊紐切換
        $('#sign-up').css('boxShadow', '0 0 5px rgba(0,0,0,.5)');
        $('#sign-in').css('boxShadow', '');
        $('.sign-in').css('display', 'none');
        $('.sign-up').css('display', 'block');
    })
    $('#sign-in').click(() => {//點選登入紐切換
        $('#sign-in').css('boxShadow', '0 0 5px rgba(0,0,0,.5)');
        $('#sign-up').css('boxShadow', '');
        $('.sign-in').css('display', 'block');
        $('.sign-up').css('display', 'none');
    })
    $(".viveswitch").click(function() {//顯示密碼開關
        if ($(this).prop("checked")) {
            $(':password').attr('type', 'text')
        } else {
            $(':text').attr('type', 'password')
        }
    });

    $('.icofont-search').click(() => { //展開搜尋紐
        $(".input_box").toggleClass("on");
    });



    
    
});