<?php
header('Access-Control-Allow-Origin: http://localhost:8888');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept');

try{
    require_once("./connectdd106g1.php");
    $memno=$_POST["memno"];

    $sql ="SELECT `ORD_NO`,`ORD_PRI`,`EST_DAT` 
    from orders 
    where `MEM_NO` = :memno";

    $orders = $pdo->prepare($sql);
    $orders ->bindValue(":memno",$memno);
    $orders -> execute();
    // $commentCount =$pdo->query($sql2);
    // $comRows = $commentCount->fetchAll(PDO::FETCH_ASSOC);

    $ordersList = $orders->fetchAll(PDO::FETCH_ASSOC);

    // echo urldecode(json_encode($prodRows));
    // echo $filter;
    echo json_encode($ordersList,JSON_UNESCAPED_UNICODE);
}catch(PDOException $e){
    echo "錯誤原因：",$e->getMessage(),"<br>";
    echo "錯誤原因：",$e->getLine(),"<br>";
}
