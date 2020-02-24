$(document).ready(function(){



   $('#imgPrew .slide-box-picture-preview-item').on('click', function () {
      var imgPath;
      imgPath = $(this).attr('data-img-path');
      $('#imgHolder img').attr('src', imgPath);
      $(this).addClass('active-pic').siblings().removeClass('active-pic');
   });



   $(".owl-carousel").owlCarousel({
      loop: false,
      margin: 10,
      items: 1,
      autoWidth: true,
      autoplayHoverPause: true,
      autoplay: true,
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