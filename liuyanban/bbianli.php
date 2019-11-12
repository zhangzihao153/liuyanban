<?php
header("content-type:text/html;charset=utf-8");
$str="";
$conn=@mysql_connect("localhost","root","") or die("db connect error!");
mysql_select_db("message55",$conn);
mysql_query("set names utf8");
$rs=mysql_query("select * from message order by addTime desc");
while($info=mysql_fetch_array($rs)){
	$str.='{"messageId":"'.$info['messageId'].'","author":"'.$info['author'].'","title":"'.$info['title'].'","content":"'.$info['content'].'","face":"'.$info['face'].'","reply":"'.$info['reply'].'","addTime":"'.$info['addTime'].'"},';
}
$json=substr($str,0,strlen($str)-1);
//4.遍历结果集对象
	 $str='{"status":"10001","msg":"success","data":['.$json.']}';
	echo $str;
?>