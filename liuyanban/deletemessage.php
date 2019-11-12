<?php
session_start();
if(setcookie(md5("login")==md5("success".$adminName.session_id()))){
	$messageId=$_GET['messageId'];
	include("conn.php");
	$flag=mysql_query("delete from message where messageId='$messageId'");
	if($flag){
		header("location:index.html");
	}else{
		echo '<script>alert("删除失败，请联系管理员");</script>';
	}
}else{
	header("location:error.php");
}
?>