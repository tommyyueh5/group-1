<?php
        require_once("connect_news.php");
        $sql = "select * from `news` where NEWS_PUB = '1' and NEWS_C_NO = '2' order by `NEWS_DATE` desc";
        $news = $pdo->query($sql);
        $news_row = $news->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($news_row);
?>