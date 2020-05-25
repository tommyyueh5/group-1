<?php

  // require_once("../connectdd106g1.php");
session_start();
// try {
  require_once("./../connectdd106g1.php");
  // require_once("../PHP/connet.php");
  $sql = "select MEM_NAME, MEM_NO, MEM_IMG, MEM_MAIL, MEM_PAS, MEM_POSITION from member";

  $member = $pdo->query($sql);
  $member_row = $member->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($member_row);
?>
