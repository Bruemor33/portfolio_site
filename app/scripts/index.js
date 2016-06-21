var $ = require('jquery');

console.log("Hello World!");


//Scroll Navigation
$(document).ready(function(){

  //navigation click actions
  $('.scroll-link').on('click', function(event){
    event.preventDefault();
    var sectionID = $(this).attr("data-id");
    scrollToID('#' + sectionID, 700);
  });

  //scroll to top functionality
  $('.scroll-top').on('click', function(event){
    event.preventDefault();
    $('hrml,body').animate({scrollTop:0}, 'slow')
  });

  //mobile nav toggle
  $('#nav-toggle').on('click', function(event){
    event.preventDefault();
    $('#main-nav').toggleClass("open");
  });


});

//scroll function
function scrollToID(id, speed){
  var offSet = 50;
  var targetOffset = $(id).offset().top - offSet;
  var mainNav = $('#main-nav');
  $('html,body').animate({scrollTop:targetOffset}, speed);
  if(mainNav.hasClass("open")) {
    mainNav.css("height", "0px").removeClass("in").addClass("collapse");
    mainNav.removeClass("open");
  }
}

//Portfolio Hover Effects
$('.project-one').hover(function(){
  $(this).addClass('hover-effect');
}, function(){
  $(this).removeClass('hover-effect');
});





if(typeof console === "undefined") {
  console = {
    log: function() { }
  };
}
