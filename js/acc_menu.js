/**
 * Accordion menu CSS
 */

$(function(){

  // 선언부
  function init(){
    // 처음 로딩되었을 때 상태
    $('.css-lnb-depth1-link').data({'open' : false});

    // each() : 요소 개수만큼 반복하는 함수
    $('.css-lnb-depth2').each(function(index){
      $(this).data({'height' : $(this).height()}).css({height : 0});
    });

  }

  function menuOpen( $depth1Link ){
    $depth1Link.next().css({
      height : $depth1Link.next().data('height')
    });

    $depth1Link.data({'open' : 'true'}).addClass('up');

  }

  function menuClose( $depth1Link ){
    $depth1Link.parent().siblings().children('.css-lnb-depth2').css({
      height : 0
    });

    $depth1Link.parent().siblings().children('.css-lnb-depth1-link').data('open', 'false').removeClass('up');

  }

  function menuSelfClose( $depth1Link ){
    $depth1Link.next().css({
      height : 0
    });

    $depth1Link.data({'open' : 'false'}).removeClass('up');
  }

  // 실행부
  init();

  $('.css-lnb-depth1-link').on('click', function(e){

    e.preventDefault();

    if($(this).data('open') == 'false'){

      menuOpen( $(this) );
      menuClose( $(this) );

    } else {
      menuSelfClose( $(this) );
    }

  });

});
/**
 * Accordion menu jQuery

/*
  ※ show/hide 형태의 아코디언 메뉴
  ※ CSS 코딩 : styling, hide

  1. 마우스를 클릭했을 때 sub 메뉴가 show / hide
  2. 클릭한 1depth 의 sub 메뉴가 보일 때 다른 1depth 의 sub 메뉴는 안보여야 함
  3. sub 메뉴가 보일 때 화살표는 윗방향 화살표로 변경
  4. sub 메뉴가 안보이게 될 때 화살표는 아랫방향 화살표로 변경
 */

/*
  ※ sub 메뉴의 영역이 늘어났다/줄어들었다 하는 형태의 아코디언 메뉴
  ※ CSS 코딩 : styling, 줄어듬(높이:0)

  1. 마우스를 클릭했을 때, sub 메뉴의 상태에 따라 sub 메뉴가 늘어남/줄어듬
  2. 클릭한 1depth 의 sub 메뉴가 늘어날 때 다른 1depth 의 sub 메뉴는 줄어들어야 함
  3. sub 메뉴가 보일 때 화살표는 윗방향 화살표로 변경
  4. sub 메뉴가 안보이게 될 때 화살표는 아랫방향 화살표로 변경
*/

$(function(){

  // 선언부
  function init(){
    // 처음 로딩되었을 때 상태
    $('.lnb-depth1-link').data({'open' : false});

    // each() : 요소 개수만큼 반복하는 함수
    $('.lnb-depth2').each(function(index){
      $(this).data({'height' : $(this).height()}).css({height : 0});
    });

  }

  function menuOpen( $depth1Link ){
    /*
     $(this).next().stop().animate({key : value},시간,콜백함수)

     ** jQuery DOM을 단계별로 찾아갈 때,

     : 첫번 째 인수의 value 부분에 $(this) 를 사용하면 처음 찾은 $(this)를 의미
     : 콜백함수 부분에 $(this)를 사용하면 최종으로 찾은 DOM 요소가 $(this)가 됨.
     */
    $depth1Link.next().stop().animate({
      height : $depth1Link.next().data('height')
    });

    $depth1Link.data({'open' : 'true'}).addClass('up');

  }

  function menuClose( $depth1Link ){
    $depth1Link.parent().siblings().children('.lnb-depth2').stop().animate({
      height : 0
    });

    $depth1Link.parent().siblings().children('.lnb-depth1-link').data('open', 'false').removeClass('up');

  }

  function menuSelfClose( $depth1Link ){
    $depth1Link.next().stop().animate({
      height : 0
    });

    $depth1Link.data({'open' : 'false'}).removeClass('up');
  }

  // 실행부
  init();

  $('.lnb-depth1-link').on('click', function(e){

    e.preventDefault();

    if($(this).data('open') == 'false'){

      menuOpen( $(this) );
      menuClose( $(this) );

    } else {
      menuSelfClose( $(this) );
    }

  });

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hY2NfbWVudV9jc3MuanMiLCJfYWNjX21lbnVfanF1ZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYWNjX21lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQWNjb3JkaW9uIG1lbnUgQ1NTXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAvLyDshKDslrjrtoBcclxuICBmdW5jdGlvbiBpbml0KCl7XHJcbiAgICAvLyDsspjsnYwg66Gc65Sp65CY7JeI7J2EIOuVjCDsg4Htg5xcclxuICAgICQoJy5jc3MtbG5iLWRlcHRoMS1saW5rJykuZGF0YSh7J29wZW4nIDogZmFsc2V9KTtcclxuXHJcbiAgICAvLyBlYWNoKCkgOiDsmpTshowg6rCc7IiY66eM7YG8IOuwmOuzte2VmOuKlCDtlajsiJhcclxuICAgICQoJy5jc3MtbG5iLWRlcHRoMicpLmVhY2goZnVuY3Rpb24oaW5kZXgpe1xyXG4gICAgICAkKHRoaXMpLmRhdGEoeydoZWlnaHQnIDogJCh0aGlzKS5oZWlnaHQoKX0pLmNzcyh7aGVpZ2h0IDogMH0pO1xyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVudU9wZW4oICRkZXB0aDFMaW5rICl7XHJcbiAgICAkZGVwdGgxTGluay5uZXh0KCkuY3NzKHtcclxuICAgICAgaGVpZ2h0IDogJGRlcHRoMUxpbmsubmV4dCgpLmRhdGEoJ2hlaWdodCcpXHJcbiAgICB9KTtcclxuXHJcbiAgICAkZGVwdGgxTGluay5kYXRhKHsnb3BlbicgOiAndHJ1ZSd9KS5hZGRDbGFzcygndXAnKTtcclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtZW51Q2xvc2UoICRkZXB0aDFMaW5rICl7XHJcbiAgICAkZGVwdGgxTGluay5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCcuY3NzLWxuYi1kZXB0aDInKS5jc3Moe1xyXG4gICAgICBoZWlnaHQgOiAwXHJcbiAgICB9KTtcclxuXHJcbiAgICAkZGVwdGgxTGluay5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCcuY3NzLWxuYi1kZXB0aDEtbGluaycpLmRhdGEoJ29wZW4nLCAnZmFsc2UnKS5yZW1vdmVDbGFzcygndXAnKTtcclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtZW51U2VsZkNsb3NlKCAkZGVwdGgxTGluayApe1xyXG4gICAgJGRlcHRoMUxpbmsubmV4dCgpLmNzcyh7XHJcbiAgICAgIGhlaWdodCA6IDBcclxuICAgIH0pO1xyXG5cclxuICAgICRkZXB0aDFMaW5rLmRhdGEoeydvcGVuJyA6ICdmYWxzZSd9KS5yZW1vdmVDbGFzcygndXAnKTtcclxuICB9XHJcblxyXG4gIC8vIOyLpO2Wieu2gFxyXG4gIGluaXQoKTtcclxuXHJcbiAgJCgnLmNzcy1sbmItZGVwdGgxLWxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYoJCh0aGlzKS5kYXRhKCdvcGVuJykgPT0gJ2ZhbHNlJyl7XHJcblxyXG4gICAgICBtZW51T3BlbiggJCh0aGlzKSApO1xyXG4gICAgICBtZW51Q2xvc2UoICQodGhpcykgKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtZW51U2VsZkNsb3NlKCAkKHRoaXMpICk7XHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxufSk7IiwiLyoqXHJcbiAqIEFjY29yZGlvbiBtZW51IGpRdWVyeVxyXG5cclxuLypcclxuICDigLsgc2hvdy9oaWRlIO2Yle2DnOydmCDslYTsvZTrlJTslrgg66mU64m0XHJcbiAg4oC7IENTUyDsvZTrlKkgOiBzdHlsaW5nLCBoaWRlXHJcblxyXG4gIDEuIOuniOyasOyKpOulvCDtgbTrpq3tlojsnYQg65WMIHN1YiDrqZTribTqsIAgc2hvdyAvIGhpZGVcclxuICAyLiDtgbTrpq3tlZwgMWRlcHRoIOydmCBzdWIg66mU64m06rCAIOuztOydvCDrlYwg64uk66W4IDFkZXB0aCDsnZggc3ViIOuplOuJtOuKlCDslYjrs7Tsl6zslbwg7ZWoXHJcbiAgMy4gc3ViIOuplOuJtOqwgCDrs7Tsnbwg65WMIO2ZlOyCtO2RnOuKlCDsnJfrsKntlqUg7ZmU7IK07ZGc66GcIOuzgOqyvVxyXG4gIDQuIHN1YiDrqZTribTqsIAg7JWI67O07J206rKMIOuQoCDrlYwg7ZmU7IK07ZGc64qUIOyVhOueq+uwqe2WpSDtmZTsgrTtkZzroZwg67OA6rK9XHJcbiAqL1xyXG5cclxuLypcclxuICDigLsgc3ViIOuplOuJtOydmCDsmIHsl63snbQg64qY7Ja064Ks64ukL+ykhOyWtOuTpOyXiOuLpCDtlZjripQg7ZiV7YOc7J2YIOyVhOy9lOuUlOyWuCDrqZTribRcclxuICDigLsgQ1NTIOy9lOuUqSA6IHN0eWxpbmcsIOykhOyWtOuTrCjrhpLsnbQ6MClcclxuXHJcbiAgMS4g66eI7Jqw7Iqk66W8IO2BtOumre2WiOydhCDrlYwsIHN1YiDrqZTribTsnZgg7IOB7YOc7JeQIOuUsOudvCBzdWIg66mU64m06rCAIOuKmOyWtOuCqC/spITslrTrk6xcclxuICAyLiDtgbTrpq3tlZwgMWRlcHRoIOydmCBzdWIg66mU64m06rCAIOuKmOyWtOuCoCDrlYwg64uk66W4IDFkZXB0aCDsnZggc3ViIOuplOuJtOuKlCDspITslrTrk6TslrTslbwg7ZWoXHJcbiAgMy4gc3ViIOuplOuJtOqwgCDrs7Tsnbwg65WMIO2ZlOyCtO2RnOuKlCDsnJfrsKntlqUg7ZmU7IK07ZGc66GcIOuzgOqyvVxyXG4gIDQuIHN1YiDrqZTribTqsIAg7JWI67O07J206rKMIOuQoCDrlYwg7ZmU7IK07ZGc64qUIOyVhOueq+uwqe2WpSDtmZTsgrTtkZzroZwg67OA6rK9XHJcbiovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIC8vIOyEoOyWuOu2gFxyXG4gIGZ1bmN0aW9uIGluaXQoKXtcclxuICAgIC8vIOyymOydjCDroZzrlKnrkJjsl4jsnYQg65WMIOyDge2DnFxyXG4gICAgJCgnLmxuYi1kZXB0aDEtbGluaycpLmRhdGEoeydvcGVuJyA6IGZhbHNlfSk7XHJcblxyXG4gICAgLy8gZWFjaCgpIDog7JqU7IaMIOqwnOyImOunjO2BvCDrsJjrs7XtlZjripQg7ZWo7IiYXHJcbiAgICAkKCcubG5iLWRlcHRoMicpLmVhY2goZnVuY3Rpb24oaW5kZXgpe1xyXG4gICAgICAkKHRoaXMpLmRhdGEoeydoZWlnaHQnIDogJCh0aGlzKS5oZWlnaHQoKX0pLmNzcyh7aGVpZ2h0IDogMH0pO1xyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVudU9wZW4oICRkZXB0aDFMaW5rICl7XHJcbiAgICAvKlxyXG4gICAgICQodGhpcykubmV4dCgpLnN0b3AoKS5hbmltYXRlKHtrZXkgOiB2YWx1ZX0s7Iuc6rCELOy9nOuwse2VqOyImClcclxuXHJcbiAgICAgKiogalF1ZXJ5IERPTeydhCDri6jqs4Trs4TroZwg7LC+7JWE6rCIIOuVjCxcclxuXHJcbiAgICAgOiDssqvrsogg7Ke4IOyduOyImOydmCB2YWx1ZSDrtoDrtoTsl5AgJCh0aGlzKSDrpbwg7IKs7Jqp7ZWY66m0IOyymOydjCDssL7snYAgJCh0aGlzKeulvCDsnZjrr7hcclxuICAgICA6IOy9nOuwse2VqOyImCDrtoDrtoTsl5AgJCh0aGlzKeulvCDsgqzsmqntlZjrqbQg7LWc7KKF7Jy866GcIOywvuydgCBET00g7JqU7IaM6rCAICQodGhpcynqsIAg65CoLlxyXG4gICAgICovXHJcbiAgICAkZGVwdGgxTGluay5uZXh0KCkuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICBoZWlnaHQgOiAkZGVwdGgxTGluay5uZXh0KCkuZGF0YSgnaGVpZ2h0JylcclxuICAgIH0pO1xyXG5cclxuICAgICRkZXB0aDFMaW5rLmRhdGEoeydvcGVuJyA6ICd0cnVlJ30pLmFkZENsYXNzKCd1cCcpO1xyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVDbG9zZSggJGRlcHRoMUxpbmsgKXtcclxuICAgICRkZXB0aDFMaW5rLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oJy5sbmItZGVwdGgyJykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICBoZWlnaHQgOiAwXHJcbiAgICB9KTtcclxuXHJcbiAgICAkZGVwdGgxTGluay5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCcubG5iLWRlcHRoMS1saW5rJykuZGF0YSgnb3BlbicsICdmYWxzZScpLnJlbW92ZUNsYXNzKCd1cCcpO1xyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVTZWxmQ2xvc2UoICRkZXB0aDFMaW5rICl7XHJcbiAgICAkZGVwdGgxTGluay5uZXh0KCkuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICBoZWlnaHQgOiAwXHJcbiAgICB9KTtcclxuXHJcbiAgICAkZGVwdGgxTGluay5kYXRhKHsnb3BlbicgOiAnZmFsc2UnfSkucmVtb3ZlQ2xhc3MoJ3VwJyk7XHJcbiAgfVxyXG5cclxuICAvLyDsi6TtlonrtoBcclxuICBpbml0KCk7XHJcblxyXG4gICQoJy5sbmItZGVwdGgxLWxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYoJCh0aGlzKS5kYXRhKCdvcGVuJykgPT0gJ2ZhbHNlJyl7XHJcblxyXG4gICAgICBtZW51T3BlbiggJCh0aGlzKSApO1xyXG4gICAgICBtZW51Q2xvc2UoICQodGhpcykgKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtZW51U2VsZkNsb3NlKCAkKHRoaXMpICk7XHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxufSk7Il19
