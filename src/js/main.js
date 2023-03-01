var $ = require( "jquery" );
//IBG  // Also include in SCSS
import ibg from './libs/ibg.js'
$(document).ready(function(){
	ibg();
})

//MODAL  // Also include in SCSS
import './libs/modal.js';
import {CloseModal, OpenModal} from './libs/modal.js';

$(document).ready(function(){
	$(".def-slider-3").slick({
		arrows:true,
		dots:true,
		infinite: true,
		centerMode: true,
		centerPadding: "0px",
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					centerPadding: "20%",
					slidesToScroll: 1
				}
			},{
				breakpoint: 578,
				settings: {
					slidesToShow: 1,
					centerPadding: "0px",
					slidesToScroll: 1
				}
			}
		]
	});
	$(".gallery-slider").slick({
		rows: 3,
		arrows:true,
		dots:true,
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		centerMode: true,
		centerPadding: "0px",
		responsive: [
			{
				breakpoint: 992,
				settings: {
					rows: 2,
					slidesToShow: 1,
					centerPadding: "20%",
					slidesToScroll: 1
				}
			},{
				breakpoint: 578,
				settings: {
					rows: 1,
					slidesToShow: 1,
					centerPadding: "0px",
					slidesToScroll: 1
				}
			}
		]
	});
});

$(document).on( "click", "[data-mob-menu-trigger]", function(){
	$("[data-mob-menu-trigger]").toggleClass("active");
	$(".mob-menu").toggleClass("active");
});
$(document).on( "click", "[data-dropdown-menu-trigger]", function(){
	let container = $(this).closest('[data-dropdown-menu-container]');
	let dropdowns = container.find('[data-dropdown]');
	let curDropdown = $(this).closest("[data-dropdown-wrapper]").find("[data-dropdown]");
	for(let dropdown of dropdowns){
		if(dropdown != curDropdown[0]){
			$(dropdown).animate({
				height: "0px",
			}, 600);	
		}
	}
	console.log(curDropdown)
	curDropdown.animate({
		height: curDropdown.children().css('height'),
	}, 600);
})