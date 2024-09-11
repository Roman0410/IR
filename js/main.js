Fancybox.bind("[data-fancybox]", {
  Thumbs: { showOnStart: !1 },
});

$(".burger-menu").click(function () {
  $(this).toggleClass("active");
  $(".header-nav").toggleClass("active");
  $("body").toggleClass("lock");
});
if ($(window).width() < 1024) {
  $(".nav-item").click(function () {
    $(this).find(".sub-menu").slideToggle();
    $(this).find("svg").toggleClass("rotate");
  });
}
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 200) {
    $("header").addClass("scroll");
  } else {
    $("header").removeClass("scroll");
  }
});

$(".beforeAfter-wrapper").twentytwenty();

//-----------------------SLIDERS-----------------------//

$(".hero-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  cssEase: "ease-in-out",
  pauseOnHover: false,
});

if ($(window).width() <= 768) {
  $(".services-list").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $(".services").find(".prev"),
    nextArrow: $(".services").find(".next"),
  });
}

$(".gallery_list1").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: !0,
  autoplaySpeed: 1500,
  speed: 2500,
  arrows: !1,
  responsive: [
    { breakpoint: 1500, settings: { slidesToShow: 3, slidesToScroll: 1 } },
    { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 450, settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: !0 } },
  ],
}),
  $(".gallery_list2").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: !0,
    autoplaySpeed: 1500,
    speed: 2500,
    arrows: !1,
    rtl: !0,
    responsive: [
      { breakpoint: 1500, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 450, settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: !0 } },
    ],
  });
$(".service-gallery").each(function () {
  const $gallery = $(this);
  const $prevButton = $gallery.closest("section").find(".prev");
  const $nextButton = $gallery.closest("section").find(".next");

  $gallery.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $prevButton,
    nextArrow: $nextButton,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$(".brands-slider").slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});

$(document).ready(function () {
  const filters = $(".filter-item");
  const content = $(".content");

  filters.on("click", function () {
    const target = $(this).data("filter");

    filters.removeClass("active");
    $(this).addClass("active");

    content.each(function () {
      const content = $(this);
      if (content.data("content") === target) {
        content.addClass("active");
      } else {
        content.removeClass("active");
      }
    });
  });
});

//-----------_FORM_-------------//

$(document).ready(function () {
  var $phoneInput = $("#tel, .tel");
  var $myForm = $("#myForm");

  $phoneInput.on("input", function (e) {
    var x = e.target.value.replace(/\D/g, "").match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
  });
});

const validation = new JustValidate("#main-form");
validation
  .addField("#name", [
    {
      rule: "required",
      errorMessage: "Name is required",
    },
    {
      rule: "minLength",
      value: 2,
    },
  ])
  .addField(".phoneInput", [
    {
      rule: "required",
      errorMessage: "Phone number is required",
    },
    {
      rule: "minLength",
      value: 14,
      errorMessage: "The field must contain a minimum of 10 characters",
    },
  ])
  .addField("#email", [
    {
      rule: "required",
      errorMessage: "Email is required",
    },
    {
      rule: "email",
      errorMessage: "Email is invalid!",
    },
  ]);
