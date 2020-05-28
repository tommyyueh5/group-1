<?php
try {
    header("Content-Type:text/html; charset=utf-8");
    require_once("./connectdd106g1.php");
    $showno = $_POST["no"];

    // echo $emeEmail;
    // $sql = "insert INTO `member` (`MEM_ACC`, `MEM_PAS`, `MEM_MAIL`, `MEM_POI`,  `MEM_NAME`, `MEM_POSITION`) values (':RG_Name1', ':RG_Pwd', ':RG_Email', '0', ':RG_Name2', '1')"; //''
    $sql = "select * from `discussion` where `MEM_NO`=:showno"; //''

    $member = $pdo->prepare( $sql); //先編譯好
    $member->bindValue(':showno',$showno);
    $member->execute();//執行

    if( $member->rowCount() == 0){//找不到 
        echo "{}";
    }else{
        // $data = array();
        $memRow = $member->fetchAll(PDO::FETCH_ASSOC);

        // $member = array("disc_img"=>$memRow["DIS_IMG_PATH"],"disc_title"=>$memRow["	DIS_TIT"], "disc_content"=>$memRow["DIS_CON"],"time_class"=>$memRow["DIS_C"],
        // "time_times"=>$memRow["DIS_EST"]);        
        echo json_encode($memRow);
        // echo 123;
    }
} catch (PDOException $e) {
    $errMsg .= "錯誤 : ".$e -> getMessage()."<br>";
    $errMsg .= "行號 : ".$e -> getLine()."<br>";
}
?>
