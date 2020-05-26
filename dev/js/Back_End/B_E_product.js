// window.addEventListener('load', () => {
//     let xhr = new XMLHttpRequest();
    
//     xhr.onload = function () {
//         if (xhr.status == 200) {
//            var product_data = JSON.parse(xhr.responseText);
//             // console.log(product_data);
//             for (let i = 0; i < product_data.length; i++) {
//                 $('.product_list').append(`
//                 <li class="p_product">
//                 <div id="edit_cancel">刪除</div>
//                 <div class="product_img">
//                     <img src="${product_data[i].PRO_IMG}" alt="">
//                 </div>
//                 <div class="main_data">
//                     <h1 class="product_title">${product_data[i].PRO_NAME}</h1>
//                     <p>
//                     ${product_data[i].PRO_EXP}
//                     </p>
//                 </div>
//                 <div class="category">
//                     <p>上架時間</p>
//                     <p class="category_date">${product_data[i].PRO_PUBLISH}</p>
//                 </div>
//                 <div class="Audit_results">
//                     <span class="center">
//                     <input class="product_isON" id="product_psi${product_data[i].PRO_NO}" type="checkbox" value="${product_data[i].PRO_PUB}">
//                     </span>
//                 </div>
//             </li>`)
//             }
//             let pData = document.querySelectorAll('.product_isON');
//             pData.forEach((p, i) => {
//                 if (p.value == 1) {
//                     p.checked = true;
//                 } else {
//                     p.checked = false;
//                 }
//                 $(`#product_psi${product_data[i].PRO_NO}`).click(function () {

//                     if ($(`#product_psi${product_data[i].PRO_NO}`).val() == 0) {
//                         $(`#product_psi${product_data[i].PRO_NO}`).val(1);
//                     } else {
//                         $(`#product_psi${product_data[i].PRO_NO}`).val(0);
//                     }
//                     console.log(p);  
//                 })
//             });
//         } else {
//             alert(xhr.status);
//         }
//     }
//     xhr.open("Get", "./PHP_program/Back_End/Back_End_product.php", true);
//     xhr.send(null);   
// });




// let item = `<li class="p_product">
// <div class="product_img">
//     <img src="../dest/image/index-commodity/Image_19.png" alt="">
// </div>
// <div class="main_data">
//     <h1 class="product_title">防疫衛生紙</h1>
//     <ul class="product_tag">
//         <li><span>#</span>流鼻水</li>
//         <li><span>#</span>咳嗽</li>
//         <li><span>#</span>防疫</li>
//     </ul>
//     <p>柔軟再升級-獨創的紙纖柔化新技術，讓肌膚享受超細滑的觸感。品質最安心-完全使用美洲進口處女紙漿，確保紙質優良。,品質與環保流程通過ISO
//         9001及14001國際認證。,紙張不含螢光劑，確實為消費者安全把關。,產品最環保-採用永續林木紙漿，絕不使用熱帶雨林木漿，愛護地球從源頭做起。,本產品可在馬桶中分解。
//     </p>
// </div>
// <div class="category">
//     <p>上架時間</p>
//     <p class="category_date">2019.04.07</p>
// </div>
// <div class="Audit_results">
//     <span class="center">
//         <input type="checkbox" name="" value="">
//     </span>
// </div>
// </li>`;

//load product
let conn = new XMLHttpRequest();
conn.open('get', './PHP_program/shop_cart/shopbackload.php', true);
conn.send(null);
conn.onreadystatechange = function() {
    if (conn.readyState==4) {
        if (conn.status = 200) {
            for (let i =0; i<JSON.parse(conn.responseText).length; i++) {
                let kind;if ('clothe'==JSON.parse(conn.responseText)[i]['PRO_KIND']) {kind = '防護衣'; } else if ('goggle'==JSON.parse(conn.responseText)[i]['PRO_KIND']){kind = '防疫眼鏡'; } else {kind = '防疫口罩'; }
                let item = `<li class="p_product">
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

            

            $("input[name='release']").click(function() {
                let conn = new XMLHttpRequest();
                $(this).attr('value', this.checked ? '1' : '0');
                
                conn.open('get', `./PHP_program/Back_End/shopbackrelease.php?id=${this.parentNode.id}&c=${$(this).val()}`, true);
                conn.send(null);
                conn.onreadystatechange = function () {
                    if (conn.readyState==4) {
                        if (conn.status==200) {
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
function newProduct(){
    //--------------------------
    let form = new FormData();
    let readfile = new FileReader();
    const productUpImage = document.getElementById('product-img-upload');

    let upfile= document.getElementById('upload');
    upfile.addEventListener('change', function(e){

        form.append('images', upfile.files[0]);
        readfile.readAsDataURL(e.target.files[0]);
        readfile.addEventListener('load', function(e) {
            
            productUpImage.src= this.result;
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
    upstate.addEventListener('click', function(){
        this.value = this.checked ? 1 :0;
    });


    upload.addEventListener('click', function(e){
        e.preventDefault();
        //wargin init
        $('.desc-warning').text('');
        $('.time-warning').text('');
        $('.id-warning').text('');
        $('.pri-warning').text('');
        $('.kind-warning').text('');

        

        form.set('kind',imageKind.value);
        form.set('id',proId.value);
        form.set('pri',proPri.value);
        form.set('desc',productDesc.value);
        form.set('time', protime.value);
        form.set('she', upstate.value);
        
        
        let conn = new XMLHttpRequest();

        conn.open('post', './PHP_program/shop_cart/shopbackaddnewproduct.php', true);
        conn.send(form);
        conn.onreadystatechange = function() {
            if (conn.readyState==4) {
                if (conn.status == 200) {
                    
                    let res = JSON.parse(conn.responseText);
                    if (res['error'] == 0) {
                        let kind;if ('clothe'==res['PRO_KIND']) {kind = '防護衣'; } else if ('goggle'==res['PRO_KIND']){kind = '防疫眼鏡'; } else {kind = '防疫口罩<'; }
                
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
                            $( html ).insertAfter( "#create_product" );
                            let pData = document.querySelectorAll('.pro-on');
                            pData.forEach((p, i) => {
                                if (p.value == 1) {
                                    p.checked = true;
                                } else {
                                    p.checked = false;
                                };
                
                                
                            });
                    } else if (JSON.parse(conn.responseText)['error'] == 1) {
                        $('.kind-warning').text(res['kind']);
                        $('.desc-warning').text(res['desc']);
                        $('.time-warning').text(res['time']);
                        $('.id-warning').text(res['id']);
                        $('.pri-warning').text(res['pri']);
                    } else {
                        $('.pri-warning').text(res['pri']);
                    }
                    
                }else {
                    alert(conn.status);
                }
            } 
        }
        
    
    
    
});


}



