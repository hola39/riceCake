// 메뉴 보이게 하는 효과
const menu = document.querySelector(".herder-menu");
const subMenus = document.querySelectorAll(".sub-menu");
const subMenuBg = document.querySelector(".sub-menu-bg");
console.log(menu, subMenus, subMenuBg);

menu.addEventListener("mouseover", () => {
  subMenus.forEach((subMenu) => {
    subMenu.classList.add("is-active");
  });
  subMenuBg.classList.add("is-active");
});

menu.addEventListener("mouseout", () => {
  subMenus.forEach((subMenu) => {
    subMenu.classList.remove("is-active");
  });
  subMenuBg.classList.remove("is-active");
});

// $(".herder-menu>li").mouseover(function () {
//   $(".sub-menu").stop().slideDown();
//   $(".sub-menu-bg").stop().slideDown();
// });
// $(".herder-menu>li").mouseout(function () {
//   $(".sub-menu").stop().slideUp();
//   $(".sub-menu-bg").stop().slideUp();
// });
$(document).ready(function () {
  if ($('.banner-slider').length) {
    $('.banner-slider').slick({
      autoplay: true,          // 자동 재생 활성화
      autoplaySpeed: 3000,     // 슬라이드 전환 시간 (밀리초 단위, 3초)
      dots: true,              // 페이지 네이션을 추가하여 현재 슬라이드 위치 표시
      arrows: true,            // 화살표 네비게이션 표시
      infinite: true,          // 무한 반복 활성화
      speed: 800               // 슬라이드 전환 속도 (밀리초 단위)
    });
  }
});

