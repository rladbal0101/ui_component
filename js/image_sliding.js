/**
 * Image Sliding CSS
 */

$(function(){

  // 선언부
  function init(){
    $('.css-sliding-view-image').eq(0).addClass('center');
    $('.css-sliding-view-image').eq(1).addClass('right');
    $('.css-sliding-view-image').eq(2).addClass('left');

    marginCtrlWrap();
    paging();
  }

  var currentIndex = 0;
  var nextIndex = 0;
  var prevIndex = 0;
  var timeID;
  var checkID;

  function moveLeft(){
    if(nextIndex >= $('.css-sliding-view-image').length){
      nextIndex = 0;
    }

    // eq()에 음수 값을 넣어 주면 뒷 순서부터 차례대로 매칭시킴
    $('.css-sliding-view-image').eq(currentIndex-1).removeClass('left ani').addClass('right');
    $('.css-sliding-view-image').eq(currentIndex).removeClass('center ani').addClass('left ani');
    $('.css-sliding-view-image').eq(nextIndex).removeClass('right').addClass('center ani');

    currentIndex = nextIndex;
    nextIndex++;
  }

  function moveRight(){
    if(nextIndex <= -1){
      nextIndex = $('.css-sliding-view-image').length-1;
    }

    if( prevIndex >= $('.css-sliding-view-image').length ){
      prevIndex = 0;
    }

    $('.css-sliding-view-image').eq(prevIndex).removeClass('right ani').addClass('left');
    $('.css-sliding-view-image').eq(currentIndex).removeClass('center ani').addClass('right ani');
    $('.css-sliding-view-image').eq(nextIndex).removeClass('left').addClass('center ani');

    currentIndex = nextIndex;
    prevIndex = currentIndex + 1;
    nextIndex--;
  }

  function autoRolling(){
    timeID = setInterval(function(){
      if( $('.css-sliding-btn-control').hasClass('play') ){
        $('.css-sliding-btn-control').removeClass('play').addClass('pause').text('pause');
      }
      nextIndex = currentIndex + 1;
      moveLeft();
    }, 3000);
  }

  function marginCtrlWrap(){

    var wrapWidth = $('.css-sliding-control-wrap').width();

    $('.css-sliding-control-wrap').css({
      'margin-left' : -( wrapWidth / 2 )
    });

  }

  function paging(){

    var imgNumber = $('.css-sliding-view-image').length; // size() 개수 구하는 함수

    for(var i=0; i<imgNumber; i++){

      $('.css-sliding-paging').append('<li class="css-sliding-paging-item"><a href="#" class="css-sliding-paging-link">' + (i+1) + '</a></li>');

    }

  }

  function pauseAndReAuto(){
    // autoRolling() 의 setInterval 을 중지 => 자동롤링 일시정지
    clearInterval( timeID );
    if( $('.css-sliding-btn-control').hasClass('pause') ){
      $('.css-sliding-btn-control').removeClass('pause').addClass('play').text('play');
    }
    clearInterval( checkID );
    var count = 0;
    checkID = setInterval(function(){
      if(count == 5){
        autoRolling();
        clearInterval(checkID);
      }
      console.log(count);
      count++;
    }, 1000);
  }


  // 실행부
  init();

  autoRolling();

  var activeClick = function(direction){

    var dir = direction;

    if( dir == 'right' ){
      nextIndex = currentIndex + 1;
      moveLeft();
    } else {
      nextIndex = currentIndex - 1;
      prevIndex = currentIndex + 1;
      moveRight();
    }

    var $selector = $('.css-sliding-arrow.' + dir); // $('.css-sliding-arrow.right')

    setTimeout(function(){
      // 재귀함수
      $selector.one('click', function(){
        activeClick(dir);
      });

      /*
       if(dir == 'left'){
       $('.css-sliding-arrow.right').one('click', function(){
       activeClick(dir);
       });
       } else {
       $('.css-sliding-arrow.left').one('click', function(){
       activeClick(dir);
       });
       }
       */
    }, 1000);

  };

  $('.css-sliding-arrow.right').one('click', function(){
    pauseAndReAuto();
    activeClick('right');
  });

  $('.css-sliding-arrow.left').one('click', function(){
    pauseAndReAuto();
    activeClick('left');
  });

  $(document).on('click', '.css-sliding-btn-control.pause', function(e){
    clearInterval(timeID);
    $(e.target).removeClass('pause').addClass('play');
    $(e.target).text('Play');
  });

  $(document).on('click', '.css-sliding-btn-control.play', function(e){
    autoRolling();
    $(e.target).removeClass('play').addClass('pause');
    $(e.target).text('Pause');
  });

  $(document).on('click', '.css-sliding-paging-item', function(e){

    pauseAndReAuto();

    e.preventDefault();

    var indexNumber = $(this).index('.css-sliding-paging-item');

    if( currentIndex != indexNumber ){

      if( currentIndex == 0 ){

        if( indexNumber == $('.css-sliding-view-image').length-1 ){
          activeClick('left');
        } else {
          activeClick('right');
        }

      } else if( currentIndex == $('.css-sliding-view-image').length-1 ){

        if( indexNumber == 0 ){
          activeClick('right');
        } else {
          activeClick('left');
        }

      } else {

        if( currentIndex < indexNumber ){
          activeClick('right');
        } else {
          activeClick('left');
        }

      }

    }

  });

});
/**
 * Image Sliding Jquery
 */

$(function(){

  // 선언부
  function init(){
    $('.js-sliding .view-image').eq(0).css({left : 0});
    $('.js-sliding .view-image').eq(1).css({left : 400});
    $('.js-sliding .view-image').eq(2).css({left : -400});

    marginCtrlWrap();
    paging();
  }

  var currentIndex = 0;
  var nextIndex = 0;
  var timeID;
  var checkID;

  function moveLeft(){
    if(nextIndex >= $('.js-sliding .view-image').length){
      nextIndex = 0;
    }
    $('.js-sliding .view-image').eq(currentIndex).stop().animate({left:-400}, 2000, 'easeOutBounce');
    $('.js-sliding .view-image').eq(nextIndex).css({left:400}).stop().animate({left:0}, 2000, 'easeOutBounce');
    currentIndex = nextIndex;
    nextIndex++;
  }

  function moveRight(){
    if(nextIndex <= -1){
      nextIndex = $('.view-image').length-1;
    }
    $('.js-sliding .view-image').eq(currentIndex).stop().animate({left:400}, 2000, 'easeOutBounce');
    $('.js-sliding .view-image').eq(nextIndex).css({left:-400}).stop().animate({left:0}, 2000, 'easeOutBounce');

    currentIndex = nextIndex;
    nextIndex--;
  }

  function autoRolling(){
    timeID = setInterval(function(){
      nextIndex = currentIndex + 1;
      moveLeft();
    }, 3000);
  }

  function marginCtrlWrap(){

    var wrapWidth = $('.js-sliding .control-wrap').width();

    $('.js-sliding .control-wrap').css({
      'margin-left' : -( wrapWidth / 2 )
    });

  }

  function paging(){

    var imgNumber = $('.js-sliding .view-image').length; // size() 개수 구하는 함수

    for(var i=0; i<imgNumber; i++){

      $('.js-sliding .paging').append('<li class="paging-item"><a href="#" class="paging-link">' + (i+1) + '</a></li>');

    }

  }

  // 실행부
  init();
  autoRolling();

  $('.arrow.right').on('click', function(){
    clearInterval( timeID );
    clearInterval( checkID );
    var count = 0;
    checkID = setInterval(function(){
      if(count == 5){
        autoRolling();
        clearInterval(checkID);
      }
      console.log(count);
      count++;
    }, 1000);
    nextIndex = currentIndex + 1;
    if( !$('.view-image').is(':animated') ){
      moveLeft();
    }
  });

  $('.arrow.left').on('click', function(){
    clearInterval( timeID );
    clearInterval( checkID );
    var count = 0;
    checkID = setInterval(function(){
      if(count == 5){
        autoRolling();
        clearInterval(checkID);
      }
      console.log(count);
      count++;
    }, 1000);
    nextIndex = currentIndex - 1;
    if( !$('.view-image').is(':animated') ){
      moveRight();
    }
  });

  $(document).on('click', '.btn-control.pause', function(e){
    clearInterval(timeID);
    $(e.target).removeClass('pause').addClass('play');
    $(e.target).text('Play');
  });

  $(document).on('click', '.btn-control.play', function(e){
    autoRolling();
    $(e.target).removeClass('play').addClass('pause');
    $(e.target).text('Pause');
  });

  $(document).on('click', '.paging-item', function(e){

    e.preventDefault();

    var indexNumber = $(this).index('.paging-item');

    if( currentIndex != indexNumber ){

      if( currentIndex == 0 ){

        if( indexNumber == $('.view-image').length-1 ){
          nextIndex = currentIndex - 1;
          if( !$('.view-image').is(':animated') ){
            moveRight();
          }
        } else {
          nextIndex = currentIndex + 1;
          if( !$('.view-image').is(':animated') ){
            moveLeft();
          }
        }

      } else if( currentIndex == $('.view-image').length-1 ){

        if( indexNumber == 0 ){
          nextIndex = currentIndex + 1;
          if( !$('.view-image').is(':animated') ){
            moveLeft();
          }
        } else {
          nextIndex = currentIndex - 1;
          if( !$('.view-image').is(':animated') ){
            moveRight();
          }
        }

      } else {

        if( currentIndex < indexNumber ){
          nextIndex = currentIndex + 1;
          if( !$('.view-image').is(':animated') ){
            moveLeft();
          }
        } else {
          nextIndex = currentIndex - 1;
          if( !$('.view-image').is(':animated') ){
            moveRight();
          }
        }

      }

    }

  });

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9pbWFnZV9zbGlkaW5nX2Nzcy5qcyIsIl9pbWFnZV9zbGlkaW5nX2pxdWVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbWFnZV9zbGlkaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEltYWdlIFNsaWRpbmcgQ1NTXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAvLyDshKDslrjrtoBcclxuICBmdW5jdGlvbiBpbml0KCl7XHJcbiAgICAkKCcuY3NzLXNsaWRpbmctdmlldy1pbWFnZScpLmVxKDApLmFkZENsYXNzKCdjZW50ZXInKTtcclxuICAgICQoJy5jc3Mtc2xpZGluZy12aWV3LWltYWdlJykuZXEoMSkuYWRkQ2xhc3MoJ3JpZ2h0Jyk7XHJcbiAgICAkKCcuY3NzLXNsaWRpbmctdmlldy1pbWFnZScpLmVxKDIpLmFkZENsYXNzKCdsZWZ0Jyk7XHJcblxyXG4gICAgbWFyZ2luQ3RybFdyYXAoKTtcclxuICAgIHBhZ2luZygpO1xyXG4gIH1cclxuXHJcbiAgdmFyIGN1cnJlbnRJbmRleCA9IDA7XHJcbiAgdmFyIG5leHRJbmRleCA9IDA7XHJcbiAgdmFyIHByZXZJbmRleCA9IDA7XHJcbiAgdmFyIHRpbWVJRDtcclxuICB2YXIgY2hlY2tJRDtcclxuXHJcbiAgZnVuY3Rpb24gbW92ZUxlZnQoKXtcclxuICAgIGlmKG5leHRJbmRleCA+PSAkKCcuY3NzLXNsaWRpbmctdmlldy1pbWFnZScpLmxlbmd0aCl7XHJcbiAgICAgIG5leHRJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXEoKeyXkCDsnYzsiJgg6rCS7J2EIOuEo+yWtCDso7zrqbQg65K3IOyInOyEnOu2gO2EsCDssKjroYDrjIDroZwg66ek7Lmt7Iuc7YK0XHJcbiAgICAkKCcuY3NzLXNsaWRpbmctdmlldy1pbWFnZScpLmVxKGN1cnJlbnRJbmRleC0xKS5yZW1vdmVDbGFzcygnbGVmdCBhbmknKS5hZGRDbGFzcygncmlnaHQnKTtcclxuICAgICQoJy5jc3Mtc2xpZGluZy12aWV3LWltYWdlJykuZXEoY3VycmVudEluZGV4KS5yZW1vdmVDbGFzcygnY2VudGVyIGFuaScpLmFkZENsYXNzKCdsZWZ0IGFuaScpO1xyXG4gICAgJCgnLmNzcy1zbGlkaW5nLXZpZXctaW1hZ2UnKS5lcShuZXh0SW5kZXgpLnJlbW92ZUNsYXNzKCdyaWdodCcpLmFkZENsYXNzKCdjZW50ZXIgYW5pJyk7XHJcblxyXG4gICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xyXG4gICAgbmV4dEluZGV4Kys7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtb3ZlUmlnaHQoKXtcclxuICAgIGlmKG5leHRJbmRleCA8PSAtMSl7XHJcbiAgICAgIG5leHRJbmRleCA9ICQoJy5jc3Mtc2xpZGluZy12aWV3LWltYWdlJykubGVuZ3RoLTE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoIHByZXZJbmRleCA+PSAkKCcuY3NzLXNsaWRpbmctdmlldy1pbWFnZScpLmxlbmd0aCApe1xyXG4gICAgICBwcmV2SW5kZXggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgICQoJy5jc3Mtc2xpZGluZy12aWV3LWltYWdlJykuZXEocHJldkluZGV4KS5yZW1vdmVDbGFzcygncmlnaHQgYW5pJykuYWRkQ2xhc3MoJ2xlZnQnKTtcclxuICAgICQoJy5jc3Mtc2xpZGluZy12aWV3LWltYWdlJykuZXEoY3VycmVudEluZGV4KS5yZW1vdmVDbGFzcygnY2VudGVyIGFuaScpLmFkZENsYXNzKCdyaWdodCBhbmknKTtcclxuICAgICQoJy5jc3Mtc2xpZGluZy12aWV3LWltYWdlJykuZXEobmV4dEluZGV4KS5yZW1vdmVDbGFzcygnbGVmdCcpLmFkZENsYXNzKCdjZW50ZXIgYW5pJyk7XHJcblxyXG4gICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xyXG4gICAgcHJldkluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcclxuICAgIG5leHRJbmRleC0tO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYXV0b1JvbGxpbmcoKXtcclxuICAgIHRpbWVJRCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbiAgICAgIGlmKCAkKCcuY3NzLXNsaWRpbmctYnRuLWNvbnRyb2wnKS5oYXNDbGFzcygncGxheScpICl7XHJcbiAgICAgICAgJCgnLmNzcy1zbGlkaW5nLWJ0bi1jb250cm9sJykucmVtb3ZlQ2xhc3MoJ3BsYXknKS5hZGRDbGFzcygncGF1c2UnKS50ZXh0KCdwYXVzZScpO1xyXG4gICAgICB9XHJcbiAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICAgIG1vdmVMZWZ0KCk7XHJcbiAgICB9LCAzMDAwKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1hcmdpbkN0cmxXcmFwKCl7XHJcblxyXG4gICAgdmFyIHdyYXBXaWR0aCA9ICQoJy5jc3Mtc2xpZGluZy1jb250cm9sLXdyYXAnKS53aWR0aCgpO1xyXG5cclxuICAgICQoJy5jc3Mtc2xpZGluZy1jb250cm9sLXdyYXAnKS5jc3Moe1xyXG4gICAgICAnbWFyZ2luLWxlZnQnIDogLSggd3JhcFdpZHRoIC8gMiApXHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwYWdpbmcoKXtcclxuXHJcbiAgICB2YXIgaW1nTnVtYmVyID0gJCgnLmNzcy1zbGlkaW5nLXZpZXctaW1hZ2UnKS5sZW5ndGg7IC8vIHNpemUoKSDqsJzsiJgg6rWs7ZWY64qUIO2VqOyImFxyXG5cclxuICAgIGZvcih2YXIgaT0wOyBpPGltZ051bWJlcjsgaSsrKXtcclxuXHJcbiAgICAgICQoJy5jc3Mtc2xpZGluZy1wYWdpbmcnKS5hcHBlbmQoJzxsaSBjbGFzcz1cImNzcy1zbGlkaW5nLXBhZ2luZy1pdGVtXCI+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImNzcy1zbGlkaW5nLXBhZ2luZy1saW5rXCI+JyArIChpKzEpICsgJzwvYT48L2xpPicpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwYXVzZUFuZFJlQXV0bygpe1xyXG4gICAgLy8gYXV0b1JvbGxpbmcoKSDsnZggc2V0SW50ZXJ2YWwg7J2EIOykkeyngCA9PiDsnpDrj5nroaTrp4Eg7J287Iuc7KCV7KeAXHJcbiAgICBjbGVhckludGVydmFsKCB0aW1lSUQgKTtcclxuICAgIGlmKCAkKCcuY3NzLXNsaWRpbmctYnRuLWNvbnRyb2wnKS5oYXNDbGFzcygncGF1c2UnKSApe1xyXG4gICAgICAkKCcuY3NzLXNsaWRpbmctYnRuLWNvbnRyb2wnKS5yZW1vdmVDbGFzcygncGF1c2UnKS5hZGRDbGFzcygncGxheScpLnRleHQoJ3BsYXknKTtcclxuICAgIH1cclxuICAgIGNsZWFySW50ZXJ2YWwoIGNoZWNrSUQgKTtcclxuICAgIHZhciBjb3VudCA9IDA7XHJcbiAgICBjaGVja0lEID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuICAgICAgaWYoY291bnQgPT0gNSl7XHJcbiAgICAgICAgYXV0b1JvbGxpbmcoKTtcclxuICAgICAgICBjbGVhckludGVydmFsKGNoZWNrSUQpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKGNvdW50KTtcclxuICAgICAgY291bnQrKztcclxuICAgIH0sIDEwMDApO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vIOyLpO2Wieu2gFxyXG4gIGluaXQoKTtcclxuXHJcbiAgYXV0b1JvbGxpbmcoKTtcclxuXHJcbiAgdmFyIGFjdGl2ZUNsaWNrID0gZnVuY3Rpb24oZGlyZWN0aW9uKXtcclxuXHJcbiAgICB2YXIgZGlyID0gZGlyZWN0aW9uO1xyXG5cclxuICAgIGlmKCBkaXIgPT0gJ3JpZ2h0JyApe1xyXG4gICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgICBtb3ZlTGVmdCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcclxuICAgICAgcHJldkluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcclxuICAgICAgbW92ZVJpZ2h0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyICRzZWxlY3RvciA9ICQoJy5jc3Mtc2xpZGluZy1hcnJvdy4nICsgZGlyKTsgLy8gJCgnLmNzcy1zbGlkaW5nLWFycm93LnJpZ2h0JylcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgIC8vIOyerOq3gO2VqOyImFxyXG4gICAgICAkc2VsZWN0b3Iub25lKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgYWN0aXZlQ2xpY2soZGlyKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvKlxyXG4gICAgICAgaWYoZGlyID09ICdsZWZ0Jyl7XHJcbiAgICAgICAkKCcuY3NzLXNsaWRpbmctYXJyb3cucmlnaHQnKS5vbmUoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgIGFjdGl2ZUNsaWNrKGRpcik7XHJcbiAgICAgICB9KTtcclxuICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAkKCcuY3NzLXNsaWRpbmctYXJyb3cubGVmdCcpLm9uZSgnY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgYWN0aXZlQ2xpY2soZGlyKTtcclxuICAgICAgIH0pO1xyXG4gICAgICAgfVxyXG4gICAgICAgKi9cclxuICAgIH0sIDEwMDApO1xyXG5cclxuICB9O1xyXG5cclxuICAkKCcuY3NzLXNsaWRpbmctYXJyb3cucmlnaHQnKS5vbmUoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIHBhdXNlQW5kUmVBdXRvKCk7XHJcbiAgICBhY3RpdmVDbGljaygncmlnaHQnKTtcclxuICB9KTtcclxuXHJcbiAgJCgnLmNzcy1zbGlkaW5nLWFycm93LmxlZnQnKS5vbmUoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIHBhdXNlQW5kUmVBdXRvKCk7XHJcbiAgICBhY3RpdmVDbGljaygnbGVmdCcpO1xyXG4gIH0pO1xyXG5cclxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNzcy1zbGlkaW5nLWJ0bi1jb250cm9sLnBhdXNlJywgZnVuY3Rpb24oZSl7XHJcbiAgICBjbGVhckludGVydmFsKHRpbWVJRCk7XHJcbiAgICAkKGUudGFyZ2V0KS5yZW1vdmVDbGFzcygncGF1c2UnKS5hZGRDbGFzcygncGxheScpO1xyXG4gICAgJChlLnRhcmdldCkudGV4dCgnUGxheScpO1xyXG4gIH0pO1xyXG5cclxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNzcy1zbGlkaW5nLWJ0bi1jb250cm9sLnBsYXknLCBmdW5jdGlvbihlKXtcclxuICAgIGF1dG9Sb2xsaW5nKCk7XHJcbiAgICAkKGUudGFyZ2V0KS5yZW1vdmVDbGFzcygncGxheScpLmFkZENsYXNzKCdwYXVzZScpO1xyXG4gICAgJChlLnRhcmdldCkudGV4dCgnUGF1c2UnKTtcclxuICB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jc3Mtc2xpZGluZy1wYWdpbmctaXRlbScsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgIHBhdXNlQW5kUmVBdXRvKCk7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHZhciBpbmRleE51bWJlciA9ICQodGhpcykuaW5kZXgoJy5jc3Mtc2xpZGluZy1wYWdpbmctaXRlbScpO1xyXG5cclxuICAgIGlmKCBjdXJyZW50SW5kZXggIT0gaW5kZXhOdW1iZXIgKXtcclxuXHJcbiAgICAgIGlmKCBjdXJyZW50SW5kZXggPT0gMCApe1xyXG5cclxuICAgICAgICBpZiggaW5kZXhOdW1iZXIgPT0gJCgnLmNzcy1zbGlkaW5nLXZpZXctaW1hZ2UnKS5sZW5ndGgtMSApe1xyXG4gICAgICAgICAgYWN0aXZlQ2xpY2soJ2xlZnQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWN0aXZlQ2xpY2soJ3JpZ2h0Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSBlbHNlIGlmKCBjdXJyZW50SW5kZXggPT0gJCgnLmNzcy1zbGlkaW5nLXZpZXctaW1hZ2UnKS5sZW5ndGgtMSApe1xyXG5cclxuICAgICAgICBpZiggaW5kZXhOdW1iZXIgPT0gMCApe1xyXG4gICAgICAgICAgYWN0aXZlQ2xpY2soJ3JpZ2h0Jyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFjdGl2ZUNsaWNrKCdsZWZ0Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgaWYoIGN1cnJlbnRJbmRleCA8IGluZGV4TnVtYmVyICl7XHJcbiAgICAgICAgICBhY3RpdmVDbGljaygncmlnaHQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWN0aXZlQ2xpY2soJ2xlZnQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcbn0pOyIsIi8qKlxyXG4gKiBJbWFnZSBTbGlkaW5nIEpxdWVyeVxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgLy8g7ISg7Ja467aAXHJcbiAgZnVuY3Rpb24gaW5pdCgpe1xyXG4gICAgJCgnLmpzLXNsaWRpbmcgLnZpZXctaW1hZ2UnKS5lcSgwKS5jc3Moe2xlZnQgOiAwfSk7XHJcbiAgICAkKCcuanMtc2xpZGluZyAudmlldy1pbWFnZScpLmVxKDEpLmNzcyh7bGVmdCA6IDQwMH0pO1xyXG4gICAgJCgnLmpzLXNsaWRpbmcgLnZpZXctaW1hZ2UnKS5lcSgyKS5jc3Moe2xlZnQgOiAtNDAwfSk7XHJcblxyXG4gICAgbWFyZ2luQ3RybFdyYXAoKTtcclxuICAgIHBhZ2luZygpO1xyXG4gIH1cclxuXHJcbiAgdmFyIGN1cnJlbnRJbmRleCA9IDA7XHJcbiAgdmFyIG5leHRJbmRleCA9IDA7XHJcbiAgdmFyIHRpbWVJRDtcclxuICB2YXIgY2hlY2tJRDtcclxuXHJcbiAgZnVuY3Rpb24gbW92ZUxlZnQoKXtcclxuICAgIGlmKG5leHRJbmRleCA+PSAkKCcuanMtc2xpZGluZyAudmlldy1pbWFnZScpLmxlbmd0aCl7XHJcbiAgICAgIG5leHRJbmRleCA9IDA7XHJcbiAgICB9XHJcbiAgICAkKCcuanMtc2xpZGluZyAudmlldy1pbWFnZScpLmVxKGN1cnJlbnRJbmRleCkuc3RvcCgpLmFuaW1hdGUoe2xlZnQ6LTQwMH0sIDIwMDAsICdlYXNlT3V0Qm91bmNlJyk7XHJcbiAgICAkKCcuanMtc2xpZGluZyAudmlldy1pbWFnZScpLmVxKG5leHRJbmRleCkuY3NzKHtsZWZ0OjQwMH0pLnN0b3AoKS5hbmltYXRlKHtsZWZ0OjB9LCAyMDAwLCAnZWFzZU91dEJvdW5jZScpO1xyXG4gICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xyXG4gICAgbmV4dEluZGV4Kys7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtb3ZlUmlnaHQoKXtcclxuICAgIGlmKG5leHRJbmRleCA8PSAtMSl7XHJcbiAgICAgIG5leHRJbmRleCA9ICQoJy52aWV3LWltYWdlJykubGVuZ3RoLTE7XHJcbiAgICB9XHJcbiAgICAkKCcuanMtc2xpZGluZyAudmlldy1pbWFnZScpLmVxKGN1cnJlbnRJbmRleCkuc3RvcCgpLmFuaW1hdGUoe2xlZnQ6NDAwfSwgMjAwMCwgJ2Vhc2VPdXRCb3VuY2UnKTtcclxuICAgICQoJy5qcy1zbGlkaW5nIC52aWV3LWltYWdlJykuZXEobmV4dEluZGV4KS5jc3Moe2xlZnQ6LTQwMH0pLnN0b3AoKS5hbmltYXRlKHtsZWZ0OjB9LCAyMDAwLCAnZWFzZU91dEJvdW5jZScpO1xyXG5cclxuICAgIGN1cnJlbnRJbmRleCA9IG5leHRJbmRleDtcclxuICAgIG5leHRJbmRleC0tO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYXV0b1JvbGxpbmcoKXtcclxuICAgIHRpbWVJRCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbiAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICAgIG1vdmVMZWZ0KCk7XHJcbiAgICB9LCAzMDAwKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1hcmdpbkN0cmxXcmFwKCl7XHJcblxyXG4gICAgdmFyIHdyYXBXaWR0aCA9ICQoJy5qcy1zbGlkaW5nIC5jb250cm9sLXdyYXAnKS53aWR0aCgpO1xyXG5cclxuICAgICQoJy5qcy1zbGlkaW5nIC5jb250cm9sLXdyYXAnKS5jc3Moe1xyXG4gICAgICAnbWFyZ2luLWxlZnQnIDogLSggd3JhcFdpZHRoIC8gMiApXHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwYWdpbmcoKXtcclxuXHJcbiAgICB2YXIgaW1nTnVtYmVyID0gJCgnLmpzLXNsaWRpbmcgLnZpZXctaW1hZ2UnKS5sZW5ndGg7IC8vIHNpemUoKSDqsJzsiJgg6rWs7ZWY64qUIO2VqOyImFxyXG5cclxuICAgIGZvcih2YXIgaT0wOyBpPGltZ051bWJlcjsgaSsrKXtcclxuXHJcbiAgICAgICQoJy5qcy1zbGlkaW5nIC5wYWdpbmcnKS5hcHBlbmQoJzxsaSBjbGFzcz1cInBhZ2luZy1pdGVtXCI+PGEgaHJlZj1cIiNcIiBjbGFzcz1cInBhZ2luZy1saW5rXCI+JyArIChpKzEpICsgJzwvYT48L2xpPicpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAvLyDsi6TtlonrtoBcclxuICBpbml0KCk7XHJcbiAgYXV0b1JvbGxpbmcoKTtcclxuXHJcbiAgJCgnLmFycm93LnJpZ2h0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIGNsZWFySW50ZXJ2YWwoIHRpbWVJRCApO1xyXG4gICAgY2xlYXJJbnRlcnZhbCggY2hlY2tJRCApO1xyXG4gICAgdmFyIGNvdW50ID0gMDtcclxuICAgIGNoZWNrSUQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG4gICAgICBpZihjb3VudCA9PSA1KXtcclxuICAgICAgICBhdXRvUm9sbGluZygpO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoY2hlY2tJRCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coY291bnQpO1xyXG4gICAgICBjb3VudCsrO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgaWYoICEkKCcudmlldy1pbWFnZScpLmlzKCc6YW5pbWF0ZWQnKSApe1xyXG4gICAgICBtb3ZlTGVmdCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKCcuYXJyb3cubGVmdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBjbGVhckludGVydmFsKCB0aW1lSUQgKTtcclxuICAgIGNsZWFySW50ZXJ2YWwoIGNoZWNrSUQgKTtcclxuICAgIHZhciBjb3VudCA9IDA7XHJcbiAgICBjaGVja0lEID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuICAgICAgaWYoY291bnQgPT0gNSl7XHJcbiAgICAgICAgYXV0b1JvbGxpbmcoKTtcclxuICAgICAgICBjbGVhckludGVydmFsKGNoZWNrSUQpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKGNvdW50KTtcclxuICAgICAgY291bnQrKztcclxuICAgIH0sIDEwMDApO1xyXG4gICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcclxuICAgIGlmKCAhJCgnLnZpZXctaW1hZ2UnKS5pcygnOmFuaW1hdGVkJykgKXtcclxuICAgICAgbW92ZVJpZ2h0KCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYnRuLWNvbnRyb2wucGF1c2UnLCBmdW5jdGlvbihlKXtcclxuICAgIGNsZWFySW50ZXJ2YWwodGltZUlEKTtcclxuICAgICQoZS50YXJnZXQpLnJlbW92ZUNsYXNzKCdwYXVzZScpLmFkZENsYXNzKCdwbGF5Jyk7XHJcbiAgICAkKGUudGFyZ2V0KS50ZXh0KCdQbGF5Jyk7XHJcbiAgfSk7XHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYnRuLWNvbnRyb2wucGxheScsIGZ1bmN0aW9uKGUpe1xyXG4gICAgYXV0b1JvbGxpbmcoKTtcclxuICAgICQoZS50YXJnZXQpLnJlbW92ZUNsYXNzKCdwbGF5JykuYWRkQ2xhc3MoJ3BhdXNlJyk7XHJcbiAgICAkKGUudGFyZ2V0KS50ZXh0KCdQYXVzZScpO1xyXG4gIH0pO1xyXG5cclxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnBhZ2luZy1pdGVtJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHZhciBpbmRleE51bWJlciA9ICQodGhpcykuaW5kZXgoJy5wYWdpbmctaXRlbScpO1xyXG5cclxuICAgIGlmKCBjdXJyZW50SW5kZXggIT0gaW5kZXhOdW1iZXIgKXtcclxuXHJcbiAgICAgIGlmKCBjdXJyZW50SW5kZXggPT0gMCApe1xyXG5cclxuICAgICAgICBpZiggaW5kZXhOdW1iZXIgPT0gJCgnLnZpZXctaW1hZ2UnKS5sZW5ndGgtMSApe1xyXG4gICAgICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcclxuICAgICAgICAgIGlmKCAhJCgnLnZpZXctaW1hZ2UnKS5pcygnOmFuaW1hdGVkJykgKXtcclxuICAgICAgICAgICAgbW92ZVJpZ2h0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICAgICAgICBpZiggISQoJy52aWV3LWltYWdlJykuaXMoJzphbmltYXRlZCcpICl7XHJcbiAgICAgICAgICAgIG1vdmVMZWZ0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSBlbHNlIGlmKCBjdXJyZW50SW5kZXggPT0gJCgnLnZpZXctaW1hZ2UnKS5sZW5ndGgtMSApe1xyXG5cclxuICAgICAgICBpZiggaW5kZXhOdW1iZXIgPT0gMCApe1xyXG4gICAgICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcclxuICAgICAgICAgIGlmKCAhJCgnLnZpZXctaW1hZ2UnKS5pcygnOmFuaW1hdGVkJykgKXtcclxuICAgICAgICAgICAgbW92ZUxlZnQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcclxuICAgICAgICAgIGlmKCAhJCgnLnZpZXctaW1hZ2UnKS5pcygnOmFuaW1hdGVkJykgKXtcclxuICAgICAgICAgICAgbW92ZVJpZ2h0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgaWYoIGN1cnJlbnRJbmRleCA8IGluZGV4TnVtYmVyICl7XHJcbiAgICAgICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgICAgICAgaWYoICEkKCcudmlldy1pbWFnZScpLmlzKCc6YW5pbWF0ZWQnKSApe1xyXG4gICAgICAgICAgICBtb3ZlTGVmdCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xyXG4gICAgICAgICAgaWYoICEkKCcudmlldy1pbWFnZScpLmlzKCc6YW5pbWF0ZWQnKSApe1xyXG4gICAgICAgICAgICBtb3ZlUmlnaHQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcbn0pOyJdfQ==
