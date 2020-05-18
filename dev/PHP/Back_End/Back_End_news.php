<?php
// session_start();
try {
  require_once("../connectdd106g1.php");  
  //選取資料表
  $sql = "SELECT * FROM news";
  //pdo請求資料庫
  $news = $pdo->query($sql);

  //將資料庫的資料比數全部抓出來
  $news_row = $news->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($news_row);
}

catch(PDOEXCEPTION $e){
  echo $e->getMessage();
}
?>