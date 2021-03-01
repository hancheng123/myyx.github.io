	var nums=new Array();
	var score=0;
	var hasConflivted=new Array();

	var starx=0;
	var stary=0;
	var endx=0;
	var endy=0;
$(document).ready(function(){
	newGame();
});



//开始新游戏
function newGame(){
	//设置移动端的尺寸
	if(documentWidth>500){
		containerWidth=500;
		cellWidth=100;
		cellSpace=20;
	}else{
		settingForMobile();}
		// settingForMobile();
	
	init();
	//在随机的俩个单元格中生成数字
	start();
}

function settingForMobile(){//移动端底层单元格
	$("#header .author").css("padding-left",containerWidth*0.6);
	$("#header .wrapper").css("width",containerWidth);

	$("#grid-container").css("width",containerWidth-2*cellSpace);
	$("#grid-container").css("height",containerWidth-2*cellSpace);
	$("#grid-container").css("padding",cellSpace);
	$("#grid-container").css("broder-radius",cellWidth*0.1);

	$("#grid-container .grid-cell").css("width",cellWidth);
	$("#grid-container .grid-cell").css("height",cellWidth);
	$("#grid-container .grid-cell").css("border-radius",cellWidth*0.06);
	
}

function start(){
	updateView();
	generateOneNumber();
	generateOneNumber();
}
	//初始化页面
function init(){
	//初始化单元格位置4*4
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			var gridCell=$("#grid-cell"+"-"+i+"-"+j);
			gridCell.css("top",getPosTop(i));
			gridCell.css("left",getPosLeft(j));
		}
	}
	for(var i=0;i<4;i++){//定义二维数组
		nums[i]=new Array();
		hasConflivted[i]=Array();
		for(var j=0;j<4;j++){
			nums[i][j]=0;
			hasConflivted[i][j]=false;
		}
	}
	score=0;
	updateScore(score);

}
//更新上层单元格视图
function updateView(){
	/*for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			nums[i][j]=0;
		}   
	}*/
	$(".number-cell").remove(); //将上层单元格清空，然后重新初始化创建
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			$("#grid-container").append('<div class="number-cell" id="number-cell-'+i+'-'+j+'"></div>');
			var numberCell=$("#number-cell-"+i+"-"+j);
			if(nums[i][j]==0){
			numberCell.css("top",getPosTop(i)+cellWidth*0.5);//将空格位置在中间，通过动画持续改变，达到向外扩散的效果
			numberCell.css("left",getPosLeft(j)+cellWidth*0.5);
				numberCell.css("height","0px");
				numberCell.css("width","0px");
			}else{//nums[i][j]不为0时的设置，将所有的值显示
				numberCell.css("top",getPosTop(i));
				numberCell.css("left",getPosLeft(j));
				numberCell.css("width",cellWidth);
				numberCell.css("height",cellWidth);		
				numberCell.text(nums[i][j]);
				numberCell.css("background",getNumberBackgroundColor(nums[i][j]));
				numberCell.css("color",getNumberColor(nums[i][j]));
			}
			hasConflivted[i][j]=false;
			//移动端上层单元格
			$("#grid-container .number-cell").css("line-height",cellWidth+"px");
			$("#grid-container .number-cell").css("border-radius",cellWidth*0.06);
			$("#grid-container .number-cell").css("font-size",cellWidth*0.5);
		}
	}
	
	
}
/*
	在随机的单元格中生成一个随机数字
	1.在空余的单元格中随机找一个
	2.随机产生一个2或4*/
function generateOneNumber(){
	if(noSpace(nums)){
		return;
	}
	var count=0;
	var counts=new Array();
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			if(nums[i][j]==0){
				counts[count]=i*4+j;//因为i始终小于4，取余时不受影响
				count++;//统计空格数量
			}
		}
	}
	var onespace=Math.floor(Math.random()*count);//从空格随机取一个
	randx=Math.floor(counts[onespace]/4);//获取x,y位置
	randy=Math.floor(counts[onespace]%4);
	var randnum=Math.random()>0.5?2:4;
	nums[randx][randy]=randnum;//将获取的随机值赋给nums数组
	spaceAnimate(randx,randy,randnum);//动画效果 

}

//实现键盘响应
$(document).keydown(function(event){
	//阻止事件的默认动作
	event.preventDefault();
	switch(event.keyCode){
		case 37://left
				if(canMoveLeft(nums)){
					moveLeft();
					setTimeout(generateOneNumber,200);
					setTimeout(isGameOver,600);
				}
		break;
		case 38://up
				if(canMoveUp(nums)){
					moveUp();
					setTimeout(generateOneNumber,200);
					setTimeout(isGameOver,600);
				}

		break;
		case 39://right
				if(canMoveRight(nums)){
					moveRight();
					setTimeout(generateOneNumber,200);
					setTimeout(isGameOver,600);
				}
		break;
		case 40://down
				if(canMoveDown(nums)){
					moveDown();
					setTimeout(generateOneNumber,200);
					setTimeout(isGameOver,600);
				}
		break;
		default:
		break;

	}
});

  //实现触摸滑动响应
  document.addEventListener("touchstart",function(event){
  	startx=event.touches[0].pageX;
  	starty=event.touches[0].pageY;
  	// console.log(event);
  });

  document.addEventListener("touchend",function(event){
  	endx=event.changedTouches[0].pageX;
  	endy=event.changedTouches[0].pageY;
  	// console.log(event);
  	
  	//判断滑动方向
  	var deltax=endx-startx;
  	var deltay=endy-starty;
  	//判断当滑动距离小于一定域值时不做任何操作
  	if(Math.abs(deltax)<documentWidth*0.08&&Math.abs(deltay)<documentWidth*0.08){
  		return;
  	}
  	if(Math.abs(deltax)>=Math.abs(deltay)){//水平方向移动
  		if(deltax>=0){//向右移动
  			if(canMoveRight(nums)){
					moveRight();
					setTimeout(generateOneNumber,200);
					setTimeout(isGameOver,500);
				}

  		}else{//向左移动
  			if(canMoveLeft(nums)){
					moveLeft();
					setTimeout(generateOneNumber,200);
					setTimeout(isGameOver,500);
				}
  		}
  	}else{//垂直方向移动
  		if(deltay>=0){//向下移动
  			if(canMoveDown(nums)){
					moveDown();
					setTimeout(generateOneNumber,200);
					setTimeout(isGameOver,500);
				}

  		}else{//向上移动
  			if(canMoveUp(nums)){
					moveUp();
					setTimeout(generateOneNumber,200);
					setTimeout(isGameOver,500);
				}
  		}

  	}
  });
  



	/*向左移动：
	需要对每一个数字的左边进行判断，选择落脚点，落脚点有俩种情况
	1.落脚点没有数字，并且移动路径中没有障碍物
	2.落脚点数字和自己相同，并且移动路径中没有障碍物*/

function moveLeft(){
	for(var i=0;i<4;i++){
		for(var j=1;j<4;j++){
			if(nums[i][j]!=0){
				for(var k=0;k<j;k++){
					if(nums[i][k]==0 && noBlockHorizontal(i,k,j,nums)){//第i行k-j列之间是否没有障碍物
						//移动操作
						showMoveAnimation(i,j,i,k);
						nums[i][k]=nums[i][j];
						nums[i][j]=0;
						break;
					}else if(nums[i][k]==nums[i][j]&& noBlockHorizontal(i,k,j,nums)&& !hasConflivted[i][k]){
						showMoveAnimation(i,j,i,k);
						nums[i][k]+=nums[i][j];
						nums[i][j]=0; 
						score+=nums[i][k];
						updateScore(score);
						hasConflivted[i][k]=true;
						break;
					}
				}
			}
		}
	}
	//更新页面上的数字单元格，此处才是真正的更新显示移动后的效果
	setTimeout(updateView,200);//等待500ms，为了让单元格移动效果能显示完
	

}

function moveRight(){
	for(var i=0;i<4;i++){
		for(var j=2;j>=0;j--){
			if(nums[i][j]!=0){
				for(var k=3;k>j;k--){
					if(nums[i][k]==0 && noBlockHorizontal(i,j,k,nums)){
						showMoveAnimation(i,j,i,k);
						nums[i][k]=nums[i][j];
						nums[i][j]=0;
						break;
					}else if(nums[i][k]==nums[i][j] && noBlockHorizontal(i,j,k,nums) && !hasConflivted[i][k]){
						showMoveAnimation(i,j,i,k);
						nums[i][k]+=nums[i][j];
						nums[i][j]=0;
						score+=nums[i][k];
						updateScore(score);
						hasConflivted[i][k]=true;
						break;
					}
				}
			}
		}
	}
	setTimeout(updateView,200);
}
function moveUp(){
	for(var j=0;j<4;j++){
		for(var i=1;i<4;i++){
			if(nums[i][j]!=0){
				for(var k=0;k<i;k++){
					if(nums[k][j]==0 && noBlockVertical(j,k,i,nums)){//k-i行是否没有障碍物
						showMoveAnimation(i,j,k,j);
						nums[k][j]=nums[i][j];
						nums[i][j]=0;
						break;
					}else if(nums[k][j]==nums[i][j] &&noBlockVertical(j,k,i,nums) && !hasConflivted[k][j]){
						showMoveAnimation(i,j,k,j);
						nums[k][j]+=nums[i][j];
						nums[i][j]=0;
						score+=nums[k][j];
						updateScore(score);
						hasConflivted[k][j]=true;
						break;
					}

				}
			}
		}
	}
	setTimeout(updateView,200);
}
function moveDown(){
	for(var j=0;j<4;j++){
		for(var i=2;i>=0;i--){
			if(nums[i][j]!=0){
				for(var k=3;k>i;k--){
					if(nums[k][j]==0 && noBlockVertical(j,i,k,nums)){
						showMoveAnimation(i,j,k,j);
						nums[k][j]=nums[i][j];
						nums[i][j]=0;
						break;
					}else if(nums[k][j]==nums[i][j] && noBlockVertical(j,i,k,nums) && !hasConflivted[k][j]){
						showMoveAnimation(i,j,k,j);
						nums[k][j]+=nums[i][j];
						nums[i][j]=0;
						score+=nums[k][j];
						updateScore(score);
						hasConflivted[k][j]=true;
						break;
					}
				}
			}
		}
	}
	setTimeout(updateView,200);
}