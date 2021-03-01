// JavaScript Document


  function onChange(){
	  if($("baidu").checked){
		  $("myform").action="https://www.baidu.com/s";
		  $("logo").src="imgjs/baidu.gif";
		  $("logo").style="position:absolute;width:70px;height:37px";
		  $("btnSearch").value="百度搜索";
		  $("txtSearch").name="wd";
	  }
	 if($("bilibili").checked){
		$("myform").action="https://search.bilibili.com/all";
		$("logo").src="imgjs/bilibili2.jpg";
		 $("logo").style="position:absolute; margin-top:4px;width:70px;height:25px";
		 $("btnSearch").value="bilibili搜索";
		 $("txtSearch").name="keyword";
	}
	  if($("bing").checked){
		  $("myform").action="https://cn.bing.com/search";
		  $("logo").src="imgjs/bing2.jpg";
		   $("logo").style="position:absolute; margin-top:4px;width:70px;height:23px";
		  $("btnSearch").value="微软搜索";
		  $("txtSearch").name="q";
	  }
	  if($("pojie").checked){
		  $("myform").action="http://www.52pojie.cn";
		  $("logo").src="imgjs/pojie.jpg";
		   $("logo").style="position:absolute; margin-top:4px;width:70px;height:23px";
		  $("btnSearch").value="吾爱搜索";
		  $("txtSearch").name="q";
	  }
	  if($("youku").checked){
		  $("myform").action="https://www.soku.com/a";
		  $("logo").src="imgjs/youku.jpg";
		   $("logo").style="position:absolute; margin-top:4px;width:70px;height:23px";
		  $("btnSearch").value="优酷搜索";
		   $("txtSearch").name="keyword";
	  }
}
function $(id) {
	return document.getElementById(id);
}

var now=1;
var timer;
function show(id){
	if(id){
		now=id;
		clearTimeout(timer);
	}
	var aqs=$("buttons").getElementsByTagName("input");
	for(var i=1;i<=aqs.length;i++){
		if(i==now){
			$("ab"+now).style.display="block";
			aqs[now-1].checked=true;
		}else{
			$("ab"+i).style.display="none";
		}
	}
	if(now==aqs.length){
		now=1;
	}
	else{
		now++;
	}
	timer=setTimeout(show,2000);
}
var now1=1;
function show1(id){
	if(id){
		now1=id;
		clearTimeout(timer);
	}
	var aqs=$("buttons").getElementsByTagName("input");
	for(var i=1;i<=aqs.length;i++){
		if(i==now1){
			$("ab"+now1).style.display="block";
			aqs[now1-1].checked=true;
		}
		else{
			$("ab"+i).style.display="none";
		}
	}
}
var now2=1;
var timer1;
function show2(id){
	if(id){
		now2=id;
		clearTimeout(timer1);
	}
	var ads=$("button").getElementsByTagName("input");
	for(var i=1;i<=ads.length;i++){
		if(i==now2){
			$("ap"+now2).style.display="block";
			ads[now2-1].checked=true;
		}else{
			$("ap"+i).style.display="none";
		}
	}
	if(now==ads.length){
		now2=1;
	}
	else{
		now2++;
	}
	timer1=setTimeout(show2,2000);
}
var now3=1;
function show3(id){
	if(id){
		now3=id;
		clearTimeout(timer1);
	}
	var ads=$("button").getElementsByTagName("input");
	for(var i=1;i<=ads.length;i++){
		if(i==now3){
			$("ap"+now3).style.display="block";
			ads[now3-1].checked=true;
		}
		else{
			$("ap"+i).style.display="none";
		}
	}
}


function change(){
	$("read").style.display="block";
	$("ck").style.display="none";
}
function change1(){
	$("read").style.display="none";
	$("ck").style.display="block";
}

window.onload=function(){
	show();
	show1();
	show2();
	show3();
	
};

	
