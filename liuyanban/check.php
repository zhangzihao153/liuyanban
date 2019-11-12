<?php
session_start();
header("content-type:text/html;charset=utf-8");
$adminName=$_POST['adminName'];
$adminPwd=$_POST['adminPwd'];
include("conn.php");
if($adminName!="" && $adminPwd!=""){
$rs=mysql_query("select * from admins where adminName='$adminName' and adminPwd='$adminPwd'");
$num=mysql_num_rows($rs);
if($num>0){
	// $_SESSION['adminName']=$adminName;
	// $_SESSION['login']="success";
	setcookie("sessionId",session_id());
	setcookie("adminName",$adminName);
	setcookie(md5("login"),md5("success".$adminName.session_id()));
	header("location:index.html");
}else{
	echo '<script>alert("用户名或密码错误");history.go(-1);</script>';
}
}else{
	echo '<script>alert("用户名或密码不能为空");history.go(-1);</script>';
}
?>