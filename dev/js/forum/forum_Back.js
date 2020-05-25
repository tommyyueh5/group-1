// 撈留言資料顯示在前端
function showComment() {
    // console.log(articleNo);
    var article_No = $('.article_content_no').text();
    console.log(article_No);
    $.ajax({
        url: './PHP_program/getcomment.php',
        type: "POST",
        dataType: 'json',
        data: {
            articleNo: article_No,
        },
        success(data) {
            //先清空前面留言資料不然會重複
            $(".comment").html('');
            for (let i = 0; i < data.length; i++) {
                userId = data[i].MEM_ACC;
                userPic = data[i].MEM_IMG;
                userCom = data[i].COM_CON;
                comTime = data[i].COM_DATE;
                //動態新增留言欄位
                $('.comment').append(`
                        <h2 id="commentId"><img src="${userPic}">${userId}：
                            <span>${userCom}</span>
                            <span class="time">${comTime}</span>
                        </h2>
                        `)
            }
        }
    })
}
// 撈後端文章資料顯示在前端
function showData() {
    var filterText = $('div.filter_order .-on h3').text();
    // console.log(filterText);
    // $('.masonry').html('');
    $.ajax({
        url: './PHP_program/getinfo.php',
        type: "POST",
        dataType: 'json',
        data: {
            filterText: filterText,
        },
        success(data) {
            for (let i = 0; i < data.length; i++) {
                userName = data[i].MEM_ACC;
                nowTime = data[i].DIS_EST;
                // topic = data[i].DIS_C_NO;
                thumImg = data[i].MEM_IMG
                imgPath = data[i].DIS_IMG_PATH;
                artitle = data[i].DIS_TIT;
                artcon = data[i].DIS_CON;
                artNo = data[i].DIS_NO;
                comCount = data[i].COM_COUNT;
                //動態新增要加的欄位
                $('.masonry').append(`
                            <div class="article col-sm-12 col-md-6 col-lg-6 col-xl-4 item ">
                                <div class="item_content">
                                    <div class="date">
                                        <h4 class="year">${nowTime}</h4>
                                    </div>
                                    <div class="info">
                                        <img class="thum_img" src="${thumImg}">
                                        <h4 class="username">${userName}</h4>
                                    </div>
                                    <h2 class="article_title">${artitle}</h2>
                                    <img class="main_img" src="${imgPath}" alt="">
                                    <p class="article_contentp">${artcon}</p>
                                    <p class="article_contentno">${artNo}</p>
                                    <h4 class="like_comment"><span class="comments">${comCount}</span>則留言</h4>
                                    <h4 class="function">
                                        <img class="heart" src="./image/forum/like.png">
                                        <img class="share" src="./image/forum/share.png">
                                    </h4>
                                    <h4 class="function2">
                                        <img class="facebook" src="./image/forum/facebook.png" alt="">
                                        <img class="line" src="./image/forum/line.png" alt="">
                                    </h4>
                                </div>
                            </div>
                        `)
            }
        },
        error: function(xhr) {
            alert("發生錯誤: " + xhr.status + " " + xhr.statusText);
        }
    });
}

// 撈後端後資料依”最新發佈時間“顯示在前端
function showDataTime() {
    // var filterTime = $('div.filter_time .-on h2 span').text();
    var filterText = $('div.filter_order .-on h3 ').text();
    // console.log(filterTime);
    // console.log(filterText);
    $.ajax({
        url: './PHP_program/getinfo_time.php',
        type: "POST",
        dataType: 'json',
        data: {
            filterText: filterText,
            // filterTime: filterTime,
        },
        success(data) {
            for (let i = 0; i < data.length; i++) {
                userName = data[i].MEM_ACC;
                nowTime = data[i].DIS_EST;
                // topic = data[i].DIS_C_NO;
                thumImg = data[i].MEM_IMG
                imgPath = data[i].DIS_IMG_PATH;
                artitle = data[i].DIS_TIT;
                artcon = data[i].DIS_CON;
                artNo = data[i].DIS_NO
                comCount = data[i].COM_COUNT;
                //動態新增要加的欄位
                $('.masonry').append(`
                            <div class="article col-sm-12 col-md-6 col-lg-6 col-xl-4 item ">
                                <div class="item_content">
                                    <div class="date">
                                        <h4 class="year">${nowTime}</h4>
                                    </div>
                                    <div class="info">
                                        <img class="thum_img" src="${thumImg}">
                                        <h4 class="username">${userName}</h4>
                                    </div>
                                    <h2 class="article_title">${artitle}</h2>
                                    <img class="main_img" src="${imgPath}" alt="">
                                    <p class="article_contentp">${artcon}</p>
                                    <p class="article_contentno">${artNo}</p>
                                    <h4 class="like_comment"><span class="comments">${comCount}</span>則留言</h4>
                                    <h4 class="function2">
                                        <img class="facebook" src="../dest/image/forum/facebook.png" alt="">
                                        <img class="line" src="../dest/image/forum/line.png" alt="">
                                    </h4>
                                </div>
                            </div>
                        `)
            }
        },
        error: function(xhr) {
            alert("發生錯誤: " + xhr.status + " " + xhr.statusText);
        }
    });
}
// 撈後端後資料依”最多留言數“顯示在前端
function showCommentMost() {
    // var filterTime = $('div.filter_time .-on h2 span').text();
    var filterText = $('div.filter_order .-on h3 ').text();
    // console.log(filterTime);
    // console.log(filterText);
    $.ajax({
        url: '../dest/PHP_program/getinfo_count.php',
        type: "POST",
        dataType: 'json',
        data: {
            filterText: filterText,
            // filterTime: filterTime,
        },
        success(data) {
            for (let i = 0; i < data.length; i++) {
                userName = data[i].MEM_ACC;
                nowTime = data[i].DIS_EST;
                // topic = data[i].DIS_C_NO;
                thumImg = data[i].MEM_IMG
                imgPath = data[i].DIS_IMG_PATH;
                artitle = data[i].DIS_TIT;
                artcon = data[i].DIS_CON;
                artNo = data[i].DIS_NO
                comCount = data[i].COM_COUNT;
                //動態新增要加的欄位
                $('.masonry').append(`
                            <div class="article col-sm-12 col-md-6 col-lg-6 col-xl-4 item ">
                                <div class="item_content">
                                    <div class="date">
                                        <h4 class="year">${nowTime}</h4>
                                    </div>
                                    <div class="info">
                                        <img class="thum_img" src="${thumImg}">
                                        <h4 class="username">${userName}</h4>
                                    </div>
                                    <h2 class="article_title">${artitle}</h2>
                                    <img class="main_img" src="${imgPath}" alt="">
                                    <p class="article_contentp">${artcon}</p>
                                    <p class="article_contentno">${artNo}</p>
                                    <h4 class="like_comment"><span class="comments">${comCount}</span>則留言</h4>
                                    <h4 class="function2">
                                        <img class="facebook" src="./image/forum/facebook.png" alt="">
                                        <img class="line" src="./image/forum/line.png" alt="">
                                    </h4>
                                </div>
                            </div>
                        `)
            }
        },
        error: function(xhr) {
            alert("發生錯誤: " + xhr.status + " " + xhr.statusText);
        }
    });
}
// 傳發文的資料到後端
function uploadData() {
    var memno = sessionStorage.getItem('no');
    console.log(memno);
    $.ajax({
        url: './PHP_program/post.php',
        type: 'POST',
        dataType: 'html',
        data: {
            memno: memno,
            sort: $('#sort').val(),
            title: $('#title').val(),
            content: $('#content').val(),
            path: $(".oldPath")[0].files[0].name,
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert(jqXHR.responseText);
        },
        success: function(data) {
            alert('success: ' + data);
            location.href = 'forum.html';
        }
    });
};
// 傳留言資料到後端
function uploadCom() {
    var memno = sessionStorage.getItem('no');
    var titleNo = $('.article_content_title').text();
    var articleNo = $('.article_content_no').text();
    var comLength = $('.comment h2').length;
    var filterText = $('div.filter_order .-on h3 ').text();
    console.log(comLength);
    $.ajax({
        url: './PHP_program/comment.php',
        type: "POST",
        dataType: 'html',
        data: {
            articleNo: articleNo,
            memno: memno,
            comment: $('#comment_text').val(),
            comLength: comLength,
            filterText: filterText,
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert(jqXHR.responseText);
        },
        success: function(data) {
            alert('success: ' + data);
            // location.href = 'forum.html';
            $('#comment_text').val('');
        }
    });
};
// 更新留言筆數到後端
function updateCom() {
    var memno = sessionStorage.getItem('no');
    var titleNo = $('.article_content_title').text();
    var articleNo = $('.article_content_no').text();
    var comLength = $('.comment h2').length;
    // console.log(articleNo);
    $.ajax({
        url: './PHP_program/updateComment.php',
        type: "POST",
        dataType: 'html',
        data: {
            articleNo: articleNo,
            memno: memno,
            comment: $('#comment_text').val(),
            comLength: comLength,
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert(jqXHR.responseText);
        },
        success: function(data) {
            alert('success: ' + data);
            // location.href = 'forum.html';
            // $('#comment_text').val('');
        }
    });
};
//發文的圖片上傳
function uploadImg() {
    var form = new FormData(document.getElementById('upfile'))
    $.ajax({
        url: './PHP_program/upload.php',
        type: "POST",
        data: form,
        processData: false,
        contentType: false,
        success: function(data) {
            alert(data);
        }
    });
};
// 載入圖片避免重疊
function imgLoad() {
    /* 瀑布流區塊div */
    var $container = $('.masonry');
    //當圖片讀取完畢才執行
    $container.imagesLoaded(function() {
        //選擇瀑布流的區塊名稱
        $container.masonry({
            itemSelector: '.item',
        })
    });
};

//傳送檢舉資訊到資料庫
function sendReport() {
    var memno = sessionStorage.getItem('no'); //會員編號
    var artno = $('.article_content_no').text(); //文章編號
    var reason = $("input[type='checkbox']:checked").val()
    console.log(reason);
    $.ajax({
        url: './PHP_program/report.php',
        type: "POST",
        data: {
            memno: memno,
            artno: artno,
            reason: reason,
        },
        success: function(data) {
            alert(data);
        }
    });
}
$(document).ready(function() {
    showData();
    // imgLoad();
    //按下不同類型的版篩選鍵
    $(".filter_order a.tab").on("click", function(e) {
        $('div.article').remove();
        e.preventDefault();

        $(".filter_time").find("a.tab").removeClass("-on");
        $(this).closest(".filter_order").find("a.tab").removeClass("-on");
        $(this).addClass("-on");

        $("div.tab").removeClass("-on");
        $("div.tab." + $(this).attr("data-target")).addClass("-on");
        var filterText = $('div.filter_order .-on h3 ').text();
        $('.subtitle_1 h3').text(filterText);
        $(".filter_right span").text(filterText);
        $(".filter_left span").text('條件篩選');

        showData();
    });
    //按下熱門程度篩選鍵
    $(".filter_time a.tab_first").on("click", function(e) {
        $('div.article').remove();
        e.preventDefault();

        $(this).closest(".filter_time").find("a.tab").removeClass("-on");
        $(this).addClass("-on");

        $("div.tab").removeClass("-on");
        $("div.tab." + $(this).attr("data-target")).addClass("-on");
        // showData();
        var filterText = $('div.filter_order .-on h3 ').text();
        $('.subtitle_1 h3').text(filterText);
        $(".filter_left span").text($(this).text());

        showCommentMost();
    });
    //按下即時發布篩選鍵
    $(".filter_time a.tab_third").on("click", function(e) {
        $('div.article').remove();
        e.preventDefault();

        $(this).closest(".filter_time").find("a.tab").removeClass("-on");
        $(this).addClass("-on");

        $("div.tab").removeClass("-on");
        $("div.tab." + $(this).attr("data-target")).addClass("-on");
        // showData();
        var filterText = $('div.filter_order .-on h3 ').text();
        $('.subtitle_1 h3').text(filterText);
        $(".filter_left span").text($(this).text());

        showDataTime();
    });
    //ＲＷＤ後的條件篩選
    $("#filter_con").on("click", function() {
        $(".filter_left div").slideToggle();
    });
    $("#filter_top").on("click", function() {
        $(".filter_right h3").slideToggle();
    });
    // 按下ＲＷＤ後不同類型的版篩選鍵
    $(".filter_right a.tab").on("click", function(e) {
        $('div.article').remove();
        var rwdFilterText = $(this).find("h3").text();
        $(".filter_right span").text($(this).text());
        $(".filter_right h3").slideToggle();
        $('.subtitle_1 h3').text(rwdFilterText);

        $(".filter_time").find("a.tab").removeClass("-on");
        $(".filter_order").find("a.tab").removeClass("-on");
        var onText1 = $(".filter_order").find("a#tab1");
        var onText2 = $(".filter_order").find("a#tab2");
        var onText3 = $(".filter_order").find("a#tab3");
        var onText4 = $(".filter_order").find("a#tab4");
        console.log(rwdFilterText);
        console.log(onText1.text());
        // console.log(onText2.text());
        // console.log(onText3.text());
        // console.log(onText4.text());

        if (rwdFilterText == (onText1.find("h3").text())) {
            onText1.addClass("-on");
            $("div.tab").removeClass("-on");
            $("div.tab." + $(this).attr("data-target")).addClass("-on");
        } else if (rwdFilterText == (onText2.find("h3").text())) {
            onText2.addClass("-on");
            $("div.tab").removeClass("-on");
            $("div.tab." + $(this).attr("data-target")).addClass("-on");
        } else if (rwdFilterText == (onText3.find("h3").text())) {
            onText3.addClass("-on");
            $("div.tab").removeClass("-on");
            $("div.tab." + $(this).attr("data-target")).addClass("-on");
        } else {
            onText4.addClass("-on");
            $("div.tab").removeClass("-on");
            $("div.tab." + $(this).attr("data-target")).addClass("-on");
        }
        // var filterText = $('div.filter_order .-on h3 ');
        // filterText.text(rwdFilterText);
        // console.log(filterText.text());

        showData();
    });
    // 按下ＲＷＤ後熱門程度篩選鍵
    $(".filter_left a.tab_first").on("click", function() {
        $('div.article').remove();
        $(".filter_left span").text($(this).text());
        $(".filter_left div").slideToggle();
        $('.subtitle_1 h3').text($(".filter_right span").text());

        showCommentMost();
    });
    // 按下ＲＷＤ後即時發布篩選鍵
    $(".filter_left a.tab_third").on("click", function() {
        $('div.article').remove();
        $(".filter_left span").text($(this).text());
        $(".filter_left div").slideToggle();

        showDataTime();
    });


    //檢舉按下後燈箱
    $(".report").on("click", function(e) {
        e.stopPropagation();
    });
    $("img#report").on("click", function() {
        $("div.report").show();
        // console.log($(".article_content_no").text());
    });
    $("#sendReport").on("click", function(e) {
        $("div.report").hide();
        // sendReport();
        e.stopPropagation();
        sendReport();
        alert("謝謝您的回覆，我們將盡快審查！")
    });
    $("#cancelReport").on("click", function(e) {
        $("div.report").hide();
        e.stopPropagation();
    });

    //動態新增物件 建立聆聽事件
    //文章燈箱
    $(".masonry").on("click", '.main_img,.article_title', function(e) {
        var parr = $(this).parent('.item_content');
        var thisTime = parr.find('.year');
        var thisTitle = parr.find('.article_title');
        var thisThum = parr.find('.thum_img');
        var thisName = parr.find('.username');
        var thisImg = parr.find('.main_img');
        var thisContent = parr.find('.article_contentp');
        var oldSrc = thisThum.attr('src');
        var oldSrc2 = thisImg.attr('src');
        var textext = thisTime.text();
        var thisNo = parr.find('.article_contentno');
        var textNum = thisNo.text();
        // console.log(textNo);
        // 頭像
        $('.thumbnail').attr('src', oldSrc);
        // 名稱
        $('.article_content_name').text(thisName.text());
        // 標題
        $('.article_content_title').text(thisTitle.text());
        //文章編號
        $('.article_content_no').text(textNum);
        // 時間
        $('.article_content_time').text(thisTime.text());
        // 圖片
        $('.main_pic').attr('src', oldSrc2);
        // 內文
        $('.article_text').text(thisContent.text());
        var status = $('#login_btn').text();
        var userImage = sessionStorage.getItem('memImg');
        console.log(userImage);
        if (status == "登入") {
            $('.thumbnail2').attr('src', "./image/forum/noface.png");
        } else {
            $('.thumbnail2').attr('src', userImage);
        };
        $(".article_content").show();
        $(".background").show();
        e.stopPropagation();
        showComment();

    });
    $(".article_content").on("click", function(e) {
        e.stopPropagation();

    });
    $(".post,#upload,#content,#postBtn").on("click", function(e) {
        e.stopPropagation();
    });
    $("body").on("click", function() {
        $(".article_content,.background").hide();
        $('.post').css('background-color', 'unset');
        $('#upload').hide();
        $('#content').hide();
        $('#postBtn').hide();
        $('#canBtn').hide();
        $('#sort').hide();
        $("div.report").hide();
    });

    // 發文按鈕  沒登入不能發文
    $('#title').on("click", function() {
        var status = $('#login_btn').text();
        if (status == "登入") {
            alert("請先登入才能發文！！");
        } else {
            $('.post').css('background-color', 'rgba(128, 128, 128, 0.6)');
            $('#upload').show();
            $('#content').show();
            $('#postBtn').show();
            $('#canBtn').show();
            $('.postimg').show();
            $('#sort').show();
        };
    });
    //沒登入不能留言
    $('#comment_text').on("click", function() {
        var status = $('#login_btn').text();
        if (status == "登入") {
            alert("請先登入才能留言！！");
        }
    });
    $('#postCom').on("click", function() {
        var status = $('#login_btn').text();
        if (status == "登入") {
            alert("請先登入才能留言！！");
        } else {
            // location.reload();
            // $("#commentId").load(location.href + " #commentId");
            showComment();
        }
    });
    $('#postBtn,#canBtn').on("click", function() {
        $('#upload').hide();
        $('#content').hide();
        $('#postBtn').hide();
        $('#canBtn').hide();
        $('.postimg').hide();
        $('#sort').hide();
        $('.post').css('background-color', 'unset');
    });
    // $(function() {
    //     $(window).scroll(function() {
    //         var scrollVal = $(this).scrollTop();
    //         console.log(scrollVal);
    //         $('.article_content').css("top", `${scrollVal}px`);
    //     })
    // })

});
// window.addEventListener('load', function() {
// imgLoad();
// showData();
// showComment();
// });