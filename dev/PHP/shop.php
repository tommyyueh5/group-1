<?php

    try {
        $dsn="mysql:host=localhost;dbname=dd106g1";
        $user = 'root';
        $password = '123456';

        $pdo = new PDO($dsn, $user, $password);
        
        $sql = "SELECT *
                FROM PRODUCT";

        $statement = $pdo->prepare($sql);
        $statement->execute();

        $row = $statement->fetchAll(PDO::FETCH_ASSOC);
        print_r(json_encode($row));
    } catch (PDOException $e) {

    }
    
?>