<?php
include("conn.php");
header("content-type:text/html;charset=utf-8");
//结果集对象=查询结果表+指针（默认指向第一条记录)
$rs=mysql_query("select * from message");
while($info=mysql_fetch_array($rs)){
  $str.='{"author":"'.$info['author'].'","title":"'.$info['title'].'","content":"'.$info['content'].'","face":"'.$info['face'].'","reply":"'.$info[reply].'","addTime":"'.$info[addTime].'"},';
}

$json=substr($str,0,strlen($str)-1);
//4.遍历结果集对象

	 $str='{"status":"10001","msg":"success","data":['.$json.']}';
echo $str;
?>