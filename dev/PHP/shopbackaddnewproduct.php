<?php
    

    $dsn ="mysql:host=localhost;dbname=dd106g1";
    $user = 'root';
    $password = "123456";
    $pdo = new PDO($dsn, $user, $password);

    $path = "../dest/image/epidemic-shop/cloth/". $_FILES["images"]["name"];


    $sql = "INSERT INTO PRODUCT
            (PRO_KIND, PRO_ID, PRO_PRICE, PRO_SHE, PRO_DESC, PRO_TIME, PRO_SRC)
            VALUES ('{$_POST["kind"]}','{$_POST["id"]}',{$_POST["pri"]},{$_POST["she"]},'{$_POST["desc"]}', '{$_POST["time"]}', '{$path}')";
    $statement = $pdo->prepare($sql);
    $statement->execute();

    $sql2 = "SELECT *
             FROM PRODUCT
             WHERE PRO_ID='{$_POST["id"]}'";

    $statement2 = $pdo->prepare($sql2);
    $statement2->execute();
    $row = $statement2->fetch(PDO::FETCH_ASSOC);
    print_r(json_encode($row));
    move_uploaded_file($_FILES["images"]["tmp_name"], "../image/epidemic-shop/cloth/". $_FILES["images"]["name"]);
   
?>