<?php
header('Access-Control-Allow-Origin: http://localhost:8888');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept');

try{

    require_once("./connectdd106g1.php");
    $filter = $_POST["filterText"];


    $sql ="SELECT DISTINCT `MEMBER`.`MEM_NO`,`MEMBER`.`MEM_ACC`,`MEMBER`.`MEM_IMG`,`DISCUSSION`.`DIS_EST`,`DISCUSSION`.`DIS_C`,`DISCUSSION`.`DIS_NO`,`DISCUSSION`.`DIS_IMG_PATH`,`DISCUSSION`.`DIS_TIT`,`DISCUSSION`.`DIS_CON`,`DISCUSSION`.`DIS_PUB`,`discussion`.`COM_COUNT`
    FROM `MEMBER`,`DISCUSSION`
    WHERE `MEMBER`.`MEM_NO` = `DISCUSSion`.`MEM_NO` 
    AND `DISCUSSION`.`DIS_C` = :disCon
    AND `DISCUSSION`.`DIS_PUB` =1"; 

    

    $articles = $pdo->prepare($sql);
    $articles ->bindValue(":disCon",$filter);
    $articles -> execute();


    $prodRows = $articles->fetchAll(PDO::FETCH_ASSOC);
    shuffle($prodRows);
    // echo urldecode(json_encode($prodRows));
    // echo $filter;
    echo json_encode($prodRows,JSON_UNESCAPED_UNICODE);
}catch(PDOException $e){
    echo "錯誤原因：",$e->getMessage(),"<br>";
    echo "錯誤原因：",$e->getLine(),"<br>";
}
