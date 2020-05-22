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
            // console.log(xhr.responseText);
           let importData = JSON.parse(xhr.responseText) ;
        //    let importData = xhr.responseText;
            MemDiscHandler(importData);
        //    console.log(Array.from(importData).forEach);
        
           
        }
    }
    xhr.open("POST", "../../dest/PHP_program/MEM_Disc.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded")
    xhr.send(`no=${no}`);

  
});
function MemDiscHandler(datas){
    const contaniner = $cs('tab1');
    
    // let render = 

    // console.log(datas);
    

    Array.from(datas).forEach((data,index)=>{
        let ele = document.createElement('div');
        ele.classList.add('tab_text');
        ele.innerHTML = `
        <div class="content_img">
        <img class="disc_img" src="${data.DIS_IMG_PATH}">
    </div>
    <div class="contents">
        <h2 class="disc_title">${data.DIS_TIT}</h2>
        <p class="disc_content">${data.DIS_CON}</p>
    </div>
    <div class="time">
        <h3>
            <p class="time_disc">討論區</p>
            <p class="time_class">${data.DIS_C}</p>
            <p class="time_times">${data.DIS_EDIT}</p></h3>
    </div>
        `;
        // console.log(ele);
        
        contaniner.appendChild(ele);
            // ele.innerHtml = 
        //    console.log(ele);
           
       })
}

