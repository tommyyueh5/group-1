<?php

    try {
        require_once("./../connectdd106g1.php");
        $sql = "SELECT *
                FROM PRODUCT
                WHERE PRO_SHE=1";

        $statement = $pdo->prepare($sql);
        $statement->execute();

        $row = $statement->fetchAll(PDO::FETCH_ASSOC);
        print_r(json_encode($row));
    } catch (PDOException $e) {

    }
    
?>