<?php

try {
  require_once("../connectdd106g1.php");
  //選取資料表
  $sql = "select * from product";
  //pdo請求資料庫
  $product = $pdo->query($sql);

  //將資料庫的資料比數全部抓出來
   $product_row = $product->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($product_row);
}

catch(PDOEXCEPTION $e){
  echo $e->getMessage();
}
?>