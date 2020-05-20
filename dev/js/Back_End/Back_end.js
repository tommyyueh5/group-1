//頁籤功能
window.addEventListener('load', () => {
    //抓取標題
    let members = document.querySelectorAll('.mgmt_title');
    //抓取頁籤
    let datas = document.querySelectorAll('.data');
    //建立迴圈函式
    Array.from(members).forEach((memitem, index) => {
        //聆聽點擊
        memitem.addEventListener('click', () => {
            //先移除全部class .on
            for (let i = 0; i < datas.length; i++) {
                datas[i].style.display = 'none';
            }
            //把自己加上class on.
            datas[index].style.display = 'block';
        });
    });

    //版面標題動態替換功能
    //宣告替換物件
    let tagTitle = document.querySelector("#tag_title");
    //宣告被替換物件
    let mgmtClicks = document.querySelectorAll(".mgmt_title");
    //建立自動迴圈，點到誰指定誰
    Array.from(mgmtClicks).forEach(mgmtClick => {
        tagTitle.textContent = "會員列表"
        //建立點擊聆聽
        mgmtClick.addEventListener("click", () => {
            let titleVal = mgmtClick.children[1].textContent;
            //點及更換名稱
            tagTitle.textContent = titleVal;
        })
    });

    //黃色遮罩動態移動功能
    //宣告黃色遮罩條
    let listBar = document.querySelector('#maskbar');
    //宣告所有列表欄位
    let mgmtTitles = document.querySelectorAll('.mgmt_title');
    //自動迴圈
    Array.from(mgmtTitles).forEach((mgmtTitle, index) => {
        //建立事件聆聽案件  
        mgmtTitle.addEventListener('click', function () {
            //變更列表欄位迴圈
            for (let i = 0; i < mgmtTitles.length; i++) {
                //洗掉所有顏色
                mgmtTitles[i].children[1].classList.remove('on');
                mgmtTitles[i].children[0].classList.remove('on');
            }
            //加上點選當前的顏色
            this.children[1].classList.add('on');
            this.children[0].classList.add('on');
            //點選到的第幾列增加幾個固定高
            listBar.style.top = (50 * index) + 'px';
        })
    });
});



