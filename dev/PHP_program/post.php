<?php
header('Access-Control-Allow-Origin: http://localhost:8888');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept');
header('Content-Type: application/json; charset=UTF-8');
try{
    require_once("connectdd106g1.php");
   
    // if($_SERVER['REQUEST_METHOD']=="POST"){
        $memno = $_POST["memno"];
        $sort = $_POST["sort"];
        $title = $_POST["title"];
        $content = $_POST["content"];
        $imgpath = $_POST["path"];
        $nowtime = date("Y-m-d");
        $sql = "INSERT INTO `DISCUSSION` (`MEM_NO`, `DIS_C`, `DIS_TIT`, `DIS_CON`, `DIS_EST`, `DIS_EDIT`, `DIS_IMG_PATH`, `DIS_PUB`) 
        VALUES (:memno,:sort,:title,:content,:nowtime,:nowtime,:imgpath,0)";
        $post = $pdo->prepare($sql); 
        $post ->bindParam(":memno",$memno);
        $post ->bindParam(":sort",$sort);
        $post ->bindParam(":title",$title);
        $post ->bindParam(":content",$content);
        $post ->bindParam(":nowtime",$nowtime);
        $post ->bindParam(":imgpath",$imgpath);
        $post -> execute();
        echo "成功";
        // echo json_encode(array(
        //     'title' => $title,
        //     'content' => $content,
        //     'sort' => $sort,
        // ));
        
    // };
    // $title = $_POST["title"];
    // echo $title;

    // echo json_encode($prodRows,JSON_UNESCAPED_UNICODE);
}catch(PDOException $e){
    echo "錯誤原因：",$e->getMessage(),"<br>";
    echo "錯誤原因：",$e->getLine(),"<br>";
}
?>

