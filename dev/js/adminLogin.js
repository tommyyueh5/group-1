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
    if ($id('Backstage')) {
        $id('Backstage').addEventListener('click', function () {

            xhr.onload = function () {

                if (xhr.status == 200) {

                    let adminData = JSON.parse(xhr.responseText);
                    if (adminData.length == undefined) {
                        alert('你輸入的帳號密碼有誤')
                    } else {
                        isLoginAdmin(adminData);
                    }
                    // console.log(adminData.length);

                }

            }

            xhr.open('Post', '../../dest/PHP_program/admin.php');
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            let admin_info = `ID=${$id('rootName').value}&PAS=${$id('pws_box').value}`;
            xhr.send(admin_info);
            // console.log($id('rootName').value,$id('pws_box').value);

        });
    }else{
        return
    }

    function isLoginAdmin(datas) {

        if (datas && datas[0].ADMIN_ID) {
            if ($id('rootName').value == datas[0].ADMIN_ID && $id('pws_box').value == datas[0].ADMIN_PAS) {
                window.location.href = "../../dest/Back_End.html"
            }
        }

        // datas.forEach(data => {
        // ADMIN_ID: "aaa"
        // ADMIN_NAME: "Hanboy"
        // ADMIN_NO: "1"
        // ADMIN_PAS: "1111"
        // 


        // console.log(data.ADMIN_ID, data.ADMIN_PAS);


        // });

    }


});
