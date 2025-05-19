$(document).ready(function () {
  /* gnb */
  gnb();
  if ($(".sub_header").length > 0) {
    bodyScroll();
  }
  if ($("div").hasClass("store_list")) {
    $(".store_list ul").mCustomScrollbar();
  }
  if ($("div").hasClass("store_list")) {
    $(".store_list ul").mCustomScrollbar();
  }
  if ($("div").hasClass("scroll_wrap")) {
    $(".scroll_wrap").mCustomScrollbar({
      scrollInertia: 800,
    });
  }
});

function bodyScroll() {
  var header = $("#header");
  var subHeader = $(".sub_header");
  var subLogo = subHeader.fing(".logo");
  var subTop = subHeader.fing(".top");
  var spd = 0.5;
  var eft = Power3.easeOut;
  var subHeaderTop = subHeader.offset().top;
}

scrollBarTo();
$(window).on("scroll touchmove", function () {
  scrollBarTo();
});

function scrollBarTo() {
  if ($(window).scrollTop() > subHeader) {
    TweenLite.to(subHeader.css("position", "fixed"), 0.5, {
      ease: Power4.easeOut,
      backgroundColor: "#fff",
    });
    subHeader.addClass("fixed");
    TweenLite.to(subLogo, spd, { ease: eft, opacity: 1 });
    TweenLite.to(subTop, spd, { ease: eft, opacity: 1 });
  } else {
    TweenLite.to(subHeader.css("position", "absolute"), 0.5, {
      ease: Power4.easeOut,
      backgroundColor: "transparent",
    });
    subHeader.removeClass("fixed");
    TweenLite.to(subLogo, spd, { ease: eft, opacity: 0 });
    TweenLite.to(subTop, spd, { ease: eft, opacity: 0 });
  }
}

subTop.on("click", function () {
  $("html, body").stop(true, false).animate(
    {
      scrollTop: 0,
    },
    1000,
    "easeInOutQuint"
  );
  return false;
});

function gnb() {
  var spd = 0.5,
    eft = Power4.easeOut;
  $("#gnb > ul > li >.dp1").on("mouseenter", function () {
    TweenLite.to(
      $("#header").css("overflow", "inherit").addClass("open"),
      spd,
      { ease: eft, height: 425 }
    );
    TweenLite.to($(".dp2"), spd, { ease: eft, top: 0, opacity: 1 });
  });

  $("#gnb").on("mouseleave", function () {
    TweenLite.to($("#header").css("overflow", "hidden"), spd, {
      ease: eft,
      height: 165,
      onComplete: function () {
        $("#header").removeClass("open");
      },
    });
    TweenLite.to($(".dp2"), spd, {
      ease: eft,
      top: -20,
      opacity: 0,
    });
  });
}
