/* global $ */
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
	$('.history').click(function(){
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

