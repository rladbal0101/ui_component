/**
 * Accordion menu CSS
 */

/**
 * Accordion menu jQuery
 */

/*
  ※ show/hide 형태의 아코디언 메뉴
  ※ CSS 코딩 : styling, hide

  1. 마우스를 클릭했을 때 sub 메뉴가 show / hide
  2. 클릭한 1depth 의 sub 메뉴가 보일 때 다른 1depth 의 sub 메뉴는 안보여야 함
  3. sub 메뉴가 보일 때 화살표는 윗방향 화살표로 번경
  4. sub 메뉴가 안보이게 될 때 화살표는 아랫방향 화살표로 변경
 */

/*
  ※ sub 메뉴의 영역이 늘어났다/줄어들었다 하는 형태의 아코디언 메뉴
  ※ CSS 코딩 : styling, 줄어듬(높이:0)

  1. 마우스를 클릭했을 때, sub 메뉴의 상태에 따라 sub 메뉴가 늘어남/줄어듬
  2. 클릭한 1depth 의 sub 메뉴가 늘어날 때 다른 1depth 의 sub 메뉴는 줄어들어야 함
  3. sub 메뉴가 보일 때 화살표는 윗방향 화살표로 번경
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

  // 실행부
  init();

  $('.lnb-depth1-link').on('click', function(e){

    e.preventDefault();

    if($(this).data('open') == 'false'){
      /* jQuery DOM을 단계별로 찾아갈 때,
      *  1. 갑의 Value ㅂ분에 $(this)를 사용하면 처음 찾은 $(this)를 의미
      *  2. 콜백함수 부분에 $(this)를 사용하면 최종으로 찾은 DOM 요소가 $(this)가 됨
      * */

      $(this).next().stop().animate({
        height : $(this).next().data('height')
      });

      $(this).parent().siblings().children('.lnb-depth2').stop().animate({
        height : 0
      });

      $(this).data({'open' : 'true'});

      $(this).parent().siblings().children('.lnb-depth1-link').data('open', 'false');

    } else {

      $(this).next().stop().animate({
        height : 0
      });

      $(this).data({'open' : 'false'});
    }

  });

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hY2NfbWVudV9jc3MuanMiLCJfYWNjX21lbnVfanF1ZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhY2NfbWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBBY2NvcmRpb24gbWVudSBDU1NcclxuICovXHJcbiIsIi8qKlxyXG4gKiBBY2NvcmRpb24gbWVudSBqUXVlcnlcclxuICovXHJcblxyXG4vKlxyXG4gIOKAuyBzaG93L2hpZGUg7ZiV7YOc7J2YIOyVhOy9lOuUlOyWuCDrqZTribRcclxuICDigLsgQ1NTIOy9lOuUqSA6IHN0eWxpbmcsIGhpZGVcclxuXHJcbiAgMS4g66eI7Jqw7Iqk66W8IO2BtOumre2WiOydhCDrlYwgc3ViIOuplOuJtOqwgCBzaG93IC8gaGlkZVxyXG4gIDIuIO2BtOumre2VnCAxZGVwdGgg7J2YIHN1YiDrqZTribTqsIAg67O07J28IOuVjCDri6TrpbggMWRlcHRoIOydmCBzdWIg66mU64m064qUIOyViOuztOyXrOyVvCDtlahcclxuICAzLiBzdWIg66mU64m06rCAIOuztOydvCDrlYwg7ZmU7IK07ZGc64qUIOycl+uwqe2WpSDtmZTsgrTtkZzroZwg67KI6rK9XHJcbiAgNC4gc3ViIOuplOuJtOqwgCDslYjrs7TsnbTqsowg65CgIOuVjCDtmZTsgrTtkZzripQg7JWE656r67Cp7ZalIO2ZlOyCtO2RnOuhnCDrs4Dqsr1cclxuICovXHJcblxyXG4vKlxyXG4gIOKAuyBzdWIg66mU64m07J2YIOyYgeyXreydtCDripjslrTrgqzri6Qv7KSE7Ja065Ok7JeI64ukIO2VmOuKlCDtmJXtg5zsnZgg7JWE7L2U65SU7Ja4IOuplOuJtFxyXG4gIOKAuyBDU1Mg7L2U65SpIDogc3R5bGluZywg7KSE7Ja065OsKOuGkuydtDowKVxyXG5cclxuICAxLiDrp4jsmrDsiqTrpbwg7YG066at7ZaI7J2EIOuVjCwgc3ViIOuplOuJtOydmCDsg4Htg5zsl5Ag65Sw6528IHN1YiDrqZTribTqsIAg64qY7Ja064KoL+ykhOyWtOuTrFxyXG4gIDIuIO2BtOumre2VnCAxZGVwdGgg7J2YIHN1YiDrqZTribTqsIAg64qY7Ja064KgIOuVjCDri6TrpbggMWRlcHRoIOydmCBzdWIg66mU64m064qUIOykhOyWtOuTpOyWtOyVvCDtlahcclxuICAzLiBzdWIg66mU64m06rCAIOuztOydvCDrlYwg7ZmU7IK07ZGc64qUIOycl+uwqe2WpSDtmZTsgrTtkZzroZwg67KI6rK9XHJcbiAgNC4gc3ViIOuplOuJtOqwgCDslYjrs7TsnbTqsowg65CgIOuVjCDtmZTsgrTtkZzripQg7JWE656r67Cp7ZalIO2ZlOyCtO2RnOuhnCDrs4Dqsr1cclxuKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgLy8g7ISg7Ja467aAXHJcbiAgZnVuY3Rpb24gaW5pdCgpe1xyXG4gICAgLy8g7LKY7J2MIOuhnOuUqeuQmOyXiOydhCDrlYwg7IOB7YOcXHJcbiAgICAkKCcubG5iLWRlcHRoMS1saW5rJykuZGF0YSh7J29wZW4nIDogZmFsc2V9KTtcclxuXHJcbiAgICAvLyBlYWNoKCkgOiDsmpTshowg6rCc7IiY66eM7YG8IOuwmOuzte2VmOuKlCDtlajsiJhcclxuICAgICQoJy5sbmItZGVwdGgyJykuZWFjaChmdW5jdGlvbihpbmRleCl7XHJcblxyXG4gICAgICAkKHRoaXMpLmRhdGEoeydoZWlnaHQnIDogJCh0aGlzKS5oZWlnaHQoKX0pLmNzcyh7aGVpZ2h0IDogMH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIC8vIOyLpO2Wieu2gFxyXG4gIGluaXQoKTtcclxuXHJcbiAgJCgnLmxuYi1kZXB0aDEtbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZigkKHRoaXMpLmRhdGEoJ29wZW4nKSA9PSAnZmFsc2UnKXtcclxuICAgICAgLyogalF1ZXJ5IERPTeydhCDri6jqs4Trs4TroZwg7LC+7JWE6rCIIOuVjCxcclxuICAgICAgKiAgMS4g6rCR7J2YIFZhbHVlIOOFguu2hOyXkCAkKHRoaXMp66W8IOyCrOyaqe2VmOuptCDsspjsnYwg7LC+7J2AICQodGhpcynrpbwg7J2Y66+4XHJcbiAgICAgICogIDIuIOy9nOuwse2VqOyImCDrtoDrtoTsl5AgJCh0aGlzKeulvCDsgqzsmqntlZjrqbQg7LWc7KKF7Jy866GcIOywvuydgCBET00g7JqU7IaM6rCAICQodGhpcynqsIAg65CoXHJcbiAgICAgICogKi9cclxuXHJcbiAgICAgICQodGhpcykubmV4dCgpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICBoZWlnaHQgOiAkKHRoaXMpLm5leHQoKS5kYXRhKCdoZWlnaHQnKVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLmxuYi1kZXB0aDInKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgaGVpZ2h0IDogMFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgICQodGhpcykuZGF0YSh7J29wZW4nIDogJ3RydWUnfSk7XHJcblxyXG4gICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oJy5sbmItZGVwdGgxLWxpbmsnKS5kYXRhKCdvcGVuJywgJ2ZhbHNlJyk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICQodGhpcykubmV4dCgpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICBoZWlnaHQgOiAwXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgJCh0aGlzKS5kYXRhKHsnb3BlbicgOiAnZmFsc2UnfSk7XHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxufSk7Il19
