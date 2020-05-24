window.addEventListener('load', () => {


    fetch('../../../dest/PHP_program/Back_End/Back_End_report.php',{
        method:'POST',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        }

    }).then(resp=>{
        if(resp.status == 200){
            return resp.json();
        }
    }).then(FetchData=>{
        
        // console.log();
        Array.from(FetchData).forEach((report,index)=>{
        let report_list_P = document.querySelector('.report_list');
        let createLi = document.createElement('li');
        createLi.classList.add('p_member');
        let render = `
                        <div class="main_data">
                            <h1 class="report_title">${report.DIS_TIT}</h1>
                            <div class="in_box">
                                <div class="class_data">
                                    <p>討論區<span>/</span></p>
                                    <h1 class="tag">${report.DIS_C}</h1>
                                </div>
                                <img src="${report.MEM_IMG}" alt="">
                                <h1>${report.MEM_ACC}</h1>
                            </div>
                        </div>
                        <div class="category">
                            <h1 class="category_text">${report.REP_C_REA}</h1>
                            <p class="category_date">${report.REP_DATE}</p>
                        </div>
                        <div class="Audit_results">
                            <h1>${report.VER_SIT == 0?'未審核':report.VER_SIT == 1?'未通過':report.VER_SIT == 2?'通過':null}</h1>
                        </div>
                    `;
                    createLi.innerHTML = render;
                    report_list_P.appendChild(createLi)
            // console.log(report);
            
        })
        // console.log(report_list_P);
        // FetchData.
        

                    
        
    }).catch(err=>{
        console.log(err);
    })
    // let xhr = new XMLHttpRequest();
    // xhr.onload = function () {
    //     if (xhr.status == 200) {
    //         const news_data = JSON.parse(xhr.responseText);
    //         console.log(news_data);
    //         for (let i = 0; i < news_data.length; i++) {
    //             $('.news_list').append(
    //             `
    //             <li class="p_news">
    //             <div class="news_img">
    //                 <img src="${news_data[i]["NEWS_IMG_PATH"]}" alt="">
    //             </div>
    //             <div class="main_data">
    //                 <h1 class="news_title">${news_data[i]["NEWS_TIT"]}</h1>
    //                 <ul class="news_tag">
         
                    
    //                 </ul>
    //                 <p>${news_data[i]["NEWS_CON"]}
    //                 </p>
    //             </div>
    //             <div class="category">
    //                 <p>最新消息</p>
    //                 <h1 class="tag">台灣新聞</h1>
    //                 <p class="category_date">${news_data[i]["NEWS_PUBLISH_DATE"]}</p>
    //             </div>
    //             <div class="Audit_results">
    //                 <span class="center">
    //                     <input class="report_isON" id="report_psi${product_data[i].PRO_NO}" type="checkbox" value="${product_data[i].PRO_PUB}">
    //                 </span>
    //             </div>
    //         </li>
    //         `
    //         )
    //         };
            

    //         let pData = document.querySelectorAll('.isON');
    //         pData.forEach((p, i) => {
    //             if (p.value == 1) {
    //                 p.checked = true;
    //                 $(`#report${news_data[i].GAME_NO}`).click(function () {

    //                     if ($(`#report${news_data[i].GAME_NO}`).val() == 0) {
    //                         $(`#report${news_data[i].GAME_NO}`).val(1);
    //                     } else {
    //                         $(`#report${news_data[i].GAME_NO}`).val(0);
    //                     }
    //                 })
    //             } else {
    //                 p.checked = false;
    //             }
               
    //         });
    //     } else {
    //         alert(xhr.status);
    //     }
    // }
    // xhr.open("Get", "../../../dest/PHP_program/Back_End/Back_End_report.php", true);
    // xhr.send(null);
});
