$(document).ready(function(){function e(){n=new ymaps.Map("map",{center:[55.84786656888543,37.5597029999999],zoom:4,controls:[]}),n.behaviors.disable("scrollZoom");var e=ymaps.templateLayoutFactory.createClass('<div class="map-target"></div>',{build:function(){e.superclass.build.call(this),this._events=ymaps.domEvent.manager.group(this.getElement()),this._events.add("contextmenu",function(){})},clear:function(){this._events.removeAll(),e.superclass.clear.call(this)}}),o=new ymaps.Placemark([55.767483568977006,37.87664649999999],{hintContent:"г. Москва, Нижнелихоборский 3-й пр.,1 А, строение 6"},{iconLayout:e,iconPane:"overlaps",iconSize:[50,50],iconOffset:[-15,-55]});n.geoObjects.add(o)}var o=$("#menu-id"),s=$("body");if(o.on("click",function(){s.toggleClass("open-menu"),$(".page").toggleClass("open-menu__coursor")}),$(".menu-big").on("click",function(){$(".menu-list").toggleClass("menu-list-open"),$(".menu-fixed").toggleClass("menu-fixed-shadowBlock")}),$(".page").on("click",function(){$(".menu-list").removeClass("menu-list-open"),$(".menu-fixed").removeClass("menu-fixed-shadowBlock"),s.removeClass("open-menu"),$(".page").removeClass("open-menu__coursor")}),$(".menu-search").on("click",function(){$(".menu-center").toggleClass("menu-center-closed"),$(".menu-big").toggleClass("menu-big-none"),$(".menu-search-input").toggleClass("menu-input-open"),$(".menu-list").removeClass("menu-list-open"),$(".menu-fixed").removeClass("menu-fixed-shadowBlock"),s.removeClass("open-menu"),$(".page").removeClass("open-menu__coursor")}),$(".menu-list").perfectScrollbar(),$(".events-section__carousel").owlCarousel({loop:!0,margin:30,dots:!1,slideBy:1,items:1,nav:!0,loop:!0,autoplay:!0,autoplayTimeout:5e3,autoplayHoverPause:!1,navText:["<img src='img/events-arrow-left.png'>","<img src='img/events-arrow-right.png'>"]}),$(".branch-carousel").owlCarousel({loop:!0,margin:30,dots:!1,slideBy:1,items:1,nav:!0,loop:!0,autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,navText:["<img src='img/slider-arrow-left.png'>","<img src='img/slider-arrow-right.png'>"]}),$(".first-slider").owlCarousel({loop:!0,margin:0,nav:!1,dots:!0,autoplay:!0,autoplayTimeout:4e3,responsive:{0:{items:1},600:{items:1},1e3:{items:1}}}),$(".preview-slider").owlCarousel({loop:!0,margin:0,nav:!0,dots:!1,responsive:{0:{items:1},600:{items:1},1e3:{items:1}}}),$("#map").length>0){var n;ymaps.ready(e)}});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJpbml0IiwibWFwIiwieW1hcHMiLCJNYXAiLCJjZW50ZXIiLCJ6b29tIiwiY29udHJvbHMiLCJiZWhhdmlvcnMiLCJkaXNhYmxlIiwic3F1YXJlTGF5b3V0IiwidGVtcGxhdGVMYXlvdXRGYWN0b3J5IiwiY3JlYXRlQ2xhc3MiLCJidWlsZCIsInN1cGVyY2xhc3MiLCJjYWxsIiwidGhpcyIsIl9ldmVudHMiLCJkb21FdmVudCIsIm1hbmFnZXIiLCJncm91cCIsImdldEVsZW1lbnQiLCJhZGQiLCJjbGVhciIsInJlbW92ZUFsbCIsInNxdWFyZVBsYWNlbWFyayIsIlBsYWNlbWFyayIsImhpbnRDb250ZW50IiwiaWNvbkxheW91dCIsImljb25QYW5lIiwiaWNvblNpemUiLCJpY29uT2Zmc2V0IiwiZ2VvT2JqZWN0cyIsIm8iLCJ0Iiwib24iLCJ0b2dnbGVDbGFzcyIsInJlbW92ZUNsYXNzIiwicGVyZmVjdFNjcm9sbGJhciIsIm93bENhcm91c2VsIiwibG9vcCIsIm1hcmdpbiIsImRvdHMiLCJzbGlkZUJ5IiwiaXRlbXMiLCJuYXYiLCJhdXRvcGxheSIsImF1dG9wbGF5VGltZW91dCIsImF1dG9wbGF5SG92ZXJQYXVzZSIsIm5hdlRleHQiLCJyZXNwb25zaXZlIiwiMCIsIjYwMCIsIjEwMDAiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiJBQUFBQSxFQUFFQyxVQUFVQyxNQUFNLFdBaUdaLFFBQVNDLEtBQ1BDLEVBQU0sR0FBSUMsT0FBTUMsSUFBSSxPQUNsQkMsUUFBUyxrQkFBa0Isa0JBQzNCQyxLQUFNLEVBQ05DLGNBR0ZMLEVBQUlNLFVBQVVDLFFBQVEsYUFDdEIsSUFBSUMsR0FBZVAsTUFBTVEsc0JBQXNCQyxZQUFZLGtDQUN6REMsTUFBTyxXQUNMSCxFQUFhSSxXQUFXRCxNQUFNRSxLQUFLQyxNQUNuQ0EsS0FBS0MsUUFBVWQsTUFBTWUsU0FBU0MsUUFBUUMsTUFBTUosS0FBS0ssY0FDakRMLEtBQUtDLFFBQVFLLElBQUksY0FBZSxlQUdsQ0MsTUFBTyxXQUNMUCxLQUFLQyxRQUFRTyxZQUNiZCxFQUFhSSxXQUFXUyxNQUFNUixLQUFLQyxTQUduQ1MsRUFBa0IsR0FBSXRCLE9BQU11QixXQUM3QixtQkFBbUIsb0JBQ2xCQyxZQUFhLHdEQUViQyxXQUFZbEIsRUFDWm1CLFNBQVUsV0FDVkMsVUFBVyxHQUFJLElBQ2ZDLHNCQUdKN0IsR0FBSThCLFdBQVdWLElBQUlHLEdBOUgxQixHQUFJUSxHQUFJbkMsRUFBRSxZQUNIb0MsRUFBSXBDLEVBQUUsT0E0RlYsSUEzRkFtQyxFQUFFRSxHQUFHLFFBQVMsV0FDVkQsRUFBRUUsWUFBWSxhQUFjdEMsRUFBRSxTQUFTc0MsWUFBWSx3QkFFdkR0QyxFQUFFLGFBQWFxQyxHQUFHLFFBQVMsV0FDMUJyQyxFQUFFLGNBQWNzQyxZQUFZLGtCQUM1QnRDLEVBQUUsZUFBZXNDLFlBQVksNEJBRTlCdEMsRUFBRSxTQUFTcUMsR0FBRyxRQUFTLFdBQ3RCckMsRUFBRSxjQUFjdUMsWUFBWSxrQkFDNUJ2QyxFQUFFLGVBQWV1QyxZQUFZLDBCQUM3QkgsRUFBRUcsWUFBWSxhQUFhdkMsRUFBRSxTQUFTdUMsWUFBWSx3QkFFbkR2QyxFQUFFLGdCQUFnQnFDLEdBQUcsUUFBUyxXQUM3QnJDLEVBQUUsZ0JBQWdCc0MsWUFBWSxzQkFDOUJ0QyxFQUFFLGFBQWFzQyxZQUFZLGlCQUMzQnRDLEVBQUUsc0JBQXNCc0MsWUFBWSxtQkFDcEN0QyxFQUFFLGNBQWN1QyxZQUFZLGtCQUM1QnZDLEVBQUUsZUFBZXVDLFlBQVksMEJBQzdCSCxFQUFFRyxZQUFZLGFBQWF2QyxFQUFFLFNBQVN1QyxZQUFZLHdCQUVuRHZDLEVBQUUsY0FBY3dDLG1CQUVmeEMsRUFBRSw2QkFBNkJ5QyxhQUMzQkMsTUFBTSxFQUNOQyxPQUFRLEdBQ1JDLE1BQU0sRUFDTkMsUUFBUyxFQUNUQyxNQUFPLEVBQ1BDLEtBQUssRUFDTEwsTUFBTSxFQUNOTSxVQUFVLEVBQ1ZDLGdCQUFpQixJQUNqQkMsb0JBQW9CLEVBQ3BCQyxTQUFVLHdDQUF3Qyw0Q0FHdERuRCxFQUFFLG9CQUFvQnlDLGFBQ2xCQyxNQUFNLEVBQ05DLE9BQVEsR0FDUkMsTUFBTSxFQUNOQyxRQUFTLEVBQ1RDLE1BQU8sRUFDUEMsS0FBSyxFQUNMTCxNQUFNLEVBQ05NLFVBQVUsRUFDVkMsZ0JBQWlCLElBQ2pCQyxvQkFBb0IsRUFDcEJDLFNBQVUsd0NBQXdDLDRDQUtyRG5ELEVBQUUsaUJBQWlCeUMsYUFDakJDLE1BQU0sRUFDTkMsT0FBUSxFQUNSSSxLQUFLLEVBQ0xILE1BQU0sRUFDTEksVUFBVSxFQUNWQyxnQkFBaUIsSUFDbEJHLFlBQ0lDLEdBQ0lQLE1BQU8sR0FFWFEsS0FDSVIsTUFBTyxHQUVYUyxLQUNJVCxNQUFPLE1BSW5COUMsRUFBRSxtQkFBbUJ5QyxhQUNqQkMsTUFBTSxFQUNOQyxPQUFRLEVBQ1JJLEtBQUssRUFDTEgsTUFBTSxFQUdOUSxZQUNJQyxHQUNJUCxNQUFPLEdBRVhRLEtBQ0lSLE1BQU8sR0FFWFMsS0FDSVQsTUFBTyxNQUtoQjlDLEVBQUUsUUFBUXdELE9BQVMsRUFBRSxDQUN0QixHQUFJcEQsRUFDSkMsT0FBTUgsTUFBTUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cdHZhciBvID0gJChcIiNtZW51LWlkXCIpLFxuICAgICAgICB0ID0gJChcImJvZHlcIik7XG4gICAgby5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICB0LnRvZ2dsZUNsYXNzKFwib3Blbi1tZW51XCIpLCAkKFwiLnBhZ2VcIikudG9nZ2xlQ2xhc3MoXCJvcGVuLW1lbnVfX2NvdXJzb3JcIilcbiAgICB9KTtcbiAgICAkKCcubWVudS1iaWcnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIFx0JCgnLm1lbnUtbGlzdCcpLnRvZ2dsZUNsYXNzKCdtZW51LWxpc3Qtb3BlbicpO1xuICAgIFx0JCgnLm1lbnUtZml4ZWQnKS50b2dnbGVDbGFzcygnbWVudS1maXhlZC1zaGFkb3dCbG9jaycpO1xuICAgIH0pO1xuICAgICQoJy5wYWdlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBcdCQoJy5tZW51LWxpc3QnKS5yZW1vdmVDbGFzcygnbWVudS1saXN0LW9wZW4nKTtcbiAgICBcdCQoJy5tZW51LWZpeGVkJykucmVtb3ZlQ2xhc3MoJ21lbnUtZml4ZWQtc2hhZG93QmxvY2snKTtcbiAgICBcdHQucmVtb3ZlQ2xhc3MoXCJvcGVuLW1lbnVcIik7JChcIi5wYWdlXCIpLnJlbW92ZUNsYXNzKFwib3Blbi1tZW51X19jb3Vyc29yXCIpO1xuICAgIH0pO1xuICAgICQoJy5tZW51LXNlYXJjaCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgXHQkKCcubWVudS1jZW50ZXInKS50b2dnbGVDbGFzcygnbWVudS1jZW50ZXItY2xvc2VkJyk7XG4gICAgXHQkKCcubWVudS1iaWcnKS50b2dnbGVDbGFzcygnbWVudS1iaWctbm9uZScpO1xuICAgIFx0JChcIi5tZW51LXNlYXJjaC1pbnB1dFwiKS50b2dnbGVDbGFzcygnbWVudS1pbnB1dC1vcGVuJyk7XG4gICAgXHQkKCcubWVudS1saXN0JykucmVtb3ZlQ2xhc3MoJ21lbnUtbGlzdC1vcGVuJyk7XG4gICAgXHQkKCcubWVudS1maXhlZCcpLnJlbW92ZUNsYXNzKCdtZW51LWZpeGVkLXNoYWRvd0Jsb2NrJyk7XG4gICAgXHR0LnJlbW92ZUNsYXNzKFwib3Blbi1tZW51XCIpOyQoXCIucGFnZVwiKS5yZW1vdmVDbGFzcyhcIm9wZW4tbWVudV9fY291cnNvclwiKTtcbiAgICB9KTtcbiAgICAkKCcubWVudS1saXN0JykucGVyZmVjdFNjcm9sbGJhcigpO1xuXG4gICAgICQoJy5ldmVudHMtc2VjdGlvbl9fY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XG4gICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICAgbWFyZ2luOiAzMCxcbiAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgc2xpZGVCeTogMSxcbiAgICAgICAgIGl0ZW1zOiAxLFxuICAgICAgICAgbmF2OiB0cnVlLFxuICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiA1MDAwLFxuICAgICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlOiBmYWxzZSxcbiAgICAgICAgIG5hdlRleHQ6IFtcIjxpbWcgc3JjPSdpbWcvZXZlbnRzLWFycm93LWxlZnQucG5nJz5cIixcIjxpbWcgc3JjPSdpbWcvZXZlbnRzLWFycm93LXJpZ2h0LnBuZyc+XCJdXG4gICAgIH0pO1xuXG4gICAgICQoJy5icmFuY2gtY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XG4gICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICAgbWFyZ2luOiAzMCxcbiAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgc2xpZGVCeTogMSxcbiAgICAgICAgIGl0ZW1zOiAxLFxuICAgICAgICAgbmF2OiB0cnVlLFxuICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgIGF1dG9wbGF5VGltZW91dDogNTAwMCxcbiAgICAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZTogZmFsc2UsXG4gICAgICAgICBuYXZUZXh0OiBbXCI8aW1nIHNyYz0naW1nL3NsaWRlci1hcnJvdy1sZWZ0LnBuZyc+XCIsXCI8aW1nIHNyYz0naW1nL3NsaWRlci1hcnJvdy1yaWdodC5wbmcnPlwiXVxuICAgICB9KTtcblxuXG5cbiAgICAgICQoXCIuZmlyc3Qtc2xpZGVyXCIpLm93bENhcm91c2VsKHtcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICBuYXY6IGZhbHNlLFxuICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDQwMDAsXG4gICAgICAgIHJlc3BvbnNpdmU6IHtcbiAgICAgICAgICAgIDA6IHtcbiAgICAgICAgICAgICAgICBpdGVtczogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDYwMDoge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMTAwMDoge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAkKFwiLnByZXZpZXctc2xpZGVyXCIpLm93bENhcm91c2VsKHtcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICBuYXY6IHRydWUsXG4gICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgLy8gYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAvLyBhdXRvcGxheVRpbWVvdXQ6IDQwMDAsXG4gICAgICAgIHJlc3BvbnNpdmU6IHtcbiAgICAgICAgICAgIDA6IHtcbiAgICAgICAgICAgICAgICBpdGVtczogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDYwMDoge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMTAwMDoge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmKCQoJyNtYXAnKS5sZW5ndGggPiAwKXtcbiAgICAgIHZhciBtYXA7XG4gICAgICB5bWFwcy5yZWFkeShpbml0KTtcbiAgICAgIGZ1bmN0aW9uIGluaXQoKXtcbiAgICAgICAgbWFwID0gbmV3IHltYXBzLk1hcCgnbWFwJywge1xuICAgICAgICAgIGNlbnRlcjogWzU1Ljg0Nzg2NjU2ODg4NTQzLDM3LjU1OTcwMjk5OTk5OTldLFxuICAgICAgICAgIHpvb206IDQsXG4gICAgICAgICAgY29udHJvbHM6IFtdXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgbWFwLmJlaGF2aW9ycy5kaXNhYmxlKCdzY3JvbGxab29tJyk7IFxuICAgICAgICB2YXIgc3F1YXJlTGF5b3V0ID0geW1hcHMudGVtcGxhdGVMYXlvdXRGYWN0b3J5LmNyZWF0ZUNsYXNzKCc8ZGl2IGNsYXNzPVwibWFwLXRhcmdldFwiPjwvZGl2PicsIHsgICAgICAgIFxuICAgICAgICAgIGJ1aWxkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzcXVhcmVMYXlvdXQuc3VwZXJjbGFzcy5idWlsZC5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5fZXZlbnRzID0geW1hcHMuZG9tRXZlbnQubWFuYWdlci5ncm91cCh0aGlzLmdldEVsZW1lbnQoKSk7XG4gICAgICAgICAgICB0aGlzLl9ldmVudHMuYWRkKCdjb250ZXh0bWVudScsIGZ1bmN0aW9uICgpIHsgIFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSwgICAgIFxuICAgICAgICAgIGNsZWFyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLl9ldmVudHMucmVtb3ZlQWxsKCk7XG4gICAgICAgICAgICBzcXVhcmVMYXlvdXQuc3VwZXJjbGFzcy5jbGVhci5jYWxsKHRoaXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBzcXVhcmVQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFxuICAgICAgICAgIFs1NS43Njc0ODM1Njg5NzcwMDYsMzcuODc2NjQ2NDk5OTk5OTldLCB7XG4gICAgICAgICAgICBoaW50Q29udGVudDogJ9CzLiDQnNC+0YHQutCy0LAsINCd0LjQttC90LXQu9C40YXQvtCx0L7RgNGB0LrQuNC5IDMt0Lkg0L/RgC4sMSDQkCwg0YHRgtGA0L7QtdC90LjQtSA2J1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGljb25MYXlvdXQ6IHNxdWFyZUxheW91dCxcbiAgICAgICAgICAgIGljb25QYW5lOiAnb3ZlcmxhcHMnLFxuICAgICAgICAgICAgaWNvblNpemU6IFs1MCwgNTBdLFxuICAgICAgICAgICAgaWNvbk9mZnNldDogWy0xNSwgLTU1XVxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgbWFwLmdlb09iamVjdHMuYWRkKHNxdWFyZVBsYWNlbWFyayk7XG4gICAgICB9XG4gICAgfVxuXG59KVxuIl19