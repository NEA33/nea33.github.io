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

function open_popup() {
	document.getElementById("block-popup").setAttribute("style", "display: block");
	document.getElementById("overlay").setAttribute("style", "display: block");
}
function close_popup() {
	document.getElementById("block-popup").setAttribute("style", "display: none");
	document.getElementById("overlay").setAttribute("style", "display: none");
}

function open_banner_contacts() {
	document.getElementById("banner-contacts").setAttribute("style", "display: flex");
	document.getElementById("overlay").setAttribute("style", "display: block");
}
function close_banner_contacts() {
	document.getElementById("banner-contacts").setAttribute("style", "display: none");
	document.getElementById("overlay").setAttribute("style", "display: none");
}

function open_form_record() {
	document.getElementById("form-record").setAttribute("style", "display: block");
	document.getElementById("overlay").setAttribute("style", "display: block");
}
function close_form_record() {
	document.getElementById("form-record").setAttribute("style", "display: none");
	document.getElementById("overlay").setAttribute("style", "display: none");
}