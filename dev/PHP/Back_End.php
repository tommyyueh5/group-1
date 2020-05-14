<?
session_start();
try{
  require_once("connectdd106g1.php");
  $sql = "select * from `member` where MEM_NO=:MEM_NO and MEM_ACC=:MEM_ACC"; 
  $member = $pdo->prepare($sql);
  $member->bindValue(":MEM_NO", $_POST["MEM_NO"]);
  $member->bindValue(":MEM_ACC", $_POST["MEM_ACC"]);
  

  $member->execute();
  if( $member->rowCount()==0){ //查無此人
	  echo "{}";
  }else{ //登入成功
    //自資料庫中取回資料
  	$memRow = $member->fetch(PDO::FETCH_ASSOC);

  	//寫入session
  	$_SESSION["no"] = $memRow["no"];
  	$_SESSION["MEM_NO"] = $memRow["MEM_NO"];
  	$_SESSION["memName"] = $memRow["memName"];
  	$_SESSION["email"] = $memRow["email"];
  	$_SESSION["tel"] = $memRow["tel"];

    //送出登入者的姓名資料
  	$member = array("memId"=>$memRow["memId"], "memName"=>$memRow["memName"], "email"=>$memRow["email"]);

    echo json_encode($memRow);
  }
}catch(PDOException $e){
  //echo "error : " . $e->getMessage();
	$error = ["error"=>$e->getMessage()];
	echo json_encode($error);
}
