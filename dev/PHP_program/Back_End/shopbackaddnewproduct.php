<?php
    

    require_once("./../connectdd106g1.php");
    
    $sql2 = "SELECT *
             FROM PRODUCT
             WHERE PRO_ID='{$_POST["id"]}'";
    
        $state = array();
        $x=0;
        foreach ($_POST as $i=>$v) {
            //是
            $x++;
            if (empty($_POST[$i])&&($_POST[$i]!='0')) {

                foreach( $_POST as $i=>$v) {

                    if (empty($_POST[$i])&&($_POST[$i]!='0')) {
                        switch ($i) {
                            case "kind":
                                
                                $state[$i] = '請選擇種類';
                                break;
                            case "id":
                                $state[$i] = '請確實輸入';
                                break;
                            case 'pri' :
                                $state[$i] = '請輸入價格';
                                break;
                            case 'time' :
                                $state[$i] = '請輸入時間';
                                break;
                            case 'desc' :
                                $state[$i] = '請輸入簡述';
                                break;
                        }
                    }  
                   

                }  
                $state['error'] = 1;
                print_r(json_encode($state));
                break;
            }   else {
                if (count($_POST)==$x) {
                    if (is_numeric($_POST['pri'])) {

                        $type = array('clothe','goggle','mask');
                        foreach ($type as $i => $v) {
                            if ( $_POST['kind']==$v) {
                                $path = "../dest/image/epidemic-shop/{$v}/". $_FILES["images"]["name"];
                            }

                          
                        }
                        $sql = "INSERT INTO PRODUCT
                        (PRO_KIND, PRO_ID, PRO_PRICE, PRO_SHE, PRO_DESC, PRO_TIME, PRO_SRC)
                        VALUES ('{$_POST["kind"]}','{$_POST["id"]}',{$_POST["pri"]},{$_POST["she"]},'{$_POST["desc"]}', '{$_POST["time"]}', '{$path}')";
                        $statement = $pdo->prepare($sql);
                        $statement->execute();

                        $statement2 = $pdo->prepare($sql2);
                        $statement2->execute();
                        $row = $statement2->fetch(PDO::FETCH_ASSOC);
                        $row['error'] = 0; 
                        print_r(json_encode($row));

                        // 
                        $type = array('clothe','goggle','mask');
                        foreach ($type as $i => $v) {
                            if ( $_POST['kind']==$v) {
                                move_uploaded_file($_FILES["images"]["tmp_name"], "../image/epidemic-shop/${v}/". $_FILES["images"]["name"]);
                            }
                        }


                    } else {
                        $state['pri'] = '價格必需為數值';
                        $state['error'] = 2;
                        print_r(json_encode($state));
                    }
                }
            }

        }

?>

