<?php
	$dsn = "mysql:host=localhost;port=3306;dbname=dd106g1;charset=utf8";
	$user = "root";
	$password = "123456";
	$options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION);
	$pdo = new PDO( $dsn, $user, $password, $options);  
	
?>
