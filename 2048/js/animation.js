function spaceAnimate(i,j,num){
	var numberCell=$("#number-cell-"+i+"-"+j);
	// numberCell.css("top",getPosTop(i));//直接改变
	// numberCell.css("left",getPosLeft(j));
	numberCell.css("background-color",getNumberBackgroundColor(num));
	numberCell.css("color",getNumberColor(num));
	numberCell.text(num);
	numberCell.animate({
		width:cellWidth,
		height:cellWidth,
		top:getPosTop(i), //动画改变
		left:getPosLeft(j)
	},500);
}

function showMoveAnimation(fromi,fromj,toi,tok){
	var numberCell=$("#number-cell-"+fromi+"-"+fromj);
	numberCell.animate({
		top:getPosTop(toi),
		left:getPosLeft(tok)
	},200);
}