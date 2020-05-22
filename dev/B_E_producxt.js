window.addEventListener('load', () => {
    let xhr = new XMLHttpRequest();
    
    xhr.onload = function () {
        if (xhr.status == 200) {
           var product_data = JSON.parse(xhr.responseText);
            // console.log(product_data);
            for (let i = 0; i < product_data.length; i++) {
                $('.product_list').append(`
                <li class="p_product">
                <div class="product_img">
                    <img src="${product_data[i].PRO_IMG}" alt="">
                </div>
                <div class="main_data">
                    <h1 class="product_title">${product_data[i].PRO_NAME}</h1>
                    <p>
                    ${product_data[i].PRO_EXP}
                    </p>
                </div>
                <div class="category">
                    <p>上架時間</p>
                    <p class="category_date">${product_data[i].PRO_PUBLISH}</p>
                </div>
                <div class="Audit_results">
                    <span class="center">
                    <input class="product_isON" id="product_psi${product_data[i].PRO_NO}" type="checkbox" value="${product_data[i].PRO_PUB}">
                    </span>
                </div>
            </li>`)
            }
            let pData = document.querySelectorAll('.product_isON');
            pData.forEach((p, i) => {
                if (p.value == 1) {
                    p.checked = true;
                } else {
                    p.checked = false;
                }
                $(`#product_psi${product_data[i].PRO_NO}`).click(function () {

                    if ($(`#product_psi${product_data[i].PRO_NO}`).val() == 0) {
                        $(`#product_psi${product_data[i].PRO_NO}`).val(1);
                    } else {
                        $(`#product_psi${product_data[i].PRO_NO}`).val(0);
                    }
                    console.log(p);  
                })
            });
        } else {
            alert(xhr.status);
        }
    }
    xhr.open("Get", "../../../dest/php/Back_End/Back_End_product.php", true);
    xhr.send(null);   
});
