

<?php
// header('Access-Control-Allow-Origin: http://localhost:3000');
// header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
// header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept');

try {
    require_once("./../connectdd106g1.php");
    $post_input = trim(file_get_contents('php://input'));
    $numdata = json_decode($post_input,true);
    $GameNO = $numdata['NONum'];
    $sql = "DELETE FROM `game` WHERE `game`.`GAME_NO` = $GameNO"; 
    $removeDis2 = $pdo->query( $sql ); 
    echo '更改成功';        
} catch (PDOException $e) {
    $errMsg .= "錯誤 : ".$e -> getMessage()."<br>";
    $errMsg .= "行號 : ".$e -> getLine()."<br>";
}
?>
