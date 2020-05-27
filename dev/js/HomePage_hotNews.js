window.addEventListener('load', function () {

    // // console.log(article);

    // fetch('./PHP_program/HomePage_hotNews.php', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded'
    //     }
    // }).then(function (resp) {
    //     if (resp.status == 200) {
    //         return resp.text();
    //     }
    // }).then(text => {

    //     const article = document.querySelector('.article');
    //     const datas = JSON.parse(text);
    //     // console.log(datas.length);
    //     // if (datas.length <= 4){
    //         datas.forEach((data, index) => {
    //             if(data.NEWS_NO <= 4){
    //                 const li = document.createElement('li');
    //             li.classList.add('item');
    //             li.classList.add(`item${index}`);
    //             let newsText = `
    // <div class="International">
    //     <div class="hotNewcontent">
    //         <img src="${data.NEWS_IMG_PATH}" alt="">
    //         <div class="content_hot">
    //             <h1>${data.NEWS_TIT}</h1>
    //         </div>
    //     </div>
    // </div>
    //                 `;
    //             li.innerHTML = newsText;
    //             article.appendChild(li);
    //             }

    //         })
    //     // }
    //     test(datas)
    //     return datas
    // })

    // function test(datas) {
    //       //獲取標籤區
    // let International = document.querySelectorAll('.International');
    // let subNewsBox = document.querySelector('.subNewsBox');


    // //建立元素區
    // let btnClose = document.createElement('a');
    // let subcontainer = document.createElement('div');
    // let content = document.createElement('div');
    // let newsTitle = document.createElement('h1');
    // let newsContent = document.createElement('p');
    // let imgBox = document.createElement('div');
    // let img = document.createElement('img');
    // let dateBox = document.createElement('div');
    // let pdate = ` <p class="date1">0</p>
    //                 <p class="date2">1</p>
    //                 <p class="date3">2</p>`;
    // let pImg = document.createElement('p')
    // //新增class區
    // subcontainer.classList.add('subcontainer');
    // btnClose.classList.add('btnclose');
    // content.classList.add('content');
    // imgBox.classList.add('imgBox');
    // newsTitle.classList.add('newsTitle');
    // newsContent.classList.add('newsContent');
    // dateBox.classList.add('dateBox');
    // pImg.classList.add('pImg');
    // ExportHtml(datas)


    // // ================================================================


    // //輸出資料至畫面畫面
    // function ExportHtml(datalist) {
    //     // console.log(datalist);

    //     let flag = false;
    //     Array.from(International).forEach((item, index) => {
    //         item.addEventListener('click', function () {

    //             // console.dir(document.body);
    //             document.body.style.overflow = 'hidden';


    //             // subNewsBox.style.overflow = 'hidden';
    //             //顯示資料及加入標籤
    //             subNewsBox.style.display = 'block';
    //             subNewsBox.appendChild(subcontainer);
    //             subcontainer.appendChild(btnClose);
    //             subcontainer.appendChild(content);
    //             content.appendChild(newsTitle);
    //             content.appendChild(imgBox);
    //             content.appendChild(newsContent);
    //             imgBox.appendChild(img);
    //             imgBox.appendChild(pImg);
    //             content.appendChild(dateBox);
    //             dateBox.innerHTML = pdate;
    //             // dateBox.appendChild(pdate);
    //             // dateBox.appendChild(pdate)

    //             //設置屬性區
    //             img.setAttribute('src', datalist[index].NEWS_IMG_PATH);
    //             //停止預設行為
    //             btnClose.setAttribute('href', 'javascript:void(0)');
    //             //  圖片敘述
    //             pImg.innerText = `▲ ${datalist[index].NEWS_IMG_EXP}`;
    //             // console.log(datalist[index]);


    //             // 顯示標題及內容
    //             let dateChilds = dateBox.children;
    //             let date = dateHandler(datalist[index].NEWS_PUBLISH_DATE);
    //             newsTitle.innerText = datalist[index].NEWS_TIT;
    //             newsContent.innerText = datalist[index].NEWS_CON;
    //             dateChilds[0].innerText = date[0];
    //             dateChilds[2].innerText = `${date[1]}月`;
    //             dateChilds[1].innerText = date[2];



    //             //關閉就執行
    //             if (!flag) {
    //                 btnClose.addEventListener('click', closebtn);
    //                 subNewsBox.addEventListener('click', outlayerclose);
    //             }
    //         });
    //     });


    //     //關閉btn按鈕
    //     function closebtn() {
    //         subcontainer.remove();
    //         flag = false;
    //     }
    //     // 點擊subNewsBox之外關閉彈跳視窗
    //     function outlayerclose(e) {
    //         // console.log(e.clientX, e.clientY);
    //         let rx = subcontainer.getBoundingClientRect().right;
    //         let lx = subcontainer.getBoundingClientRect().left;
    //         let by = subcontainer.getBoundingClientRect().bottom;
    //         let ty = subcontainer.getBoundingClientRect().top;
    //         if (e.clientX < lx || e.clientX > rx || e.clientY < ty || e.clientY > by) {
    //             // document.body.display.overflow = 'auto';
    //             document.body.style.overflow = 'auto';
    //             subNewsBox.style.display = 'none';
    //             subcontainer.remove();
    //             flag = false;
    //         }
    //     }

    //     //日期處理
    //     function dateHandler(date) {
    //         return date.split('-');
    //     }
    // }

    // }
//   <div class="content_hot">
//                                     <h1>${news_data[i].NEWS_TIT}</h1>
//                                 </div>
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status == 200) {
            const news_data = JSON.parse(xhr.responseText);
            let dateSplit = newdate(news_data)
            for (let i = 0; i < news_data.length; i++) {
                $('.article').append(`
                    <li class="item">
                        <div class="International">
                            <div class="hotNewcontent">
                                <div class="date">
                                    <h4 class="year">${dateSplit[i][0]}</h4>
                                    <h4 class="day">${dateSplit[i][2]}</h4>
                                    <h4 class="month">${dateSplit[i][1]}月</h4>
                                </div>
                                <img src="${news_data[i].NEWS_IMG_PATH}" alt="">
                                <div class="cards_content">
                                    <span>${news_data[i].NEWS_TIT}</span>
                                </div>
                            </div>
                        </div>
                    </li>
                `)
            }
            test(news_data);
        } else {
            alert(xhr.status);
        }
    }
    xhr.open("Get", "./PHP_program/HomePage_hotNews.php", true);
    xhr.send(null);

    // ----------------------切日期----------------
    function newdate(dates) {
        let arrDate = dates.map(date => (date.NEWS_PUBLISH_DATE.split('-')));
        return arrDate
    };
    // ----------------------切日期----------------

    function test(datas) {
        //獲取標籤區
        let International = document.querySelectorAll('.International');
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