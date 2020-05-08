$(window).ready(() => {//html載入完再執行
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
    $(".viveswitch").click(function () {//顯示密碼開關
        if ($(this).prop("checked")) {
            $(':password').attr('type', 'text')
        } else {
            $(':text').attr('type', 'password')
        }
    });

    $('.icofont-search').click(() => { //展開搜尋紐
        let search_switch = document.body.clientWidth;
        if (search_switch < 1100) {
            $(".title_list").toggleClass("on");
        } else {
            $(".input_box").toggleClass("on");
        }
    });
    // let search_switch = document.body.clientWidth
    // function shadowBtn() {
    //     let Btn = document.querySelector('#btn');
    //     Btn.addEventListener('mousedown', function () {
    //         this.classList.add("on");
    //         Btn.addEventListener('mouseup', function () {
    //             this.classList.remove("on")
    //         });
    //     });
    // };
    // shadowBtn();
    function rotate_menu() {
        let menu_list = document.querySelector('#menu_list');

        let search_btn = document.querySelector('.fuction_search');

        let mark_bar = document.querySelectorAll('.mark_bar');

        //阻斷冒泡
        search_btn.addEventListener("click", function (e) {
            e.stopPropagation();
        });
        //阻斷冒泡
        mark_bar[0].addEventListener("click", function (e) {
            e.stopPropagation();
        });
        //菜單開關
        menu_list.addEventListener("click", function () {
            mark_bar[0].classList.toggle('on');
        });
    }
    rotate_menu();
});



