

<?php
// header('Access-Control-Allow-Origin: http://localhost:3000');
// header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
// header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept');

try {
    require_once("./../connectdd106g1.php");
    $post_input = trim(file_get_contents('php://input'));
    $numdata = json_decode($post_input,true);
    $DisNO = $numdata['NONum'];

    $sql1 = "DELETE FROM `report` WHERE `report`.`DIS_NO`=$DisNO";
    $sql2 = "DELETE FROM `discuss_comment` WHERE discuss_comment.DIS_NO = $DisNO";
    $sql3 = "DELETE FROM `discussion` WHERE `discussion`.`DIS_NO`='$DisNO'"; 
    $removeDis1 = $pdo->query( $sql1 ); 
    $removeDis1 = $pdo->query( $sql2 ); 
    $removeDis2 = $pdo->query( $sql3 ); 
    echo '更改成功';        
} catch (PDOException $e) {
    $errMsg .= "錯誤 : ".$e -> getMessage()."<br>";
    $errMsg .= "行號 : ".$e -> getLine()."<br>";
}
?>
