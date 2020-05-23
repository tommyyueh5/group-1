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
    Array.from($csa('mgmt_title')).forEach(mgmtClick => {
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
                //判斷商品頁是否有新增表格
                if ($id('create_product')) {
                    //如果有就刪除
                    cancelCreateProduct();
                }
                //判斷頁籤抬頭
            } else if (createBtn.textContent == "商品上下架") {
                createBtn.style.display = "block";
                createBtn.textContent = "新增商品";
                //判斷題庫頁是否有新增表格
                if ($id('create_game')) {
                    //如果有就刪除
                    cancelCreateTopit();
                }
            } else {
                createBtn.style.display = "none";
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
                <textarea cols="20" rows="5"></textarea>
                </div>
                <ul class="answer_list">
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
                </ul>
                <div class="answer">
                    <input class="bd_style"></input>
                </div>
                <div class="Audit_results">
                    <span class="center">
                    <input class="game_isON" id="game_ps" type="checkbox" value="1">
                    </span>
                    <div id="create_game_yes">確定新增</div>
                    <div id="create_game_no">取消新增</div>
                </div>
            </li>
            `)
            //關閉createBtn的點擊聆聽功能
            createBtn.removeEventListener('click', createFun, true);
            //取消新增createBtn點擊聆聽功能
            $id('create_game_no').addEventListener('click', cancelCreateTopit, true);
        } else if (createBtn.textContent == "新增商品") {
            // console.log('現在是要新增商品');
            $('.product_list').prepend(`
                <li class="p-up-product" id="create_product">
                    <div class="product_img_div">
                        <input class="uploadimg" id="product-img-upload" type="image" src="../dest/image/member/interface.png" />
                        <input class="uploadbtn" type="file" id="upload"/>
                    </div>
                    <div class="main_data">
                        <select name="" id="imageKind">
                            <option value="clothe">防護衣</option>
                            <option value="goggle">防疫眼鏡</option>
                            <option value="mask">防疫口罩</option>
                        </select>
                        <textarea name="" id="product-desc" cols="29" rows="5"></textarea>
                    </div>
                    <div class="category">
                        <p>上架時間</p>
                        <input type="date" name="" id="pro-time">

                        <p>上架名</p>
                        <input type="text" name="" id="pro-id">

                        <p>上架價格</p>
                        <input type="text" name="" id="pro-price">
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

    let edit = () => {
        Array.from($csa('mgmt_title')).forEach((memitem, index) => {
            if ($tag('h1')[index].textContent == $id('tag_title').textContent) {
                if ($tag('h1')[index].textContent == "會員列表") {
                    alert(`${memitem.textContent}表單無法修改`)
                } else if ($tag('h1')[index].textContent == "檢舉案件") {
                    alert(`${memitem.textContent}表單無法修改`)
                } else {
                    console.log($csa('data'));
                    Array.from($csa('data')).forEach((data, index) => {
                        // $csa('data')[index].children[0].children[0].classList.add('edit_focus')
                        console.log(data.children);
                    });


                    // for (let j = 0; j < $csa('data').length; j++) {
                    //     $csa('data')[index].children[0].children[j].classList.add('edit_focus')
                    // }
                }
                // console.log($csa('data')[index]);

            }
        });
    };

    $id('edit').addEventListener('click', edit, true);

















});



