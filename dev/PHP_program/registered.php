
<?php
try {
    require_once("connectdd106g1.php");
    $RG_Email = $_POST["RG_Email"];
    $RG_Name = $_POST["RG_Name"];
    $RG_Pwd = $_POST["RG_Pwd"];
    $RG_Img = $_POST["RG_ImgDf"];

    // echo $emeEmail;
    // $sql = "insert INTO `member` (`MEM_ACC`, `MEM_PAS`, `MEM_MAIL`, `MEM_POI`,  `MEM_NAME`, `MEM_POSITION`) values (':RG_Name1', ':RG_Pwd', ':RG_Email', '0', ':RG_Name2', '1')"; //''
    $sql = "insert into `member` (`MEM_ACC`, `MEM_PAS`, `MEM_MAIL`, `MEM_POI`,  `MEM_NAME`, `MEM_POSITION`,`MEM_IMG`) values ('$RG_Name', '$RG_Pwd', '$RG_Email', '0', '$RG_Name', '1','$RG_Img')"; //''

    $member = $pdo->query( $sql ); //先編譯好
    // $member->execute();//執行之
    echo "註冊成功，即將返回首頁，請重新登入";
} catch (PDOException $e) {
    $errMsg .= "錯誤 : ".$e -> getMessage()."<br>";
    $errMsg .= "行號 : ".$e -> getLine()."<br>";
}
?>
