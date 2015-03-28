$(document).ready(function() {


	$('.popup').magnificPopup({type:'image'});
	$('.popup_content').magnificPopup({type: "inline", midClick: true});
	$('#portfolio_grid').mixItUp();
	$('.s_portfolio li').click(function(){
		$('.s_portfolio li').removeClass('active');
		$(this).addClass('active');
	})
	$('.top_text h1').animated("fadeInDown", "fadeOutUp");
	$('.top_text p').animated("fadeInUp", "none");
	$('.section_header').animated("fadeInUp", "fadeOutDown");
	$('.animation-1').animated("flipInY","fadeOutDown");
	$('.animation-2').animated("fadeInLeft","fadeOutDown");
	$('.animation-3').animated("fadeInRight","fadeOutDown");
	$('.left .resume_item').animated("fadeInLeft", "fadeOutDown")
	$('.right .resume_item').animated("fadeInRight", "fadeOutDown")

	function heightDetect(){
		$(".main_head").css("height",$(window).height());	
	}
	heightDetect();
	$(window).resize(function(){
		heightDetect();
	});
	$(".toggle_mnu, .menu_item").click(function() {
		$(".sandwich").toggleClass("active");
	});
	$(".toggle_mnu").click(function(){
		if ($('.top_mnu').is(":visible")){
			$('.top_text').removeClass("h_opacity");
			$('.top_mnu').fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated")
		}
		else {
			$('.top_text').addClass("h_opacity");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li  a").addClass("fadeInUp animated");
		}
	});
	$(".top_mnu li a").click(function(){
		$('.top_mnu').fadeOut(600);
		$(".sandwich").toggleClass("active");
	});
	$('.portfolio_item').each(function(i){
		$(this).find("a").attr("href","#work_"+i);
		$(this).find(".port_descr").attr("id","work_"+i);
	});

});
$(window).load(function() { 
	$(".loaderInner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
	
});