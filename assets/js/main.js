(function ($) {
  "use strict";

  $(window).on("load", function () {
    /* preloader activate */
    $(".preloader-activate").removeClass("preloader-active");
  });

  /* sticky menu */
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 200) {
      $(".sticker").removeClass("stick");
      $("body").removeClass("space-pt--120");
    } else {
      $(".sticker").addClass("stick");
      $("body").addClass("space-pt--120");
    }
  });

  /* offcanvas menu active */
  $("#header-menu-trigger").on("click", function (e) {
    e.stopPropagation();
    $("#offcanvas-menu").toggleClass("active");
    $(".body-wrapper").toggleClass("active-overlay");
    $("body").toggleClass("overflow-hidden");
  });

  /* remove active class on click other parts of the body */
  $("body").on("click", function () {
    $("#offcanvas-menu").removeClass("active");
    $(".body-wrapper").removeClass("active-overlay");
    $("body").removeClass("overflow-hidden");
  });

  /* svg inject */

  /* background image set */
  var bgSelector = $(".bg-img");
  bgSelector.each(function (index, elem) {
    var element = $(elem),
      bgSource = element.data("bg");
    element.css("background-image", "url(" + bgSource + ")");
  });



  $(".field-wrapper .field-placeholder").on("click", function () {
    $(this).closest(".field-wrapper").find("input").focus();
    $(this).closest(".field-wrapper").find("textarea").focus();
  });
  $(".field-wrapper input,.field-wrapper textarea").on("keyup", function () {
    var value = $.trim($(this).val());
    if (value) {
      $(this).closest(".field-wrapper").addClass("hasValue");
    } else {
      $(this).closest(".field-wrapper").removeClass("hasValue");
    }
  });



  var readURL = function (input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $('.profile-img').attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
    }
  }


  $(".file-upload").on('change', function () {
    readURL(this);
  });

  $(".upload-button").on('click', function () {
    $(".file-upload").click();
  });

  $(".shere-button").each(function () {
    $(this).on('click', function () {
      $(this).parent("#share-box").toggleClass('act');
    });
  });



  // document.getElementById("shere-btn").addEventListener("click", function () {
  //     document.getElementById("share-box").classList.toggle("act");
  //   });

  /* cart plus minus */
  function checkdevice() {
    if ($(window).width() < 991) {
      $('body').removeClass('hide-content');
    } else {
      $('body').addClass('hide-content');
    }
  }
  checkdevice();
  $(window).on('resize', function () {
    checkdevice();
  });
  // const swiper = new Swiper('.home-slider-ctm', {
  //   loop: true,
  //   spaceBetween: 16,
  //   slidesPerView: 6,
  //   pagination: false,
  //   navigation: false,
  //   // autoplay: {
  //   //   delay: 2000,
  //   // },
  //   scrollbar: false,
  //   slideToClickedSlide: true,
  // });

  $('.live-list').slick({
    dots: false,
    arrows: false,
    initialSlide: 0,
    infinite: false,
    slidesToScroll: 1,
  });

  $('.homeangels-carousel').slick({
    lazyLoad: 'ondemand',
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  var CartPlusMinus = $(".cart-plus-minus");
  CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
  CartPlusMinus.append('<div class="inc qtybutton">+</div>');
  $(".qtybutton").on("click", function () {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if ($button.text() === "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 1) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 1;
      }
    }
    $button.parent().find("input").val(newVal);
  });




})(jQuery);

