<?php
    $dsn="mysql:host=localhost;dbname=dd106g1";
    $password= "123456";
    $user = "root";
    $pdo = new PDO($dsn, $user, $password);

    $sql = "SELECT PRO_NO, PRO_PRICE
            FROM PRODUCT";
    $my = array();
    $statement = $pdo->prepare($sql);
    $statement->execute();
    $rows= $statement->fetchAll(PDO::FETCH_ASSOC);
    // print_r($rows);


   

    foreach( $rows as $i=>$v) {
        settype($rows[$i]['PRO_PRICE'], "integer");
        settype($rows[$i]['PRO_NO'], "string");
        $my[$rows[$i]['PRO_NO']] = $rows[$i]['PRO_PRICE'];
    }
    print_r(json_encode($my));
?>