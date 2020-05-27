<?php
session_start();
try{
  require_once("connectdd106g1.php");
  $recordsPerPage = 9;
  $start = ($_GET["pageNo"]-1)*9;
  
  $sql = "select * from `news` where NEWS_PUB = 1 and NEWS_C_NO = 0 order by `NEWS_PUBLISH_DATE` desc limit $start,$recordsPerPage"; 
  $news = $pdo->query($sql);
  $newsRow = $news->fetchAll(PDO::FETCH_ASSOC);

  echo json_encode($newsRow);
}catch(PDOException $e){
  //echo "error : " . $e->getMessage();
	$error = ["error"=>$e->getMessage()];
	echo json_encode($error);
}
?>