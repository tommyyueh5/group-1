<?php
// session_start();
try {
  require_once("../connectdd106g1.php");
  //選取資料表
  $sql = "SELECT * FROM discussion";
  //pdo請求資料庫
  $forum = $pdo->query($sql);

  //將資料庫的資料比數全部抓出來
  $forum_row = $forum->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($forum_row);
}

catch(PDOEXCEPTION $e){
  echo $e->getMessage();
}
?>