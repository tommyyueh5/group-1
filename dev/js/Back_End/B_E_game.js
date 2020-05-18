window.addEventListener('load', () => {
    let xhr = new XMLHttpRequest();
    
    xhr.onload = function () {
        if (xhr.status == 200) {
            const game_data = JSON.parse(xhr.responseText);
            console.log(game_data);
            for (let i = 0; i < game_data.length; i++) {
                $('.game_list').append(`
                <li class="p_game">
                <div class="game_topic">
                    <h1>${game_data[i]["question"]}</h1>
                </div>
                <ul class="answer_list">
                    <li>
                        <span>A.</span>
                        <p>${game_data[i]["choiceA"]}</p>
                    </li>
                    <li>
                        <span>B.</span>
                        <p>${game_data[i]["choiceB"]}</p>
                    </li>
                    <li>
                        <span>C.</span>
                        <p>${game_data[i]["choiceC"]}</p>
                    </li>
                </ul>
                <div class="answer">
                    <p>${game_data[i]["correct"]}.${game_data[i]["RIGHT_ANSWER"]}</p>
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
                    $(`#aaa_${game_data[i].GAME_NO}`).click(function () {

                        if ($(`#aaa_${game_data[i].GAME_NO}`).val() == 0) {
                            $(`#aaa_${game_data[i].GAME_NO}`).val(1);
                        } else {
                            $(`#aaa_${game_data[i].GAME_NO}`).val(0);
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
    xhr.open("Get", "../../../dest/php/Back_End/Back_End_MEM_data.php", true);
    xhr.send(null);
   
});
