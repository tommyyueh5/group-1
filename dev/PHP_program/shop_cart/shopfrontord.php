<?php

    try {
        require_once("./../connectdd106g1.php");


        $datetime = new Datetime();
        echo '<br>';
        print_r($datetime->format('Y-m-d H:m:s'));
        $ord = '{"2":"jacket-2, 400, 2","1":"jacket-2, goggles-2, 670, 1","3":"jacket-2, goggles-2, mask-1, 675, 1"}';
        
        $sql = "INSERT INTO ORDERS (MEM_NO, ORD_PRI)
                VALUES (1,:ord_price)";

        $statement = $pdo->prepare($sql);

        $statement->bindValue(":ord_price",123);

        $statement->execute();


        print_r(json_decode($ord));
        
        echo '<br>';
        $total = 0;
        foreach ( json_decode($ord) as $i => $value) {
            $prolistArray = explode(", ", $value);
            echo $prolistArray[sizeof($prolistArray)-2];
            $total = 0;

        }


    } catch (PDOException $e) {
        echo 1;
    }
    
?>