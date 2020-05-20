function $id(id) {
    return document.getElementById(id);
}

function $cs(cs) {
    return document.querySelector('.' + cs);
}


window.addEventListener('load', () => {
    let xhr = new XMLHttpRequest();
    // 當點擊時登入時
    // 取資料庫資料
    // 確定帳號及密碼有值及是不是資料庫中的資料
    // 如果是就到後台
    // 如果不是就告知他輸入帳號密碼部正確

    $id('Backstage').addEventListener('click', function() {

        xhr.onload = function() {

            if (xhr.status == 200) {
                let admindata = JSON.parse(xhr.responseText)
                if ($id('rootName').value && $id('pws_box').value) {}

            }
        }

        xhr.open('post', 'http://localhost/DD106g1/admin.php');
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhr.send(null);
        // console.log(123);

        // $id('rootName').value;
        // $id('pws_box').value;
    });




});