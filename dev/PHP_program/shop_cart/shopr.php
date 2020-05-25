<?php
    try {
        require_once("./../connectdd106g1.php");
        
        $sql = "UPDATE PRODUCT
                SET PRO_SHE =:c
                WHERE PRO_NO=:sta";
        

        $statement = $pdo->prepare($sql);

        $statement->bindValue(':sta', $_GET['id']);
        $statement->bindValue(':c', $_GET['c']);
        $statement->execute();
        echo 1;
    } catch (PDOException $e) {

    }
?>