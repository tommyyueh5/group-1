<?php

    try {
        $dsn ="mysql:host=localhost;dbname=dd106g1";
        $user = "root";
        $password = "123456";

        $pdo = new PDO($dsn, $user, $password);

        $sql = "SELECT *
                FROM PRODUCT";

        
        $statement = $pdo->prepare($sql);
        $statement->execute();

        $rows = $statement->fetchAll(PDO::FETCH_ASSOC);
        echo (json_encode($rows));
        // foreach( $rows as $i=>$value) {
        //     // print_r(json_encode($value));
        //     // echo '<br>';
        //     echo $i;
        // }


    } catch (PDOException $e) {
        echo 'error';
    }
?>