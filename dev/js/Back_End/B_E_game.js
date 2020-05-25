window.addEventListener('load', () => {
    let xhr = new XMLHttpRequest();

    xhr.onload = function () {
        if (xhr.status == 200) {
            const game_data = JSON.parse(xhr.responseText);
            // console.log(game_data);
            for (let i = 0; i < game_data.length; i++) {
                $('.game_list').append(`
                <li class="p_game">
                <div id="edit_cancel">刪除</div>
                <div class="game_topic">
                    <textarea id="game_h1_edit" rows="3 class="edit_on" disabled>${game_data[i]["question"]}</textarea>
                </div>
                <ol class="answer_list">
                    <li>
                        <span>A.</span> 
                        <input class="edit_on" disabled="disabled" value="${game_data[i]["choiceA"]}"></input>
                    </li>
                    <li>
                        <span>B.</span>
                        <input class="edit_on" disabled="disabled" value="${game_data[i]["choiceB"]}"></input>
                    </li>
                    <li>
                        <span>C.</span>
                        <input class="edit_on" disabled="disabled" value="${game_data[i]["choiceC"]}"></input>
                    </li>
                </ol>
                <div class="answer">
                    <input class="edit_on" disabled="disabled" value="${game_data[i]["correct"]}.${game_data[i]["RIGHT_ANSWER"]}"></input>
                </div>
                <div class="Audit_results">
                    <span class="center">
                    <input class="game_isON" id="game_psi${game_data[i].GAME_NO}" type="checkbox" value="${game_data[i].GAME_STATUS}">
                    </span>
                </div>
            </li>`
                )
            }


            let pData = document.querySelectorAll('.game_isON');
            pData.forEach((p, i) => {
                if (p.value == 1) {
                    p.checked = true;
                } else {
                    p.checked = false;
                };
                $(`#game_psi${game_data[i].GAME_NO}`).click(function () {

                    if ($(`#game_psi${game_data[i].GAME_NO}`).val() == 0) {
                        $(`#game_psi${game_data[i].GAME_NO}`).val(1);
                    } else {
                        $(`#game_psi${game_data[i].GAME_NO}`).val(0);
                    }
                    console.log(p);
                });
            });
        } else {
            alert(xhr.status);
        }
    }
    xhr.open("Get", "./PHP_program/Back_End/Back_End_game.php", true);
    xhr.send(null);

});
