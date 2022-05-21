$(function(){
	// $('.slider__inner').slick({
	// 	nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
	// 	prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
	// });

var buttons = document.querySelectorAll('.toggle__inner-title');
var blocks = document.querySelectorAll('#toggle-item');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseover', myToggle);
  }

  function myToggle(e){
    var el = e.target.closest('.service__toggle-item').querySelector('#toggle-item');
    blocks.forEach(function(item, key) {
      if(item == el) {
        console.log(key);
      }
      item.classList.toggle("show", el == item && !item.classList.contains('show'))
    })
  }

// Slider with left and right button
let offset = 0;
const slier_width = 1200;
let slider_line = document.querySelector('.slider__inner');
  
  document.querySelector('.slick_next').addEventListener('click', function(){
    offset = offset - 1200;
      if(offset < -2400) {
        offset = 0;
      }
      slider_line.style.left = offset + "px";
  });
  document.querySelector('.slick_prev').addEventListener('click', function(){
    offset = offset + 1200;
      if(offset > 0) {
        offset = -2400;
      }
      slider_line.style.left = offset + "px";
  });


// Slider with buttons in bottom
var slider_btns = document.querySelectorAll('.pos_btn');

  for(let i = 0; i < slider_btns.length; i++) {
    slider_btns[i].addEventListener('click', posChanger);
  }
  function posChanger(e){
    var el = e.target;
    slider_btns.forEach(function(item,key){
      if (item == el) {
        offset = slier_width * key;
      }
      slider_line.style.left = -offset + "px";
    })
  }

// Header movement

// let header__top = $("#header__top");
// let header = $("#header");
// let headerH = header.innerHeight();
// let scrollPos = $(window).scrollTop();

//   $(window).on("scroll", function(){
//     scrollPos = $(this).scrollTop();

//     if( scrollPos > headerH ){
//       header__top.addClass("fixed");
//     } else {
//       header__top.removeClass("fixed");
//     }
    
//   });  

// });

// document.getElementById('service__toggle').onmouseover = function(event){
//   var target = event.getElementsByClassName('service__toggle-item');
//   if(target[0].classList.contains('toggle__inner-title')){
//     var s = target.getElementsByClassName('toggle__inner-text');
//     closeMenu();
//     s[0].classList.add("show");
//   }
// };
// document.onmouseover = function(event){
//   close_item = document.getElementsByClassName('toggle__inner-text');
//   var target = event.target;
//   if(target.className!='service__toggle-item' && target.className!='toggle__inner-text'){
//     for (var i = 0; i < close_item.length; i++) {
//       close_item[i].classList.remove("show");
//     }
//   }
// };
// function closeMenu(){
//   var toggle_item = document.getElementsByClassName('toggle__inner-text');
//   for (var i = 0; i < toggle_item.length; i++) {
//     toggle_item[i].classList.remove("show");
//   }
// };