<?php
try {
    require_once("./connectdd106g1.php");
    $RG_Email = $_POST["RG_Email"];
    // $Test = 'abc@ccc.co';
    $sql = "select * from `member` where `MEM_MAIL`=:memEmail"; 
    // // $sql = "select * from `member` where `MEM_MAIL` like '$Test'"; 

    $member = $pdo->prepare( $sql ); //先編譯好
    $member->bindValue(":memEmail", $RG_Email); //代入資料
    $member->execute();//執行之
    // // // // 查看資料庫筆數存不存在
    $num = $member->rowCount();

    // // // 存在就已註冊
    // // // 不然就未註冊
    if($member->rowCount() > 0){
        while($row = $member->fetch(PDO::FETCH_ASSOC)){
            $db_name = $row['MEM_MAIL'];
        }
        if($RG_Email == $db_name){
            echo 'true';
        }
    }else{
        echo 'false';
    }
    
    
} catch (PDOException $e) {
    // echo "尚未註冊".$e -> getMessage()."<br>";
    $errMsg .= "錯誤 : ".$e -> getMessage()."<br>";
    $errMsg .= "行號 : ".$e -> getLine()."<br>";
}
?>
