$(document).ready(function() {
	$('#accordion').on('shown.bs.collapse', function() {
		$('.panel-default').removeClass('active')
		$('.panel-collapse.in').closest('.panel-default').addClass('active')
		
	});
	$('#accordion').on('hidden.bs.collapse', function() {
		$('.panel-default').removeClass('active')

	});
	


	

	// if(this).hasClass('active') {
 //    e.stopImmediatePropagation();
 //    event.preventDefault();     
	// };



	$(".slide-main-inner").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		mobileFirst: true,
		prevArrow: $(".pp2"),
		nextArrow: $(".nn2"),
	});
	$(".slide-featured-inner").slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		mobileFirst: true,
		prevArrow: $(".pp3"),
		nextArrow: $(".nn3"),
	});
	$(".main_page-slider-footer-inner").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		mobileFirst: true,
		prevArrow: $(".pp4"),
		nextArrow: $(".nn4"),
	});
	$(".onedoctor-slider-inner, .onedoctor-slider-inner2").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		mobileFirst: true,
		prevArrow: $(".pp5"),
		nextArrow: $(".nn5"),
	});
	$(".scroll").mCustomScrollbar({
		theme: "my-theme",
		setHeight: false,
		scrollInertia: 100,
		scrollEasing: "linear",
		moveDragger: true
	});

	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});
	$('body').on('click', '.burger', function(e){
		e.preventDefault();
		if($('.js-sidebar').length > 0){
			$(this).find('#burger').toggleClass('open');
			$('.js-sidebar').toggleClass('open');
			$('.js-right-block').toggleClass('open');
		}
		if ($('.onedoctor-slider-inner').length  > 0) {
			setTimeout(function(){
				$('.onedoctor-slider-inner').slick('reinit');
				if($('.slider-item .js-first').hasClass('col-lg-4')){
					$('.slider-item .js-first').addClass('col-lg-5')
					$('.slider-item .js-first').removeClass('col-lg-4')
				}else if (!$('.slider-item .js-first').hasClass('col-lg-4')){
					$('.slider-item .js-first').addClass('col-lg-4')
					$('.slider-item .js-first').removeClass('col-lg-5')
				}
				if($('.slider-item .js-second').hasClass('col-lg-8')){
					$('.slider-item .js-second').addClass('col-lg-7')
					$('.slider-item .js-second').removeClass('col-lg-8')
				}else if (!$('.slider-item .js-second').hasClass('col-lg-8')){
					$('.slider-item .js-second').addClass('col-lg-8')
					$('.slider-item .js-second').removeClass('col-lg-7')
				}
			}, 1000)

		}
	});
	if($(".fancybox").length > 0) {
		$(".fancybox")
		.attr('rel', 'gallery')
		.fancybox({
			padding : 0,
			helpers : {
				overlay : {
					css : {
						'background' : 'none'
					}
				}
			}
		});
	}
	if($('#map').length){
		ymaps.ready(function () {
			var myMap = new ymaps.Map('map', {
				center: [55.9031,37.7250],
				zoom: 15
			}, {
				searchControlProvider: 'yandex#search'
			}),
			myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
				hintContent: 'Собственный значок метки',
				balloonContent: 'Это красивая метка'
			}, {
		            iconLayout: 'default#image',
		            iconImageHref: 'images/myIcon.gif',
		            iconImageSize: [30, 42],
		            iconImageOffset: [-5, -38]
		        });
			myMap.geoObjects.add(myPlacemark);
			myMap.behaviors.disable('scrollZoom'); 
		});
	}

});
(function($) {
	$(window).on("load", function() {
		$(".scroll").mCustomScrollbar();
	});
})(jQuery);

$(window).scroll(function() {
	if($(this).scrollTop() != 0) {
		$('#toTop').fadeIn();
	} else {
		$('#toTop').fadeOut();
	}
});



