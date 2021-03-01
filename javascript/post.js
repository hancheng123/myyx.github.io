// JavaScript Document


function checkSubmit(){
	return checkUserName()&&checkPassWord()&&checkRepassWord()&&checkPhone()&&checkIdentity()&&checkEmail();
}
	function checkUserName(){
		//用户名由数字、字母、下划线、点、横线、汉字、空格组成，只能以数字或字母开头和结尾，且长度在3-14之间
		var regUsername=/^[a-zA-Z\u4E00-\u9FA5][\u4E00-\u9FA5\w\.\s-]{1,12}[\da-zA-Z\u4E00-\u9FA5@]$/i;
		if(regUsername.test($("#username").val())){
			$("#usernameInfo").html("OK");
			$("#usernameInfo").removeClass();
			$("#usernameInfo").addClass("ok");
			return true;
		}else{
			$("#usernameInfo").html("用户名由数字、字母、下划线、点、横线、汉字组成");
			$("#usernameInfo").removeClass();
			$("#usernameInfo").addClass("error");
			return false;
		}
	}

	function checkPassWord(){//密码只能由数字和字母组成，长度为6-10位
		var regPassWord=/[\da-zA-Z@\.]{6,10}/i;
		if(!regPassWord.test($("#password").val())){
			$("#passwordInfo").html("密码只能由数字、字母、@、.组成，长度为6-10位");
			$("#passwordInfo").removeClass();
			$("#passwordInfo").addClass("error");
			return false;
		}
		$("#passwordInfo").html("OK");
		$("#passwordInfo").removeClass();
		$("#passwordInfo").addClass("ok");
		return true;
	}
	function checkRepassWord(){
		var regRePassWord=/[\da-zA-Z@\.]{6,10}/i;
	if($("#repassword").val()==$("#password").val()&&regRePassWord.test($("#repassword").val())){
		$("#repasswordInfo").html("OK");
		$("#repasswordInfo").removeClass();
		$("#repasswordInfo").addClass("ok");
		return true;
	}else{
		$("#repasswordInfo").html("输入密码不正确");
		$("#repasswordInfo").removeClass();
		$("#repasswordInfo").addClass("error");
		return false;
	}
	}

function checkPhone(){
	var regPhone=/^[1-9]\d{10}$/;
	if(!regPhone.test($("#phone").val())){
		$("#phoneInfo").html("请填写正确的手机号码");
		$("#phoneInfo").removeClass();
		$("#phoneInfo").addClass("error");
		return false;
	}
		$("#phoneInfo").html("OK");
		$("#phoneInfo").removeClass();
		$("#phoneInfo").addClass("ok");
		return true;
}
function checkIdentity(){
	var regIdentity=/^[1-9]\d{14}(\d{2}[0-9X])?$/;
	if(!regIdentity.test($("#identity").val())){
		$("#identityInfo").html("请输入正确的身份证号");
		$("#identityInfo").removeClass();
		$("#identityInfo").addClass("error");
		return false;
	}
		$("#identityInfo").html("OK");
		$("#identityInfo").removeClass();
		$("#identityInfo").addClass("ok");
		return true;	
}
function checkEmail(){
	var regEmail=/^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/i;
	if(!regEmail.test($("#email").val())){
		$("#emailInfo").html("请输入正确的邮箱");
		$("#emailInfo").removeClass();
		$("#emailInfo").addClass("error");
		return false;
	}
		$("#emailInfo").html("OK");
		$("#emailInfo").removeClass();
		$("#emailInfo").addClass("ok");
		return true;
}
var fujian={
	id:1001,
	name:"福建省",
	cities:[
		{id:1,name:"厦门市"},

		{id:2,name:"三明市",
		county:[
		{id:1,name:"沙县"},
		{id:2,name:"尤溪县"},
		{id:3,name:"大田县"},
		{id:4,name:"将乐县"},
		{id:5,name:"宁化县"}
			]
		},

		{id:3,name:"福州市"},
		{id:4,name:"南平市"},
		{id:5,name:"泉州市"}
	]
};
var guangdong={
	id:1002,
	name:"广东省",
	cities:[
		{id:1,name:"广州市"},
		{id:2,name:"东莞市"},
		{id:3,name:"佛山市"},
		{id:4,name:"珠海市"},
		{id:5,name:"深圳市"}
	]
};
var provinces=[fujian,guangdong];
window.onload=function(){
	for(var index in provinces){
		var p=provinces[index];
		var option= new Option(p.name,p.id);
		$("#province").append(option);
	}
	
}

function changeCity(){
	
	var pv=$("#province").val();
	$("#city option").remove();
	var option=new Option("--选择城市--",0);
	$("#city").append(option);
	if(pv==0){
		return;
	}
	for(var i in provinces){
		var pd=provinces[i];
		if(pd.id==pv){
			var cities=pd.cities;
			for(var j in cities){
				var c=cities[j];
				var option=new Option(c.name,c.id);
				$("#city").append(option);
				
			}
			break;
		}
	}
	
}
function changeCounty(){
	
	var pv=$("#city").val();
	$("#county option").remove();
	var option=new Option("--选择地区--",0);
	$("#county").append(option);
	console.log("错误");
	if(pv==0){
		return;
	}
	for(var i in provinces){
		var cities=provinces[i].cities;
		for(var j in cities){
			var city=cities[j];
			// console.log(city);
			if(city.id==pv){
			var counties=city.county;
			// console.log(counties);
			for(var k in counties){
				var county=counties[k]
					var option=new Option(county.name,county.id);
					$("#county").append(option);
				}		
			}
		}
			break;
		}
	}
	

