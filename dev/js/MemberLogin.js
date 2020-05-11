window.addEventListener('load', function () {
    function $id(id) {
        return document.getElementById(id);
    }


    // console.log($id('emeEmail').value);

    $id('submit1').addEventListener('click', function () {
        let datamemb = null;
        let xhr = new XMLHttpRequest();
        xhr.onload = function () {
            //成功就執行
            if (xhr.status == 200) {
                //抓取會員資料
                datamemb = JSON.parse(xhr.responseText)
                if (datamemb.memId) {
                    // window.location.assign('../../dest/member.html');
                    // document.querySelector('.member_name').textContent = datamemb.memId;
                    $id("login_btn").innerText = "登出";
                    sessionStorage.setItem('memId', datamemb.memId);
                    sessionStorage.setItem('email', datamemb.email);
                    sessionStorage.setItem('memImg', datamemb.memImg);
                    sessionStorage.setItem('point', datamemb.point);
                    // $id('loginBg').style.display = 'none'   
                } else if (datamemb.memId == undefined) {
                    alert("找不到該用戶");
                }
            } else {
                alert('讀取有誤');
                // console.log(xhr.status);
            }
        }

        xhr.open("POST", "http://localhost/DD106g1/sessionLogin.php", true);
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        let data_info = `emeEmail=${$id('emeEmail').value}&emePaw=${$id('emePaw').value}`;
        xhr.send(data_info);
    })





});
