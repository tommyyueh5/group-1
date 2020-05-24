<?php
try{
  // $dsn = "mysql:host=localhost;port=3306;dbname=dd106g1;charset=utf8";
  // $user = "root";
  // $password = "";
  // //異常處理
  // $options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION);
  // $pdo = new PDO($dsn,$user,$password);
  require_once("../connectdd106g1.php");  





  // $sql = "SELECT * FROM member";
  $sql = "UPDATE `member` SET `MEM_POI`=`MEM_POI`+:MEM_POI,`GAME_LASTTIME`=:result,`MEM_TIME`=:MEM_TIME WHERE `MEM_NO`=:MEM_NO";
  
  // $sql = "UPDATE `member` SET `MEM_POI`=`MEM_POI`+:MEM_POI WHERE `MEM_TIME`=0 AND `MEM_NO`=:MEM_NO";
  $member = $pdo->prepare($sql);
  $member->bindValue(":MEM_POI",$_POST['MEM_POI']);
  $member->bindValue(":MEM_NO",$_POST['MEM_NO']); 
  $member->bindValue(":MEM_TIME",$_POST['MEM_TIME']); 
  $member->bindValue(":result",$_POST['GAME_LASTTIME']); 
  $member->execute();


  
  $sql1 = "SELECT * FROM member";
  $memberselect = $pdo->query($sql1);
  $memberselectRows = $memberselect->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($memberselectRows);

}
catch(PDOEXCEPTION $e){
  echo $e->getMessage();
}

?>