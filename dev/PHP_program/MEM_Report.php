<?php

// header('Access-Control-Allow-Origin: http://localhost:3000');
// header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
// header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept');
try {
    require_once("./connectdd106g1.php");
    $showno = $_POST["no"];

    // 將兩個列表合併成一個表格傳到前端
    $sql = "SELECT rep.MEM_NO,disc.DIS_NO,disc.DIS_TIT,rep.REP_C_NO,rep_c.REP_C_REA,rep.VER_SIT,rep.REP_DATE from discussion disc JOIN report rep ON disc.DIS_NO=rep.DIS_NO JOIN report_class rep_c ON rep.REP_NO=rep_c.REP_C_NO where rep.MEM_NO=:showno order by rep.VER_SIT"; 

   
    $mem_dis_com = $pdo->prepare( $sql); //先編譯好
    $mem_dis_com->bindValue(':showno',$showno);
    $mem_dis_com->execute();//執行

    if($mem_dis_com->rowCount() == 0){//找不到 
        echo "{}";
    }else{
        $mem_dis_comRow = $mem_dis_com->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($mem_dis_comRow);
    }
} catch (PDOException $e) {
    $errMsg .= "錯誤 : ".$e -> getMessage()."<br>";
    $errMsg .= "行號 : ".$e -> getLine()."<br>";
}
?>
