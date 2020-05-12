function $id(id) {

    return document.getElementById(id);
}

function $cs(cs) {
    return document.querySelector('.' + cs);
}
// 如果session有資料渲染全部頁面登入
window.addEventListener('load', function () {


    let textError = document.createElement('span');
    textError.classList.add('textError');
    textError.textContent = '帳號密碼有誤請重新輸入';
    let loginBox = $cs('login-Box');
    // console.log(loginBox);


    // 在登出的狀況下點擊會員中心 



    let datamemb = null;
    $id('submit1').addEventListener('click', function (e) {
        let xhr = new XMLHttpRequest();


        xhr.onload = function (e) {
            //成功就執行
            if (xhr.readyState == 4) {
                //抓取會員資料
                datamemb = JSON.parse(xhr.responseText);
                console.log(datamemb);


                // console.log(datamemb);

                if (datamemb.memId) {
                    $id('loginBg').style.display = 'none';
                    $id("login_btn").textContent = "登出";
                    sessionStorage.setItem('memId', datamemb.memId);
                    sessionStorage.setItem('email', datamemb.email);
                    sessionStorage.setItem('memImg', datamemb.memImg);
                    sessionStorage.setItem('point', datamemb.point);
                    $cs('member_center').classList.add('on');
                    $cs('member_name').textContent = sessionStorage.getItem('memId');
                    $cs('member_email').textContent = sessionStorage.getItem('email');
                    $cs('member_img>img').src = sessionStorage.getItem('memImg');
                    $cs('memPoint').textContent = sessionStorage.getItem('point');
                    // $cs('member_email').textContent = datamemb.email;
                    // $cs('memPoint').textContent = datamemb.point;

                    // $cs('member_name').textContent
                    // console.log($cs('member_name').textContent);

                }
                if (datamemb.memId == undefined) {
                    alert("找不到該用戶");

                }

            } else {
                alert('讀取有誤');
            }

        }
        xhr.open("POST", "http://localhost/DD106g1/sessionLogin.php", true);
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        let data_info = `emeEmail=${$id('emeEmail').value}&emePaw=${$id('emePaw').value}`;
        xhr.send(data_info);
    })


    let isLogin = sessionStorage.getItem('memId');
    let isflag = $id('login_btn').children[0].textContent;
    console.log(isLogin);
    // 如果我點擊登出 就清除所有session資料,並資訊變登入
    $id("login_btn").addEventListener('click', function () {
        if ($id("login_btn").textContent == '登出') {
            sessionStorage.clear();
        } else {
            return
        }
    })
    // sessionStorage.clear();
    if (!isLogin || isLogin == null) {
        $id("login_btn").textContent = "登入";
        // $id('loginBg').classList.add('on');
        // $cs('points').style.display = 'none'
        $cs('member_center').classList.remove('on');
    } else if (isLogin) {
        $id('login_btn').textContent = '登出';
        $id('loginBg').classList.remove('on');
        $cs('member_center').classList.add('on');
        // $cs('points').style.display = 'block'

    }

    if(sessionStorage.length == 4){
    // $cs('member_center').addEventListener('click',function(){
        $cs('member_name').textContent = sessionStorage.getItem('memId');
        $cs('member_email').textContent = sessionStorage.getItem('email');
        $cs('member_img>img').src = sessionStorage.getItem('memImg');
        $cs('memPoint').textContent = sessionStorage.getItem('point');
    // })
}






});




