//頁籤功能

window.addEventListener('load', () => {


    function $id(id) {
        return document.getElementById(id);
    }

    function $cs(cs) {
        return document.querySelector('.' + cs);
    }

    function $csa(csa) {
        return document.querySelectorAll('.' + csa);
    }

    function $tag(tag) {
        return document.getElementsByTagName(tag);
    }



    //宣告頁籤
    let datas = document.querySelectorAll('.data');
    //針對mgmt_title建立自動迴圈，頁籤切換功能
    Array.from($csa('mgmt_title')).forEach((memitem, index) => {
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

    //新增遊戲題目功能
    let cancelCreateTopit = () => {
        //刪除新增題目表格
        $csa('game_list')[0].removeChild($id('create_game'));
        //開啟新增題目createBtn點擊聆聽功能
        createBtn.addEventListener('click', createFun, true)

    };
    //新增商品功能
    let cancelCreateProduct = () => {
        //刪除新增題目表格
        $csa('product_list')[0].removeChild($id('create_product'));
        //開啟新增題目createBtn點擊聆聽功能
        createBtn.addEventListener('click', createFun, true)
    };

    //版面標題動態替換功能
    let createBtn = document.querySelector("#create_btn");
    //針對mgmt_title建立自動迴圈，點到誰指定誰
    Array.from($csa('mgmt_title')).forEach((mgmtClick, index) => {
        $id('tag_title').textContent = "會員列表"
        //建立點擊聆聽
        mgmtClick.addEventListener("click", () => {
            createBtn.removeEventListener('click', createFun, true);
            createBtn.addEventListener('click', createFun, true);
            let titleVal = mgmtClick.children[1].textContent;
            //將tag_title替換成被點擊的名稱
            $id('tag_title').textContent = titleVal;
            createBtn.textContent = titleVal;
            //新增案件判斷切換功能
            createBtn.style.display = "none";

            //判斷頁籤抬頭
            if (createBtn.textContent == "遊戲題庫") {
                createBtn.style.display = "block";
                createBtn.textContent = "新增題庫";
            } else if (createBtn.textContent == "商品上下架") {
                createBtn.style.display = "block";
                createBtn.textContent = "新增商品";
            } else {
                createBtn.style.display = "none";
            }

            // 點擊頁籤將取消所有編輯選取
            let objs = datas[index].querySelectorAll("ul>li");
            for (let j = 0; j < objs.length; j++) {
                objs[j].classList.remove("edit_focus");
            }
            $id('edit').textContent = '編輯';
            //切換頁籤直接刪除新增表格
            if ($id('create_product')) {
                $csa('product_list')[0].removeChild($id('create_product'));
            } else if ($id('create_game')) {
                $csa('game_list')[0].removeChild($id('create_game'));

            }

        })
    });


    //新增題庫功能
    let createFun = function () {
        // console.log(createBtn);
        if (createBtn.textContent == "新增題庫") {
            // console.log('現在是要新增題庫');
            $('.game_list').prepend(`
            <li class="p_game" id="create_game">
                <div class="game_topic">
                <textarea id="game_Tit" cols="20" rows="5"></textarea>
                <label for="topic_img">
                <input type="file" id="topic_img"></input>
                </label>
                </div>
                <ol class="answer_list">
                    <li>
                        <span>A.</span>
                        <input class="bd_style"></input>
                    </li>
                    <li>
                        <span>B.</span>
                        <input class="bd_style"></input>
                    </li>
                    <li>
                        <span>C.</span>
                        <input class="bd_style"></input>
                    </li>
                </ol>
                <div class="answer">
                    <input class="bd_style"></input>
                </div>
                <div class="Audit_results">
                    <span class="center">
                    <input class="game_isON" id="game_ps" type="checkbox" value="0">
                    </span>
                    <div id="create_game_yes">確定新增</div>
                    <div id="create_game_no">取消新增</div>
                </div>
            </li>
            `)
            createGame();
            //關閉createBtn的點擊聆聽功能
            createBtn.removeEventListener('click', createFun, true);
            //取消新增createBtn點擊聆聽功能
            $id('create_game_no').addEventListener('click', cancelCreateTopit, true);
        } else if (createBtn.textContent == "新增商品") {
            console.log('現在是要新增商品');
            $('.product_list').prepend(`
                <li class="p_product" id="create_product">
                    <div class="product_img_div">
                        <input class="uploadimg" id="product-img-upload" type="image" src="./image/member/interface.png" />
                        <input class="uploadbtn" type="file" id="upload"/>
                        <p class="file-warning warning_color"></p>
                    </div>
                    <div class="main_data">
                        <select name="" id="imageKind">
                            <option value="">----</option>
                            <option value="clothe">防護衣</option>
                            <option value="goggle">防疫眼鏡</option>
                            <option value="mask">防疫口罩</option>
                        </select>
                        <p class="kind-warning warning_color"></p>

                        <textarea name="" id="product-desc" cols="29" rows="5"></textarea>
                        <p class="desc-warning warning_color"></p>
                    </div>
                    <div class="category" id="create_date_item">
                        <p>上架時間</p>
                        <input type="date" name="" id="pro-time">
                        <p class="time-warning warning_color"></p>

                        <p>上架名</p>
                        <input type="text" name="" id="pro-id">
                        <p class="id-warning warning_color"></p>

                        <p>上架價格</p>
                        <input type="text" name="" id="pro-price">
                        <p class="pri-warning warning_color"></p>
                    </div>
                    <div class="Audit_results">
                        <span class="center">
                            <input class="product_isON" id="product_psi" type="checkbox" value="0">
                        </span>
                        <div id="create_product_yes">確定新增</div>
                        <div id="create_product_no">取消新增</div>
                    </div>
            </li>`)
            //關閉createBtn的點擊聆聽功能
            createBtn.removeEventListener('click', createFun, true);
            //取消新增createBtn點擊聆聽功能
            $id('create_product_no').addEventListener('click', cancelCreateProduct, true);

            $("input.uploadimg").click(function() {
                $("input.uploadbtn").click();
            });
            newProduct();
        }
    }

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
    // 編輯功能
    let edit_cancel = () => {
        let arrPf = [];
        // 建立mgmt_title為基礎的自動迴圈
        Array.from($csa('mgmt_title')).forEach((memitem, index) => {
            // 判斷前兩個不允許做編輯
            if ($tag('h1')[index].textContent == $id('tag_title').textContent) {
                if ($tag('h1')[index].textContent == "會員列表") {
                    alert(`${memitem.textContent}表單無法修改`)
                } else if ($tag('h1')[index].textContent == "檢舉案件") {
                    alert(`${memitem.textContent}表單無法修改`)
                } else {
                    // 後面五個可以做編輯且判斷底下的每一個class有沒有edit_focus沒有的話加上，有的話取消
                    let objects = $csa('data')[index].querySelectorAll('ul>li')
                    
                    if ($csa('data')[index].querySelectorAll('ul>li')[0].classList.contains('edit_focus')) {
                        for (let j = 0; j < objects.length; j++) {
                            objects[j].classList.remove('edit_focus')
                            objects[j].querySelector('#edit_cancel').classList.remove('on');
                            // 編輯按鈕文字切換
                            $id('edit').textContent = '編輯';
                        }

                        arrPf.push('');
                    } else {
                        let objects = $csa('data')[index].querySelectorAll('ul>li')
                        for (let j = 0; j < objects.length; j++) {
                            
                            
                            objects[j].classList.add('edit_focus')
                            $id('edit').textContent = '取消';
                            objects[j].querySelector('#edit_cancel').classList.add('on');
                        }
                        arrPf.push(objects);
                    };
                    
                };
            };
        });
        removeDiscussion(arrPf);
    };

    $id('edit').addEventListener('click', edit_cancel, true);

    function createGame() {
        let submit = $id('create_game_yes');
        let isOpen = 0;
        // 題目啟用狀態
        $id('game_ps').addEventListener('change', function () {
            if ($id('game_ps').value == 0) {
                $id('game_ps').value = 1;
                isOpen = $id('game_ps').value;
            } else {
                $id('game_ps').value = 0;
                isOpen = $id('game_ps').value;
            }
        })

    //     let title_object = $csa('mgmt_title')
    //     for (let n = 0; n < title_object.length; n++) {
    //         // 表單欄位數
    //         let objects = $csa('data')[n].querySelectorAll('ul>li')
    //         // 當在當前頁籤且在編輯狀態下才作用

        // console.log(submit);
        // 新增遊戲題目
        if (!submit) {
            return
        } else {
            // console.log($id('topic_img'));
            //照片儲存路徑
            $id('topic_img').addEventListener('change', imgHandler);
            submit.addEventListener('click', () => {
                let ImgPath = sessionStorage.getItem('ImgPath');
                fetch('./PHP_program/Back_End/B_E_game_import.php', {
                    method: "post",
                    body: JSON.stringify({
                        //將資料傳送到後端處理
                        gameTit: $id('game_Tit').value,
                        gameSele_1: $csa('bd_style')[0].value,
                        gameSele_2: $csa('bd_style')[1].value,
                        gameSele_3: $csa('bd_style')[2].value,
                        game_Ans: $csa('bd_style')[3].value,
                        game_IMG: ImgPath,
                        game_isOpen: isOpen
                    }),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
                    }
                }).then(resp => {
                    return resp.text();
                }).then(text => {
                    alert(text);
                    // 清除所有欄位資料
                        $id('game_Tit').value ='';
                        $csa('bd_style')[0].value='';
                        $csa('bd_style')[1].value='';
                        $csa('bd_style')[2].value='';
                        $csa('bd_style')[3].value='';
                        $id('game_ps').value = 0;
                        $id('game_ps').checked = false;

                        sessionStorage.clear();
                }).catch(err => {
                    console.log(err);

                })

            })
        }
    }
    //新增遊戲儲存照片檔案及位置
    function imgHandler(e) {
        sessionStorage.clear();
        const xhrsend = new XMLHttpRequest();
        const Data = new FormData();
        let indexName = e.target.files[0].name.indexOf('.');
        let fileName = e.target.files[0].name.substring(0, indexName);

        // 路徑可能需更改
        let ImgPath = './image/game/img/' + e.target.files[0].name;
        sessionStorage.setItem('ImgPath', ImgPath);
        Data.append('one', e.target.files[0], fileName);
        xhrsend.open("post", "./image/game/img/Back_End_IMG.php");
        xhrsend.send(Data);
        alert('照片儲存成功')
    }


    //刪除文章
    function removeDiscussion(dataLi){
        // console.log(dataLi);
        
        // Array.from(dataLi).forEach
        // console.log(forum_data[0].DIS_NO);
        
        if(dataLi[0] == undefined){
            return    
        }
        Array.from(dataLi[0]).forEach((item,index)=>{
            // console.log(item);
            item.children[0].addEventListener('click',()=>{
                let forum_data = JSON.parse(sessionStorage.getItem('forum_data'))
                if (forum_data == '') {
                    return
                }
                
                let NODiscNum = forum_data[index].DIS_NO;
                // console.log(NODiscNum ,index);
                item.remove();
                fetch('./PHP_program/Back_End/removeDicBack_end.php',{
                    method:'POST',
                    body:JSON.stringify({
                        "NONum":NODiscNum
                    }),
                    headers:{
                        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
                    }
                }).then(resp=>{
                    if(resp.ok){
                        return resp.text();
                    }
                }).then(text=>{
                    console.log(text);
                }).catch(err=>{
                    console.log('有問題');
                    
                })

            })
            
        })
    }


});
