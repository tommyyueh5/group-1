<?php
// session_start();
try {
  require_once("../connectdd106g1.php");  
  //選取資料表
  $sql = "select * from manage";
  //pdo請求資料庫
  $care = $pdo->query($sql);

  //將資料庫的資料比數全部抓出來
  $care_row = $care->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($care_row);
}

catch(PDOEXCEPTION $e){
  echo $e->getMessage();
}
?>