function $id(id) {

    return document.getElementById(id);
}

function $cs(cs) {
    return document.querySelector('.' + cs);
}

window.addEventListener('load',function(){
    let no = sessionStorage.getItem('no');    
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.status == 200){
           let importData = JSON.parse(xhr.responseText) ;
            // 資料處理
            // console.log(importData);
            // console.log(importData.length);
            
            if(importData.length == undefined){
                return
            }else{
                MemReortHandler(importData);
            }
        }
    }
    xhr.open("POST", "./PHP_program/MEM_Report.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded")
    xhr.send(`no=${no}`);

});

function MemReortHandler(datas){

    const contaniner = $cs('tab3');
        datas.forEach(data=>{
             let reEle = document.createElement('div');
             reEle.classList.add('report');
             reEle.innerHTML = `
                <div class="title">
                    <h2>${data.DIS_TIT}</h2>
                </div>
                <div class="content">
                    <h3>${data.REP_C_REA}</h3>
                    <h3>${data.REP_DATE}</h3>
                </div>
                <div class="condition">
                    <h3>${data.VER_SIT == 2 ? '通過': data.VER_SIT == 1 ?'未通過':"未審核"}</h3>
                </div>
        `;
        contaniner.appendChild(reEle);
        })
}


// 檢舉:
// discussion檢舉哪篇文章的人及文章 取DIS_TIT 及 MEM_NO
//  Report 檢舉的人  MEM_NO
//  
//  REP_C_NO(類別編號與report_class的類別判別對應)
//  VER_SIT(狀態:審核狀態(0:未審核 1:未通過 2:通過)) 
