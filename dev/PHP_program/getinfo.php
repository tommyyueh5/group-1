<?php
header('Access-Control-Allow-Origin: http://localhost:8888');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept');

try{

<<<<<<< HEAD
    require_once("connet.php");
    $filter = $_POST["filterText"];


    $sql = "SELECT DISTINCT `MEMBER`.`MEM_NO`,`MEMBER`.`MEM_ACC`,`MEMBER`.`MEM_IMG`,`DISCUSSION`.`DIS_EST`,`DISCUSSION`.`DIS_C_NO`,`DISCUSSION`.`DIS_NO`,`DISCUSSION`.`DIS_IMG_PATH`,`DISCUSSION`.`DIS_TIT`,`DISCUSSION`.`DIS_CON`,`discuss_comment`.`COM_COUNT` FROM `MEMBER`,`DISCUSSION`,`discuss_comment` WHERE `MEMBER`.`MEM_NO` = `DISCUSS_comment`.`MEM_NO` AND `discussion`.`DIS_NO` = `discuss_comment`.`DIS_NO` AND `DISCUSSION`.`DIS_C_NO` = :disCon ";
    // $sql="SELECT M.MEM_NO,M.MEM_ACC,M.MEM_IMG,D.DIS_EST,D.DIS_C_NO,D.DIS_IMG_PATH,D.DIS_TIT,D.DIS_CON,Dc.COM_COUNT 
    // FROM discussion D 
    // JOIN discuss_comment DC ON D.DIS_NO = DC.DIS_NO 
    // JOIN member M ON M.MEM_NO = DC.MEM_NO  
    // ORDER BY DC.COM_DATE
    // ";

    $articles = $pdo->prepare($sql);
    $articles ->bindValue(":disCon",$filter);
    $articles -> execute();
    // $commentCount =$pdo->query($sql2);
    // $comRows = $commentCount->fetchAll(PDO::FETCH_ASSOC);

=======
    require_once("connectdd106g1.php");
    
    // $sql= "select * from discussion";
    $sql = "SELECT `MEMBER`.`MEM_NO`,`MEMBER`.`MEM_ACC`,`MEMBER`.`MEM_IMG`,`DISCUSSION`.`DIS_EST`,`DISCUSSION`.`DIS_C_NO`,`DISCUSSION`.`DIS_NO`,`DISCUSSION`.`DIS_IMG_PATH`,`DISCUSSION`.`DIS_TIT`,`DISCUSSION`.`DIS_CON` FROM `MEMBER`,`DISCUSSION` WHERE `MEMBER`.`MEM_NO` = `discussion`.`MEM_NO`";
    $articles = $pdo->query($sql);
>>>>>>> 8c5b8ba53104661844a13b6bfd49983a0b01826c
    $prodRows = $articles->fetchAll(PDO::FETCH_ASSOC);
    shuffle($prodRows);
    // echo urldecode(json_encode($prodRows));
    // echo $filter;
    echo json_encode($prodRows,JSON_UNESCAPED_UNICODE);
}catch(PDOException $e){
    echo "錯誤原因：",$e->getMessage(),"<br>";
    echo "錯誤原因：",$e->getLine(),"<br>";
}
?>
