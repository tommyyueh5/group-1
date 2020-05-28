<?php
// session_start();
try {
  require_once("./../connectdd106g1.php");
  $post_input = trim(file_get_contents('php://input'));
  $bdata = json_decode($post_input,true);
  $GameNum = $bdata['GameNum'];
  $PositionNum = $bdata['PositionNum'];
  //選取資料表
  $sql = "UPDATE `game` SET `GAME_STATUS` = '$PositionNum' WHERE `game`.`GAME_NO` = $GameNum;";
//   //pdo請求資料庫
  $quest = $pdo->query( $sql ); //先編譯好
    echo '更改成功';
  //將資料庫的資料比數全部抓出來
//   $game_row = $game->fetchAll(PDO::FETCH_ASSOC);
//   echo json_encode($game_row);
}catch(PDOEXCEPTION $e){
  echo $e->getMessage();
}
