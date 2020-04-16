// JavaScript Document
window.setTimeout(function(){
	"use strict";
	var contenedor = document.getElementById('contenedorcarga');
	contenedor.style.visibility = 'hidden';
	contenedor.style.opacity = '0';
},2000);
(function(){
	$(document).ready(function(){
		$(".btn-menu").click(function(e){
			e.preventDefault();
			var filtro = $(this).attr("data-filter");

			if (filtro == "todos") {
				$(".box-img").show(500);
			} else {
				$(".box-img").not("."+filtro).hide(500);
				$(".box-img").filter("."+filtro).show(500);
			}
		});

		$("ul li").click(function(){
			$(this).addClass("active").siblings().removeClass("active");
		});
	});
}())
var modal = document.getElementById('mimodal');
	var flex = document.getElementById('flex');
	var abrir = document.getElementById('abrir');
	var cerrar = document.getElementById('close');
	abrir.addEventListener('click', function(){
		modal.style.display = 'block';
	});
	cerrar.addEventListener('click', function(){
		modal.style.display = 'none';
	});
	window.addEventListener('click', function(e){
		if(e.target === flex){
			modal.style.display = 'none';
		}
	});

/*	(function(){
		$(document).ready(function(){
			$(".btn-menu").click(function(){

				var filtro = $(this).attr("data-filter");

				if (filtro == "card-fotografia") {
					$(".box-img").show(500);
				} else {
					$(".box-img").not("."+filtro).hide(500);
					$(".box-img").filter("."+filtro).show(500);
				}
			});
		});
	}())*/
	(function(){
		$(document).ready(function(){
			alert('Su computador vale para una monda')
		});
	}())