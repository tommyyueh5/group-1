<?php
header('Access-Control-Allow-Origin: http://localhost:8888');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept');

try{

    require_once("connectdd106g1.php");
    $filter = $_POST["filterText"];

    // $sql = "SELECT DISTINCT `MEMBER`.`MEM_NO`,`MEMBER`.`MEM_ACC`,`MEMBER`.`MEM_IMG`,`DISCUSSION`.`DIS_EST`,`DISCUSSION`.`DIS_C_NO`,`DISCUSSION`.`DIS_NO`,`DISCUSSION`.`DIS_IMG_PATH`,`DISCUSSION`.`DIS_TIT`,`DISCUSSION`.`DIS_CON` 
    // FROM `MEMBER`,`DISCUSSION`
    // WHERE `MEMBER`.`MEM_NO` = `DISCUSSION`.`MEM_NO` 
    // AND `DISCUSSION`.`DIS_C_NO`=:disCon ";
    $sql ="SELECT DISTINCT `MEMBER`.`MEM_NO`,`MEMBER`.`MEM_ACC`,`MEMBER`.`MEM_IMG`,`DISCUSSION`.`DIS_EST`,`DISCUSSION`.`DIS_C`,`DISCUSSION`.`DIS_NO`,`DISCUSSION`.`DIS_IMG_PATH`,`DISCUSSION`.`DIS_TIT`,`DISCUSSION`.`DIS_CON`,`discuss_comment`.`COM_COUNT` 
    FROM `MEMBER`,`DISCUSSION`,`discuss_comment`
    WHERE `MEMBER`.`MEM_NO` = `DISCUSS_comment`.`MEM_NO` 
    AND `discussion`.`DIS_NO` = `discuss_comment`.`DIS_NO` 
    AND `DISCUSSION`.`DIS_C` = :disCon";
    // $sql = "SELECT DISTINCT `MEMBER`.`MEM_NO`,`MEMBER`.`MEM_ACC`,`MEMBER`.`MEM_IMG`,`DISCUSSION`.`DIS_EST`,`DISCUSSION`.`DIS_C_NO`,`DISCUSSION`.`DIS_NO`,`DISCUSSION`.`DIS_IMG_PATH`,`DISCUSSION`.`DIS_TIT`,`DISCUSSION`.`DIS_CON`,`discuss_comment`.`COM_COUNT` 
    // FROM `MEMBER`,`DISCUSSION`,`discuss_comment` 
    // WHERE `MEMBER`.`MEM_NO` = `DISCUSS_comment`.`MEM_NO` 
    // AND `discussion`.`DIS_NO` = `discuss_comment`.`DIS_NO` 
    // AND `DISCUSSION`.`DIS_C_NO` = :disCon ";
    

    $articles = $pdo->prepare($sql);
    $articles ->bindValue(":disCon",$filter);
    $articles -> execute();
    // $commentCount =$pdo->query($sql2);
    // $comRows = $commentCount->fetchAll(PDO::FETCH_ASSOC);

    $prodRows = $articles->fetchAll(PDO::FETCH_ASSOC);
    shuffle($prodRows);
    // echo urldecode(json_encode($prodRows));
    // echo $filter;
    echo json_encode($prodRows,JSON_UNESCAPED_UNICODE);
}catch(PDOException $e){
    echo "錯誤原因：",$e->getMessage(),"<br>";
    echo "錯誤原因：",$e->getLine(),"<br>";
}
