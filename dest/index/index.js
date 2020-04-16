$(window).ready(function(){
    $('#login-btn').click(function(e){
        $("#loginBg").toggleClass("on");
        e.stopPropagation();
    })

    $('.login-Box').click(function(e){
        e.stopPropagation();
    })

    $("#btnX,#loginBg").click(function(){
        $("#loginBg").removeClass("on");
    });
})
