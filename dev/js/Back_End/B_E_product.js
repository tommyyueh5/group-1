window.addEventListener('load', () => {
    let xhr = new XMLHttpRequest();
    
    xhr.onload = function () {
        if (xhr.status == 200) {
           var product_data = JSON.parse(xhr.responseText);
            console.log(product_data);
            for (let i = 0; i < product_data.length; i++) {
                $('.product_list').append(`
                <li class="p_product">
                <div class="product_img">
                    <img src="${product_data[i]["PRO_IMG"]}" alt="">
                </div>
                <div class="main_data">
                    <h1 class="product_title">${product_data[i]["PRO_NAME"]}</h1>
                    <ul class="product_tag">
                        <li><span></span></li>
                        <li><span></span></li>
                        <li><span></span></li>
                    </ul>
                    <p>
                    ${product_data[i]["PRO_EXP"]}
                    </p>
                </div>
                <div class="category">
                    <p>上架時間</p>
                    <p class="category_date">${product_data[i]["PRO_PUBLISH"]}</p>
                </div>
                <div class="Audit_results">
                    <span class="center">
                        <input type="checkbox" name="">
                    </span>
                </div>
            </li>`)
            }
            let pData = document.querySelectorAll('.isON');
            pData.forEach((p, i) => {
                if (p.value == 1) {
                    p.checked = true;
                    $(`#aaa_${product_data[i].PRO_NO}`).click(function () {

                        if ($(`#aaa_${product_data[i].PRO_NO}`).val() == 0) {
                            $(`#aaa_${product_data[i].PRO_NO}`).val(1);
                        } else {
                            $(`#aaa_${product_data[i].PRO_NO}`).val(0);
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
