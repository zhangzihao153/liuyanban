<?php
session_start();
if(setcookie(md5("login")==md5("success".$adminName.session_id()))){
	// setcookie(md5("login")==md5("success".$adminName.session_id())) 
	$reply=$_POST['reply'];
	$messageId=$_POST['messageId'];
	$reply = preg_replace('/\s+/', '', $reply);
	include("conn.php");
	$flag=mysql_query("update message set reply='$reply' where messageId='$messageId'");
	if($flag){
		// header("location:index.html");
		// echo '{"status":"1001"}';
	}else{
		echo '<script>alert("回复失败，请联系管理员");</script>';
		// echo '{"status":"2001"}';
	}
}else{
	header("location:error.php");
}
?>