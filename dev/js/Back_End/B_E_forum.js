window.addEventListener('load', () => {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status == 200) {
            var forum_data = JSON.parse(xhr.responseText);
            // console.log(forum_data);

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
                                <input class="forum_isON" id="discussion_psi${forum_data[i].DIS_NO}" type="checkbox" value="${forum_data[i].DIS_PUB}">
                                </span>
                            </div>
                        </li>`
                )
            }
            let pData = document.querySelectorAll('.forum_isON');
            pData.forEach((p, i) => {
                if (p.value == 1) {
                    p.checked = true;
                } else {
                    p.checked = false;
                }
                $(`#discussion_psi${forum_data[i].DIS_NO}`).click(function () {

                    if ($(`#discussion_psi${forum_data[i].DIS_NO}`).val() == 0) {
                        $(`#discussion_psi${forum_data[i].DIS_NO}`).val(1);
                    } else {
                        $(`#discussion_psi${forum_data[i].DIS_NO}`).val(0);
                    }
                    
                })
            });
        } else {
            alert(xhr.status);
        }
    }
    xhr.open("Get", "../../../dest/PHP_program/Back_End/Back_End_forum.php", true);
    xhr.send(null);
});

