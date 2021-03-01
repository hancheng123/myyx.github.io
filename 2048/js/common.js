//移动端尺寸
// var screenWidth=window.screen.availWidth;//屏幕宽度
var documentWidth=document.documentElement.clientWidth; //页面宽度
var containerWidth=documentWidth*0.92; //容器的宽度
var cellWidth=documentWidth*0.18; //单元格宽度
var cellSpace=documentWidth*0.04;  //间隔宽度  


//获取距离上边的位置
function getPosTop(i){
	return cellSpace+(cellWidth+cellSpace)*i;
}
//获取距离左边的位置
function getPosLeft(j){
	return cellSpace+(cellWidth+cellSpace)*j;
}
//获取数字背景颜色
function getNumberBackgroundColor(num){
	switch(num){
		case 2:return "#eee4da";break;
		case 4:return "#ede0c8";break;
		case 8:return "#f2b179";break;
		case 16:return "#f59563";break;
		case 32:return "#f67c5f";break;
		case 64:return "#f65e3b";break;
		case 128:return "#edcf72";break;
		case 256:return "#edcc61";break;
		case 512:return "#9c0";break;
		case 1024:return "#33b5e5";break;
		case 2048:return "#09c";break;
		case 4096:return "#a6c";break;
		case 8192:return "#93c";break;
	}
}
function getNumberColor(num){
	if(num<=4){
		return "#776e65";
	}else{
		return "#fff";
	}
}

function noSpace(nums){
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			if(nums[i][j]==0){
				return false;
			}
		}
	}
	return true;
}

function canMoveLeft(nums){//判断是否能左移
	for(var i=0;i<4;i++){
		for(var j=1;j<4;j++){
			if(nums[i][j]!=0){
				if(nums[i][j-1]==0||nums[i][j-1]==nums[i][j]){
					return true;
				}
				
			}
		}
	}
	return false;
}

function canMoveRight(nums){
	for(var i=0;i<4;i++){
		for(var j=0;j<3;j++){
			if(nums[i][j]!=0){
				if(nums[i][j+1]==0||nums[i][j+1]==nums[i][j]){
					return true;
				}
			}
		}
	}
	return false;
}
function canMoveUp(nums){
	for(var i=1;i<4;i++){
		for(var j=0;j<4;j++){
			if(nums[i][j]!=0){
				if(nums[i-1][j]==0||nums[i-1][j]==nums[i][j])
				return true;
			}
		}
	}
	return false;
}
function canMoveDown(nums){
	for(var i=0;i<3;i++){
		for(var j=0;j<4;j++){
			if(nums[i][j]!=0){
				if(nums[i+1][j]==0||nums[i+1][j]==nums[i][j]){
					return true;
				}
			}
		}
	}
	return false;
}
//判断水平方向上是否没有障碍物
function noBlockHorizontal(row,col1,col2,nums){//col1-col2间是否有障碍物
	for(var k=col1+1;k<col2;k++){
		if(nums[row][k]!=0){
			return false;
		}
	}
	return true;
}
//判断垂直方向上是否没有障碍物
function noBlockVertical(list,row1,row2,nums){
	for(var i=row1+1;i<row2;i++){
		if(nums[i][list]!=0){
		return false;
	   }
    }
	return true;
}
//更新分数
function updateScore(score){
	$("#score").text(score);
}
function noMove(nums){
	if(canMoveDown(nums)||canMoveUp(nums)||canMoveRight(nums)||canMoveLeft(nums)){
		return false;
	}
	return true;
}

//判断游戏是否结束，俩个条件：1.没有空单元格，2.不能移动
function isGameOver(){
if(noSpace(nums)&&noMove(nums)){
	alert("Game Over");
}
}