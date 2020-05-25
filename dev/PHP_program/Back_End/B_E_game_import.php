<?php
// session_start();
// try {
  require_once("./../connectdd106g1.php");
  $post_input = trim(file_get_contents('php://input'));
  $bdata = json_decode($post_input,true);
  $gameTit = $bdata['gameTit'];
  $gameSele_1 = $bdata['gameSele_1'];
  $gameSele_2 = $bdata['gameSele_2'];
  $gameSele_3 = $bdata['gameSele_3'];
  $game_Ans = $bdata['game_Ans'];
  $game_IMG = $bdata['game_IMG'];
  $game_isOpen = $bdata['game_isOpen'];
  //選取資料表
  $sql = "insert into `game` ( `question`, `choiceA`, `choiceB`, `choiceC`, `GAME_STATUS`, `imgSrc`, `RIGHT_ANSWER`) values ('$gameTit', '$gameSele_1','$gameSele_2','$gameSele_3', '$game_isOpen', '$game_IMG', '$game_Ans');";
//   //pdo請求資料庫
  $quest = $pdo->query( $sql ); //先編譯好
    echo '新增成功';
  //將資料庫的資料比數全部抓出來
//   $game_row = $game->fetchAll(PDO::FETCH_ASSOC);
//   echo json_encode($game_row);
// }

// catch(PDOEXCEPTION $e){
//   echo $e->getMessage();
// }
