$(document).ready(main);
var contador=1;
var cont=0;
function main(){
	$('.menu_bar').click(function(){
		if(contador==1){
			$('nav').animate({
				left:'0'
			});
			contador=0;
		}else{
			contador=1;
			$('nav').animate({
				left:'-100%'
			});
		}
	});
	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});
	//hacer que cuando el menu este mostrado, al dar click
	//o pasar el touch fuera el menu se oculte
	$('section').click(function(){
		if(contador==0){
			$('nav').animate({
				left:'-100%'
			})
			contador=1;
		}
	});
	$('footer').click(function(){
		if(contador==0){
			$('nav').animate({
				left:'-100%'
			})
			contador=1;
		}
	});
}
$(document).ready(function(e) {
    var mozillaPresente = false,
        mozilla = (function detectarNavegador(navegador) {
        if(navegador.indexOf("Firefox") != -1 ) {
            mozillaPresente = true;
        }   
    })(navigator.userAgent);
    function darEfecto(efecto) {
        el = $('.cajainterna');
        el.addClass(efecto);
        el.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function (e) {
            el.removeClass(efecto);
        });
    }
    function mostrar(e) {
        $(".cajaexterna").show();
        darEfecto("bounceIn");      
    }
    function ocultar() {
        $(".cajaexterna").fadeOut("fast", function() {
            if(mozillaPresente) {
            setTimeout(function() {
                $(".cajainterna").removeClass("bounceIn");
            }, 5);
        }
        });         
    }
    $("a.mostrarmodal").click(mostrar);
    $("a.cerrarmodal").click(ocultar);
}); 