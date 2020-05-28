<?php
header('Access-Control-Allow-Origin: http://localhost:8888');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept');
header('Content-Type: application/json; charset=UTF-8');
try{
    require_once("./connectdd106g1.php");

    // if($_SERVER['REQUEST_METHOD']=="POST"){
        $memno = $_POST["memno"];
        $articleno = $_POST["articleNo"];
        $content = $_POST["comment"];
        $comLength = $_POST["comLength"];
        $filterText = $_POST["filterText"];
        $nowtime = date("Y-m-d");


        $sql = "INSERT INTO `DISCUSS_COMMENT` (`DIS_NO`,`MEM_NO`,`COM_CON`,`COM_DATE`,`DIS_COM_C`,`COM_COUNT`) 
        VALUES (:disno,:memno,:content,:nowtime,:filterText,:comLength+'1')";
        $comment = $pdo->prepare($sql); 
        $comment ->bindParam(":memno",$memno);
        $comment ->bindValue(":disno",$articleno);
        $comment ->bindParam(":content",$content);
        $comment ->bindParam(":nowtime",$nowtime);
        $comment ->bindParam(":comLength",$comLength);
        $comment ->bindParam(":filterText",$filterText);
        $comment -> execute();

        // $sql2="UPDATE `discuss_comment` SET `COM_COUNT` =`COM_COUNT` +'1' WHERE `discuss_comment`.`DIS_NO` = :disno";
        // $commentPlus = $pdo->prepare($sql2); 
        // $commentPlus ->bindValue(":disno",$articleno);
        // $commentPlus -> execute();

        echo "成功";
}catch(PDOException $e){
    echo "錯誤原因：",$e->getMessage(),"<br>";
    echo "錯誤原因：",$e->getLine(),"<br>";
}
?>

