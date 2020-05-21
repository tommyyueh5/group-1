<?php
    

    $dsn ="mysql:host=localhost;dbname=dd106g1";
    $user = 'root';
    $password = "123456";
    $pdo = new PDO($dsn, $user, $password);

    $path = "../dest/image/epidemic-shop/cloth/". $_FILES["images"]["name"];


    $sql = "INSERT INTO PRODUCT
            (PRO_KIND, PRO_ID, PRO_PRICE, PRO_SHE, PRO_DESC, PRO_SRC)
            VALUES ('{$_POST["kind"]}','{$_POST["id"]}',{$_POST["pri"]},0,'{$_POST["desc"]}', '{$path}')";
    $statement = $pdo->prepare($sql);
    $statement->execute();
    move_uploaded_file($_FILES["images"]["tmp_name"], "../image/epidemic-shop/cloth/". $_FILES["images"]["name"]);
   
?>