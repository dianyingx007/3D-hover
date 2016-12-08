$('#test').on('mousemove',function(e){
	var offset = $('#test').offset();
	var x = e.pageX - offset.left;
	var y = e.pageY - offset.top;
	var centerX = $('#test').outerWidth()/2;
	var centerY = $('#test').outerHeight()/2;
	var percentX = (x-centerX)/centerX;
	var percentY = (y-centerY)/centerY;
	var deg = 10;/*最大旋转角度*/
	$('#banner').css({
		transform:'rotateX('+deg*-percentY+'deg)'+' rotateY('+deg*percentX+'deg)'
	});
});
