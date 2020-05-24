window.addEventListener('load', () => {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status == 200) {
            const news_data = JSON.parse(xhr.responseText);
            console.log(news_data);
            for (let i = 0; i < news_data.length; i++) {
                $('.news_list').append(
                `
                <li class="p_news">
                <div class="news_img">
                    <img src="${news_data[i]["NEWS_IMG_PATH"]}" alt="">
                </div>
                <div class="main_data">
                    <h1 class="news_title">${news_data[i]["NEWS_TIT"]}</h1>
                    <ul class="news_tag">
         
                    
                    </ul>
                    <p>${news_data[i]["NEWS_CON"]}
                    </p>
                </div>
                <div class="category">
                    <p>最新消息</p>
                    <h1 class="tag">台灣新聞</h1>
                    <p class="category_date">${news_data[i]["NEWS_PUBLISH_DATE"]}</p>
                </div>
                <div class="Audit_results">
                    <span class="center">
                        <input class="report_isON" id="report_psi${product_data[i].PRO_NO}" type="checkbox" value="${product_data[i].PRO_PUB}">
                    </span>
                </div>
            </li>
            `
            )
            };
            

            let pData = document.querySelectorAll('.isON');
            pData.forEach((p, i) => {
                if (p.value == 1) {
                    p.checked = true;
                    $(`#report${news_data[i].GAME_NO}`).click(function () {

                        if ($(`#report${news_data[i].GAME_NO}`).val() == 0) {
                            $(`#report${news_data[i].GAME_NO}`).val(1);
                        } else {
                            $(`#report${news_data[i].GAME_NO}`).val(0);
                        }
                    })
                } else {
                    p.checked = false;
                }
               
            });
        } else {
            alert(xhr.status);
        }
    }
    xhr.open("Get", "../../../dest/PHP_program/Back_End/Back_End_MEM_data.php", true);
    xhr.send(null);
});


