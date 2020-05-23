<?php
header('Access-Control-Allow-Origin: http://localhost:8888');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept');

try{

    require_once("connectdd106g1.php");
    
    // $sql= "select * from discussion";
    $sql = "SELECT `MEMBER`.`MEM_NO`,`MEMBER`.`MEM_ACC`,`MEMBER`.`MEM_IMG`,`DISCUSSION`.`DIS_EST`,`DISCUSSION`.`DIS_C_NO`,`DISCUSSION`.`DIS_NO`,`DISCUSSION`.`DIS_IMG_PATH`,`DISCUSSION`.`DIS_TIT`,`DISCUSSION`.`DIS_CON` FROM `MEMBER`,`DISCUSSION` WHERE `MEMBER`.`MEM_NO` = `discussion`.`MEM_NO`";
    $articles = $pdo->query($sql);
    $prodRows = $articles->fetchAll(PDO::FETCH_ASSOC);
    // echo urldecode(json_encode($prodRows));
    echo json_encode($prodRows,JSON_UNESCAPED_UNICODE);
}catch(PDOException $e){
    echo "錯誤原因：",$e->getMessage(),"<br>";
    echo "錯誤原因：",$e->getLine(),"<br>";
}
?>
