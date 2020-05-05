document.write("<script type='text/javascript' src='../dest/js/var.js'></script>");

//swiper---------------------------------------------------------------------
$(window).ready(function() {
        var swiper1 = new Swiper('.swiper-container ', {
            direction: 'horizontal',
            speed: 1000,
            // spaceBetween: 500,
            autoHeight: true,
            effect: "slide",
            watchOverflow: true,
            loop: true,
            grabCursor: true,
            touchAngle: 45,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                // dynamicBullets:true,
                renderBullet: function(index, className) {
                    // let year = Array.from(document.querySelectorAll('.swiper-slide'))[index];
                    let year = document.querySelectorAll('.data')[index + 1].getAttribute('data-year');
                    return `<span class="${className}"> ${year} </span>`;
                },
            },

            

            cubeEffect: {
                slideShadows: true,
                shadow: true,
            },
            breakpoints:{
                1200:{
                    direction: 'vertical',
                    
                }
            }


        });
    })
    // -----SOP--------------------------------------------------------------------------------
window.addEventListener('load', function() {
    let h = document.getElementsByClassName('fluid')[0];
    let thermometer = document.getElementsByClassName('sop-thermometer')[0];
    let v = 0;
    let c = true;
    let clear;

    setInterval(function() {
        v += 5;
        h.style.height = `${check(v)}%`;
        document.getElementsByClassName('base')[0].innerHTML = `${check(v)}<sup>o</sup>`;
        if (v == 45) {
            v = 0;
        }

    }, 500);
    //檢查是否大於 10 
    function check(number) {
        if (number <= 5) {
            number = "0" + number;
            return number;
        } else {
            number = parseInt(number);
            return number;
        }
    }
});

window.addEventListener('load', function() {
    let washHand = document.getElementsByClassName('wash-hand')[0];
    let sopWater = document.getElementsByClassName('sop-water');
    washHand.addEventListener('mouseover', function() {
        sopWater[0].classList.add('-w1');
        sopWater[1].classList.add('-w2');
        sopWater[2].classList.add('-w3');
    });
    washHand.addEventListener('mouseleave', function() {
        sopWater[0].classList.remove('-w1');
        sopWater[1].classList.remove('-w2');
        sopWater[2].classList.remove('-w3');
    });
});
// -----you can also like:--------------------------------------------------------------------------------

// window.addEventListener('load',function(){

var swiper2 = new Swiper('.swiper-container-games', {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: false,
    setWrapperSize: true,
    loop: true,
    autoplay: {
        delay: 3000,
      },
    pagination: {
        el: '.paginations',
        clickable: true,
        dynamicBullets: true,
    },

    breakpoints: {
        414: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    }
    //   });
});
// 即時訊息=================================================

window.addEventListener('load', function() {

    let taiwanplp = ['台北市:116',
            '台中市:40',
            '台南市:16',
            '高雄市:44',
            '基隆市:7',
            '新竹市:11',
            '嘉義市:4',
            '新北市:90',
            '桃園市:51',
            '新竹縣:6',
            '宜蘭縣:2',
            '苗栗縣:3',
            '彰化縣:18',
            '南投縣:2',
            '雲林縣:5',
            '嘉義縣:2',
            '屏東縣:12',
            '澎湖縣:0',
            '花蓮縣:0',
            '台東縣:0',
            '金門縣:0',
            '連江縣:0'
        ]
        // let showtext = document.querySelector('.textillate-Start');
    let type = new Typed('#textillate-Start', {
        strings: taiwanplp,
        typeSpeed: 0,
        fadeOut: true,
        loop: true,
        smartBackspace: false,

    });
});
// 影片==============================================


window.addEventListener('load',function(){


const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');



function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  console.log(icon);
  toggle.textContent = icon;
}

function skip() {
 video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

});
// 子分頁============================================================
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
        xhr.open('get', '/dest/js/news.json', true);
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
            return date.split('/');
        }
    }

});
