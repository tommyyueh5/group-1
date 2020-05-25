<?php
<<<<<<< HEAD
=======
	// $dsn = "mysql:host=localhost;port=8889;dbname=dd106g1;charset=utf8";
>>>>>>> c68afbd68e8b8b4f93fb46100eaa3ea3d4b3902e
	$dsn = "mysql:host=localhost;port=3306;dbname=dd106g1;charset=utf8";
	$user = "root";
	$password = "root";
	$options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION);
	$pdo = new PDO( $dsn, $user, $password, $options);  
?>
