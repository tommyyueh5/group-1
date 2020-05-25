window.addEventListener('load', function () {

    // console.log(article);


    fetch('./PHP_program/HomePage_Instant_News.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(function (resp) {
        if (resp.status == 200) {
            return resp.text();
        }
    }).then(text => {
        const datas = JSON.parse(text);
        const article_c = document.querySelector('.top_rigth_container');

        // console.log(datas.length);
        
        
        datas.forEach((data, index) => {
            // console.log(data.NEWS_NO);
            if (data.NEWS_NO == 5 || data.NEWS_NO >= 13) {
                return
            } else if (data.NEWS_NO <= 12) {
                // console.log(index +'=' + data.NEWS_NO);
                const liS = document.createElement('li');
                // console.log(index);
                liS.classList.add('domestic_2');
                // console.log(liS.className);
                
                let newsText = `
                        <p><a href="javascript:void(0)">${data.NEWS_TIT}</a></p>
                        `;
                liS.innerHTML = newsText;
                // console.log(div_C);
                article_c.appendChild(liS);
            }
        })
        test(datas);
        
    })

    function test(data) {
        
        
        //獲取標籤區
        let International = document.querySelectorAll('.domestic_2');
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
        ExportHtml(data)


        // ================================================================


        //輸出資料至畫面畫面
        function ExportHtml(datalist) {
            // console.log(datalist);
                let arryTest = [];
                datalist.forEach((item,num)=>{
                    if (item.NEWS_NO == 5 || item.NEWS_NO >= 13) {
                        return
                    } else if (item.NEWS_NO <= 12) {
                        arryTest.push(num);
                        // console.log(num);
                        
                    }
                })
                // console.log(arryTest);
                
            let flag = false;
            Array.from(International).forEach((item, index) => {
                // console.log(datalist[index].NEWS_NO);

                item.addEventListener('click', function () {
                    // console.log(item);
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
                    content.appendChild(newsContent);
                    imgBox.appendChild(img);
                    imgBox.appendChild(pImg);
                    content.appendChild(dateBox);
                    dateBox.innerHTML = pdate;
                    // dateBox.appendChild(pdate);
                    // dateBox.appendChild(pdate)
                    console.log(arryTest[index]);
                    
                    //設置屬性區
                    img.setAttribute('src', datalist[arryTest[index]].NEWS_IMG_PATH);
                    //停止預設行為
                    btnClose.setAttribute('href', 'javascript:void(0)');
                    //  圖片敘述
                    pImg.innerText = `▲ ${datalist[arryTest[index]].NEWS_IMG_EXP}`;
                    // console.log(datalist[index]);


                    // 顯示標題及內容
                    let dateChilds = dateBox.children;
                    let date = dateHandler(datalist[arryTest[index]].NEWS_PUBLISH_DATE);
                    // console.log(date);

                    newsTitle.innerText = datalist[arryTest[index]].NEWS_TIT;
                    newsContent.innerText = datalist[arryTest[index]].NEWS_CON;
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
            function dateHandler(date_show) {
                return date_show.split('-');
            }
        }

    }
    
});
