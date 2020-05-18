<?php

    try {
        $dsn="mysql:host=localhost;dbname=dd106g1";
        $user = 'root';
        $password = '123456';

        $pdo = new PDO($dsn, $user, $password);


        $datetime = new Datetime();
        // echo ($datetime->('date'));
        echo '<br>';
        print_r($datetime->format('Y-m-d H:m:s'));
        $ord = '{"2":"jacket-2, goggles-2, 1340, 2","1":"jacket-2, goggles-2, 670, 1"}';
        
        $sql = "INSERT INTO ORDERS (MEM_NO, ORD_PRI,)
                VALUES (1,:ord_price)";

        // $statement = $pdo->prepare($sql);

        // $statement->bindValue(":ord_price",123);

        // $statement->execute();

        // $ord = file_get_contents("php://input");
        // echo gettype($ord);

        print_r(json_decode($ord));
        
        echo '<br>';

        $key1 = json_decode($ord)->{'1'};
        echo gettype(explode(", ", $key1));
        echo '<br>';
        print_r(explode(", ", $key1));
        // var_dump($ord);
        // echo(json_decode($ord)->{'1'});

        // foreach(json_decode($ord)  as $index => $value) {
        //     echo $value;
        // }
    } catch (PDOException $e) {
        echo 1;
    }
    
?>