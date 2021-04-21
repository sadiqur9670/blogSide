$(document).ready(function(){
// sider js 
 

//   $(".testimonial-carosel").owlCarousel({
//     items: 1,
//     loop:true,
//     autoplay: false,
//     dots: false,
//     nav:true,
//     mouseDrag: true,
//     touchDrag: true,
//     autoplayTimeout:5000,
//     margin: 40,
//     center: true,
//     smartSpeed:1000,
//     navText: ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
//       responsive:{
//         0:{
//             dots: true,
//             nav:false,
//         },
//         767:{
//             dots: true,
//             nav:false,
//         },
//         1000:{
//             dots:false, 
//             nav:true,
//         }
//     }
// });

 
  $(".header-area").sticky(
        {
        topSpacing:0,  
        widthFromWrapper:false,
        }
    );
});
$('.video').magnificPopup({
  type: 'iframe',
  delegte: 'a',
  iframe: {
  markup: '<div class="mfp-iframe-scaler">'+
            '<div class="mfp-close"></div>'+
            '<iframe class="mfp-iframe" frameborder="0" allow="autoplay" allowfullscreen></iframe>'+
          '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

  patterns: {
    youtube: {
      index: 'youtube.com/', 
      id: 'v=', 

      src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
    },
    
    

    // you may add here more sources

  },

  srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
}
});