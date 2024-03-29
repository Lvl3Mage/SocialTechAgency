/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_fontawesome_free_js_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/fontawesome */ "./node_modules/@fortawesome/fontawesome-free/js/fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_free_js_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_fontawesome_free_js_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/solid */ "./node_modules/@fortawesome/fontawesome-free/js/solid.js");
/* harmony import */ var _fortawesome_fontawesome_free_js_solid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_solid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_fontawesome_free_js_regular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/regular */ "./node_modules/@fortawesome/fontawesome-free/js/regular.js");
/* harmony import */ var _fortawesome_fontawesome_free_js_regular__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_regular__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_fontawesome_free_js_brands__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/brands */ "./node_modules/@fortawesome/fontawesome-free/js/brands.js");
/* harmony import */ var _fortawesome_fontawesome_free_js_brands__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_brands__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/main.js */ "./src/js/main.js");
/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/scss/main.scss */ "./src/assets/scss/main.scss");
 // JS

 //FA





 // SCSS

 // import 'bootstrap';

/***/ }),

/***/ "./src/js/libs/ibg.js":
/*!****************************!*\
  !*** ./src/js/libs/ibg.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ibg)
/* harmony export */ });
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

function ibg() {
  $.each($('.ibg'), function (index, val) {
    if ($(this).find('img').length > 0) {
      $(this).find('img').first().css("width", 0);
      $(this).find('img').first().css("height", 0);
      $(this).find('img').first().css("display", "none");
      $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
    }
  });
}

/***/ }),

/***/ "./src/js/libs/modal.js":
/*!******************************!*\
  !*** ./src/js/libs/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpenModal": () => (/* binding */ OpenModal),
/* harmony export */   "CloseModal": () => (/* binding */ CloseModal)
/* harmony export */ });
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

$(document).on('click', '[data-modal-trigger]', function (event) {
  $("body").css("overflow", "hidden");
  var modalID = $(this).data('modal-id');
  var modal = $("#" + modalID + ".modal");
  modal.addClass("modal-active");
  var modalTitle = $(this).data('modal-title');

  if (typeof modalTitle !== 'undefined') {
    modal.find(".modal-title").html(modalTitle);
  } // let modalFieldPresets= $(this).data('field-presets');
  // if(modalFieldPresets){
  // 	for (let i = 0; i < modalFieldPresets.length; i++) {
  // 		modal.find(modalFieldPresets[i].childSelector).val(modalFieldPresets[i].value);
  // 	}
  // }

});
$(document).on('mousedown touchstart', '.modal-bg, .modal-cross', function (event) {
  $("body").css("overflow", "visible");
  var modal = $(this).closest(".modal");
  let video = modal.find('iframe').first();

  if (video.length) {
    video[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
  }

  modal.removeClass("modal-active");
});
$(document).on('mousedown touchstart', '.modal-window', function (event) {
  event.stopPropagation();
});
function OpenModal(modalSelector) {
  $("body").css("overflow", "hidden");
  $(modalSelector).addClass("modal-active");
}
function CloseModal(modalSelector) {
  // disables modal and frees body if no active modals remain
  var modal = $(modalSelector).closest(".modal");
  modal.removeClass("modal-active");

  if ($('.modal-active').length == 0) {
    $("body").css("overflow", "visible");
  }
}
/*
HTML

<div class="def-modal modal modal-bg" id="contact-modal">
	<div class="def-modal__outer-container container">
		<div class="def-modal__inner-container def-modal__inner-container--75">
			<div class="def-modal__wrapper modal-window">
				<div class="def-modal__top m--t-15">
					<div class="def-modal__title text--400 text--blue text--L m--l-25 sm-m--l-0">
						<span class="modal-title">Modal Title</span>
					</div>
					<div class="def-modal__cross modal-cross">
						<div class="def-modal__cross-line def-modal__cross-line--1"></div>
						<div class="def-modal__cross-line def-modal__cross-line--2"></div>
					</div>
				</div>
				<div class="def-modal__content-wrapper def-modal-class-name modal-content-wrapper">
					Modal Content
				</div>
			</div>
		</div>  
	</div>
</div>
*/

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_ibg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/ibg.js */ "./src/js/libs/ibg.js");
/* harmony import */ var _libs_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/modal.js */ "./src/js/libs/modal.js");
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"); //IBG  // Also include in SCSS



$(document).ready(function () {
  (0,_libs_ibg_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
}); //MODAL  // Also include in SCSS



$(document).ready(function () {
  $(".def-slider-3").slick({
    arrows: true,
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        centerPadding: "20%",
        slidesToScroll: 1
      }
    }, {
      breakpoint: 578,
      settings: {
        slidesToShow: 1,
        centerPadding: "0px",
        slidesToScroll: 1
      }
    }]
  });
  $(".gallery-slider").slick({
    rows: 3,
    arrows: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    responsive: [{
      breakpoint: 992,
      settings: {
        rows: 2,
        slidesToShow: 1,
        centerPadding: "20%",
        slidesToScroll: 1
      }
    }, {
      breakpoint: 578,
      settings: {
        rows: 1,
        slidesToShow: 1,
        centerPadding: "0px",
        slidesToScroll: 1
      }
    }]
  });
  $('.partner_image').prop('src', $('.partner_item').first().data('src'));
  $('.partner_link').prop('href', $('.partner_item').first().data('link'));
  $('.partner_link').text($('.partner_item').first().data('link'));
});
$('.partner_item').click(function (e) {
  $('.partner_image').prop('src', $(this).data('src'));
  $('.partner_link').prop('href', $(this).data('link'));
  $('.partner_link').text($(this).data('link'));
});
$(document).on("click", "[data-mob-menu-trigger]", function () {
  $("[data-mob-menu-trigger]").toggleClass("active");
  $(".mob-menu").toggleClass("active");
});
$(document).on("click", "[data-dropdown-menu-trigger]", function () {
  let container = $(this).closest('[data-dropdown-menu-container]');
  let dropdowns = container.find('[data-dropdown]');
  let curDropdown = $(this).closest("[data-dropdown-wrapper]").find("[data-dropdown]");

  for (let dropdown of dropdowns) {
    if (dropdown != curDropdown[0]) {
      $(dropdown).animate({
        height: "0px"
      }, 600);
    }
  }

  console.log(curDropdown);
  curDropdown.animate({
    height: curDropdown.children().css('height')
  }, 600);
}); //visual imparement

$(document).on("click", "[data-font-option]", function () {
  SetFontOption(this);
});

function SetFontOption(fontOption) {
  $("[data-font-option]").removeClass("active");
  $('html').css("font-size", $(fontOption).data('font-option'));
  $(fontOption).addClass("active");
  SetVisionCookie("fontOption", $(fontOption).index());
}

$(document).on("click", "[data-color-picker]", function () {
  SetColorPicker(this);
});

function SetColorPicker(colorPickerOption) {
  $("[data-color-picker]").removeClass("active");
  let pickers = $("[data-color-picker]");

  for (var i = 0; i < pickers.length; i++) {
    $('html').removeClass($(pickers[i]).data("color-class"));
  }

  $('html').addClass($(colorPickerOption).data("color-class"));
  $(colorPickerOption).addClass("active");
  SetVisionCookie("colorOption", $(colorPickerOption).index());
}

$(document).on("click", "[data-image-picker]", function () {
  SetImagePicker(this);
});

function SetImagePicker(imagePickerOption) {
  $("[data-image-picker]").removeClass("active");
  let pickers = $("[data-image-picker]");

  for (var i = 0; i < pickers.length; i++) {
    $('html').removeClass($(pickers[i]).data("image-class"));
  }

  $('html').addClass($(imagePickerOption).data("image-class"));
  $(imagePickerOption).addClass("active");
  SetVisionCookie("imageOption", $(imagePickerOption).index());
}

$(document).ready(function () {
  // $( "img" ).each(function( index ) {
  // 	let alt = $(this).attr("alt");
  // 	this.insertAdjacentHTML('afterend', '<p class="image-alt">' + alt + '</p>');  // modify p with someother tag if needed.
  // 	$(this).addClass("image-real");
  // });
  let fontOption = GetCookieValueByRegEx('fontOption');

  if (!fontOption) {
    fontOption = 0;
  }

  SetFontOption($("[data-font-option]")[fontOption]);
  let colorOption = GetCookieValueByRegEx('colorOption');

  if (!colorOption) {
    colorOption = 0;
  }

  SetColorPicker($("[data-color-picker]")[colorOption]);
  let imageOption = GetCookieValueByRegEx('imageOption');

  if (!imageOption) {
    imageOption = 0;
  }

  SetImagePicker($("[data-image-picker]")[imageOption]);
});

function SetVisionCookie(name, value) {
  let cookieTime = new Date();
  let time = cookieTime.getTime() + 3600 * 1000 * 24 * 4;
  cookieTime.setTime(time);
  document.cookie = name + "=" + value + ";expires=" + cookieTime + ";path=/";
}

function GetCookieValueByRegEx(a, b) {
  b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
  return b ? b.pop() : '';
} // $(':root').css('--themeColor', (color = ["red", "green", "lime", "purple", "blue"])[Math.floor(Math.random() * color.length)]);


$('.searchbar__btn').click(function (e) {
  let input = $(this).siblings('input').val();

  if (!input) {
    e.preventDefault();
  }
});

/***/ }),

/***/ "./src/assets/scss/main.scss":
/*!***********************************!*\
  !*** ./src/assets/scss/main.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebpack_template"] = self["webpackChunkwebpack_template"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_fortawesome_fontawesome-free_js_brands_js-node_modules_fortawesome_fonta-a595c5"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map