<?php

    try {
        require_once("./../connectdd106g1.php");

        $datetime = new Datetime();
        $now =  date("Y-m-d H:i:s");
       




        $ord1 = file_get_contents("php://input");
     
        $ordlist = json_decode($ord1);
     
        $ordsum = 0;
        if ( !(isset($ordlist->no))) {
            echo 0;
        } else {
            foreach($ordlist as $i=>$v) {
                if ( is_numeric($i)) {
                    $ordsum+=explode(', ', $v)[sizeof(explode(', ', $v))-2];
                    
                }
            }
                    $sql3 = "   INSERT INTO ORDERS (MEM_NO, ORD_PRI, EST_DAT)
                                VALUES (:memno, :ordsum, :ordtime )";

                    $statementorder = $pdo->prepare($sql3);
                    $statementorder->bindValue(':memno', $ordlist->no);
                    $statementorder->bindValue(':ordsum', $ordsum);
                    $statementorder->bindValue(':ordtime', $now);
                    $statementorder->execute();
                    echo 1;
        }


        
    } catch (PDOException $e) {
        echo 'error';
    }
    
?>