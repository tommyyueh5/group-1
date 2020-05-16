
<?php
try {
    require_once("connet.php");
    $editname = $_POST["editname"];
    $editemail = $_POST["editemail"];
    $PHPNO = $_POST["PHPNO"];


    // $sql = "select * from `member` where `MEM_MAIL`=:emeEmail and `MEM_PAS`=:emePaw";
    $sql = "update `member` set `MEM_ACC`=:editname, `MEM_MAIL`=:editemail where `member`.`MEM_NO`=:PHPNO"; 

    $member = $pdo->prepare( $sql ); //先編譯好
    $member->bindValue(":editname", $editname); //代入資料
    $member->bindValue(":editemail", $editemail);
    $member->bindValue(":PHPNO", $PHPNO);
    // $member->bindValue(":emeEmail", 'cdman073@yahoo.com.tw'); //代入資料
    // $member->bindValue(":emePaw", '123456');
    $member->execute();//執行之

    // if( $member->rowCount() == 0 ){//找不到 
    //     echo "{}";
    // }else{
    //     $memRow = $member->fetch(PDO::FETCH_ASSOC);
    //     //登入成功,將登入者的資料寫入session
        
        // echo '更新成功';
    //     $member = array("memId"=>$memRow["MEM_ACC"], "memImg"=>$memRow["MEM_IMG"], "email"=>$memRow["MEM_MAIL"], "point"=>$memRow["MEM_POI"]);        
    //     // echo json_encode($member);        
    // }
} catch (PDOException $e) {
    $errMsg .= "錯誤 : ".$e -> getMessage()."<br>";
    $errMsg .= "行號 : ".$e -> getLine()."<br>";
}
?>
