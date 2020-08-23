$(function(){
	$("a[href^='#']").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});
});


function hide_widget() {
	document.getElementById("hide-widget").setAttribute("style", "display: none");
	document.getElementById("show-widget").setAttribute("style", "display: block");
	document.getElementById("widget-wa").setAttribute("style", "width: 70px");
	document.getElementById("widget-text").setAttribute("style", "display: none");


}

function show_widget() {
	document.getElementById("show-widget").setAttribute("style", "display: none");
	document.getElementById("hide-widget").setAttribute("style", "display: block");
	document.getElementById("widget-wa").setAttribute("style", "width: 200px");
	document.getElementById("widget-text").setAttribute("style", "display: flex");

}