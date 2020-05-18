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
        
        xhr.onload = function (e) {
            //成功就執行
            if (xhr.status == 200) {
                //抓取會員資料
                datamemb = JSON.parse(xhr.responseText);
                // datamemb = xhr.responseText;
                // console.log(datamemb);

                if (datamemb.memId) {
                    $id('loginBg').style.display = 'none';
                    $id("login_btn").textContent = "登出";
                    sessionStorage.setItem('memId', datamemb.memId);
                    sessionStorage.setItem('email', datamemb.email);
                    sessionStorage.setItem('memImg', datamemb.memImg);
                    sessionStorage.setItem('point', datamemb.point);
                    sessionStorage.setItem('no', datamemb.no);
                    
                    window.location.href = '../../dest/member.html'
                    $cs('member_center').classList.add('on');
                    $id('editname').value = sessionStorage.getItem('memId');
                    $id('editemail').value = sessionStorage.getItem('email');
                    $cs('member_img>img').src = sessionStorage.getItem('memImg');
                    $id('MyPoint').textContent = sessionStorage.getItem('point');
                    

                }
                if (datamemb.memId == undefined) {
                    alert("找不到該用戶");

                }

            } else {
                alert('讀取有誤');
            }

        }
        xhr.open("POST", "http://localhost/DD106g1/sessionLogin.php", true);
        // xhr.open("POST", "../../dest/php/sessionLogin.php", true);
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
            window.location.href = '../../dest/homepage.html'
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
        $cs('points').style.display = 'flex';
        $cs('member_center').classList.add('on');
    }
    let hanNo = sessionStorage.getItem('no');
    // 有session的hanNo不存在
    if (!hanNo) {
        // $id('memPoint').textContent = sessionStorage.getItem('point');
        console.log('不存在');
        return
    }else if(hanNo){
         console.log('存在');
        $id('memPoint').textContent = sessionStorage.getItem('point');
        if($id('editname')){
            $id('editname').value = sessionStorage.getItem('memId');
            $id('editemail').value = sessionStorage.getItem('email');
            $cs('member_img>img').src = sessionStorage.getItem('memImg');
            $id('MyPoint').textContent = sessionStorage.getItem('point');
        }else{
            return
        }
    }

    
});
