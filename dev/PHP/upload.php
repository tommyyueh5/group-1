<?php
header('Access-Control-Allow-Origin: http://localhost:8888');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept');
header('Content-Type: text/html; charset=UTF-8');

try{
    require_once("./PHP/connet.php");



    $sql = "UPDATE `discussion` SET `DIS_IMG_PATH`= :newPath WHERE DIS_IMG_PATH = :oldPath ";
    
    $dest_folder = "./image/forum/";
    $tmp_name = $_FILES["uploads"]["tmp_name"];
    $imgpath =$_FILES["uploads"]["name"];
    $a = explode(".",$_FILES["uploads"]["name"]);
    $name = date('YmdHis').mt_rand(100,999).".".$a[1];
    $uploadfile = $dest_folder.$name;
    move_uploaded_file($tmp_name,$uploadfile);
    $updatePath = $pdo->prepare($sql);
    $updatePath ->bindParam(":oldPath",$imgpath);
    $updatePath ->bindParam(":newPath",$uploadfile);
    $updatePath -> execute();
    echo "上傳成功：".$uploadfile;

}catch(PDOException $e){
    echo "錯誤原因：",$e->getMessage(),"<br>";
    echo "錯誤原因：",$e->getLine(),"<br>";
}
?>