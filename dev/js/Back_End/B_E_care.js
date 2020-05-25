window.addEventListener('load', () => {
    let xhr = new XMLHttpRequest();

    xhr.onload = function () {
        if (xhr.status == 200) {
            var care_data = JSON.parse(xhr.responseText);
            // console.log(care_data);

            for (let i = 0; i < care_data.length; i++) {
                $('.care_list').append(
                    `
                    <li class="p_care">
                    <div id="edit_cancel">刪除</div>
                    <div class="care_topic">
                        <h1>${care_data[i]["MAN_CON"]}</h1>
                    </div>
                    <ol class="answer_list">
                        <li>
                            <span>1.</span>
                            <p>咳嗽</p>
                        </li>
                        <li>
                            <span>2.</span>
                            <p>呼吸急促</p>
                        </li>
                        <li>
                            <span>3.</span>
                            <p>無</p>
                        </li>
                    </ol>
                    <ol class="gat_point">
                        <li>
                            <span>+</span>
                            <p>8</p>
                        </li>
                        <li>
                            <span>+</span>
                            <p>17</p>
                        </li>
                        <li>
                            <span>+</span>
                            <p>0</p>
                        </li>
                    </ol>
                    <div class="Audit_results">
                        <span class="center">
                        <input class="care_isON" id="care_psi${care_data[i].MAN_NO}" type="checkbox" value="${care_data[i].MAN_ANS}">
                        </span>
                    </div>
                </li>`
                )
            }
            let pData = document.querySelectorAll('.care_isON');
            pData.forEach((p, i) => {
                if (p.value == 1) {
                    p.checked = true;

                } else {
                    p.checked = false;
                }

                $(`#care_psi${care_data[i].MAN_NO}`).click(function () {

                    if ($(`#care_psi${care_data[i].MAN_NO}`).val() == 0) {
                        $(`#care_psi${care_data[i].MAN_NO}`).val(1);
                    } else {
                        $(`#care_psi${care_data[i].MAN_NO}`).val(0);
                    }
                    
                })
                
            });
        } else {
            alert(xhr.status);
        }
    }
    xhr.open("Get", "./PHP_program/Back_End/Back_End_cares.php", true);
    xhr.send(null);
});

