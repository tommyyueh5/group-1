<?php
require_once("./../connectdd106g1.php");
    $sql = "SELECT PRO_NO, PRO_PRICE
            FROM PRODUCT";
    $my = array();
    $statement = $pdo->prepare($sql);
    $statement->execute();
    $rows= $statement->fetchAll(PDO::FETCH_ASSOC);


   

    foreach( $rows as $i=>$v) {
        settype($rows[$i]['PRO_PRICE'], "integer");
        settype($rows[$i]['PRO_NO'], "string");
        $my[$rows[$i]['PRO_NO']] = $rows[$i]['PRO_PRICE'];
    }
    print_r(json_encode($my));
?>