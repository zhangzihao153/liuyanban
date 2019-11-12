<?php
header("content-type:text/html;charset=utf-8");
$author=$_POST['author'];
$face=$_POST['face'];
$title=$_POST['title'];
$content=$_POST['content'];
$content = preg_replace('/\s+/', '', $content);
include("conn.php");
$flag=mysql_query("insert into message(author,title,content,face,addTime) values('$author','$title','$content','$face',now())");
if($flag){
	header("location:index.html");
}else{
	echo '<script>alert("发布失败,请联系管理员");</script>';
}
?>