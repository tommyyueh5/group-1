<?php
header('Access-Control-Allow-Origin: http://localhost:8888');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept');
header('Content-Type: application/json; charset=UTF-8');
try{
    require_once("connectdd106g1.php");

    // if($_SERVER['REQUEST_METHOD']=="POST"){
        $memno = $_POST["memno"];
        $articleno = $_POST["articleNo"];
        $content = $_POST["comment"];
        $nowtime = date("Y-m-d");
        $comLength = $_POST["comLength"];

        
        $sql2="UPDATE `discuss_comment` SET `COM_COUNT` =:comLength+'1' WHERE `discuss_comment`.`DIS_NO` = :disno";
        $commentPlus = $pdo->prepare($sql2); 
        $commentPlus ->bindValue(":disno",$articleno);
        $commentPlus ->bindParam(":comLength",$comLength);
        $commentPlus -> execute();

        echo "成功";
}catch(PDOException $e){
    echo "錯誤原因：",$e->getMessage(),"<br>";
    echo "錯誤原因：",$e->getLine(),"<br>";
}
?>

