<?php

try {
  require_once("../connectdd106g1.php");
  //選取資料表
  $sql = "SELECT * FROM report";
  //pdo請求資料庫
  $report = $pdo->query($sql);

  //將資料庫的資料比數全部抓出來
  $report_row = $report->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($report_row);
}

catch(PDOEXCEPTION $e){
  echo $e->getMessage();
}
?>