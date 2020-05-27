<?php
<<<<<<< HEAD
	$dsn = "mysql:host=localhost;port=8888;dbname=dd106g1;charset=utf8";
=======
	$dsn = "mysql:host=localhost;port=8889;dbname=dd106g1;charset=utf8";
>>>>>>> be7c73dc73cf02b356f3b0b593e101b72c4232ac
	$user = "root";
	$password = "root";
	$options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION);
	$pdo = new PDO( $dsn, $user, $password, $options);  
?>

