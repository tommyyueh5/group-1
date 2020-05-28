<?php
try{
    require_once("./connectdd106g1.php");
    $memno=$_POST["memno"];
    $artno=$_POST["artno"];
    $reason=$_POST["reason"];
    $date=date("Y-m-d");
    $sql = "INSERT INTO `REPORT`(`DIS_NO`,`MEM_NO`,`REP_C_NO`,`VER_SIT`,`REP_DATE`)
    VALUES (:artno,:memno,:reason,0,:datet)";
    $report =$pdo->prepare($sql);
    $report ->bindParam(":memno",$memno);
    $report ->bindParam(":reason",$reason);
    $report ->bindParam(":artno",$artno);
    $report ->bindParam(":datet",$date);
    // $report ->bindParam(":reason",$reason);
    $report -> execute();
    echo "上傳成功";

}catch(PDOException $e){
    echo "錯誤原因：",$e->getMessage(),"<br>";
    echo "錯誤原因：",$e->getLine(),"<br>";
}
?>