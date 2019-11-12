$(function(){
		var author=$("#author");
		var title=$("#title");
		var content=$("#content");
		//打开
		$("#dl").click(function (){
			$("#leavemessage2").toggle();
		})
		//隐藏
		$("#gb2").click(function (){
			$("#leavemessage2").toggle();
		})
		
		$("#bt1").click(function (){
			if(author.val()!="" && title.val()!="" && content.val()!=""){
				
			}else{
				alert("不能为空");
				return false;
			}
		})
		for(var i=1;i<=42;i++){
			$("#face").append("<option value='"+i+".gif'>"+i+".gif"+"</option>");
		}
		$("#face").change(function (){
			$("#img1").attr("src","face/"+$(this).val());
		})
		
		var str="";
			$.ajax({
				url:"bbianli.php",
				type:"POST",
				dataType:"json",
				success:function(data){
					window.data=data;
					// console.log(data)
					data=data.data;
					// console.log(data);
					// for(var i=0;i<data.length;i++){
					// 	str+="<ul><li>"+data[i].author+"<img src=face/"+data[i].face+">说：</li>"+"<li>标题："+
					// 	data[i].title+"</li>"+"<li>内容："+data[i].content+"</li>"+"<li>管理员回复："+
					// 	data[i].reply+"</li>"+"<li>id："+data[i].messageId+"</li>"+"<li>发布时间："+data[i].addTime+"</li></ul><hr>";
					// }
					// $("#div1").html(str)
					var str="";
					$.each(data,function (index,data){
						if(getCookie(hex_md5("login"))==hex_md5("success"+getCookie("adminName")+getCookie("sessionId"))){
							str+="<ul><li>"+data.author+"<img src=face/"+data.face+">说:</li><li>标题:"+data.title+"</li><li>内容:"+data.content+"</li><li>管理员回复:"+data.reply+"</li><li>发布时间:"+data.addTime+"</li><li>"+"<a id='hf' href=replymessage.html?messageId="+data.messageId+">管理员回复</a></li><li><a href=deletemessage.php?messageId="+data.messageId+">删除</a></li></ul>";
							$("#div1").html(str);
						}else{
							str+="<ul><li>"+data.author+"<img src=face/"+data.face+">说:</li><li>标题:"+data.title+"</li><li>内容:"+data.content+"</li><li>管理员回复:"+data.reply+"</li><li>发布时间:"+data.addTime+"</li></ul>";
							$("#div1").html(str)
						}
					})
					goPage(1,5);
				}
			});
			if(getCookie(hex_md5("login"))==hex_md5("success"+getCookie("adminName")+getCookie("sessionId"))){
				$("#a1").append('<a href="loginout.php">管理员注销</a><p>欢迎管理员：'+getCookie("adminName")+'</p>');
				// <!-- <p>欢迎'+decode(getCookie("sessionId"))+'</p> -->
			}
			// sessionId=2953d5d32a84a8add126642ed6beacc1; adminName=tom; d56b699830e77ba53855679cb1d252da=4a946132a8e2a8daa83c01b02f3b303f; PHPSESSID=2953d5d32a84a8add126642ed6beacc1
			//回复内容
			
			// $("#a4").click(function (){
			// 	$.ajax({
			// 		url:"replymessagechuli.php",
			// 		type:"POST",
			// 		data:{reply:$("#a2").val(),messageId:$("#a3").val()},
			// 		success:function (){
			// 			location.href="index.html";
			// 		}
			// 	})
			// })
	});
	//分页
	function goPage(pno,psize){
	 var liu=document.getElementById("div1");
	 var lis=liu.querySelectorAll("ul");
	 var num = lis.length;
	  var totalPage = 0;//总页数
	  var pageSize = psize;//每页显示行数
	  var str="<div id='yeshu'>";
	  //总共分几页
	  if(num/pageSize > parseInt(num/pageSize)){
	      totalPage=parseInt(num/pageSize)+1;
	    }else{
	      totalPage=parseInt(num/pageSize);
	    }
	  var currentPage = pno;//当前页数
	  var startRow = (currentPage - 1) * pageSize+1;//开始显示的行 31
	    var endRow = currentPage * pageSize;//结束显示的行  40
	    endRow = (endRow > num)? num : endRow;  //40
	    //遍历显示数据实现分页
	  for(var i=1;i<(num+1);i++){
	    var irow = lis[i-1];
	    if(i>=startRow && i<=endRow){
	      irow.style.display = "block";
	    }else{
	      irow.style.display = "none";
	    }
	  }
	  var tempStr = "共"+num+"条记录 分"+totalPage+"页 当前第"+currentPage+"页";
	  if(currentPage>1){
	    tempStr += "<a href=\"#\" onClick=\"goPage("+(1)+","+psize+")\">首页</a>";
	    tempStr += "<a href=\"#\" onClick=\"goPage("+(currentPage-1)+","+psize+")\">上一页</a>"
	  }else{
	    tempStr += "首页";
	    tempStr += "上一页";
	  }
	  if(currentPage<totalPage){
	    tempStr += "<a href=\"#\" onClick=\"goPage("+(currentPage+1)+","+psize+")\">下一页</a>";
	    tempStr += "<a href=\"#\" onClick=\"goPage("+(totalPage)+","+psize+")\">尾页</a>";
	  }else{
	    tempStr += "下一页";
	    tempStr += "尾页";
	  }
	document.getElementById("barcon").innerHTML = tempStr
	}