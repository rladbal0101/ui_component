/**
 * Image Sliding CSS
 */



/**
 * Image Sliding jQuery
 */

$(function(){
  // 선언부
  function init(){
    $('.view-image').eq(0).css({left:0});
    $('.view-image').eq(1).css({left:400});
    $('.view-image').eq(2).css({left:-400});

    marginCtrlWrap();
    paging();
  }

  var currentIndex = 0;
  var nextIndex = 0;
  var timeID;
  var checkID;

  function moveLeft(){
    if(nextIndex >= $('.view-image').length){
      nextIndex = 0;
    }
    $('.view-image').eq(currentIndex).stop().animate({left:-400}, 2000, 'easeOutBounce');
    $('.view-image').eq(nextIndex).css({left:400}).stop().animate({left:0}, 2000, 'easeOutBounce');
    currentIndex = nextIndex;
    nextIndex ++;
  }

  function moveRight(){
    if(nextIndex <= -1){
      nextIndex = $('.view-image').length-1;
    }
    $('.view-image').eq(currentIndex).stop().animate({left:400}, 2000, 'easeOutBounce');
    $('.view-image').eq(nextIndex).css({left:-400}).stop().animate({left:0}, 2000, 'easeOutBounce');
    currentIndex = nextIndex;
    nextIndex --;
  }

  function autoRolling(){
    timeID = setInterval(function(){
      nextIndex = currentIndex + 1;
      moveLeft();
    }, 3000);
  }

  function marginCtrlWrap(){
    var wrapWidth = $('.control-wrap').width();
    $('.control-wrap').css({
      'margin-left' : -(wrapWidth / 2)
    });
  }

  function paging(){

    var imgNumber = $('.view-image').length; // size() :  개수 구하는 함수
    for(var i=0; i<imgNumber; i++){

      $('.paging').append('<li class="paging-item"><a href="#" class="paging-link">' + (i+1) + '</a></li>');

    }

  }

  function clickPaging(){

  }

  // 실행부
  init();

      autoRolling();


  $('.arrow.right').on('click', function(){

    clearInterval(timeID);
    clearInterval(checkID);
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
    clearInterval(timeID);
    clearInterval(checkID);
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

      } else if( currentIndex == $('.view-image').length-1 ) {

        if (indexNumber == 0) {
          nextIndex = currentIndex + 1;
          if (!$('.view-image').is(':animated')) {
            moveLeft();
          }
        } else {
          nextIndex = currentIndex - 1;
          if (!$('.view-image').is(':animated')) {
            moveRight();
          }
        }

      } else {
        if (currentIndex < indexNumber) {
          nextIndex = currentIndex + 1;
          if (!$('.view-image').is(':animated')) {
            moveLeft();
          }
        } else {
          nextIndex = currentIndex - 1;
          if (!$('.view-image').is(':animated')) {
            moveRight();
          }
        }
      }
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9pbWFnZV9zbGlkaW5nX2Nzcy5qcyIsIl9pbWFnZV9zbGlkaW5nX2pxdWVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbWFnZV9zbGlkaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEltYWdlIFNsaWRpbmcgQ1NTXHJcbiAqL1xyXG5cclxuXHJcbiIsIi8qKlxyXG4gKiBJbWFnZSBTbGlkaW5nIGpRdWVyeVxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuICAvLyDshKDslrjrtoBcclxuICBmdW5jdGlvbiBpbml0KCl7XHJcbiAgICAkKCcudmlldy1pbWFnZScpLmVxKDApLmNzcyh7bGVmdDowfSk7XHJcbiAgICAkKCcudmlldy1pbWFnZScpLmVxKDEpLmNzcyh7bGVmdDo0MDB9KTtcclxuICAgICQoJy52aWV3LWltYWdlJykuZXEoMikuY3NzKHtsZWZ0Oi00MDB9KTtcclxuXHJcbiAgICBtYXJnaW5DdHJsV3JhcCgpO1xyXG4gICAgcGFnaW5nKCk7XHJcbiAgfVxyXG5cclxuICB2YXIgY3VycmVudEluZGV4ID0gMDtcclxuICB2YXIgbmV4dEluZGV4ID0gMDtcclxuICB2YXIgdGltZUlEO1xyXG4gIHZhciBjaGVja0lEO1xyXG5cclxuICBmdW5jdGlvbiBtb3ZlTGVmdCgpe1xyXG4gICAgaWYobmV4dEluZGV4ID49ICQoJy52aWV3LWltYWdlJykubGVuZ3RoKXtcclxuICAgICAgbmV4dEluZGV4ID0gMDtcclxuICAgIH1cclxuICAgICQoJy52aWV3LWltYWdlJykuZXEoY3VycmVudEluZGV4KS5zdG9wKCkuYW5pbWF0ZSh7bGVmdDotNDAwfSwgMjAwMCwgJ2Vhc2VPdXRCb3VuY2UnKTtcclxuICAgICQoJy52aWV3LWltYWdlJykuZXEobmV4dEluZGV4KS5jc3Moe2xlZnQ6NDAwfSkuc3RvcCgpLmFuaW1hdGUoe2xlZnQ6MH0sIDIwMDAsICdlYXNlT3V0Qm91bmNlJyk7XHJcbiAgICBjdXJyZW50SW5kZXggPSBuZXh0SW5kZXg7XHJcbiAgICBuZXh0SW5kZXggKys7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtb3ZlUmlnaHQoKXtcclxuICAgIGlmKG5leHRJbmRleCA8PSAtMSl7XHJcbiAgICAgIG5leHRJbmRleCA9ICQoJy52aWV3LWltYWdlJykubGVuZ3RoLTE7XHJcbiAgICB9XHJcbiAgICAkKCcudmlldy1pbWFnZScpLmVxKGN1cnJlbnRJbmRleCkuc3RvcCgpLmFuaW1hdGUoe2xlZnQ6NDAwfSwgMjAwMCwgJ2Vhc2VPdXRCb3VuY2UnKTtcclxuICAgICQoJy52aWV3LWltYWdlJykuZXEobmV4dEluZGV4KS5jc3Moe2xlZnQ6LTQwMH0pLnN0b3AoKS5hbmltYXRlKHtsZWZ0OjB9LCAyMDAwLCAnZWFzZU91dEJvdW5jZScpO1xyXG4gICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xyXG4gICAgbmV4dEluZGV4IC0tO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYXV0b1JvbGxpbmcoKXtcclxuICAgIHRpbWVJRCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbiAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICAgIG1vdmVMZWZ0KCk7XHJcbiAgICB9LCAzMDAwKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1hcmdpbkN0cmxXcmFwKCl7XHJcbiAgICB2YXIgd3JhcFdpZHRoID0gJCgnLmNvbnRyb2wtd3JhcCcpLndpZHRoKCk7XHJcbiAgICAkKCcuY29udHJvbC13cmFwJykuY3NzKHtcclxuICAgICAgJ21hcmdpbi1sZWZ0JyA6IC0od3JhcFdpZHRoIC8gMilcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGFnaW5nKCl7XHJcblxyXG4gICAgdmFyIGltZ051bWJlciA9ICQoJy52aWV3LWltYWdlJykubGVuZ3RoOyAvLyBzaXplKCkgOiAg6rCc7IiYIOq1rO2VmOuKlCDtlajsiJhcclxuICAgIGZvcih2YXIgaT0wOyBpPGltZ051bWJlcjsgaSsrKXtcclxuXHJcbiAgICAgICQoJy5wYWdpbmcnKS5hcHBlbmQoJzxsaSBjbGFzcz1cInBhZ2luZy1pdGVtXCI+PGEgaHJlZj1cIiNcIiBjbGFzcz1cInBhZ2luZy1saW5rXCI+JyArIChpKzEpICsgJzwvYT48L2xpPicpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbGlja1BhZ2luZygpe1xyXG5cclxuICB9XHJcblxyXG4gIC8vIOyLpO2Wieu2gFxyXG4gIGluaXQoKTtcclxuXHJcbiAgICAgIGF1dG9Sb2xsaW5nKCk7XHJcblxyXG5cclxuICAkKCcuYXJyb3cucmlnaHQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIGNsZWFySW50ZXJ2YWwodGltZUlEKTtcclxuICAgIGNsZWFySW50ZXJ2YWwoY2hlY2tJRCk7XHJcbiAgICB2YXIgY291bnQgPSAwO1xyXG4gICAgY2hlY2tJRCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbiAgICAgIGlmKGNvdW50ID09IDUpe1xyXG4gICAgICAgIGF1dG9Sb2xsaW5nKCk7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChjaGVja0lEKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhjb3VudCk7XHJcbiAgICAgIGNvdW50Kys7XHJcbiAgICB9LCAxMDAwKTtcclxuXHJcbiAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgaWYoICEkKCcudmlldy1pbWFnZScpLmlzKCc6YW5pbWF0ZWQnKSApe1xyXG4gICAgICBtb3ZlTGVmdCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKCcuYXJyb3cubGVmdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBjbGVhckludGVydmFsKHRpbWVJRCk7XHJcbiAgICBjbGVhckludGVydmFsKGNoZWNrSUQpO1xyXG4gICAgdmFyIGNvdW50ID0gMDtcclxuICAgIGNoZWNrSUQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG4gICAgICBpZihjb3VudCA9PSA1KXtcclxuICAgICAgICBhdXRvUm9sbGluZygpO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoY2hlY2tJRCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coY291bnQpO1xyXG4gICAgICBjb3VudCsrO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xyXG4gICAgaWYoICEkKCcudmlldy1pbWFnZScpLmlzKCc6YW5pbWF0ZWQnKSApe1xyXG4gICAgICBtb3ZlUmlnaHQoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5idG4tY29udHJvbC5wYXVzZScsIGZ1bmN0aW9uKGUpe1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aW1lSUQpO1xyXG4gICAgJChlLnRhcmdldCkucmVtb3ZlQ2xhc3MoJ3BhdXNlJykuYWRkQ2xhc3MoJ3BsYXknKTtcclxuICAgICQoZS50YXJnZXQpLnRleHQoJ1BsYXknKTtcclxuICB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5idG4tY29udHJvbC5wbGF5JywgZnVuY3Rpb24oZSl7XHJcbiAgICBhdXRvUm9sbGluZygpO1xyXG4gICAgJChlLnRhcmdldCkucmVtb3ZlQ2xhc3MoJ3BsYXknKS5hZGRDbGFzcygncGF1c2UnKTtcclxuICAgICQoZS50YXJnZXQpLnRleHQoJ1BhdXNlJyk7XHJcbiAgfSk7XHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcucGFnaW5nLWl0ZW0nLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB2YXIgaW5kZXhOdW1iZXIgPSAkKHRoaXMpLmluZGV4KCcucGFnaW5nLWl0ZW0nKTtcclxuXHJcbiAgICBpZiggY3VycmVudEluZGV4ICE9IGluZGV4TnVtYmVyICl7XHJcblxyXG4gICAgICBpZiggY3VycmVudEluZGV4ID09IDAgKXtcclxuICAgICAgICBpZiggaW5kZXhOdW1iZXIgPT0gJCgnLnZpZXctaW1hZ2UnKS5sZW5ndGgtMSApe1xyXG4gICAgICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcclxuICAgICAgICAgIGlmKCAhJCgnLnZpZXctaW1hZ2UnKS5pcygnOmFuaW1hdGVkJykgKXtcclxuICAgICAgICAgICAgbW92ZVJpZ2h0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICAgICAgICBpZiggISQoJy52aWV3LWltYWdlJykuaXMoJzphbmltYXRlZCcpICl7XHJcbiAgICAgICAgICAgIG1vdmVMZWZ0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSBlbHNlIGlmKCBjdXJyZW50SW5kZXggPT0gJCgnLnZpZXctaW1hZ2UnKS5sZW5ndGgtMSApIHtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4TnVtYmVyID09IDApIHtcclxuICAgICAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICAgICAgICBpZiAoISQoJy52aWV3LWltYWdlJykuaXMoJzphbmltYXRlZCcpKSB7XHJcbiAgICAgICAgICAgIG1vdmVMZWZ0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCAtIDE7XHJcbiAgICAgICAgICBpZiAoISQoJy52aWV3LWltYWdlJykuaXMoJzphbmltYXRlZCcpKSB7XHJcbiAgICAgICAgICAgIG1vdmVSaWdodCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA8IGluZGV4TnVtYmVyKSB7XHJcbiAgICAgICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgICAgICAgaWYgKCEkKCcudmlldy1pbWFnZScpLmlzKCc6YW5pbWF0ZWQnKSkge1xyXG4gICAgICAgICAgICBtb3ZlTGVmdCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xyXG4gICAgICAgICAgaWYgKCEkKCcudmlldy1pbWFnZScpLmlzKCc6YW5pbWF0ZWQnKSkge1xyXG4gICAgICAgICAgICBtb3ZlUmlnaHQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufSk7Il19
