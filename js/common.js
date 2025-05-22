// GNB
const $header = $("#header");
const $gnb = $("#gnb");

$gnb.on("mouseenter", function () {
  $header.addClass("open");
});

$gnb.on("mouseleave", function () {
  $header.removeClass("open");
});

// 메인 탭메뉴
const $menuTabMenu = $(".section_subway_menu .tab > ul > li");
const $menuTabCon = $(".subway_menu_slider");

menuTabAction(0);

$menuTabMenu.on("click", function (e) {
  e.preventDefault();
  const menuTabIdx = $(this).index();
  menuTabAction(menuTabIdx);
});

function menuTabAction(index) {
  $menuTabMenu.removeClass("active");
  $menuTabMenu.eq(index).addClass("active");
  $menuTabCon.hide();
  $menuTabCon.eq(index).show();
}

scrollBarTo();
$(window).on("scroll touchmove", function () {
  scrollBarTo();
});

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
