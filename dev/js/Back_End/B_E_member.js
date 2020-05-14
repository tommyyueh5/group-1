window.addEventListener('load', () => {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status == 200) {
            const member_data = JSON.parse(xhr.responseText)
            console.log(JSON.parse(xhr.responseText));
            for (let i = 0; i < member_data.length; i++) {
                $('.member_list').append(`
                                        <li class="p_list">
                                        <img class="p_member" src="../dest/image/Back_End/${member_data[i].MEM_IMG}" alt="">
                                        <div class="p_data">
                                            <h1>Name:<span>${member_data[i].MEM_NAME}</span></h1>
                                            <p>No.<span>${member_data[i].MEM_NO}</span></p>
                                            <p>gmail:<span>${member_data[i].MEM_MAIL}</span></p>
                                            <p>pws:<span>${member_data[i].MEM_PAS}</span></p>
                                            <div>
                                                <p>position:</p>
                                                <span class="center">
                                                    <input class="isON" id="aaa_${member_data[i].MEM_NO}" type="checkbox" value="${member_data[i].MEM_POSITION}">
                                                </span>
                                            </div>
                                        </div>
                                    </li>`)
            }
            let pData = document.querySelectorAll('.isON');
            pData.forEach((p, i) => {
                if (p.value == 1) {
                    p.checked = true;
                    $(`#aaa_${member_data[i].MEM_NO}`).click(function () {

                        if ($(`#aaa_${member_data[i].MEM_NO}`).val() == 0) {
                            $(`#aaa_${member_data[i].MEM_NO}`).val(1);
                        } else {
                            $(`#aaa_${member_data[i].MEM_NO}`).val(0);
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
    xhr.open("Get", "../dest/php/Back_End.php", true);
    xhr.send(null);
});