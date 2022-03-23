//<![CDATA[
$(document).ready(function () {
  let $slider = $(".slider");
  let count = 0;

  // 기본적으로 모든 슬라이드의 opacity는 0
  let $firstSlide = $slider
    .find("li")
    .first()
    .stop(true)
    .animate({ opacity: 1 }, 200);

  /* 이전 슬라이드 함수 */
  function PrevSlide() {
    // 마지막 슬라이드 맨 앞으로 보내기
    let $lastSlide = $slider.find("li").last().prependTo($slider);
    // 밀려난 두번째는 가리기
    let $secondSlide = $slider
      .find("li")
      .eq(1)
      .stop(true)
      .animate({ opacity: 0 }, 400);
    // 마지막에서 맨 앞으로 온 슬라이드는 보이도록
    $firstSlide = $slider
      .find("li")
      .first() //맨 처음 슬라이드 다시 구하기
      .stop(true)
      .animate({ opacity: 1 }, 400);

    count--;
    if (count < 0) {
      count = 2;
    }
    bulletSlide(count);
  }

  /* 다음 슬라이드 함수 */
  function NextSlide() {
    // 처음 슬라이드를 맨 뒤로 보내고
    $firstSlide.appendTo($slider);
    // 맨 뒤로 보낸 슬라이드 안 보이게
    $lastSlide = $slider
      .find("li")
      .last()
      .stop(true)
      .animate({ opacity: 0 }, 400);
    // 첫번째 슬라이드(원래는 두번째)는 보이게
    $firstSlide = $slider
      .find("li")
      .first()
      .stop(true)
      .animate({ opacity: 1 }, 400);

    count++;
    if (count > 2) {
      count = 0;
    }
    bulletSlide(count);
  }

  /* 슬라이드 하단 페이지네이션 버튼 */
  function bulletSlide(num) {
    let $remainedSlide = $slider
      .find("li")
      .stop(true)
      .animate({ opacity: 0 }, 400);

    let $selectedSlide = $slider
      .find("li")
      .eq(num)
      .stop(true)
      .animate({ opacity: 1 }, 400);

    $(".bullet img").attr("src", "./images/slide_image/state_out.png");
    $(".bullet img")
      .eq(num)
      .attr("src", "./images/slide_image/state_over.png");
  }

  $(".prev").on("click", function () {
    PrevSlide();
  });

  $(".next").on("click", function () {
    NextSlide();
  });

  $(".bullet_1").on("click", function () {
    bulletSlide(0);
  });

  $(".bullet_2").on("click", function () {
    bulletSlide(1);
  });

  $(".bullet_3").on("click", function () {
    bulletSlide(2);
  });

  // 자동 슬라이드
  let interval;

  function startSlide() {
    interval = setInterval(NextSlide, 5000);
  }  

  startSlide();
});
//]]>
