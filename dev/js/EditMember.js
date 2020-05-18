window.addEventListener('load', function () {
    //更改會員資料
    function $id(id) {

        return document.getElementById(id);
    }

    function $cs(cs) {
        return document.querySelector('.' + cs);
    }
    let editname, editemail, editimg;
    let PHPNO = sessionStorage.getItem('no');
    let xhrEdit = new XMLHttpRequest();
    let Reader = new FileReader();




    // console.log(PHPNO);

    // 編輯個人資料
    $cs('edit').addEventListener('click', function (e) {
        e.stopPropagation();

        // 可編輯名稱及信箱及照片
        // 編輯完信箱後可以儲存並傳回資料庫更新

        // console.log($id('editimage'));

        $id('editimage').addEventListener('change', imgHandler);


        $id('save').addEventListener('click', function (e) {
            e.stopPropagation();

            // 將資料暫存在session
            sessionStorage.setItem('memId', $id('editname').value);
            editname = sessionStorage.getItem('memId');
            sessionStorage.setItem('email', $id('editemail').value);
            editemail = sessionStorage.getItem('email');
            editimg = sessionStorage.getItem('memImg');

            // console.log(editimg);



            //ftp需更改=================================================================
            // xhrEdit.open("POST", "http://localhost/DD106g1/EditMem.php", true);
            xhrEdit.open("POST", "../../dest/PHP/EditMem.php", true);

            xhrEdit.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            // 欲將資料傳入資料庫前準備
            let data_info = `editname=${editname}&editemail=${editemail}&editimg=${editimg} &PHPNO=${PHPNO}`;
            // console.log(data_info);
            xhrEdit.send(data_info);
        })

    }, true);


    function imgHandler(e) {
        const xhrsend = new XMLHttpRequest();
        const formData = new FormData();
        // 獲取檔案放到php
        Reader.readAsDataURL(e.target.files[0]);

        // =============測試用=============
        // xhrsend.onload = function(){
        //     if (xhrsend.status == 200) {
        //         console.log(xhrsend.responseText);
        //     }
        // }
        // =============測試用=============        
        // 將圖片資料及會員編號暫存到formData內
        formData.append('one', e.target.files[0], sessionStorage.getItem('no'));
        // xhrsend.open("post","http://localhost/DD106g1/uploadIMG.php");
        xhrsend.open("post", "../../dest/image/mem_image/uploadIMG.php");
        // xhrsend.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhrsend.send(formData);






        Reader.addEventListener('load', function () {
            // 判斷檔案是否為jpg||png
            let reg = /jpeg|png/;
            let ImgLS = this.result.split(',')[0].indexOf('/');
            let ImgLE = this.result.split(',')[0].indexOf(';');
            let isImg = this.result.split(',')[0].substring(ImgLS + 1, ImgLE)
            let imgName = sessionStorage.getItem('no');

            if (reg.test(isImg)) {
                // 檔案正確就繼續執行
                console.log('檔案正確');
                $cs('thumbnail').src = this.result;
                // update後到sesssion並img更改名稱   需要注意路徑問題
                sessionStorage.setItem('memImg', `../../dest/image/mem_image/${imgName}.${isImg}`);

            } else {
                console.log('檔案格式有誤');
            }

        });
    }

    //   function ImgFileLoading(ImgData,formData){

    //   }


})
