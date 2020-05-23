<?php
header('Access-Control-Allow-Origin: http://localhost:8888');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept');

try{
    require_once("connectdd106g1.php");
    $articleNo = $_POST["articleNo"];
    // $articleno = 4;

    // 篩選要用的 會員 討論區 留言 欄位
    $sql= "SELECT D.DIS_NO,M.MEM_NO,M.MEM_ACC,M.MEM_IMG,DC.COM_CON,DC.COM_DATE FROM discussion D JOIN discuss_comment DC ON 
    D.DIS_NO = DC.DIS_NO JOIN member M ON M.MEM_NO = DC.MEM_NO WHERE D.DIS_NO = :disNo ORDER BY DC.COM_DATE";
    $articles = $pdo->prepare($sql);
    $articles ->bindValue(":disNo",$articleNo);
    $articles -> execute();

    $prodRows = $articles->fetchAll(PDO::FETCH_ASSOC);
    // echo urldecode(json_encode($prodRows));
    echo json_encode($prodRows,JSON_UNESCAPED_UNICODE);
}catch(PDOException $e){
    echo "錯誤原因：",$e->getMessage(),"<br>";
    echo "錯誤原因：",$e->getLine(),"<br>";
}
?>
