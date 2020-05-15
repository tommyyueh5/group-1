window.addEventListener('load', () => {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status == 200) {
            const news_data = JSON.parse(xhr.responseText);
            // console.log(news_data);
            let dateSplit = newdate(news_data)
            for (let i = 0; i < news_data.length; i++) {
                // console.log(JSON.parse(xhr.responseText));
                
                $('.news_item1_child_1').append(`
                    <div class="news_item1_child_1_son">
                        <a href="">
                            <div class="date">
                                <h4 class="year">${dateSplit[i][0]}</h4>
                                <h4 class="day">${dateSplit[i][2]}</h4>
                                <h4 class="month">${dateSplit[i][1]}月</h4>
                            </div>
                            <img src="../dest/image/latest-news/${news_data[i].NEWS_IMG_PATH}" alt="">
                            <div class="cards_content">
                                <span>${news_data[i].NEWS_TIT}</span>
                            </div>
                        </a>
                    </div>
                `)
            }
        } else {
            alert(xhr.status);
        }

    }
    xhr.open("Get", "../dest/php/news.php", true);
    xhr.send(null);
    function newdate(dates){
       let arrDate =  dates.map(date => (date.NEWS_DATE.split('-')));
        return arrDate

    };

});