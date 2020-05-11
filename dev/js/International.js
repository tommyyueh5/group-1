window.addEventListener('load', function () {
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
    // pdate.classList.add('pdate');
    
   



    //ajax取得json檔資料
    (function () {
        let xhr = new XMLHttpRequest();
        let xhrData;

        xhr.addEventListener('load', function () {
            // console.log(xhr.readyState);

            if (xhr.readyState == 4 && xhr.status == 200) {
                xhrData = JSON.parse(xhr.responseText);
                ExportHtml(xhrData)
            }
        });
        // 資料路徑
        xhr.open('get', './news.json', true);
        xhr.send();
    })();
    // xhrhandler()


    // ================================================================


    //輸出資料至畫面畫面
    function ExportHtml(datalist) {
        let flag = false;
        Array.from(International).forEach((item, index) => {
            item.addEventListener('click', function () {

                
                console.dir(document.body);
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

                //設置屬性區

                img.setAttribute('src', datalist[index].detail.imgBox.img);
                //  圖片敘述
                pImg.innerText = `▲ ${datalist[index].detail.imgBox.imgdetail}`;
                // console.log(datalist[index]);




                // 顯示標題及內容
                let dateChilds = dateBox.children;
                let date = dateHandler(datalist[index].detail.date);
                newsTitle.innerText = datalist[index].title;
                newsContent.innerText = datalist[index].detail.textContent;
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
        點擊subNewsBox之外關閉彈跳視窗
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
            return date.split('/');
        }
    }

});