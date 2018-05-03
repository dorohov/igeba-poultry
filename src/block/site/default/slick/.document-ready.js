'use strict';
$(function() { 
	var header = $('[data-slider-slick="slick-header"]');
	var catalog_cold = $('[data-slider-slick="slick-catalog-cold"]');
	var catalog_hot = $('[data-slider-slick="slick-catalog-hot"]');
	var articles = $('[data-slider-slick="slick-articles"]');
	var reviews = $('[data-slider-slick="slick-reviews"]');
	var video = $('[data-slider-slick="slick-video"]');

	var catalog_hot_btn = $('.tabs__link.tabs--catalog-hot');
	var reviews_btn = $('.tabs__link.tabs--reviews');
	var video_btn = $('.tabs__link.tabs--video');
	var prevArrow = '<button type="button" class="slick-prev  is--horizontal"><svg class="icon-svg icon-slick-left" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbn7theme/img/svg/sprite.svg#slick-left"></use></svg></button>';
	var nextArrow = '<button type="button" class="slick-next  is--horizontal"><svg class="icon-svg icon-slick-right" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbn7theme/img/svg/sprite.svg#slick-right"></use></svg></button>';
	
	header.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		infinite: true,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		fade: true,		
		responsive: [
		    {
				breakpoint: 1025,
				settings: {
					dots: false
				}
		    }
		]
	});
	catalog_cold.slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: true,
		infinite: false,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		responsive: [
		    {
				breakpoint: 1199,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
		    },
		    {
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
		    }
		]
	});
	catalog_hot_btn.on('shown.bs.tab', function (e) {
		catalog_hot.slick({
			slidesToShow: 4,
			slidesToScroll: 4,
			arrows: true,
			infinite: false,
			prevArrow: prevArrow,
			nextArrow: nextArrow,
			responsive: [
			    {
					breakpoint: 1199,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
			    },
			    {
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
			    }
			]
		});
	});
	articles.slick({
		dots: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: true,
		//appendArrows: '.content-block__cols.is--slick-btn .work-news',
		infinite: false,
		responsive: [
		    {
				breakpoint: 1199,
				settings: {
					dots: false,
					slidesToShow: 3,
					slidesToScroll: 3,
				}
		    },
		    {
				breakpoint: 768,
				settings: {
					dots: false,
					slidesToShow: 2,
					slidesToScroll: 2,
				}
		    },
		    {
				breakpoint: 480,
				settings: {
					dots: false,
					slidesToShow: 1,
					slidesToScroll: 1,
				}
		    }
		],
		prevArrow: prevArrow,
		nextArrow: nextArrow
		//asNavFor: "#sl-nav",
		//fade: true,
		//customPaging: 20,
		//draggable: false,
		//swipe: false,
		//fade: true,
		//variableWidth: true,
		//centerMode: true,
	});

	reviews_btn.on('shown.bs.tab', function (e) {
		reviews.slick({
			dots: true,
			slidesToShow: 4,
			slidesToScroll: 4,
			arrows: true,
			//appendArrows: '.content-block__cols.is--slick-btn .work-news',
			infinite: false,
			responsive: [
			    {
					breakpoint: 1024,
					settings: {
						dots: false,
						slidesToShow: 3,
						slidesToScroll: 3,
					}
			    },
			    {
					breakpoint: 480,
					settings: {
						dots: false,
						slidesToShow: 1,
						slidesToScroll: 1,
					}
			    }
			],
			prevArrow: prevArrow,
			nextArrow: nextArrow
			//asNavFor: "#sl-nav",
			//fade: true,
			//customPaging: 20,
			//draggable: false,
			//swipe: false,
			//fade: true,
			//variableWidth: true,
			//centerMode: true,
		});
	}); 
	video_btn.on('shown.bs.tab', function (e) {
		video.slick({
			dots: true,
			slidesToShow: 2,
			slidesToScroll: 2,
			arrows: true,
			//appendArrows: '.content-block__cols.is--slick-btn .work-news',
			infinite: false,
			responsive: [
			    {
					breakpoint: 1024,
					settings: {
						dots: false
					}
			    },
			    {
					breakpoint: 480,
					settings: {
						dots: false,
						slidesToShow: 1,
						slidesToScroll: 1,
					}
			    }
			],
			prevArrow: prevArrow,
			nextArrow: nextArrow
			//asNavFor: "#sl-nav",
			//fade: true,
			//customPaging: 20,
			//draggable: false,
			//swipe: false,
			//fade: true,
			//variableWidth: true,
			//centerMode: true,
		});
	});
}); 