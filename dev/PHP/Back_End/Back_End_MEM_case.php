<?php
session_start();
try {
  require_once("../connectdd106g1.php");
  $sql = "SELECT MEM_NAME, MEM_NO, MEM_IMG, MEM_MAIL, MEM_PAS, MEM_POSITION FROM member";

  $member = $pdo->query($sql);
  $member_row = $member->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($member_row);
} catch (PDOException $e) {
  // echo "error : " . $e->getMessage();
  // $error = ["error"=>$e->getMessage()];
  // echo json_encode($error);
}
