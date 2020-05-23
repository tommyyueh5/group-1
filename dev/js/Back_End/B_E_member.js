window.addEventListener('load', () => {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status == 200) {
            const member_data = JSON.parse(xhr.responseText)
            // console.log(JSON.parse(xhr.responseText));
            for (let i = 0; i < member_data.length; i++) {
                $('.member_list').append(`
                                        <li class="p_list">
                                        <img class="p_member" src="${member_data[i].MEM_IMG}" alt="">
                                        <div class="p_data">
                                            <h1>Name:<span>${member_data[i].MEM_NAME}</span></h1>
                                            <p>No.<span>${member_data[i].MEM_NO}</span></p>
                                            <p>gmail:<span>${member_data[i].MEM_MAIL}</span></p>
                                            <p>pws:<span>${member_data[i].MEM_PAS}</span></p>
                                            <div>
                                                <p>position:</p>
                                                <span class="center">
                                                    <input class="isON" id="member_psi${member_data[i].MEM_NO}" type="checkbox" value="${member_data[i].MEM_POSITION}">
                                                </span>
                                            </div>
                                        </div>
                                    </li>`)
            }
            let pData = document.querySelectorAll('.isON');
            pData.forEach((p, i) => {
                if (p.value == 1) {
                    p.checked = true;
                } else {
                    p.checked = false;
                }
                $(`#member_psi${member_data[i].MEM_NO}`).click(function () {

                    if ($(`#member_psi${member_data[i].MEM_NO}`).val() == 0) {
                        $(`#member_psi${member_data[i].MEM_NO}`).val(1);
                    } else {
                        $(`#member_psi${member_data[i].MEM_NO}`).val(0);
                    }
                    console.log(p);
                });


            });
        } else {
            alert(xhr.status);
        }
    }
    xhr.open("Get", "../../../dest/PHP_program/Back_End/Back_End_MEM_data.php", true);
    xhr.send(null);
});