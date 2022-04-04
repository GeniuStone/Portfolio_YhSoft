$("a").attr("onclick", "return false;");
// a 태그 클릭 시 페이지 상단 이동 방지

var $limitSize = 768;
// 모바일기기 사이즈

var $devWidth = $("body").width();
$(window).resize(function () {
  $devWidth = $("body").width();
});
// 화면 사이즈 바뀔 때마다 새로 저장

$(".main_menu_list > .mml > a").bind("mouseover focus", function () {
  if ($devWidth < $limitSize) return false;
  $(".main_menu_list ul").hide();
  $(this).next().slideDown(200);
});
$("#header").mouseleave(function () {
  if ($devWidth < $limitSize) return false;
  $(".main_menu_list ul").stop().slideUp(200);
});
// 메인메뉴 및 서브메뉴 조작(pc, tablet)

$(".all_list").click(function () {
  $(".main_menu_list").slideToggle(400);
});
$(".all_list_close").click(function () {
  $(".main_menu_list").slideUp(400);
});
// 메인메뉴 및 서브메뉴 조작(mobile)

window.open(
  "pop_up.html",
  "YHsoft",
  "width=400px , height=595px , scrollbars=no , toolbar=no , location=no, left=70px, top=90px"
);
// 팝업창 띄우기

$(".tab1 a").bind("focus click", function (e) {
  e.preventDefault();
  $(".tab_section_first, .tab_section_second").hide();
  $(".tab_section_first").show();
  $(".tab1 a, tab2 a").css({
    color: "black",
    "background-color": "rgb(190, 190, 190)",
  });
  $(this).css({ color: "white", "background-color": "yellowgreen" });
  $(this)
    .parent()
    .next()
    .children()
    .css({ color: "black", "background-color": "rgb(190, 190, 190)" });
});
$(".tab2 a").bind("focus click", function (e) {
  e.preventDefault();
  $(".tab_section_first, .tab_section_second").hide();
  $(".tab_section_second").show();
  $(".tab1 a, tab2 a").css({
    color: "black",
    "background-color": "rgb(190, 190, 190)",
  });
  $(this).css({ color: "white", "background-color": "yellowgreen" });
  $(this)
    .parent()
    .next()
    .children()
    .css({ color: "black", "background-color": "rgb(190, 190, 190)" });
});
// 탭 선택 시 보이는 컨텐츠 변경

$(".to_top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 400);
});
// 상단으로 이동하기 버튼(사이드 메뉴)
