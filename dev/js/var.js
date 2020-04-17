$(window).ready(() => {
    $('#login-btn').click((e) => {
        $("#loginBg").toggleClass("on");
        e.stopPropagation();
        $('#sign-in').css('boxShadow', '0 0 5px rgba(0,0,0,.5)');
        $('.sign-in').css('display', 'block');
        $('.sign-up').css('display', 'none');
    })

    $('.login-Box').click((e) => {
        e.stopPropagation();
    })

    $("#btnX,#loginBg,#sign-up,#sign-in").click(() => {
        let inputs = document.querySelectorAll('.input-data');
        inputs.forEach(input => {
            input.value = '';
        })
    });

    $("#btnX,#loginBg").click(() => {
        $("#loginBg").removeClass("on");
        $('#sign-up').css('boxShadow', '');
    });

    $('#sign-up').click(() => {
        $('#sign-up').css('boxShadow', '0 0 5px rgba(0,0,0,.5)');
        $('#sign-in').css('boxShadow', '');
        $('.sign-in').css('display', 'none');
        $('.sign-up').css('display', 'block');
    })
    $('#sign-in').click(() => {
        $('#sign-in').css('boxShadow', '0 0 5px rgba(0,0,0,.5)');
        $('#sign-up').css('boxShadow', '');
        $('.sign-in').css('display', 'block');
        $('.sign-up').css('display', 'none');
    })
    $(".viveswitch").click(function() {
        if ($(this).prop("checked")) {
            $(':password').attr('type', 'text')
        } else {
            $(':text').attr('type', 'password')
        }
    });
})
