
<?php

// header('Access-Control-Allow-Origin: http://localhost:3000');
// header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
// header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept');
try {
    require_once("connectdd106g1.php");
    $RG_Email = $_POST["RG_Email"];
    $RG_Name = $_POST["RG_Name"];
    $RG_Pwd = $_POST["RG_Pwd"];

    // echo $emeEmail;
    // $sql = "insert INTO `member` (`MEM_ACC`, `MEM_PAS`, `MEM_MAIL`, `MEM_POI`,  `MEM_NAME`, `MEM_POSITION`) values (':RG_Name1', ':RG_Pwd', ':RG_Email', '0', ':RG_Name2', '1')"; //''
    $sql = "insert into `member` (`MEM_ACC`, `MEM_PAS`, `MEM_MAIL`, `MEM_POI`,  `MEM_NAME`, `MEM_POSITION`) values ('$RG_Name', '$RG_Pwd', '$RG_Email', '0', '$RG_Name', '1')"; //''

    $member = $pdo->prepare( $sql ); //先編譯好
    $member->execute();//執行之
    echo "註冊成功，即將返回首頁，請重新登入";
} catch (PDOException $e) {
    $errMsg .= "錯誤 : ".$e -> getMessage()."<br>";
    $errMsg .= "行號 : ".$e -> getLine()."<br>";
}
?>
