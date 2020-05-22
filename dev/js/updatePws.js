function $id(id) {

    return document.getElementById(id);
}

function $cs(cs) {
    return document.querySelector('.' + cs);
}

window.addEventListener('load', function () {
    let xhr = new XMLHttpRequest();
    //當點擊確認時執行以下
    $id('pwsSumit').addEventListener('click', function () {
        //判斷變更及確認必須要一樣及不能空值,不一樣則告知
        if ($id('pws2').value == $id('pws1').value || $id('pws1').value == '' && $id('pws2').value == '') {
            // 當修改成功就更改儲存到session
            sessionStorage.setItem('showPws', $id('pws2').value);
            // 密碼直接變更
            $id('showPws').textContent = sessionStorage.getItem('showPws');
            // 用ajax傳到後端處理
            xhr.onload = function () {
                //接收後端傳來資料
                if (xhr.status == 200) {
                    // 將修改的密碼變成空白
                    $id('pws1').value = '';
                    $id('pws2').value = '';
                    // 返回首頁將session清除
                    sessionStorage.clear();
                    // 請使用者再次登入新密碼
                    alert(xhr.responseText);
                    // 登出
                    window.location.href = '../../dest/homepage.html';
                }
            }
            xhr.open('post', '../../dest/PHP_program/updatePws.php',true);
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            let pws_info = `showPws=${sessionStorage.getItem('showPws')}&no=${sessionStorage.getItem('no')}`;
            // 新密碼及編號傳送到後端修改
            xhr.send(pws_info);

        } else {
            alert('您的變更密碼與確認密碼不一')
        }

    })

    // function PwsHandler(dates) {
    //     sessionStorage.setItem('showPws', dates.showPws);
    //     // 將原本顯示舊密碼部分修改顯示
    //     console.log($id('showPws'));
    //     // 密碼直接變更
    //     // $id('showPws').textContent = sessionStorage.getItem('showPws');




});
