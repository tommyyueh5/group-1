<?php
// session_start();
//     try{
        require_once("./connect_chai.php");
        $sql = "select NEWS_DATE, NEWS_TIT, NEWS_IMG_PATH from `news`";
        $news = $pdo->query($sql);
        $news_row = $news->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($news_row);
//     }

?>
