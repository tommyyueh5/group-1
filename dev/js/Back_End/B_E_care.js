window.addEventListener('load', () => {
    let xhr = new XMLHttpRequest();
    
    xhr.onload = function () {
        if (xhr.status == 200) {
           var care_data = JSON.parse(xhr.responseText);
            console.log(care_data);
      
            for (let i = 0; i < care_data.length; i++) {
                $('.care_list').append(
                    `
                    <li class="p_care">
                    <div class="care_topic">
                        <h1>${care_data[i]["MAN_CON"]}</h1>
                    </div>
                    <ul class="answer_list">
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
                    </ul>
                    <ul class="gat_point">
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
                    </ul>
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
                    $(`#aaa_${care_data[i].MEM_NO}`).click(function () {

                        if ($(`#aaa_${care_data[i].MEM_NO}`).val() == 0) {
                            $(`#aaa_${care_data[i].MEM_NO}`).val(1);
                        } else {
                            $(`#aaa_${care_data[i].MEM_NO}`).val(0);
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
    xhr.open("Get", "../../dest/PHP/Back_End/Back_End_cares.php", true);
    xhr.send(null);
});

