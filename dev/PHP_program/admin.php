<?php

// echo "123"
try {
  $ADMIN_ID = $_POST["ID"];
  $ADMIN_PAS = $_POST["PAS"];
  // require_once("../../PHP/connectdd106g1.php");
  require_once("connectdd106g1.php");
  // echo $ID;
  // $sql = "select * from `asministrator` where `ADMIN_ID`=:ADMIN_ID and `ADMIN_PAS`=:ADMIN_PAS";
  $sql = "select * from `asministrator` where `ADMIN_ID`=:ADMIN_ID and `ADMIN_PAS`=:ADMIN_PAS ";
  $admin = $pdo->prepare($sql); //先編譯好
  $admin->bindValue(":ADMIN_ID", $ADMIN_ID); //代入資料
  $admin->bindValue(":ADMIN_PAS", $ADMIN_PAS);
  $admin->execute();


  if( $admin->rowCount() == 0 ){//找不到 
    echo "{}";
}else{
    $adminRow = $admin->fetchAll(PDO::FETCH_ASSOC);
    // 登入成功,將登入者的資料寫入session

    // $member = array("memId"=>$memRow["MEM_ACC"], "memImg"=>$memRow["MEM_IMG"], "email"=>$memRow["MEM_MAIL"], "point"=>$memRow["MEM_POI"],"no"=>$memRow["MEM_NO"]);        
    echo json_encode($adminRow);        
    // echo 123;        
}

} catch (PDOException $e) {
  echo "error : " . $e->getMessage();
  $error = ["error" => $e->getMessage()];
}
?>
