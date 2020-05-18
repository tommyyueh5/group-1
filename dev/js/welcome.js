window.addEventListener('load', () => {
    function $id(id) {
        return document.getElementById(id);
    }
    function $cs(cs) {
        return document.querySelector('.' + cs);
    }
    function $csa(csa) {
        return document.querySelectorAll('.' + csa);
    }
    $csa('change_stage')[0].addEventListener('click', () => {
        //左側大標切換
        $id('front').classList.toggle('changeF')
        $id('back').classList.toggle('changeB')

        //右側登入切換
        $id('Front_login').classList.toggle('loginF')
        $id('Back_login').classList.toggle('loginB')
    })
    //訪客登入跳轉
    $id('in_homepage').addEventListener('click', () => {
        window.location.href = '../dest/homepage.html';
    });

    //密碼顯示切換
    $cs('icofont').addEventListener('click', () => {
        if ($id('pws_box').type == "password") {
            $id('pws_box').type = "text";
        } else {
            $id('pws_box').type = "password";
        }
        //顯示icon切換
        if ($cs('icofont').className == "icofont icofont-eye-blocked") {
            $cs('icofont-eye-blocked').className = "icofont icofont-eye-alt";
        } else {
            $cs('icofont-eye-alt').className = "icofont icofont-eye-blocked";
        }
    });
});
