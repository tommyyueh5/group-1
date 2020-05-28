let conn = new XMLHttpRequest();
conn.open('get', './PHP_program/shop_cart/shopbackload.php', true);
conn.send(null);
conn.onreadystatechange = function () {
    if (conn.readyState == 4) {
        if (conn.status = 200) {
            for (let i = 0; i < JSON.parse(conn.responseText).length; i++) {
                let kind; if ('clothe' == JSON.parse(conn.responseText)[i]['PRO_KIND']) { kind = '防護衣'; } else if ('goggle' == JSON.parse(conn.responseText)[i]['PRO_KIND']) { kind = '防疫眼鏡'; } else { kind = '防疫口罩'; }
                let item = `<li class="p_product">
                            <div id="edit_cancel">刪除</div>
                            <div class="product_img">
                                <img src="${JSON.parse(conn.responseText)[i]['PRO_SRC']}" alt="">
                            </div>
                            <div class="main_data">
                                <h1 class="product_title">${kind}</h1>
                                
                                <p>${JSON.parse(conn.responseText)[i]['PRO_DESC']}
                                </p>
                            </div>
                            <div class="category">
                                <p>上架時間</p>
                                <p class="category_date">${JSON.parse(conn.responseText)[i]['PRO_TIME']}</p>
                            </div>
                            <div class="Audit_results">
                                <span class="center" id="${JSON.parse(conn.responseText)[i]['PRO_NO']}">
                                    <input type="checkbox" class="pro-on"  name="release" value="${JSON.parse(conn.responseText)[i]['PRO_SHE']}">
                                </span>
                            </div>
                            </li>`;
                $('.product_list').append(item);
            }

            let pData = document.querySelectorAll('.pro-on');
            pData.forEach((p, i) => {
                if (p.value == 1) {
                    p.checked = true;
                } else {
                    p.checked = false;
                };
            });
            $("input[name='release']").click(function () {
                let conn = new XMLHttpRequest();
                $(this).attr('value', this.checked ? '1' : '0');

                conn.open('get', `./PHP_program/Back_End/shopbackrelease.php?id=${this.parentNode.id}&c=${$(this).val()}`, true);
                conn.send(null);
                conn.onreadystatechange = function () {
                    if (conn.readyState == 4) {
                        if (conn.status == 200) {
                        } else {
                            alert(conn.status);
                        }
                    }
                }
            });
        } else {
            alert(conn.status);
        }
    }
}

//file
function newProduct() {
    //--------------------------
    let form = new FormData();
    let readfile = new FileReader();
    const productUpImage = document.getElementById('product-img-upload');

    let upfile = document.getElementById('upload');
    upfile.addEventListener('change', function (e) {

        form.append('images', upfile.files[0]);
        readfile.readAsDataURL(e.target.files[0]);
        readfile.addEventListener('load', function (e) {

            productUpImage.src = this.result;
        })
    });
    //--------------------------
    const upload = document.getElementById('create_product_yes');
    let imageKind = document.getElementById('imageKind');
    let productDesc = document.getElementById('product-desc');
    let proId = document.getElementById('pro-id');
    let proPri = document.getElementById('pro-price');
    let protime = document.getElementById('pro-time');
    const upstate = document.getElementById('product_psi');
    if (upstate.value == 1) {
        upstate.checked = true;
    } else {
        upstate.checked = false;
    };
    upstate.addEventListener('click', function () {
        this.value = this.checked ? 1 : 0;
    });

    upload.addEventListener('click', function (e) {
        e.preventDefault();
        //wargin init
        $('.desc-warning').text('');
        $('.time-warning').text('');
        $('.id-warning').text('');
        $('.pri-warning').text('');
        $('.kind-warning').text('');

        form.set('kind', imageKind.value);
        form.set('id', proId.value);
        form.set('pri', proPri.value);
        form.set('desc', productDesc.value);
        form.set('time', protime.value);
        form.set('she', upstate.value);

        let conn = new XMLHttpRequest();

        conn.open('post', './PHP_program/shop_cart/shopbackaddnewproduct.php', true);
        conn.send(form);
        conn.onreadystatechange = function () {
            if (conn.readyState == 4) {
                if (conn.status == 200) {
                    // console.log(conn.responseText);
                    let res = JSON.parse(conn.responseText);
                    if (res['error'] == 0) {
                        let kind; if ('clothe' == res['PRO_KIND']) { kind = '防護衣'; } else if ('goggle' == res['PRO_KIND']) { kind = '防疫眼鏡'; } else { kind = '防疫口罩<'; }

                        let html = `<li class="p_product"><div class="product_img"><img src="${res['PRO_SRC']}" alt="">                    </div>
                            <div class="main_data">
                                <h1 class="product_title">${kind}</h1>
                                
                                <p> ${res['PRO_DESC']}                             
                                </p>
                            </div>
                            <div class="category">
                                <p>上架時間</p>
                                <p class="category_date">${res['PRO_TIME']}</p>
                            </div>
                            <div class="Audit_results">
                                <span class="center" id="${res['PRO_NO']}">
                                    <input type="checkbox" class="pro-on"  name="release" value="${res['PRO_SHE']}">
                                </span>
                            </div>
                            </li>`;
                        $(html).insertAfter("#create_product");
                        let pData = document.querySelectorAll('.pro-on');
                        pData.forEach((p, i) => {
                            if (p.value == 1) {
                                p.checked = true;
                            } else {
                                p.checked = false;
                            };

                        });
                        form.forEach(function (val, key, fD) {
                            form.delete(key);
                        });
                        productUpImage.src = './image/member/interface.png';
                        imageKind.value = '';
                        proId.value = '';
                        proPri.value = '';
                        productDesc.value = '';
                        protime.value = '';
                        upstate.checked = false;
                    } else if (JSON.parse(conn.responseText)['error'] == 1) {
                        $('.desc-warning').text(res['desc']); $('.time-warning').text(res['time']); $('.id-warning').text(res['id']); $('.pri-warning').text(res['pri']); document.getElementsByClassName('fing')[0].textContent = res['file'];
                        $('.kind-warning').text(res['kind']);
                    } else {
                        $('.pri-warning').text(res['pri']);
                    }
                } else {
                    alert(conn.status);
                }
            }
        }
    });
}



