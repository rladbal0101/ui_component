/**
 * Gnb Menu CSS
 */

$(function(){

  $('.css-menu-depth1-link').on('mouseenter', function(){

    // promise() : 앞선 동작이 모두 끝난 후 특정 기능을 실행 시킬 때 사용
    $(this).next().addClass('on').promise().done(function(){

      var $depth2Wrap = $(this).parent().siblings().children('.css-menu-depth2-wrap');

      // setTimeout() : *초 이후에 한번만 실행
      setTimeout(function(){
        $depth2Wrap.removeClass('on');
      }, 300);

    });

  });

  $('.css-menu-depth1').on('mouseleave', function(){

    $('.css-menu-depth2-wrap').removeClass('on');

  });

});
/**
 * Gnb Menu jQuery
 */

$(function(){

  $('.menu-depth1-link').on('mouseenter',function(){

    // depth1 border 늘어나는 모션 효과
    $(this).children('.menu-depth1-border').stop().animate({
      width : 64
    }, 300);

    // depth2 메뉴 늘어나는 모션 효과
    var depth1Index = $(this).index('.menu-depth1-link');
    var motionHeight = 54;

    if( depth1Index == 1 ){
      motionHeight = 80;
    }

    $(this).next('.menu-depth2-wrap').css({'z-index' : 10}).stop().animate({
      height : motionHeight,
      opacity : 1
    }, 300, function(){
      // $(this) => .menu-depth2-wrap
      $(this).parent().siblings().children('.menu-depth2-wrap').css({'z-index' : 0}).stop().animate({
        height: 0,
        opacity : 0
      }, 200);
    });

  });

    $('.menu-depth1-link').on('mouseleave', function(){
      // depth1 border 줄어드는 모션 효과
      $(this).children('.menu-depth1-border').stop().animate({
        width : 0
      }, 300);
  });

  $('.menu-depth1').on('mouseleave',function(){

    // depth2 메뉴 줄어드는 모션 효과
    $('.menu-depth2-wrap').stop().animate({
      height : 0,
      opacity : 0
    }, 300);

  });

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9nbmJfbWVudV9jc3MuanMiLCJfZ25iX21lbnVfanF1ZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ25iX21lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogR25iIE1lbnUgQ1NTXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAkKCcuY3NzLW1lbnUtZGVwdGgxLWxpbmsnKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgLy8gcHJvbWlzZSgpIDog7JWe7ISgIOuPmeyekeydtCDrqqjrkZAg64Gd64KcIO2bhCDtirnsoJUg6riw64ql7J2EIOyLpO2WiSDsi5ztgqwg65WMIOyCrOyaqVxyXG4gICAgJCh0aGlzKS5uZXh0KCkuYWRkQ2xhc3MoJ29uJykucHJvbWlzZSgpLmRvbmUoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgIHZhciAkZGVwdGgyV3JhcCA9ICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLmNzcy1tZW51LWRlcHRoMi13cmFwJyk7XHJcblxyXG4gICAgICAvLyBzZXRUaW1lb3V0KCkgOiAq7LSIIOydtO2bhOyXkCDtlZzrsojrp4wg7Iuk7ZaJXHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAkZGVwdGgyV3JhcC5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgfSwgMzAwKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5jc3MtbWVudS1kZXB0aDEnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCgnLmNzcy1tZW51LWRlcHRoMi13cmFwJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH0pO1xyXG5cclxufSk7IiwiLyoqXHJcbiAqIEduYiBNZW51IGpRdWVyeVxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgJCgnLm1lbnUtZGVwdGgxLWxpbmsnKS5vbignbW91c2VlbnRlcicsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAvLyBkZXB0aDEgYm9yZGVyIOuKmOyWtOuCmOuKlCDrqqjshZgg7Zqo6rO8XHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcubWVudS1kZXB0aDEtYm9yZGVyJykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICB3aWR0aCA6IDY0XHJcbiAgICB9LCAzMDApO1xyXG5cclxuICAgIC8vIGRlcHRoMiDrqZTribQg64qY7Ja064KY64qUIOuqqOyFmCDtmqjqs7xcclxuICAgIHZhciBkZXB0aDFJbmRleCA9ICQodGhpcykuaW5kZXgoJy5tZW51LWRlcHRoMS1saW5rJyk7XHJcbiAgICB2YXIgbW90aW9uSGVpZ2h0ID0gNTQ7XHJcblxyXG4gICAgaWYoIGRlcHRoMUluZGV4ID09IDEgKXtcclxuICAgICAgbW90aW9uSGVpZ2h0ID0gODA7XHJcbiAgICB9XHJcblxyXG4gICAgJCh0aGlzKS5uZXh0KCcubWVudS1kZXB0aDItd3JhcCcpLmNzcyh7J3otaW5kZXgnIDogMTB9KS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgIGhlaWdodCA6IG1vdGlvbkhlaWdodCxcclxuICAgICAgb3BhY2l0eSA6IDFcclxuICAgIH0sIDMwMCwgZnVuY3Rpb24oKXtcclxuICAgICAgLy8gJCh0aGlzKSA9PiAubWVudS1kZXB0aDItd3JhcFxyXG4gICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oJy5tZW51LWRlcHRoMi13cmFwJykuY3NzKHsnei1pbmRleCcgOiAwfSkuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgIGhlaWdodDogMCxcclxuICAgICAgICBvcGFjaXR5IDogMFxyXG4gICAgICB9LCAyMDApO1xyXG4gICAgfSk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAgICQoJy5tZW51LWRlcHRoMS1saW5rJykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xyXG4gICAgICAvLyBkZXB0aDEgYm9yZGVyIOykhOyWtOuTnOuKlCDrqqjshZgg7Zqo6rO8XHJcbiAgICAgICQodGhpcykuY2hpbGRyZW4oJy5tZW51LWRlcHRoMS1ib3JkZXInKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgd2lkdGggOiAwXHJcbiAgICAgIH0sIDMwMCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJy5tZW51LWRlcHRoMScpLm9uKCdtb3VzZWxlYXZlJyxmdW5jdGlvbigpe1xyXG5cclxuICAgIC8vIGRlcHRoMiDrqZTribQg7KSE7Ja065Oc64qUIOuqqOyFmCDtmqjqs7xcclxuICAgICQoJy5tZW51LWRlcHRoMi13cmFwJykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICBoZWlnaHQgOiAwLFxyXG4gICAgICBvcGFjaXR5IDogMFxyXG4gICAgfSwgMzAwKTtcclxuXHJcbiAgfSk7XHJcblxyXG59KTsiXX0=
