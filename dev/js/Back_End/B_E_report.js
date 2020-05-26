window.addEventListener('load', () => {


    fetch('./PHP_program/Back_End/Back_End_report.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        }

    }).then(resp => {
        if (resp.status == 200) {
            return resp.json();
        }
    }).then(FetchData => {
        console.log(FetchData);
        Array.from(FetchData).forEach((report, index) => {
            let report_list_P = document.querySelector('.report_list');
            let createLi = document.createElement('li');
            createLi.classList.add('p_member');
            let render = `
                        <div class="main_data">
                            <h1 class="report_title">${report.DIS_TIT}</h1>
                            <div class="in_box">
                                <div class="class_data">
                                    <p>討論區<span>/</span></p>
                                    <h1 class="tag">${report.DIS_C}</h1>
                                </div>
                                <img src="${report.MEM_IMG}" alt="">
                                <h1>${report.MEM_ACC}</h1>
                            </div>
                        </div>
                        <div class="category">
                            <h1 class="category_text">${report.REP_C_REA}</h1>
                            <p class="category_date">${report.REP_DATE}</p>
                        </div>
                        <div class="Audit_results">
                            <span class="center">
                                <input class="report_isON" id="report_psi${index}" type="checkbox" value="${report.VER_SIT}">
                            </span>
                            
                        </div>
                    `;
            createLi.innerHTML = render;
            report_list_P.appendChild(createLi)
            // console.log(report);
            let pData = document.querySelectorAll('.report_isON');
            pData.forEach((p, i) => {
                if (p.value == 1) {
                    p.checked = true;
                    $(`#report_psi${i}`).click(function () {

                        if ($(`#report_psi${i}`).val() == 0) {
                            $(`#report_psi${i}`).val(1);
                        } else {
                            $(`#report_psi${i}`).val(0);
                        }
                    })
                } else {
                    p.checked = false;
                }
            });
        })
    }).catch(err => {
        console.log(err);
    })
  
});
