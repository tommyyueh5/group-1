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
                    <div class="item myowl-item-2">
                        <a href="">
                            <div class="date">
                                <h4 class="year">${dateSplit[i][0]}</h4>
                                <h4 class="day">${dateSplit[i][2]}</h4>
                                <h4 class="month">${dateSplit[i][1]}</h4>
                            </div>
                            <img src="/dest/image/latest-news/${new_news_data[i].NEWS_IMG_PATH}" alt="">
                            <div class="cards_content">
                                <span>${new_news_data[i].NEWS_TIT}</span>
                            </div>
                        </a>
                    </div>
                `)
                $('.new_forign').append(`
                <div class="item myowl-item-2">
                    <a href="">
                        <div class="date">
                            <h4 class="year">${dateSplit[i][0]}</h4>
                            <h4 class="day">${dateSplit[i][2]}</h4>
                            <h4 class="month">${dateSplit[i][1]}</h4>
                        </div>
                        <img src="/dest/image/latest-news/${new_news_data[i].NEWS_IMG_PATH}" alt="">
                        <div class="cards_content">
                            <span>${new_news_data[i].NEWS_TIT}</span>
                        </div>
                    </a>
                </div>
            `)
            }
            // import "../../dest/node_modules/owl.carousel@2.3.4/dist/assets/owl.carousel.min.css";
            $('.myowl-2').owlCarousel({
                loop: true,
                margin: 50,
                nav: true,
                // navContainer: '#customNav',
                navText: ["<i class='icofont icofont-rounded-left prenext pre'></i>", "<i class='icofont icofont-rounded-right prenext next'></i>"],
                responsive: {
                    0: {
                        items: 1
                    },
                    767: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    },
                    1300: {
                        items: 3
                    }
                }
            });
        } else {
            alert(xhr.status);
        }

    }
    xhr.open("Get", "../dest/PHP_program/new_news.php", true);
    xhr.send(null);
    function newdate(dates){
       let arrDate =  dates.map(date => (date.NEWS_DATE.split('-')));
        return arrDate
    };
    
});


// -------------------------------------最新消息-國外(輪播)------------------------------

// window.addEventListener('load', () => {
//     // location.reload();
//     let xhr = new XMLHttpRequest();
//     xhr.onload = function () {
//         if (xhr.status == 200) {
//             const new_news_data = JSON.parse(xhr.responseText);
//             let dateSplit = newdate(new_news_data)
//             for (let i = 0; i < new_news_data.length; i++) {
//                 // console.log(JSON.parse(xhr.responseText));
//                 $('.new_forign').append(`
//                     <div class="item myowl-item-2">
//                         <a href="">
//                             <div class="date">
//                                 <h4 class="year">${dateSplit[i][0]}</h4>
//                                 <h4 class="day">${dateSplit[i][2]}</h4>
//                                 <h4 class="month">${dateSplit[i][1]}</h4>
//                             </div>
//                             <img src="/dest/image/latest-news/${new_news_data[i].NEWS_IMG_PATH}" alt="">
//                             <div class="cards_content">
//                                 <span>${new_news_data[i].NEWS_TIT}</span>
//                             </div>
//                         </a>
//                     </div>
//                 `)
//             }
//             // import "../../dest/node_modules/owl.carousel@2.3.4/dist/assets/owl.carousel.min.css";
//             $('.myowl-2').owlCarousel({
//                 loop: true,
//                 margin: 50,
//                 nav: true,
//                 // navContainer: '#customNav',
//                 navText: ["<i class='icofont icofont-rounded-left prenext pre'></i>", "<i class='icofont icofont-rounded-right prenext next'></i>"],
//                 responsive: {
//                     0: {
//                         items: 1
//                     },
//                     767: {
//                         items: 2
//                     },
//                     1000: {
//                         items: 3
//                     },
//                     1300: {
//                         items: 3
//                     }
//                 }
                
//             });
//         } else {
//             alert(xhr.status);
//         }
    
//     }
//     xhr.open("Get", "../dest/PHP_program/new_news_forign.php", true);
//     xhr.send(null);
//     function newdate(dates){
//        let arrDate =  dates.map(date => (date.NEWS_DATE.split('-')));
//         return arrDate
//     };
// });

// ----------------------------------------熱門消息 國內-----------------------------

window.addEventListener('load', () => {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status == 200) {
            const news_data = JSON.parse(xhr.responseText);
            let dateSplit = newdate(news_data)
            for (let i = 0; i < news_data.length; i++) {
                $('.hot_internal').append(`
                    <div class="news_box col-sm-12 col-md-6 col-lg-6 col-xl-4 item">
                        <div class="news_box_content">
                            <a href="">
                                <div class="date">
                                    <h4 class="year"${dateSplit[i][0]}></h4>
                                    <h4 class="day">${dateSplit[i][2]}</h4>
                                    <h4 class="month">${dateSplit[i][1]}月</h4>
                                </div>
                                <img src="../dest/image/latest-news/${news_data[i].NEWS_IMG_PATH}" alt="">
                                <div class="cards_content">
                                    <span>${news_data[i].NEWS_TIT}</span>
                                </div>
                            </a>    
                        </div>
                    </div>
                `)
            }
            
 
            // for(let i =0 ,btnNext = news_data.length % 14; i<=btnNext ;i++ ){
            //     $('.pageUl').append(
            //         `<li style="border-bottom: 1px solid  white;" class="pages">${i+1}</li>`
            //     )
            // }

        } else {
            alert(xhr.status);
        }
    }
    xhr.open("Get", "../dest/PHP_program/hot_news_internal.php", true);
    xhr.send(null);

    // ----------------------切日期----------------
    function newdate(dates){
       let arrDate =  dates.map(date => (date.NEWS_DATE.split('-')));
       return arrDate
    };
    // ----------------------切日期----------------

    // ----------------------做切頁----------------


    // ----------------------做切頁----------------
    
});






// ----------------------------------------熱門消息 國外-----------------------------

window.addEventListener('load', () => {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status == 200) {
            const news_data = JSON.parse(xhr.responseText);
            let dateSplit = newdate(news_data)
            for (let i = 0; i < news_data.length; i++) {
                $('.hot_foreign').append(`
                    <div class="news_box col-sm-12 col-md-6 col-lg-6 col-xl-4 item">
                        <div class="news_box_content">
                            <a href="">
                                <div class="date">
                                    <h4 class="year"${dateSplit[i][0]}></h4>
                                    <h4 class="day">${dateSplit[i][2]}</h4>
                                    <h4 class="month">${dateSplit[i][1]}月</h4>
                                </div>
                                <img src="../dest/image/latest-news/${news_data[i].NEWS_IMG_PATH}" alt="">
                                <div class="cards_content">
                                    <span>${news_data[i].NEWS_TIT}</span>
                                </div>
                            </a>    
                        </div>
                    </div>
                `)
            }
        } else {
            alert(xhr.status);
        }
    }
    xhr.open("Get", "../dest/PHP_program/hot_news_foreign.php", true);
    xhr.send(null);

    // ----------------------切日期----------------
    function newdate(dates){
       let arrDate =  dates.map(date => (date.NEWS_DATE.split('-')));
       return arrDate
    };
    // ----------------------切日期----------------

    // ----------------------做切頁----------------


    // ----------------------做切頁----------------
    
});