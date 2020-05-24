<?php
header('Access-Control-Allow-Origin: http://localhost:8888');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept');
header('Content-Type: text/html; charset=UTF-8');

try{
    require_once("connectdd106g1.php");
    $memno=$_POST["memno"];
    $artno=$_POST["artno"];
    $reason=$_POST["reason"];
    $sql = "INSERT INTO `REPORT`(`DIS_NO`,`MEM_NO`,`REP_C_NO`,`VER_SIT`)
    VALUES (:artno,:memno,:reason,0)";
    $report =$pdo->prepare($sql);
    $report ->bindParam(":memno",$memno);
    $report ->bindParam(":reason",$reason);
    $report ->bindParam(":artno",$artno);
    // $report ->bindParam(":reason",$reason);
    $report -> execute();
    echo "上傳成功";

}catch(PDOException $e){
    echo "錯誤原因：",$e->getMessage(),"<br>";
    echo "錯誤原因：",$e->getLine(),"<br>";
}
?>