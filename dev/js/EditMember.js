window.addEventListener('load', function () {
    //更改會員資料
    function $id(id) {

        return document.getElementById(id);
    }

    function $cs(cs) {
        return document.querySelector('.' + cs);
    }
    let editname, editemail;
    let PHPNO = sessionStorage.getItem('no');
    // console.log(PHPNO);

    // 編輯個人資料
    $cs('edit').addEventListener('click', function (e) {
        e.stopPropagation();
        // 可編輯名稱及信箱及照片

        // $id('editname').addEventListener('change', function (e) {
        //     e.stopPropagation();
        // sessionStorage.setItem('memId', $id('editname').value);
        // editname = sessionStorage.getItem('memId');
        // console.log($id('editname').onchange);
        // console.log(e.currentTarget.value);
        // }, true);
        // $id('editemail').addEventListener('change', function (e) {
        //     e.stopPropagation();
        // sessionStorage.setItem('email', $id('editemail').value);
        // editemail = sessionStorage.getItem('email');
        // console.log(e.currentTarget.value);
        // }, true);

        // 編輯完信箱後可以儲存並傳回資料庫更新


        let xhrEdit = new XMLHttpRequest();
        console.log(xhrEdit);

        $id('save').addEventListener('click', function (e) {
            e.stopPropagation();

            sessionStorage.setItem('memId', $id('editname').value);
            editname = sessionStorage.getItem('memId');
            sessionStorage.setItem('email', $id('editemail').value);
            editemail = sessionStorage.getItem('email');

            // xhrEdit.onload = function (e) {
            // if (xhrEdit.status == 200) {
            //     let correct = JSON.parse(xhrEdit.responseText)
            //     console.log(correct.success);


            // }
            // }
            //ftp需跟改=================================================================
            xhrEdit.open("POST", "../../dest/php/EditMem.php", true);

            xhrEdit.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            let data_info;
            data_info = `editname=${editname}&editemail=${editemail}&PHPNO=${PHPNO}`;
            // data_info = `editname=${editname}`;
            console.log(data_info);


            xhrEdit.send(data_info);



        }, true);

    }, true);

})
