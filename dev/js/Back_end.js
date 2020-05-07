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




    let tagTitle = document.querySelector("#tag_title");

    let mgmtClicks = document.querySelectorAll(".mgmt_title");

    Array.from(mgmtClicks).forEach(mgmtClick => {
        tagTitle.textContent = "會員列表"
        mgmtClick.addEventListener("click", () => {
            let titleVal = mgmtClick.children[1].textContent;
            tagTitle.textContent = titleVal;
        })
    });





});



