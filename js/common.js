$(document).ready(function () {
  gnb(); //gnb
  if ($(".sub_header").length > 0) {
    bodyScroll(); //body scroll
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
  $("#gnb >ul >li >.dp1").on("mouseenter", function () {
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
    TweenLite.to($(".dp2"), spd, { ease: eft, top: -20, opacity: 0 });
  });
}

// 써브웨이 이용방법
function subwayUtilization() {
  //써브웨이 이용방법
  var stepIndex = 0;
  var btnArr = $(".arr_controls .arr");
  var stepNum = $(
    ".utilization_subway_wrapper .slider_wrapper .step_content ol li"
  );
  var slider_img = $(
    ".utilization_subway_wrapper .slider_wrapper .img_content ol li"
  );
  var slider_info = $(".utilization_subway_wrapper .info_content ol li");
  var spd = 1;
  var eft = Power3.easeOut;
  var prevIndex;

  if ($("#store_order").length) store_order(); //써브웨이 이용방법 : 매장에서 주문하기

  if ($("#fast_sub, #home_sub, #group").length) app_order();

  $(".utilization_subway_wrapper .tab ul li a").on("click", function () {
    //써브웨이 이용방법 : tab
    if ($(this).parent("li").hasClass("active")) {
      return false;
    } else {
      var tg = $(this).attr("href");
      $(this)
        .parent("li")
        .addClass("active")
        .siblings("li")
        .removeClass("active");
      $(tg).show().siblings(".utilization_subway_content").hide();

      if (tg == "#store_order") {
        stepIndex = 0;

        $(".utilization_subway_content .step_num").text(
          "STEP " + (stepIndex + 1)
        );
        $(stepNum).removeClass("prev active");
        $(stepNum).eq(stepIndex).addClass("active");
        $(slider_info).removeClass("active").attr("style", "");
        $(slider_info)
          .eq(stepIndex)
          .addClass("active")
          .css({ marginTop: "0", opacity: "1" });
        $(slider_img).attr("style", "").removeClass("active");
        $(slider_img).find(".img").attr("style", "");
        $(slider_img).eq(stepIndex).css({ left: "50%", marginLeft: "-585px" });
        TweenLite.to($(slider_img).eq(stepIndex).find(".img"), spd, {
          ease: eft,
          width: 700,
        });
        TweenLite.to($(slider_img).eq(stepIndex).next(), spd, {
          ease: eft,
          marginLeft: "-280",
        });
      } else {
        AOS.init({
          once: "data-aos-once",
          duration: 600,
          easing: "ease-out-ease",
          delay: 100,
        });
      }
      return false;
    }
  });

  function store_order() {
    //써브웨이 이용방법 : 매장에서 주문하기 2019-12-23 수정
    $(slider_img).eq(stepIndex).css({ left: "50%", marginLeft: "-585px" });
    TweenLite.to($(slider_img).eq(stepIndex).find(".img"), spd, {
      ease: eft,
      width: 700,
    });
    TweenLite.to($(slider_img).eq(stepIndex).next(), spd, {
      ease: eft,
      marginLeft: "-280",
    });

    $(btnArr).on("click", function () {
      if (TweenMax.isTweening(slider_img)) {
        return false;
      } else {
        prevIndex = stepIndex;
        if ($(this).hasClass("prev")) {
          if (stepIndex <= 0) {
            return false;
          } else {
            stepIndex--;
            $(stepNum).eq(stepIndex).removeClass("prev").addClass("active");
            $(stepNum).eq(prevIndex).removeClass("active");

            TweenLite.to($(slider_img).eq(stepIndex).prev(), spd, {
              ease: eft,
              left: "0",
              marginLeft: "-280",
            });
            TweenLite.to($(slider_img).eq(prevIndex), spd, {
              ease: eft,
              left: "100%",
              marginLeft: "-280",
            });
            TweenLite.to($(slider_img).eq(prevIndex).find(".img"), spd, {
              ease: eft,
              width: 560,
            });
            TweenLite.to($(slider_img).eq(stepIndex), spd, {
              ease: eft,
              left: "50%",
              marginLeft: "-585",
            });
            TweenLite.to($(slider_img).eq(stepIndex).find(".img"), spd, {
              ease: eft,
              width: 700,
            });
            TweenLite.to($(slider_img).eq(prevIndex).next(), spd, {
              ease: eft,
              marginLeft: "560",
            });
          }
        } else {
          if (stepIndex >= 4) {
            return false;
          } else {
            stepIndex++;
            $(stepNum).eq(stepIndex).addClass("active");
            $(stepNum).eq(prevIndex).removeClass("active").addClass("prev");

            TweenLite.to($(slider_img).eq(prevIndex).prev(), spd, {
              ease: eft,
              left: "-560",
              marginLeft: "-560",
            });
            TweenLite.to($(slider_img).eq(prevIndex), spd, {
              ease: eft,
              left: "0",
              marginLeft: "-280",
            });
            TweenLite.to($(slider_img).eq(prevIndex).find(".img"), spd, {
              ease: eft,
              width: 560,
            });
            TweenLite.to($(slider_img).eq(stepIndex), spd, {
              ease: eft,
              left: "50%",
              marginLeft: "-585",
            });
            TweenLite.to($(slider_img).eq(stepIndex).find(".img"), spd, {
              ease: eft,
              width: 700,
            });
            TweenLite.to($(slider_img).eq(stepIndex).next(), spd, {
              ease: eft,
              marginLeft: "-280",
            });
          }
        }

        // $(slider_info).eq(prevIndex).removeClass('active').css('opacity', '0')
        // TweenLite.to($(slider_info).eq(stepIndex).addClass('active'), 0.7, {
        // 	ease: Power4.easeOut, marginTop: 0, opacity: 1, onComplete: function () {
        // 		$(slider_info).eq(prevIndex).attr('style', '')
        // 	}
        // });
        // $('.utilization_subway_content .step_num').text('STEP ' + (stepIndex + 1))
        // return false; 2019-12-23 슬라이드별 컨텐츠 show-hide, 스텝 숫자 변경 공통 function으로 분리 (stepText();)
        stepText();
      }
    });
  }

  function stepText() {
    //매장에서이용하기, APP 이용방법 슬라이드 컨텐츠 내용, 스텝별 숫자 변경
    $(slider_info).eq(prevIndex).removeClass("active").css("opacity", "0");
    TweenLite.to($(slider_info).eq(stepIndex).addClass("active"), 0.7, {
      ease: Power4.easeOut,
      marginTop: 0,
      opacity: 1,
      onComplete: function () {
        $(slider_info).eq(prevIndex).attr("style", "");
      },
    });
    $(".utilization_subway_content .step_num").text("STEP " + (stepIndex + 1));
    return false;
  }

  function app_order() {
    // APP 사용방법 (FAST, HOME, 단체주문)
    TweenLite.to($(slider_img).eq(stepIndex), spd, { ease: eft, opacity: "1" });
    TweenLite.to($(slider_img).eq(stepIndex).find(".img"), spd, {
      ease: eft,
      left: "0",
      zIndex: "1",
    });

    $(btnArr).on("click", function (e) {
      e.preventDefault();
      if (TweenMax.isTweening(slider_img)) {
        return false;
      } else {
        prevIndex = stepIndex;
        var stepLength = $(stepNum).length;
        if ($(this).hasClass("prev")) {
          // 이전 버튼
          if (stepIndex <= 0) {
            return false;
          } else {
            stepIndex--;
            $(stepNum).eq(stepIndex).removeClass("prev").addClass("active");
            $(stepNum).eq(prevIndex).removeClass("active");

            TweenLite.to($(slider_img).eq(prevIndex), spd, {
              ease: eft,
              opacity: "0",
            });
            TweenLite.to($(slider_img).eq(prevIndex).find(".img"), spd, {
              ease: eft,
              left: "200",
              zIndex: "-1",
            });

            TweenLite.to($(slider_img).eq(stepIndex), spd, {
              ease: eft,
              opacity: "1",
            });
            TweenLite.to($(slider_img).eq(stepIndex).find(".img"), spd, {
              left: "0",
              zIndex: "1",
            });
          }
        } else {
          // 다음버튼
          if (stepIndex >= stepLength - 1) {
            return false;
          } else {
            stepIndex++;
            $(stepNum).eq(stepIndex).addClass("active");
            $(stepNum).eq(prevIndex).removeClass("active").addClass("prev");

            TweenLite.to($(slider_img).eq(prevIndex), spd, {
              ease: eft,
              opacity: "0",
            });
            TweenLite.to($(slider_img).eq(prevIndex).find(".img"), spd, {
              ease: eft,
              zIndex: "-1",
            });

            TweenLite.to($(slider_img).eq(stepIndex), spd, {
              ease: eft,
              opacity: "1",
            });
            TweenLite.to($(slider_img).eq(stepIndex).find(".img"), spd, {
              left: "0",
              zIndex: "1",
            });
          }
        }
        stepText();
      }

      //스텝2 메뉴 선택 설명 영역 노출 (fast, home 공통)
      if ($("#fast_sub, #home_sub").find(stepNum).eq(1).hasClass("active")) {
        $("#fast_sub, #home_sub").addClass("active");
      } else {
        $("#fast_sub, #home_sub").removeClass("active");
      }
    });
  }
}
