<?php
try{
  // $dsn = "mysql:host=localhost;port=3306;dbname=dd106g1;charset=utf8";
  // $user = "root";
  // $password = "";
  // //異常處理
  // $options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION);
  // $pdo = new PDO($dsn,$user,$password);
  require_once("../connectdd106g1.php");  


  //選取資料表
  $sql = "SELECT * FROM  manage";
  //pdo請求資料庫
  $manage = $pdo->query($sql);
  //將資料庫的資料比數全部抓出來
  $manageRows = $manage->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($manageRows);
//异常PDOException处理
}
catch(PDOEXCEPTION $e){
  echo $e->getMessage();
}

?>