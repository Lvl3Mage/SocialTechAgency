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

//visual imparement

$(document).on( "click", "[data-font-option]", function(){
	SetFontOption(this);
});
function SetFontOption(fontOption){
	$("[data-font-option]").removeClass("active");
	$('html').css("font-size",$(fontOption).data('font-option'));
	$(fontOption).addClass("active");
	SetVisionCookie("fontOption", $(fontOption).index());
}
$(document).on( "click", "[data-color-picker]", function(){
	SetColorPicker(this);
})
function SetColorPicker(colorPickerOption){
	$("[data-color-picker]").removeClass("active");
	let pickers = $("[data-color-picker]");
	for (var i = 0; i < pickers.length; i++) {
		$('html').removeClass($(pickers[i]).data("color-class"));
	}
	$('html').addClass($(colorPickerOption).data("color-class"));
	$(colorPickerOption).addClass("active");
	SetVisionCookie("colorOption", $(colorPickerOption).index());
}

$(document).on( "click", "[data-image-picker]", function(){
	SetImagePicker(this);
})
function SetImagePicker(imagePickerOption){
	$("[data-image-picker]").removeClass("active");
	let pickers = $("[data-image-picker]");
	for (var i = 0; i < pickers.length; i++) {
		$('html').removeClass($(pickers[i]).data("image-class"));
	}
	$('html').addClass($(imagePickerOption).data("image-class"));
	$(imagePickerOption).addClass("active");

	SetVisionCookie("imageOption", $(imagePickerOption).index());
}
$(document).ready(function() {
    // $( "img" ).each(function( index ) {
    // 	let alt = $(this).attr("alt");
    // 	this.insertAdjacentHTML('afterend', '<p class="image-alt">' + alt + '</p>');  // modify p with someother tag if needed.
    // 	$(this).addClass("image-real");
    // });

    let fontOption = GetCookieValueByRegEx('fontOption');
    if(!fontOption){
    	fontOption = 0;
    }
    SetFontOption($("[data-font-option]")[fontOption]);

    let colorOption = GetCookieValueByRegEx('colorOption');
    if(!colorOption){
    	colorOption = 0;
    }
    SetColorPicker($("[data-color-picker]")[colorOption]);

    let imageOption = GetCookieValueByRegEx('imageOption');
    if(!imageOption){
    	imageOption = 0;
    }
    SetImagePicker($("[data-image-picker]")[imageOption]);
});

function SetVisionCookie(name, value){
	let cookieTime = new Date();
	let time = cookieTime.getTime() + 3600*1000*24*4;
	cookieTime.setTime(time);
	document.cookie = name + "=" + value + ";expires=" + cookieTime+ ";path=/";
}

function GetCookieValueByRegEx(a, b) {
	b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
	return b ? b.pop() : '';
}

// $(':root').css('--themeColor', (color = ["red", "green", "lime", "purple", "blue"])[Math.floor(Math.random() * color.length)]);