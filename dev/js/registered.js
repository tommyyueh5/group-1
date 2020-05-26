function $id(id) {

    return document.getElementById(id);
}

function $cs(cs) {
    return document.querySelector('.' + cs);
}

window.addEventListener('load', () => {
    // 在登入前判定資料庫是不是有人註冊 
    // 如果有人註冊過
    // 就回應已被註冊
    // 如果沒有 就顯示可以註冊
    // 才可以點擊登入
    // 不然點擊登入都是會告知狀況

    let xhr = new XMLHttpRequest();
    
    $id('RG_Email').addEventListener('change', function () {
        emailHandler();

    })
    if ($cs('submit2')) {
        $cs('submit2').addEventListener('click', function (e) {
            e.stopPropagation();
            // ==============註冊信箱判定=========================
                let RE =  ($id('RG_Email').value).trim();
                let RN =  ($id('RG_Name').value).trim();
                let RP =  ($id('RG_Pwd').value).trim();
                
                
            if (RE.length == 0) {
                alert('您的信箱長度不能為空值');
                return
            }
            if (RN.length == 0) {
                alert('您的名稱長度不能為空值');
                return
            }
            if (RP.length == 0) {
                alert('您的密碼長度不能為空值');
                return
            }

            let isOpen = sessionStorage.getItem('open')
            // =================註冊信箱判定======================
            if (isOpen == 200) {
                let isOk = JSON.parse(sessionStorage.getItem('isdone'))
                console.log(isOk.isJudgeDone);
                
                if (isOk.isJudgeDone == false) {
                    xhr.onload = function () {
                        if (xhr.status == 200) {

                            sessionStorage.clear();
                            alert(xhr.responseText)
                            window.location.href = './homepage.html';
                        }
                    }

                    xhr.open("POST", "./PHP_program/registered.php",true);
                    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
                    let registerd_info = `RG_Email=${$id('RG_Email').value}&RG_Name=${$id('RG_Name').value}&RG_Pwd=${$id('RG_Pwd').value}`;
                    console.log(registerd_info);
                    xhr.send(registerd_info);

                } else {
                    alert('帳號已被註冊');
                }
            }
        })

    }
    // ===============資料驗證判斷=======
    function emailHandler() {
        let Done = {
            isrule: false,
            isJudgeDone: true
        };
        
        sessionStorage.setItem('isdone', JSON.stringify(Done))
        let JudgeXhr = new XMLHttpRequest();
        emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
        // 如果email內格式正確就撈取資料,再查看資料庫資料是否有重複
        if (emailRule.test(($id('RG_Email').value))) {
            Done.isrule = true;
            JudgeXhr.onload = function () {
                if (Done.isrule) {
                    //資料庫如果給的值是true就代表以(有重複)，給false(就代表可以使用)
                    
<<<<<<< HEAD
                    
                    num = JudgeXhr.responseText.indexOf('false');
                    
                    Done.isJudgeDone = JudgeXhr.responseText.substring(num,JudgeXhr.responseText.length) == 'false'? false:null;
                    // console.log(Done.isJudgeDone);
                    console.log(JSON.stringify(Done));
=======
                    num = JudgeXhr.responseText.indexOf('false');
                    Done.isJudgeDone = JudgeXhr.responseText.substring(num,JudgeXhr.responseText.length);

>>>>>>> c43fee8a269a64449919ab1f2536f981c5f1f107
                    sessionStorage.setItem('isdone',JSON.stringify(Done));
                    sessionStorage.setItem('open', JudgeXhr.status);
                }
            }
            JudgeXhr.open("POST", "./PHP_program/registeredJudge.php", true)
            JudgeXhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            let Judge_info = `RG_Email=${$id('RG_Email').value}`;
            JudgeXhr.send(Judge_info)

        } else {
            sessionStorage.clear();
        }
    }
})