$(document).ready(function(){
  $("#menu").click(function(){
    $(".sp_menu_li").slideToggle();
  });
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true
        }
    );
});

$(window).load(function(){
  $("#list-img_wrap img").click(function(){
    var img_src = $(this).attr("src");
    $(".product-img img").attr("src", img_src);
  });
});