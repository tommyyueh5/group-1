function $id(id) {

    return document.getElementById(id);
}

function $cs(cs) {
    return document.querySelector('.' + cs);
}

window.addEventListener('load',function(){
    let no = sessionStorage.getItem('no');
    // console.log(no);
    
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.status == 200){
           let importData = JSON.parse(xhr.responseText) ;
            // 資料處理
            // console.log(importData);
            
            if (importData.length == undefined){
                return
            }else{
                MemMegHandler(importData);
            }
        }
    }
    xhr.open("POST", "./PHP_program/MEM_Meg.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded")
    xhr.send(`no=${no}`);

  
});
function MemMegHandler(datas){
    const contaniner = $cs('tab2');

        datas.forEach(data=>{
             let ele = document.createElement('div');
                ele.classList.add('record');
                ele.innerHTML = `
                <div class="topic">
                    <h2>${data.DIS_TIT}</h2>
                </div>
                <div class="comment">
                    <img  src="${sessionStorage.getItem('memImg')}">
                    <h2>${sessionStorage.getItem('memId')}</h2>:
                    <p>${data.COM_CON}</p>
                </div>
                <div class="theme">
                    <h3>討論區<br>${data.DIS_COM_C}<br>${data.COM_DATE}</h3>
                </div>
        `;
        contaniner.appendChild(ele);
        })

}

