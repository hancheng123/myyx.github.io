// JavaScript Document
var $=function(id){
	return document.getElementById(id);
};
 function onChange(){
	  if($("baidu").checked){
		  $("myform").action="https://www.baidu.com/s";
		  $("logo").src="../imgjs/baidu.gif";
		  $("logo").style="position:absolute;width:70px;height:37px";
		  $("btnSearch").value="百度搜索";
		  $("txtSearch").name="wd";
	  }
	 if($("bilibili").checked){
		$("myform").action="https://search.bilibili.com/all";
		$("logo").src="../imgjs/bilibili2.jpg";
		 $("logo").style="position:absolute; margin-top:4px;width:70px;height:25px";
		 $("btnSearch").value="bilibili搜索";
		 $("txtSearch").name="keyword";
	}
	  if($("bing").checked){
		  $("myform").action="https://cn.bing.com/search";
		  $("logo").src="../imgjs/bing2.jpg";
		   $("logo").style="position:absolute; margin-top:4px;width:70px;height:23px";
		  $("btnSearch").value="微软搜索";
		  $("txtSearch").name="q";
	  }
	  if($("pojie").checked){
		  $("myform").action="http://www.52pojie.cn";
		  $("logo").src="../imgjs/pojie.jpg";
		   $("logo").style="position:absolute; margin-top:4px;width:70px;height:23px";
		  $("btnSearch").value="吾爱搜索";
		  $("txtSearch").name="q";
	  }
	  if($("youku").checked){
		  $("myform").action="https://www.soku.com/a";
		  $("logo").src="../imgjs/youku.jpg";
		   $("logo").style="position:absolute; margin-top:4px;width:70px;height:23px";
		  $("btnSearch").value="优酷搜索";
		   $("txtSearch").name="keyword";
	  }
}

