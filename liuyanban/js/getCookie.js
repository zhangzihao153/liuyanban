function getCookie($name){
		     	  var data=document.cookie;
		     	  var dataArray=data.split("; ");
				  // console.log(dataArray)
		     	for(var i=0;i<dataArray.length;i++){
		     		var varName=dataArray[i].split("=");
		     		  if(varName[0]==$name){
		     		  	 return decodeURI(varName[1]);
						}
					// console.log(varName);
					}
				}