<?php
session_start();
try{
  require_once("connectdd106g1.php");
  $recordsPerPage = 9;

  $sql = "select count(*) totalRec from `news` where NEWS_PUB = 1 and NEWS_C_NO = 1"; 
  $news = $pdo->query($sql);

  $newsRow = $news->fetch(PDO::FETCH_ASSOC);
  $totalRec = $newsRow["totalRec"];
  $pages = ceil($totalRec/$recordsPerPage);//算出總頁數
  echo $pages; 
}catch(PDOException $e){
  echo "error : " . $e->getMessage();
}
?>
