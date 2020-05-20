<?php
    try {
        $dsn="mysql:host=localhost;dbname=dd106g1";
        $user = 'root';
        $password = '123456';

        $pdo = new PDO($dsn, $user, $password);
        
        $sql = "UPDATE PRODUCT
                SET PRO_SHE =:c
                WHERE PRO_NO=:sta";
        

        $statement = $pdo->prepare($sql);

        $statement->bindValue(':sta', $_GET['id']);
        $statement->bindValue(':c', $_GET['c']);
        $statement->execute();
        echo 1;
        // $row = $statement->fetchAll(PDO::FETCH_ASSOC);
        // print_r(json_encode($row));
    } catch (PDOException $e) {

    }
?>