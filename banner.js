$(function(){
	var ind = 0,
		pic_width = 1350,
		word_width = 406,
		timer = null,
		pic_count = 4;
	//自动轮播
	function nextPlay(){
		if(ind > pic_count - 1){
			ind = 0;
			$(".banner").stop().animate({left:0},0);
			$(".hot ul").stop().animate({left:0},0);
			$(".dot ul li").eq(0).addClass("act").siblings().removeClass("act");	
		}
		else{
			$(".banner").stop().animate({left:-pic_width * ind},0);
			$(".hot ul").stop().animate({left:-word_width * ind},0);
			$(".dot ul li").eq(ind).addClass("act").siblings().removeClass("act");
		}
		ind ++;
	}
	timer = setInterval(nextPlay,1800);
	//鼠标经过小圆点时切换对应图片
	$(".dot ul li").click(function(){
		clearInterval(nextPlay);
		ind = $(this).index();
		$(".banner").eq(ind).show().siblings(".banner").hide();
	})
	// 鼠标点击箭头切换图片
	// $(".jt-r").click(function(){
	// 	clearInterval(nextPlay); 
	// 	ind --;
	// 	if(ind >= 0){
	// 		$(".dot ul li").eq(ind).addClass("act").siblings().removeClass("act");
	// 		$(".banner").eq(ind).show().siblings(".banner").hide();
	// 	}
	// 	else{
	// 		ind = 4;
	// 		$(".dot ul li").eq(ind).addClass("act").siblings().removeClass("act");
	// 		$(".banner").eq(ind).show().siblings(".banner").hide();
	// 	}
		// if(ind > pic_count - 1){
		// 	ind = -1;
		// 	$(".banner").eq(0).show().siblings(".banner").hide();
		// 	$(".hot ul").eq(0).show().siblings(".banner").hide();
		// 	$(".dot ul li").eq(0).addClass("act").siblings().removeClass("act");
		// }
		// else{
		// 	$(".banner").eq(ind).show().siblings(".banner").hide();
		// 	$(".hot ul").eq(ind).show().siblings(".banner").hide();
		// 	$(".dot ul li").eq(ind).addClass("act").siblings().removeClass("act");
		// }
		// ind ++;

	//}
	// // $(".jt-l").click(function(){
	// // 	clearInterval(nextPlay);
	// // 	
	// // })
})
