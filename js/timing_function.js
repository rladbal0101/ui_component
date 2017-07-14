/**
 * Ease 값 비교
 */

$(function(){

  function repeat(){

    $('.box1').css({top:0}).stop().animate({top:450}, 2000, 'linear');
    $('.box2').css({top:0}).stop().animate({top:450}, 2000, 'easeInExpo');
    $('.box3').css({top:0}).stop().animate({top:450}, 2000, 'easeOutExpo');
    $('.box4').css({top:0}).stop().animate({top:450}, 2000, 'easeInOutExpo');
    $('.box5').css({top:0}).stop().animate({top:450}, 2000, $.bez([0.19,1.01,0.78,1.47]));

  }

  setInterval(function(){
    repeat();
  }, 2500);

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWluZ19mdW5jdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoidGltaW5nX2Z1bmN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEVhc2Ug6rCSIOu5hOq1kFxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgZnVuY3Rpb24gcmVwZWF0KCl7XHJcblxyXG4gICAgJCgnLmJveDEnKS5jc3Moe3RvcDowfSkuc3RvcCgpLmFuaW1hdGUoe3RvcDo0NTB9LCAyMDAwLCAnbGluZWFyJyk7XHJcbiAgICAkKCcuYm94MicpLmNzcyh7dG9wOjB9KS5zdG9wKCkuYW5pbWF0ZSh7dG9wOjQ1MH0sIDIwMDAsICdlYXNlSW5FeHBvJyk7XHJcbiAgICAkKCcuYm94MycpLmNzcyh7dG9wOjB9KS5zdG9wKCkuYW5pbWF0ZSh7dG9wOjQ1MH0sIDIwMDAsICdlYXNlT3V0RXhwbycpO1xyXG4gICAgJCgnLmJveDQnKS5jc3Moe3RvcDowfSkuc3RvcCgpLmFuaW1hdGUoe3RvcDo0NTB9LCAyMDAwLCAnZWFzZUluT3V0RXhwbycpO1xyXG4gICAgJCgnLmJveDUnKS5jc3Moe3RvcDowfSkuc3RvcCgpLmFuaW1hdGUoe3RvcDo0NTB9LCAyMDAwLCAkLmJleihbMC4xOSwxLjAxLDAuNzgsMS40N10pKTtcclxuXHJcbiAgfVxyXG5cclxuICBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG4gICAgcmVwZWF0KCk7XHJcbiAgfSwgMjUwMCk7XHJcblxyXG59KTsiXX0=
