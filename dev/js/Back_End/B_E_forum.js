window.addEventListener('load', () => {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status == 200) {
           var forum_data = JSON.parse(xhr.responseText);
            console.log(forum_data);
      
            for (let i = 0; i < forum_data.length; i++) {
                $('.forum_list').append(
                    `
                <li class="p_forum">
                            <div class="forum_img">
                                <img src="${forum_data[i]["DIS_IMG_PATH"]}" alt="">
                            </div>
                            <div class="main_data">
                                <h1 class="forum_title">${forum_data[i]["DIS_TIT"]}</h1>
                                <p>
                                ${forum_data[i]["DIS_CON"]}
                                </p>
                            </div>
                            <div class="category">
                                <p>討論區</p>
                                <h1 class="tag">時事</h1>
                                <p class="category_date">${forum_data[i]["DIS_EST"]}</p>
                            </div>
                            <div class="Audit_results">
                                <span class="center">
                                    <input type="checkbox" name="">
                                </span>
                            </div>
                        </li>`
                )
            }
            let pData = document.querySelectorAll('.isON');
            pData.forEach((p, i) => {
                if (p.value == 1) {
                    p.checked = true;
                    $(`#aaa_${forum_data[i].MEM_NO}`).click(function () {

                        if ($(`#aaa_${forum_data[i].MEM_NO}`).val() == 0) {
                            $(`#aaa_${forum_data[i].MEM_NO}`).val(1);
                        } else {
                            $(`#aaa_${forum_data[i].MEM_NO}`).val(0);
                        }
                    })
                } else {
                    p.checked = false;
                }
                console.log(pData[i].value);
            });
        } else {
            alert(xhr.status);
        }
    }
    xhr.open("Get", "../../../dest/php/Back_End/Back_End_MEM_data.php", true);
    xhr.send(null);   
});

