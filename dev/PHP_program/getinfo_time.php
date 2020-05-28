<?php
try{

    require_once("./connectdd106g1.php");
    $filterText = $_POST["filterText"];
    // $filterTime = $_POST["filterTime"];
    // 篩選條件--照最新發文排序
    $sql = "SELECT `MEMBER`.`MEM_NO`,`MEMBER`.`MEM_ACC`,`MEMBER`.`MEM_IMG`,`DISCUSSION`.`DIS_EST`,`DISCUSSION`.`DIS_C`,`DISCUSSION`.`DIS_NO`,`DISCUSSION`.`DIS_IMG_PATH`,`DISCUSSION`.`DIS_TIT`,`DISCUSSION`.`DIS_CON`,`discussion`.`COM_COUNT`
    FROM `MEMBER`,`DISCUSSION` 
    WHERE `MEMBER`.`MEM_NO` = `DISCUSSION`.`MEM_NO` 
    AND `DISCUSSION`.`DIS_C` = :disCon
    AND `DISCUSSION`.`DIS_PUB`=0
    ORDER BY `DISCUSSION`.`DIS_EST` DESC";


    $articles = $pdo->prepare($sql);
    $articles ->bindValue(":disCon",$filterText);
    $articles -> execute();
    $prodRows = $articles->fetchAll(PDO::FETCH_ASSOC);
    // shuffle($prodRows);
    // echo urldecode(json_encode($prodRows));
    echo json_encode($prodRows,JSON_UNESCAPED_UNICODE);
}catch(PDOException $e){
    echo "錯誤原因：",$e->getMessage(),"<br>";
    echo "錯誤原因：",$e->getLine(),"<br>";
}
?>
