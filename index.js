// 슬라이더

function SliderBanner() {
  var bullet = [
    "01.고압반응기",
    "02.가압오븐",
    "03.고압분산기"
  ];
  var swiper = new Swiper(".banner .swiper-container", {
    // Optional parameters
    loop: true,
    speed: 550,
    grabCursor: true,

    pagination: {
      el: ".banner .swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<div class="' +
          className +
          '"><span>' +
          bullet[index] +
          "</span></div>"
        );
      }
    },

    autoplay: {
      delay: 5000,
    },

  });
}

function Sliderintro() {
  var swiper = new Swiper(".co-slide-section .swiper-container", {
    grabCursor: true,
    loop: true,

    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400]
      },
      next: {
        translate: ["100%", 0, 0]
      }
    },

    autoplay: {
      delay: 4000,
    },

  });
}

function SliderSection() {
  const swiper = new Swiper(".second__slide .swiper-container", {
    loop: false,
    speed: 800,
    slidesPerView: 5,
    centeredSlides: false,
    spaceBetween: 30,
    grabCursor: true,

    autoplay: {
      delay: 5000
    },

    navigation: {
      nextEl: ".second__slide .swiper-button-next",
      prevEl: ".second__slide .swiper-button-prev"
    }
  });
}

function SliderSubsidiary() {
  var bullet = [
    "— &nbsp&nbsp 펌스터",
    "— &nbsp&nbsp 하이플럭스",
    "— &nbsp&nbsp HiPPo",
    "—&nbsp&nbsp 한국공조엔지니어링"
  ];

  var swiper = new Swiper(".subsidiary-slide .swiper-container", {
    // Optional parameters
    speed: 550,
    grabCursor: true,

    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      stretch: 100,
      depth: 100,
      modifier: 2,
      slideShadows: false,
    },

    pagination: {
      el: ".subsidiary-slide .swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<div class="' +
          className +
          '"><span>' +
          bullet[index] +
          "</span></div>"
        );
      }
    },

    autoplay: {
      delay: 5000,
    },

  });
}

function SliderPartner() {
  const swiper = new Swiper(".partner__slide .swiper-container", {
    centeredSlides: false,
    speed: 800,
    slidesPerView: 8,
    spaceBetween: 110,
    grabCursor: true,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

  });
}




// 탭메뉴

function tab_1() {
  const tabItem = document.querySelectorAll('.tab_item')
  const tabInner = document.querySelectorAll('.tab_inner')

  tabItem.forEach((tab, idx) => {
    tab.addEventListener('click', function () {
      tabInner.forEach((inner) => {
        inner.classList.remove('active')
      })

      tabItem.forEach((item) => {
        item.classList.remove('active')
      })

      tabItem[idx].classList.add('active')
      tabInner[idx].classList.add('active')
    })
  })
}




// 함수실행
tab_1();
SliderBanner();
Sliderintro();
SliderSection();
SliderSubsidiary();
SliderPartner();
AOS.init({
  duration: 2000,
});