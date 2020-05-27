// -------------------------------------最新消息(輪播)------------------------------

window.addEventListener('load', () => {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status == 200) {
            const new_news_data = JSON.parse(xhr.responseText);
            let dateSplit = newdate(new_news_data)   
            for (let i = 0; i < new_news_data.length; i++) {
                // console.log(JSON.parse(xhr.responseText));
                $('.new_internal').append(`
                    <div class="item myowl-item-2 newsal">
                        <a href="javascript:void(0)">
                            <div class="date">
                                <h4 class="year">${dateSplit[i][0]}</h4>
                                <h4 class="day">${dateSplit[i][2]}</h4>
                                <h4 class="month">${dateSplit[i][1]}月</h4>
                            </div>
                            <img src="${new_news_data[i].NEWS_IMG_PATH}" alt="">
                            <div class="cards_content">
                                <span>${new_news_data[i].NEWS_TIT}</span>
                            </div>
                        </a>
                    </div>
                `)
            }
            
            // import "../../dest/node_modules/owl.carousel@2.3.4/dist/assets/owl.carousel.min.css";
            $('.myowl-2').owlCarousel({
                init:test(new_news_data),
                loop: false,
                margin: 50,
                nav: true,
                // navContainer: '#customNav',
                navText: ["<i class='icofont icofont-rounded-left prenext pre'></i>", "<i class='icofont icofont-rounded-right prenext next'></i>"],
                responsive: {
                    0: {
                        items: 1,
                        init:test(new_news_data)
                    },
                    767: {
                        items: 2,
                        init:test(new_news_data)
                    },
                    1000: {
                        items: 3,
                        init:test(new_news_data)
                    },
                    1300: {
                        items: 3,
                        init:test(new_news_data)
                        
                    },
                },               
            });
            // test(news_data); 
        } else {
            alert(xhr.status);
        }
    }

    xhr.open("Get", "./PHP_program/new_news.php", true);
    xhr.send(null);
  // ----------------------切日期----------------
  function newdate(dates){
    let arrDate =  dates.map(date => (date.NEWS_PUBLISH_DATE.split('-')));
    return arrDate
 };
 // ----------------------切日期----------------
 function test(datas) {
     //獲取標籤區
     let International = document.querySelectorAll('.newsal');
     let subNewsBox = document.querySelector('.subNewsBox');


     //建立元素區
     let btnClose = document.createElement('a');
     let subcontainer = document.createElement('div');
     let content = document.createElement('div');
     let newsTitle = document.createElement('h1');
     let newsContent = document.createElement('p');
     let imgBox = document.createElement('div');
     let img = document.createElement('img');
     let dateBox = document.createElement('div');
     let pdate = ` <p class="date1">0</p>
                 <p class="date2">1</p>
                 <p class="date3">2</p>`;
     let pImg = document.createElement('p')
     //新增class區
     subcontainer.classList.add('subcontainer');
     btnClose.classList.add('btnclose');
     content.classList.add('content');
     imgBox.classList.add('imgBox');
     newsTitle.classList.add('newsTitle');
     newsContent.classList.add('newsContent');
     dateBox.classList.add('dateBox');
     pImg.classList.add('pImg');
     ExportHtml(datas)


     // ================================================================


     //輸出資料至畫面畫面
     function ExportHtml(datalist) {
         // console.log(datalist);

         let flag = false;
         Array.from(International).forEach((item, index) => {
             item.addEventListener('click', function () {

                 // console.dir(document.body);
                 document.body.style.overflow = 'hidden';


                 // subNewsBox.style.overflow = 'hidden';
                 //顯示資料及加入標籤
                 subNewsBox.style.display = 'block';
                 subNewsBox.appendChild(subcontainer);
                 subcontainer.appendChild(btnClose);
                 subcontainer.appendChild(content);
                 content.appendChild(newsTitle);
                 content.appendChild(imgBox);
                 content.appendChild(pImg);
                 content.appendChild(newsContent);
                 imgBox.appendChild(img);
                 
                 content.appendChild(dateBox);
                 dateBox.innerHTML = pdate;
                 // dateBox.appendChild(pdate);
                 // dateBox.appendChild(pdate)

                 //設置屬性區
                 img.setAttribute('src', datalist[index].NEWS_IMG_PATH);
                 //停止預設行為
                 btnClose.setAttribute('href', 'javascript:void(0)');
                 //  圖片敘述
                 pImg.innerText = `▲ ${datalist[index].NEWS_IMG_EXP}`;
                 // console.log(datalist[index]);


                 // 顯示標題及內容
                 let dateChilds = dateBox.children;
                 let date = dateHandler(datalist[index].NEWS_PUBLISH_DATE);
                 newsTitle.innerText = datalist[index].NEWS_TIT;
                 newsContent.innerText = datalist[index].NEWS_CON;
                 dateChilds[0].innerText = date[0];
                 dateChilds[2].innerText = `${date[1]}月`;
                 dateChilds[1].innerText = date[2];



                 //關閉就執行
                 if (!flag) {
                     btnClose.addEventListener('click', closebtn);
                     subNewsBox.addEventListener('click', outlayerclose);
                 }
             });
         });


         //關閉btn按鈕
         function closebtn() {
             subcontainer.remove();
             flag = false;
         }
         // 點擊subNewsBox之外關閉彈跳視窗
         function outlayerclose(e) {
             // console.log(e.clientX, e.clientY);
             let rx = subcontainer.getBoundingClientRect().right;
             let lx = subcontainer.getBoundingClientRect().left;
             let by = subcontainer.getBoundingClientRect().bottom;
             let ty = subcontainer.getBoundingClientRect().top;
             if (e.clientX < lx || e.clientX > rx || e.clientY < ty || e.clientY > by) {
                 // document.body.display.overflow = 'auto';
                 document.body.style.overflow = 'auto';
                 subNewsBox.style.display = 'none';
                 subcontainer.remove();
                 flag = false;
             }
         }

         //日期處理
         function dateHandler(date) {
             return date.split('-');
         }
     }
 }
});

