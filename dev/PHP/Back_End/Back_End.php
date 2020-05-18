<?php

try {
  require_once("../connectdd106g1.php");
  //選取資料表
  $sql = "SELECT * FROM member";
  //pdo請求資料庫
  $member = $pdo->query($sql);

  //將資料庫的資料比數全部抓出來
   $member_row = $member->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($member_row);
}

catch(PDOEXCEPTION $e){
  echo $e->getMessage();
}
?>