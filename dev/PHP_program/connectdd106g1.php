<?php
<<<<<<< HEAD
	$dsn = "mysql:host=localhost;port=8888;dbname=dd106g1;charset=utf8";
=======
	$dsn = "mysql:host=localhost;port=8889;dbname=dd106g1;charset=utf8";
>>>>>>> b79327e055dc1e6c118363ee78b809a94817a6b6
	$user = "root";
	$password = "root";
	$options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION);
	$pdo = new PDO( $dsn, $user, $password, $options);  
?>

