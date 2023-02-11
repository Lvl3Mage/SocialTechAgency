var $ = require( "jquery" );
//IBG  // Also include in SCSS
import ibg from './libs/ibg.js'
$(document).ready(function(){
	ibg();
})

//MODAL  // Also include in SCSS
// import './libs/modal.js';
// import {CloseModal, OpenModal} from './libs/modal.js';

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
});