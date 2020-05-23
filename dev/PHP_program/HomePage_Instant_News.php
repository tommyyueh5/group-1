<?php

try {
    header("Content-Type:text/html; charset=utf-8");
    require_once("connectdd106g1.php");
    // $showno = $_POST["no"];/

    // 將兩個列表合併成一個表格傳到前端
    $sql = "SELECT ns.NEWS_NO,ns.NEWS_C_NO,ns.NEWS_TIT,ns.NEWS_CON,ns.NEWS_IMG_PATH,ns.NEWS_PUBLISH_DATE,ns.NEWS_IMG_EXP from news ns JOIN news_class nsc ON ns.NEWS_C_NO=nsc.NEWS_C_NO where ns.NEWS_C_NO=0 ORDER by ns.NEWS_PUBLISH_DATE desc
    "; 

   
    $news = $pdo->prepare( $sql); //先編譯好
    // $mem_dis_com->bindValue(':showno',$showno);
    $news->execute();//執行

    if($news->rowCount() == 0){//找不到 
        echo "{}";
    }else{
        $news_Row = $news->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($news_Row);
    }
} catch (PDOException $e) {
    $errMsg .= "錯誤 : ".$e -> getMessage()."<br>";
    $errMsg .= "行號 : ".$e -> getLine()."<br>";
}
?>

