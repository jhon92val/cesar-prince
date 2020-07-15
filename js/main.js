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

$(document).ready(function(){
    $('#carousel-blog').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    })

    $('#carousel-about').owlCarousel({
        items:1,
        margin:80,
        width: 100

    });
    
});


