// window.addEventListener('load', () => {
//     let xhr = new XMLHttpRequest();
//     xhr.onload = function () {
//         if (xhr.status == 200) {
//             const member_data = JSON.parse(xhr.responseText)
//             console.log(JSON.parse(xhr.responseText));
//             for (let i = 0; i < member_data.length; i++) {
//                 $('.member_list').append(`
//                                 <li class="p_member">
//                                     <div class="main_data">
//                                         <h1 class="report_title">《超像塗鴉的衣服》全裸上陣報新聞只好隨便合成？朝日電視台主播意外成為惡搞素材</h1>
//                                         <div class="in_box">
//                                             <div class="class_data">
//                                                 <p>討論區<span>/</span></p>
//                                                 <h1 class="tag">時事</h1>
//                                             </div>
//                                             <img src="../dest/image/Back_End/Ellipse2.png" alt="">
//                                             <h1>Leon</h1>
//                                         </div>
//                                     </div>
//                                     <div class="category">
//                                         <h1 class="category_text">C.仇恨或惡意內容</h1>
//                                         <p class="category_date">2019.04.07</p>
//                                     </div>
//                                     <div class="Audit_results">
//                                         <h1>已審核</h1>
//                                     </div>
//                                 </li>`)
//             }
//             let pData = document.querySelectorAll('.isON');
//             pData.forEach((p, i) => {
//                 if (p.value == 1) {
//                     p.checked = true;
//                     $(`#aaa_${member_data[i].MEM_NO}`).click(function () {

//                         if ($(`#aaa_${member_data[i].MEM_NO}`).val() == 0) {
//                             $(`#aaa_${member_data[i].MEM_NO}`).val(1);
//                         } else {
//                             $(`#aaa_${member_data[i].MEM_NO}`).val(0);
//                         }
//                     })
//                 } else {
//                     p.checked = false;
//                 }
//                 console.log(pData[i].value);
//             });
//         } else {
//             alert(xhr.status);
//         }
//     }
//     xhr.open("Get", "../../dest/php/Back_End/Back_End_MEM_data.php", true);
//     xhr.send(null);
// });