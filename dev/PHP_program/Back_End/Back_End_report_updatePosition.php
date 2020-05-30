<?php
// session_start();
try {
  require_once("./../connectdd106g1.php");
  $post_input = trim(file_get_contents('php://input'));
  $bdata = json_decode($post_input,true);
  $REPORTSNum = $bdata['REPORTSNum'];
  $PositionNum = $bdata['PositionNum'];
  $DIS_NO = $bdata['DIS_NO'];
  //選取資料表
  $sql = "UPDATE `report` SET `VER_SIT`=$PositionNum WHERE `report`.`REP_NO` = $REPORTSNum;";
  $sql1 = "UPDATE `discussion` SET `DIS_PUB`=$PositionNum WHERE `discussion`.`DIS_NO` = $DIS_NO ;";
//   //pdo請求資料庫
  $quest = $pdo->query( $sql ); //先編譯好
  $quest1 = $pdo->query( $sql1 ); //先編譯好
    echo '更改成功';
  //將資料庫的資料比數全部抓出來
//   $game_row = $game->fetchAll(PDO::FETCH_ASSOC);
//   echo json_encode($game_row);
}catch(PDOEXCEPTION $e){
  echo $e->getMessage();
}
