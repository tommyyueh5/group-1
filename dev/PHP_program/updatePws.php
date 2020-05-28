<?php
try {
    require_once("./connectdd106g1.php");
    $showPws = $_POST["showPws"];
    $showno = $_POST["no"];

    // echo $emeEmail;
    $sql = "update `member` set `MEM_PAS`=:showPws where `member`.`MEM_NO`=:showno";

    $member = $pdo->prepare( $sql ); //先編譯好
    $member->bindValue(":showPws", $showPws); //代入資料
    $member->bindValue(":showno", $showno);

    // $member->bindValue(":emeEmail", 'cdman073@yahoo.com.tw'); //代入資料
    // $member->bindValue(":emePaw", '123456');
    $member->execute();//執行
    echo '修改成功，即將返回頁面，請重新登入';
} catch (PDOException $e) {
    $errMsg .= "錯誤 : ".$e -> getMessage()."<br>";
    $errMsg .= "行號 : ".$e -> getLine()."<br>";
}
?>
