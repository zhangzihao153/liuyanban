<?php
	session_start();
	// session_destroy();
	setcookie("sessionId",session_id(),time()-10000);
	setcookie("adminName",$adminName,time()-10000);
	setcookie(md5("login"),md5("success".$adminName.session_id()),time()-10000);
	header("location:index.html");
?>