window.addEventListener('load', () => {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status == 200) {
            var forum_data = JSON.parse(xhr.responseText);
            // console.log(forum_data);
            sessionStorage.setItem('forum_data',xhr.responseText)
            for (let i = 0; i < forum_data.length; i++) {
                $('.forum_list').append(
                    `
                <li class="p_forum">
                            <div id="edit_cancel">刪除</div>
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
                $(`#discussion_psi${forum_data[i].DIS_NO}`).click(function (e) {
                    if ($(`#discussion_psi${forum_data[i].DIS_NO}`).val() == 0) {
                        $(`#discussion_psi${forum_data[i].DIS_NO}`).val(1);
                        // console.log(e.currentTarget.value,'=',forum_data[i].DIS_NO);
                        fetch('./PHP_program/Back_End/Back_End_forum_updatePosition.php',{
                            method:'POST',
                            body:JSON.stringify({
                                "forumNum":forum_data[i].DIS_NO,
                                "PositionNum":e.currentTarget.value
                            }),
                            headers:{
                                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
                            }
                        }).then(resp=>{
                            return resp.text();
                        }).then(alertShow=>{
                            alert(alertShow);
                        })
                    } else {
                        $(`#discussion_psi${forum_data[i].DIS_NO}`).val(0);
                        // console.log(e.currentTarget.value,'=',forum_data[i].DIS_NO);
                        fetch('./PHP_program/Back_End/Back_End_forum_updatePosition.php',{
                            method:'POST',
                            body:JSON.stringify({
                                "forumNum":forum_data[i].DIS_NO,
                                "PositionNum":e.currentTarget.value
                            }),
                            headers:{
                                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
                            }
                        }).then(resp=>{
                            return resp.text();
                        }).then(alertShow=>{
                            alert(alertShow);
                        })
                    }

                })
            });
        } else {
            alert(xhr.status);
        }
    }
    xhr.open("Get", "./PHP_program/Back_End/Back_End_forum.php", true);
    xhr.send(null);
});

