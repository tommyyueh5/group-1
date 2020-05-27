<?php
    require_once("connectdd106g1.php");
    $sql = "select * from `news` where NEWS_PUB = 1 and NEWS_C_NO = 0 and `NEWS_PUBLISH_DATE` order by `NEWS_PUBLISH_DATE` desc limit 4,11";
    $news = $pdo->query($sql);
    $news_row = $news->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($news_row);
?>