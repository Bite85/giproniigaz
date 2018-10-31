$(document).ready(function(){
	var o = $("#menu-id"),
        t = $("body");
    o.on("click", function() {
        t.toggleClass("open-menu"), $(".page").toggleClass("open-menu__coursor")
    });
    $('.menu-big').on('click', function(){
    	$('.menu-list').toggleClass('menu-list-open');
    	$('.menu-fixed').toggleClass('menu-fixed-shadowBlock');
    });
    $('.page').on('click', function(){
    	$('.menu-list').removeClass('menu-list-open');
    	$('.menu-fixed').removeClass('menu-fixed-shadowBlock');
    	t.removeClass("open-menu");$(".page").removeClass("open-menu__coursor");
    });
    $('.menu-search').on('click', function(){
    	$('.menu-center').toggleClass('menu-center-closed');
    	$('.menu-big').toggleClass('menu-big-none');
    	$(".menu-search-input").toggleClass('menu-input-open');
    	$('.menu-list').removeClass('menu-list-open');
    	$('.menu-fixed').removeClass('menu-fixed-shadowBlock');
    	t.removeClass("open-menu");$(".page").removeClass("open-menu__coursor");
    });
    $('.menu-list').perfectScrollbar();

     $('.events-section__carousel').owlCarousel({
         loop: true,
         margin: 30,
         dots: false,
         slideBy: 1,
         items: 1,
         nav: true,
         loop: true,
         autoplay: true,
         autoplayTimeout: 5000,
         autoplayHoverPause: false,
         navText: ["<img src='img/events-arrow-left.png'>","<img src='img/events-arrow-right.png'>"]
     });

     $('.branch-carousel').owlCarousel({
         loop: true,
         margin: 30,
         dots: false,
         slideBy: 1,
         items: 1,
         nav: true,
         loop: true,
         autoplay: false,
         autoplayTimeout: 5000,
         autoplayHoverPause: false,
         navText: ["<img src='img/slider-arrow-left.png'>","<img src='img/slider-arrow-right.png'>"]
     });



      $(".first-slider").owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
         autoplay: true,
         autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $(".preview-slider").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
         // autoplay: true,
         // autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    if($('#map').length > 0){
      var map;
      ymaps.ready(init);
      function init(){
        map = new ymaps.Map('map', {
          center: [55.84786656888543,37.5597029999999],
          zoom: 4,
          controls: []
        });
        
        map.behaviors.disable('scrollZoom'); 
        var squareLayout = ymaps.templateLayoutFactory.createClass('<div class="map-target"></div>', {        
          build: function () {
            squareLayout.superclass.build.call(this);
            this._events = ymaps.domEvent.manager.group(this.getElement());
            this._events.add('contextmenu', function () {  
            });
          },     
          clear: function () {
            this._events.removeAll();
            squareLayout.superclass.clear.call(this);
          }
        });
        var squarePlacemark = new ymaps.Placemark(
          [55.767483568977006,37.87664649999999], {
            hintContent: 'г. Москва, Нижнелихоборский 3-й пр.,1 А, строение 6'
          }, {
            iconLayout: squareLayout,
            iconPane: 'overlaps',
            iconSize: [50, 50],
            iconOffset: [-15, -55]
          }
        );
        map.geoObjects.add(squarePlacemark);
      }
    }

})
