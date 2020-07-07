$(document).ready(function(){
 
    var ancho = $(window).width();
 
    // Efecto parallax en imagen de inicio;
        if (ancho <= 1350){
            $('header').css({
                'background-size': 'cover'
            });
        }

	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion =  (barra * 0.50);
		
		$('header').css({
			'background-position': '0 -' + posicion + 'px'
        });
        
	});
 
});

