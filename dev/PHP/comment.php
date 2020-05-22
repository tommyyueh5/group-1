<?php
header('Access-Control-Allow-Origin: http://localhost:8888');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept');
header('Content-Type: application/json; charset=UTF-8');
try{
    require_once("connet.php");
   
    // if($_SERVER['REQUEST_METHOD']=="POST"){
        $memno = $_POST["memno"];
        $articleno = $_POST["articleNo"];
        $content = $_POST["comment"];
        $nowtime = date("Y-m-d");
        $sql = "INSERT INTO `DISCUSS_COMMENT` (`DIS_NO`,`MEM_NO`,`COM_CON`,`COM_DATE`) 
        VALUES (:disno,:memno,:content,:nowtime)";
        $comment = $pdo->prepare($sql); 
        $comment ->bindParam(":memno",$memno);
        $comment ->bindValue(":disno",$articleno);
        $comment ->bindParam(":content",$content);
        $comment ->bindParam(":nowtime",$nowtime);
        $comment -> execute();
        echo "成功";
}catch(PDOException $e){
    echo "錯誤原因：",$e->getMessage(),"<br>";
    echo "錯誤原因：",$e->getLine(),"<br>";
}
?>

