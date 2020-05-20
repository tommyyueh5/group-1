

let item = `<li class="p_product">
<div class="product_img">
    <img src="../dest/image/index-commodity/Image_19.png" alt="">
</div>
<div class="main_data">
    <h1 class="product_title">防疫衛生紙</h1>
    <ul class="product_tag">
        <li><span>#</span>流鼻水</li>
        <li><span>#</span>咳嗽</li>
        <li><span>#</span>防疫</li>
    </ul>
    <p>柔軟再升級-獨創的紙纖柔化新技術，讓肌膚享受超細滑的觸感。品質最安心-完全使用美洲進口處女紙漿，確保紙質優良。,品質與環保流程通過ISO
        9001及14001國際認證。,紙張不含螢光劑，確實為消費者安全把關。,產品最環保-採用永續林木紙漿，絕不使用熱帶雨林木漿，愛護地球從源頭做起。,本產品可在馬桶中分解。
    </p>
</div>
<div class="category">
    <p>上架時間</p>
    <p class="category_date">2019.04.07</p>
</div>
<div class="Audit_results">
    <span class="center">
        <input type="checkbox" name="" value="">
    </span>
</div>
</li>`;





// let conn = new XMLHttpRequest();
// conn.open('get', '../dev/PHP/shopba.php', true);

// conn.send(null);
// conn.onreadystatechange = function() {
//     if (conn.readyState==4) {
//         if (conn.status = 200) {
            
//             for (let i =0; i<JSON.parse(conn.responseText).length; i++) {
//                 let item = `<li class="p_product">
//                             <div class="product_img">
//                                 <img src="${JSON.parse(conn.responseText)[i]['PRO_SRC']}" alt="">
//                             </div>
//                             <div class="main_data">
//                                 <h1 class="product_title">防疫衛生紙</h1>
//                                 <ul class="product_tag">
//                                     <li><span>#</span>流鼻水</li>
//                                     <li><span>#</span>咳嗽</li>
//                                     <li><span>#</span>防疫</li>
//                                 </ul>
//                                 <p>柔軟再升級-獨創的紙纖柔化新技術，讓肌膚享受超細滑的觸感。品質最安心-完全使用美洲進口處女紙漿，確保紙質優良。,品質與環保流程通過ISO
//                                     9001及14001國際認證。,紙張不含螢光劑，確實為消費者安全把關。,產品最環保-採用永續林木紙漿，絕不使用熱帶雨林木漿，愛護地球從源頭做起。,本產品可在馬桶中分解。
//                                 </p>
//                             </div>
//                             <div class="category">
//                                 <p>上架時間</p>
//                                 <p class="category_date">2019.04.07</p>
//                             </div>
//                             <div class="Audit_results">
//                                 <span class="center" id="${JSON.parse(conn.responseText)[i]['PRO_NO']}">
//                                     <input type="checkbox"  name="release" she="${JSON.parse(conn.responseText)[i]['PRO_SHE']}">
//                                 </span>
//                             </div>
//                             </li>`;
//                 $('.product_list').append(item);
//             }
            
//             $("input[she='1']").prop( "checked", true );
//             $("input[she='0']").prop( "checked", false );

//             $("input[name='release']").click(function() {
//                 console.log( this.checked);
//                 let conn = new XMLHttpRequest();
//                 $(this).attr('she', this.checked ? '1' : '0');
                
//                 conn.open('get', `../dev/PHP/shopr.php?id=${this.parentNode.id}&c=${$(this).attr('she')}`, true);
//                 conn.send(null);
//                 conn.onreadystatechange = function () {
//                     if (conn.readyState==4) {
//                         if (conn.status==200) {
//                         } else {
//                             alert(conn.status);
//                         }
//                     } 
//                 }
//                 this.value='1';
//             });
            

//         } else {
//             alert(conn.status);
//         }
//     }
// } 


let conn = new XMLHttpRequest();
conn.open('get', '../dev/PHP/shopba.php', true);

conn.send(null);
conn.onreadystatechange = function() {
    if (conn.readyState==4) {
        if (conn.status = 200) {
            
            for (let i =0; i<JSON.parse(conn.responseText).length; i++) {
                let item = `<li class="p_product">
                            <div class="product_img">
                                <img src="${JSON.parse(conn.responseText)[i]['PRO_SRC']}" alt="">
                            </div>
                            <div class="main_data">
                                <h1 class="product_title">防疫衛生紙</h1>
                                <ul class="product_tag">
                                    <li><span>#</span>流鼻水</li>
                                    <li><span>#</span>咳嗽</li>
                                    <li><span>#</span>防疫</li>
                                </ul>
                                <p>柔軟再升級-獨創的紙纖柔化新技術，讓肌膚享受超細滑的觸感。品質最安心-完全使用美洲進口處女紙漿，確保紙質優良。,品質與環保流程通過ISO
                                    9001及14001國際認證。,紙張不含螢光劑，確實為消費者安全把關。,產品最環保-採用永續林木紙漿，絕不使用熱帶雨林木漿，愛護地球從源頭做起。,本產品可在馬桶中分解。
                                </p>
                            </div>
                            <div class="category">
                                <p>上架時間</p>
                                <p class="category_date">2019.04.07</p>
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
                
                conn.open('get', `../dev/PHP/shopr.php?id=${this.parentNode.id}&c=${$(this).val()}`, true);
                conn.send(null);
                conn.onreadystatechange = function () {
                    if (conn.readyState==4) {
                        if (conn.status==200) {
                        } else {
                            alert(conn.status);
                        }
                    } 
                }
                // this.value='1';
            });
            

        } else {
            alert(conn.status);
        }
    }
} 
