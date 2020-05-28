$(document).ready(() => {//html載入完再執行

    $('#login_btn').click((e) => {//點選註冊按鈕顯示燈箱
        $("#loginBg").addClass("open");
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

    // $("#btnX,#loginBg").click(() => {//點選關閉鈕及灰背景都可以關閉燈箱
    //     $("#loginBg").removeClass("on");
    //     $('#sign-up').css('boxShadow', '');
    // });

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
        if($("#emePaw")[0].type == "text"){
            $("#emePaw")[0].type = "password"
            $('.icofont-eye-alt')[0].className = "viveswitch icofont icofont-eye-blocked";
        }else{
            $("#emePaw")[0].type = "text"
            $('.icofont-eye-blocked')[0].className = "viveswitch icofont icofont-eye-alt";
        }
    });

    $("#viveswitch").click(function () {//顯示密碼開關Ç
        if($("#RG_Pwd")[0].type == "text"){
            $("#RG_Pwd")[0].type = "password"
            $('#viveswitch')[0].className = "viveswitch icofont icofont-eye-blocked";
        }else{
            $("#RG_Pwd")[0].type = "text"
            $('#viveswitch')[0].className = "viveswitch icofont icofont-eye-alt";
        }
    });


    // $('.icofont-search').click(() => { //展開搜尋紐
    //     $(".input_box").toggleClass("on");
    // });

    let menuSwitch = document.querySelector('#menu_switch');
    let titleList = document.querySelector('.title_list');
    let mainBox = document.querySelector('.main_box');
    menuSwitch.addEventListener('click', () => {
        titleList.classList.toggle('move');
        for (let i = 0; i < 3; i++) {
            menuSwitch.children[i].classList.toggle('change');
        }
    });
    let changePage = document.querySelector('.changePage');
    // let icofontSearch = document.querySelector('.icofont-search');
    let fuctionSearch = document.querySelector('.fuction_search');
    let markBar = document.querySelector('.mark_bar');
    let inputBox = document.querySelector('#search')

    mainBox.addEventListener('click', () => {
        titleList.classList.toggle('move');
        inputBox.classList.remove('on');
    });
    markBar.addEventListener('click', (e) => {
        e.stopPropagation();
    });
    changePage.addEventListener('click', (e) => {
        e.stopPropagation();
    });


    let tit = document.getElementById('bread');
    let ch = document.getElementsByClassName('changePage');
    for (let i =0; i<ch.length;i++) {
        if (  tit.textContent== ch[i].children[0].textContent   ) {
            ch[i].children[0].classList.add('move');
        }
    }


});



