$(document).ready(function(){
    var rellax = new Rellax ('.rellax')

    var ancho = $(window).width();
    if (ancho <= 1080){
		$('.my-web').css({
			'background-size': 'initial'
		});
	}

	if (ancho <= 1080){
		$('.my-projects').css({
			'background-size': 'initial'
		});
	}

	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion =  (barra * 0.10);
		$('.my-web').css({
			'background-position': '0 -' + posicion + 'px'
		});
		$('.my-projects').css({
			'background-position': '0 -' + posicion + 'px'
		});
	});
});