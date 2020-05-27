function $id(id) {

    return document.getElementById(id);
}

function $cs(cs) {
    return document.querySelector('.' + cs);
}
// 如果session有資料渲染全部頁面登入
window.addEventListener('load', function () {

    // console.log(loginBox);
    // 點擊打叉就返回上一頁
    // if(!$id(btnX)){
    //     return
    // }else{
    //     $id(btnX).addEventListener('click',function(e){
    //         e.stopPropagation();
    //         this.href = history.go(-1);
    //     });
    // }
    // 在登出的狀況下點擊會員中心 

    let datamemb = null;
    let xhr = new XMLHttpRequest();
    $cs('submit1').addEventListener('click', function (e) {

        xhr.onload = function () {
            //成功就執行
            if (xhr.status == 200) {
                //抓取會員資料
                datamemb = JSON.parse(xhr.responseText);
                console.log(datamemb.mem_state);


                if (datamemb.memId) {
                    sessionStorage.setItem('memId', datamemb.memId);
                    sessionStorage.setItem('memImg', datamemb.memImg);
                    sessionStorage.setItem('email', datamemb.email);
                    sessionStorage.setItem('showPws', datamemb.showPws);
                    sessionStorage.setItem('point', datamemb.point);
                    sessionStorage.setItem('no', datamemb.no);
                    sessionStorage.setItem('boolen', datamemb.boolen);
                    sessionStorage.setItem('gamedate', datamemb.gamedate);
                    if (datamemb.mem_state == 0) {
                        alert('您的帳號已被停權');
                        sessionStorage.clear();
                        return
                    }
                    $id('loginBg').style.display = 'none';
                    $id("login_btn").textContent = "登出";

                    window.location.href = './member.html'
                    $cs('member_center').classList.add('on');
                    $id('editname').value = sessionStorage.getItem('memId');
                    $id('editemail').value = sessionStorage.getItem('email');
                    $cs('member_img>img').src = sessionStorage.getItem('memImg');
                    $id('MyPoint').textContent = sessionStorage.getItem('point');
                    $id('showPws').textContent = sessionStorage.getItem('showPws');


                } else if (datamemb.memId == undefined) {
                    alert("找不到該用戶");
                }
                // if (datamemb.memId == undefined) {

                // }

            } else {
                alert('讀取有誤');
            }

        }

        xhr.open("POST", "./PHP_program/sessionLogin.php", true);
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        let data_info = `emeEmail=${$id('emeEmail').value}&emePaw=${$id('emePaw').value}`;
        xhr.send(data_info);

    })


    let isLogin = sessionStorage.getItem('memId');
    // console.log(isLogin);
    // 如果我點擊登出 就清除所有session資料,並資訊變登入
    $id("login_btn").addEventListener('click', function () {
        if ($id("login_btn").textContent == '登出') {
            sessionStorage.clear();
            window.location.href = './homepage.html'
        } else {
            return
        }
    })
    // sessionStorage.clear();
    if (!isLogin || isLogin == null) {
        $id("login_btn").textContent = "登入";
        $cs('points').style.display = 'none';
        $cs('member_center').classList.remove('on');
    } else if (isLogin) {
        //Login到會員時hander上面都要列出資料
        $id('login_btn').textContent = '登出';
        $id('loginBg').classList.remove('on');
        // $cs('points').style.display = 'flex';
        $cs('member_center').classList.add('on');
    }
    let hanNo = sessionStorage.getItem('no');
    // 有session的hanNo不存在
    if (!hanNo) {
        // $id('memPoint').textContent = sessionStorage.getItem('point');
        // console.log('不存在');
        return
    } else if (hanNo) {
        // console.log('存在');
        // $id('memPoint').textContent = sessionStorage.getItem('point');
        if ($id('editname')) {
            $id('editname').value = sessionStorage.getItem('memId');
            $id('editemail').value = sessionStorage.getItem('email');
            $cs('member_img>img').src = sessionStorage.getItem('memImg');
            $id('MyPoint').textContent = sessionStorage.getItem('point');
            $id('showPws').textContent = sessionStorage.getItem('showPws');
            // !!密碼
        } else {
            return
        }
    }


});
