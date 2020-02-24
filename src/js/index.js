$(document).ready(function(){


   
   $('.slide-box-picture-preview-item').on('click', function () {
      var imgPath;
      imgPath = $(this).find('img').attr('src');
      $(this).parent().siblings('.slide-box-picture-main-pic').find('img').attr('src', imgPath);
      $(this).addClass('active-pic').siblings().removeClass('active-pic');
   });



   


   $(".owl-carousel").owlCarousel({
      loop: false,
      margin: 10,
      items: 1,
      autoWidth: true,
      autoplayHoverPause: true,
      autoplay: false,
      mouseDrag: false,
      margin: 100,
      dots: false,
      nav: true,
      navText: ["<i class='fas fa-arrow-left'</i>","<i class='fas fa-arrow-right'</i>"],
      responsive: {
         0: {
            touchDrag: true
         },
         1060: {
            touchDrag: false
         }
      }
   });

});