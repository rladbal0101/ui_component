/**
 * Gnb Menu CSS
 */

$(function(){

  var timeID; // setInterval, clearInterval에서 사용할 변수

  $('.css-menu-depth1-link').on('mouseenter', function(){
    // removeClass 하기 위해 실행되고 있는 setInterval 취소
    clearInterval(timeID);

    // promise() : 앞선 동작이 모두 끝난 후 특정 기능을 실행 시킬 때 사용
    $(this).next().addClass('on').promise().done(function(){

      var $depth2Wrap = $(this).parent().siblings().children('.css-menu-depth2-wrap');

      // setTimeout() : ~초 이후에 한번만 실행

      /*
      1.타이머 함수 실행 횟수, 취소
      2. 실행문의 횟수/시간을 실행/퓌소
      1,2.를 고려해서 알고리즘 만들기

      1. 일반코딩
       setInterval(function(){
        실행문
       }, 단위시간);

        - 단위시간마다 setInterval 과 실행문이 매번 실행
        Ex)단위시간 1000, 회수 10 => 10초 동안 setInterval 10번 실행, 실행문 10번싷행
           3.5초 시점에서 clearInter 실행 => setInterval 3번, 실행문 3번 실행

      2. 시간이 취소되는 기능 구현 코딩

      var i=0;
      setInterval(function(){
       if(i == 10){
        실행문
        }
      i++
      }, 단위시간);

      - 단위시간마다 setInterval 은 매번 실행, 실행문은 i가 10 일때 한번 실행
      Ex)3.5초 시점엥서 clearInterval 실행 => setInterval 3번, 실행문 0번 (실행 취소)

        */

      var count = 0;

      timeID = setInterval(function(){
        if(count == 300){
          $depth2Wrap.removeClass('on');
        }
        count++;
      }, 1);

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9nbmJfbWVudV9jc3MuanMiLCJfZ25iX21lbnVfanF1ZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ25iX21lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogR25iIE1lbnUgQ1NTXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICB2YXIgdGltZUlEOyAvLyBzZXRJbnRlcnZhbCwgY2xlYXJJbnRlcnZhbOyXkOyEnCDsgqzsmqntlaAg67OA7IiYXHJcblxyXG4gICQoJy5jc3MtbWVudS1kZXB0aDEtbGluaycpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuICAgIC8vIHJlbW92ZUNsYXNzIO2VmOq4sCDsnITtlbQg7Iuk7ZaJ65CY6rOgIOyeiOuKlCBzZXRJbnRlcnZhbCDst6jshoxcclxuICAgIGNsZWFySW50ZXJ2YWwodGltZUlEKTtcclxuXHJcbiAgICAvLyBwcm9taXNlKCkgOiDslZ7shKAg64+Z7J6R7J20IOuqqOuRkCDrgZ3rgpwg7ZuEIO2KueyglSDquLDriqXsnYQg7Iuk7ZaJIOyLnO2CrCDrlYwg7IKs7JqpXHJcbiAgICAkKHRoaXMpLm5leHQoKS5hZGRDbGFzcygnb24nKS5wcm9taXNlKCkuZG9uZShmdW5jdGlvbigpe1xyXG5cclxuICAgICAgdmFyICRkZXB0aDJXcmFwID0gJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCcuY3NzLW1lbnUtZGVwdGgyLXdyYXAnKTtcclxuXHJcbiAgICAgIC8vIHNldFRpbWVvdXQoKSA6IH7stIgg7J207ZuE7JeQIO2VnOuyiOunjCDsi6TtlolcclxuXHJcbiAgICAgIC8qXHJcbiAgICAgIDEu7YOA7J2066i4IO2VqOyImCDsi6Ttlokg7Zqf7IiYLCDst6jshoxcclxuICAgICAgMi4g7Iuk7ZaJ66y47J2YIO2an+yImC/si5zqsITsnYQg7Iuk7ZaJL+2TjOyGjFxyXG4gICAgICAxLDIu66W8IOqzoOugpO2VtOyEnCDslYzqs6Drpqzsppgg66eM65Ok6riwXHJcblxyXG4gICAgICAxLiDsnbzrsJjsvZTrlKlcclxuICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAg7Iuk7ZaJ66y4XHJcbiAgICAgICB9LCDri6jsnITsi5zqsIQpO1xyXG5cclxuICAgICAgICAtIOuLqOychOyLnOqwhOuniOuLpCBzZXRJbnRlcnZhbCDqs7wg7Iuk7ZaJ66y47J20IOunpOuyiCDsi6TtlolcclxuICAgICAgICBFeCnri6jsnITsi5zqsIQgMTAwMCwg7ZqM7IiYIDEwID0+IDEw7LSIIOuPmeyViCBzZXRJbnRlcnZhbCAxMOuyiCDsi6TtloksIOyLpO2WieusuCAxMOuyiOyLt+2WiVxyXG4gICAgICAgICAgIDMuNey0iCDsi5zsoJDsl5DshJwgY2xlYXJJbnRlciDsi6TtlokgPT4gc2V0SW50ZXJ2YWwgM+uyiCwg7Iuk7ZaJ66y4IDPrsogg7Iuk7ZaJXHJcblxyXG4gICAgICAyLiDsi5zqsITsnbQg7Leo7IaM65CY64qUIOq4sOuKpSDqtaztmIQg7L2U65SpXHJcblxyXG4gICAgICB2YXIgaT0wO1xyXG4gICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG4gICAgICAgaWYoaSA9PSAxMCl7XHJcbiAgICAgICAg7Iuk7ZaJ66y4XHJcbiAgICAgICAgfVxyXG4gICAgICBpKytcclxuICAgICAgfSwg64uo7JyE7Iuc6rCEKTtcclxuXHJcbiAgICAgIC0g64uo7JyE7Iuc6rCE66eI64ukIHNldEludGVydmFsIOydgCDrp6Trsogg7Iuk7ZaJLCDsi6TtlonrrLjsnYAgaeqwgCAxMCDsnbzrlYwg7ZWc67KIIOyLpO2WiVxyXG4gICAgICBFeCkzLjXstIgg7Iuc7KCQ7Jel7IScIGNsZWFySW50ZXJ2YWwg7Iuk7ZaJID0+IHNldEludGVydmFsIDPrsogsIOyLpO2WieusuCAw67KIICjsi6Ttlokg7Leo7IaMKVxyXG5cclxuICAgICAgICAqL1xyXG5cclxuICAgICAgdmFyIGNvdW50ID0gMDtcclxuXHJcbiAgICAgIHRpbWVJRCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYoY291bnQgPT0gMzAwKXtcclxuICAgICAgICAgICRkZXB0aDJXcmFwLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb3VudCsrO1xyXG4gICAgICB9LCAxKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5jc3MtbWVudS1kZXB0aDEnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCgnLmNzcy1tZW51LWRlcHRoMi13cmFwJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH0pO1xyXG5cclxufSk7IiwiLyoqXHJcbiAqIEduYiBNZW51IGpRdWVyeVxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgJCgnLm1lbnUtZGVwdGgxLWxpbmsnKS5vbignbW91c2VlbnRlcicsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAvLyBkZXB0aDEgYm9yZGVyIOuKmOyWtOuCmOuKlCDrqqjshZgg7Zqo6rO8XHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcubWVudS1kZXB0aDEtYm9yZGVyJykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICB3aWR0aCA6IDY0XHJcbiAgICB9LCAzMDApO1xyXG5cclxuICAgIC8vIGRlcHRoMiDrqZTribQg64qY7Ja064KY64qUIOuqqOyFmCDtmqjqs7xcclxuICAgIHZhciBkZXB0aDFJbmRleCA9ICQodGhpcykuaW5kZXgoJy5tZW51LWRlcHRoMS1saW5rJyk7XHJcbiAgICB2YXIgbW90aW9uSGVpZ2h0ID0gNTQ7XHJcblxyXG4gICAgaWYoIGRlcHRoMUluZGV4ID09IDEgKXtcclxuICAgICAgbW90aW9uSGVpZ2h0ID0gODA7XHJcbiAgICB9XHJcblxyXG4gICAgJCh0aGlzKS5uZXh0KCcubWVudS1kZXB0aDItd3JhcCcpLmNzcyh7J3otaW5kZXgnIDogMTB9KS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgIGhlaWdodCA6IG1vdGlvbkhlaWdodCxcclxuICAgICAgb3BhY2l0eSA6IDFcclxuICAgIH0sIDMwMCwgZnVuY3Rpb24oKXtcclxuICAgICAgLy8gJCh0aGlzKSA9PiAubWVudS1kZXB0aDItd3JhcFxyXG4gICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oJy5tZW51LWRlcHRoMi13cmFwJykuY3NzKHsnei1pbmRleCcgOiAwfSkuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgIGhlaWdodDogMCxcclxuICAgICAgICBvcGFjaXR5IDogMFxyXG4gICAgICB9LCAyMDApO1xyXG4gICAgfSk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAgICQoJy5tZW51LWRlcHRoMS1saW5rJykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xyXG4gICAgICAvLyBkZXB0aDEgYm9yZGVyIOykhOyWtOuTnOuKlCDrqqjshZgg7Zqo6rO8XHJcbiAgICAgICQodGhpcykuY2hpbGRyZW4oJy5tZW51LWRlcHRoMS1ib3JkZXInKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgd2lkdGggOiAwXHJcbiAgICAgIH0sIDMwMCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJy5tZW51LWRlcHRoMScpLm9uKCdtb3VzZWxlYXZlJyxmdW5jdGlvbigpe1xyXG5cclxuICAgIC8vIGRlcHRoMiDrqZTribQg7KSE7Ja065Oc64qUIOuqqOyFmCDtmqjqs7xcclxuICAgICQoJy5tZW51LWRlcHRoMi13cmFwJykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICBoZWlnaHQgOiAwLFxyXG4gICAgICBvcGFjaXR5IDogMFxyXG4gICAgfSwgMzAwKTtcclxuXHJcbiAgfSk7XHJcblxyXG59KTsiXX0=
