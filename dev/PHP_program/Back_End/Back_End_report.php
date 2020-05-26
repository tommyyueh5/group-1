<?php

try {
  require_once("./../connectdd106g1.php");
  //選取資料表
  $sql = "SELECT dn.DIS_NO,mem.MEM_ACC ,dn.DIS_TIT,dn.DIS_C,rp.REP_DATE,rp_c.REP_C_REA,mem.MEM_IMG,rp.VER_SIT from report rp JOIN discussion dn ON rp.DIS_NO = dn.DIS_NO JOIN report_class rp_c ON rp.REP_C_NO = rp_c.REP_C_NO JOIN member mem ON mem.MEM_NO = rp.MEM_NO ORDER by rp.REP_DATE DESC";
  //pdo請求資料庫
  $report = $pdo->query($sql);
  
  //將資料庫的資料比數全部抓出來
  $report_row = $report->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($report_row);
}

catch(PDOEXCEPTION $e){
  echo $e->getMessage();
}
?>
