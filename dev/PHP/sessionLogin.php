<?
try {
    

    require_once("connet.php");
    $emeEmail = $_POST["emeEmail"];
    $emePaw = $_POST["emePaw"];

    // echo $emeEmail;
    $sql = "select * from `member` where `MEM_MAIL`=:emeEmail and `MEM_PAS`=:emePaw"; //''

    $member = $pdo->prepare( $sql ); //先編譯好
    $member->bindValue(":emeEmail", $emeEmail); //代入資料
    $member->bindValue(":emePaw", $emePaw);
    // $member->bindValue(":emeEmail", 'cdman073@yahoo.com.tw'); //代入資料
    // $member->bindValue(":emePaw", '123456');
    $member->execute();//執行之

    if( $member->rowCount() == 0 ){//找不到 
        echo "{}";
    }else{
        $memRow = $member->fetch(PDO::FETCH_ASSOC);
        //登入成功,將登入者的資料寫入session

        $member = array("memId"=>$memRow["MEM_ACC"], "memImg"=>$memRow["MEM_IMG"], "email"=>$memRow["MEM_MAIL"], "point"=>$memRow["MEM_POI"],"no"=>$memRow["MEM_NO"]);        
        echo json_encode($member);        
    }
} catch (PDOException $e) {
    $errMsg .= "錯誤 : ".$e -> getMessage()."<br>";
    $errMsg .= "行號 : ".$e -> getLine()."<br>";
}
?>
