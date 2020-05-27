<?php

// header('Access-Control-Allow-Origin: http://localhost:3000');
// header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
// header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept');
try {
    header("./Content-Type:text/html; charset=utf-8");
    require_once("./connectdd106g1.php");
    $showno = $_POST["no"];

    // 將兩個列表合併成一個表格傳到前端
    $sql = "select disc_c.MEM_NO,disc.DIS_NO,disc.DIS_TIT,disc_c.COM_CON,disc_c.COM_DATE,disc_c.DIS_COM_C from discussion disc join discuss_comment disc_c on disc.DIS_NO=disc_c.DIS_NO where disc_c.MEM_NO=:showno"; 

   
    $mem_dis_com = $pdo->prepare( $sql); //先編譯好
    $mem_dis_com->bindValue(':showno',$showno);
    $mem_dis_com->execute();//執行
    // echo "hello"
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
