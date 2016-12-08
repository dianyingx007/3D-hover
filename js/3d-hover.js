/*base on jquery*/
$.fn.hover3d = function(option){
	var defaults = {
		outer:$.noop,
		inner:$(this),
		deg:10
	};
	var params = $.extend({}, defaults, option||{});
	if(params["outer"]!==$.noop){
		params["outer"].on('mousemove',function(e){
			var offset = params["outer"].offset();
			var x = e.pageX - offset.left;
			var y = e.pageY - offset.top;
			var centerX = params["outer"].outerWidth()/2;
			var centerY = params["outer"].outerHeight()/2;
			var percentX = (x-centerX)/centerX;
			var percentY = (y-centerY)/centerY;
			var deg = 10;/*最大旋转角度*/
			params["inner"].css({
				transform:'rotateX('+deg*-percentY+'deg)'+' rotateY('+deg*percentX+'deg)'
			});
		});
	}
};

