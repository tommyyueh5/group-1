window.addEventListener('load', () => {
    let xhr = new XMLHttpRequest();

    xhr.onload = function () {
        if (xhr.status == 200) {
            const news_data = JSON.parse(xhr.responseText);
            // console.log(news_data[0].NEWS_NO);
            for (let i = 0; i < news_data.length; i++) {
                $('.news_list').append(
                    `
                <li class="p_news">
                <div id="edit_cancel">刪除</div>
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
                    <input class="news_isON" id="news_psi${news_data[i].NEWS_NO}" type="checkbox" value="${news_data[i].NEWS_PUB}">
                    </span>
                </div>
            </li>
            `
                )
            };

            let pData = document.querySelectorAll('.news_isON');
            pData.forEach((p, i) => {
                if (p.value == 1) {
                    p.checked = true;
                } else {
                    p.checked = false;
                };
                $(`#news_psi${news_data[i].NEWS_NO}`).click(function () {

                    if ($(`#news_psi${news_data[i].NEWS_NO}`).val() == 0) {
                        $(`#news_psi${news_data[i].NEWS_NO}`).val(1);
                    } else {
                        $(`#news_psi${news_data[i].NEWS_NO}`).val(0);
                    }
                    console.log(p);
                });
            });
        } else {
            alert(xhr.status);
        }
    }
    xhr.open("Get", "./PHP_program/Back_End/Back_End_news.php", true);
    xhr.send(null);
});

