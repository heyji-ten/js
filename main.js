jQuery(function($) {
	function isMobile() {//모바일체크
		return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	}
	$(window).on("scroll", 
	function(){
		var scroll_top=$(this).scrollTop();// Y축 스크롤값
		var scroll_left=$(this).scrollLeft();// X축 스크롤값(필요없음)
			
		console.log("top : " + scroll_top);
		//console.log("left : " + scroll_left);
		
		if(scroll_top > 0 ){
			// 현재스크롤이 최상위에 없을때( 헤더를 fixed 해서 따라오게 만듬 )
			$("#header").removeClass("stick-off");
			$("#header").addClass("stick-on");
			
		}else{
			// 현재 스크롤이 최상위에 있을때
			$("#header").removeClass("stick-on");
			$("#header").addClass("stick-off");
		}
	});

});


var movetab = function(str){
	var offset = 100;//헤더 높이
	var scroll_delay = 1000;//스크롤 내려가는 시간
	var stick = false;
	var scrollPosition = $("#"+str).offset().top;
	
	console.log(offset);
	$('html, body').animate({
		scrollTop: scrollPosition - offset
	}, scroll_delay);
}

$( document ).ready( function() { 
    $( window ).scroll( function() { 
        if ( $( this ).scrollTop() > 200 ) { 
            $( '.arrow-up' ).fadeIn(); 
        } else { 
            $( '.arrow-up' ).fadeOut(); 
        } 
    } ); 
    $( '.arrow-up' ).click( function() { 
        $( 'html, body' ).animate( { scrollTop : 0 }, 1000 ); 
        return false; 
    } ); 
} );

$(".fSite").click(function () { 
    $(this).toggleClass("on");
});
    