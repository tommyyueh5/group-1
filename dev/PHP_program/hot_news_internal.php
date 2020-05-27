<?php
        require_once("connectdd106g1.php");
        $sql = "select * from `news` where NEWS_PUB = 1 and NEWS_C_NO = 0 and `NEWS_PUBLISH_DATE` between '2020/01/01' and '2020/05/17' order by `NEWS_PUBLISH_DATE` desc";
        $news = $pdo->query($sql);
        $news_row = $news->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($news_row);
?>
