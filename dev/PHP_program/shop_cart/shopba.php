<?php

    try {
        require_once("./../connectdd106g1.php");

        $sql = "SELECT *
                FROM PRODUCT";

        
        $statement = $pdo->prepare($sql);
        $statement->execute();

        $rows = $statement->fetchAll(PDO::FETCH_ASSOC);
        echo (json_encode($rows));
       

    } catch (PDOException $e) {
        echo 'error';
    }
?>