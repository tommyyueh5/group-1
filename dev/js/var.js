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
        $(".input_box").toggleClass("on");
    });
    
})
