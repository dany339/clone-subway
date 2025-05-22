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

// 써브웨이 이용방법 탭 메뉴
function subwayUtilization() {
  const $tabMenu = $(".utilization_subway_wrapper .tab > ul > li");
  const $tabContent = $(".utilization_subway_content");

  // 초기 상태: 첫 번째 탭 활성화
  $tabMenu.removeClass("active").eq(0).addClass("active");
  $tabContent.hide().eq(0).show();

  $tabMenu.on("click", function (e) {
    e.preventDefault();
    const idx = $(this).index();
    $tabMenu.removeClass("active");
    $(this).addClass("active");
    $tabContent.hide().eq(idx).show();
  });

  // 슬라이더 기능 추가
  const $imgContent = $(".img_content > ol > li");
  const $infoContent = $(".info_content > ol > li");
  const $prevButton = $(".arr_controls > .prev");
  const $nextButton = $(".arr_controls > .next");
  let currentIndex = 0;

  function updateSliders(index) {
    $imgContent.removeClass("active").eq(index).addClass("active");
    $infoContent.removeClass("active").eq(index).addClass("active");
    $(".step_content > ol > li")
      .removeClass("active prev")
      .eq(index)
      .addClass("active");
    if (index > 0) {
      $(".step_content > ol > li")
        .eq(index - 1)
        .addClass("prev");
    } else {
      $(".step_content > ol > li").removeClass("prev");
    }
    currentIndex = index;
  }

  $prevButton.on("click", function (e) {
    e.preventDefault();
    const newIndex =
      (currentIndex - 1 + $imgContent.length) % $imgContent.length;
    updateSliders(newIndex);
  });

  $nextButton.on("click", function (e) {
    e.preventDefault();
    const newIndex = (currentIndex + 1) % $imgContent.length;
    updateSliders(newIndex);
  });

  // 초기 슬라이더 상태 설정
  updateSliders(0);
}

// const $menuConTabMenu = $(".bx-controls-direction > a");
// const $menuConTabCon = $(".bx-viewport > ul");

// menuConTabAction(0);

// $menuConTabMenu.on("click", function (e) {
//   e.preventDefault();
//   const menuConTabIdx = $(this).index();
//   menuConTabAction(menuConTabIdx);
// });

// function menuConTabAction(index) {
//   $menuConTabCon.hide();
//   $menuConTabCon.eq(index).show();
// }
