<?php
header('Access-Control-Allow-Origin: http://localhost:8888');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept');

try{

    require_once("connectBooks.php");

    $sql= "select * from discussion";
    $articles = $pdo->query($sql);
    $prodRows = $articles->fetchAll(PDO::FETCH_ASSOC);
    // echo urldecode(json_encode($prodRows));
    echo json_encode($prodRows,JSON_UNESCAPED_UNICODE);
}catch(PDOException $e){
    echo "錯誤原因：",$e->getMessage(),"<br>";
    echo "錯誤原因：",$e->getLine(),"<br>";
}
?>