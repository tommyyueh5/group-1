

<?php
// header('Access-Control-Allow-Origin: http://localhost:3000');
// header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
// header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept');

try {
    require_once("connectdd106g1.php");
    $editname = $_POST["editname"];
    $editemail = $_POST["editemail"];
    $editimg = $_POST["editimg"];
    $PHPNO = $_POST["PHPNO"];

    
    $sql = "update `member` set `MEM_ACC`=:editname, `MEM_MAIL`=:editemail ,`MEM_IMG`=:editimg  where `member`.`MEM_NO`=:PHPNO"; 

    $member = $pdo->prepare( $sql ); //先編譯好
    $member->bindValue(":editname", $editname); //代入資料
    $member->bindValue(":editemail", $editemail);
    $member->bindValue(":editimg", $editimg);
    $member->bindValue(":PHPNO", $PHPNO);
    // $member->bindValue(":emeEmail", 'cdman073@yahoo.com.tw'); //代入資料
    // $member->bindValue(":emePaw", '123456');
    $member->execute();
    
    // echo $PHPNO;
    
    // if( $member->rowCount() == 0 ){//找不到 
    //     echo "{}";
    // }else{
    //     $memRow = $member->fetch(PDO::FETCH_ASSOC);
    //     //登入成功,將登入者的資料寫入session

        // echo '更新成功';
        $member = array("success"=>"更改成功");        
        echo json_encode($member);        
    // }
} catch (PDOException $e) {
    $errMsg .= "錯誤 : ".$e -> getMessage()."<br>";
    $errMsg .= "行號 : ".$e -> getLine()."<br>";
}
?>
