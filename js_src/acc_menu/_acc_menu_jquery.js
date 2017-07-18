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