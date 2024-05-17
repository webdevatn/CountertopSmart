// nav menu

var hasChildrenItems = document.querySelectorAll('.navbar-nav li.menu-item-has-children > a');
hasChildrenItems.forEach(function (hasChildrenItem) {
  var createSpanElement = document.createElement('span');
  createSpanElement.classList.add('clickD');
  hasChildrenItem.parentNode.insertBefore(createSpanElement, hasChildrenItem.nextSibling);
});
function toggleSubMenu(event) {
  event.preventDefault();
  var submenuClickedEl = event.target;

  if (submenuClickedEl.nextElementSibling.classList.contains('show')) {
    submenuClickedEl.nextElementSibling.classList.remove('show');
    submenuClickedEl.classList.remove('toggled');
  } else {
    var parentListItem = submenuClickedEl.parentNode.parentNode;
    var subMenus = parentListItem.querySelectorAll('.sub-menu');
    subMenus.forEach(function (subMenu) {
      subMenu.classList.remove('show');
    });

    var clickDElements = parentListItem.parentNode.querySelectorAll('.clickD');
    clickDElements.forEach(function (element) {
      element.classList.remove('toggled');
    });

    submenuClickedEl.nextElementSibling.classList.toggle('show');
    submenuClickedEl.classList.toggle('toggled');
  }
}
function handleDocumentClick() {
  document.querySelectorAll('.navbar-nav li .clickD').forEach(function (element) {
    element.classList.remove('toggled');
  });
  document.querySelectorAll('.toggled').forEach(function (element) {
    element.classList.remove('toggled');
  });
  document.querySelectorAll('.sub-menu').forEach(function (element) {
    element.classList.remove('show');
  });
}

function handleWindowResize() {
  if (window.innerWidth < 1025) {
    document.querySelector('html').addEventListener('click', handleDocumentClick);
    document.addEventListener('click', handleDocumentClick);
    document.querySelector('.navbar-nav').addEventListener('click', function (e) {
      e.stopPropagation();
    });
  } else {
    document.querySelector('html').removeEventListener('click', handleDocumentClick);
    document.removeEventListener('click', handleDocumentClick);
    document.querySelector('.navbar-nav').removeEventListener('click', function (e) {
      e.stopPropagation();
    });
  }
}

document.querySelectorAll('.navbar-nav li .clickD').forEach(function (element) {
  element.addEventListener('click', toggleSubMenu);
});
window.addEventListener('resize', handleWindowResize);

document.querySelector(".tog_open").addEventListener("click", function () {
  document.querySelector(".tog_open").classList.toggle("open");
  document.querySelector(".tog_open .stick").classList.toggle("open");

  document.querySelector(".tog_inside").classList.toggle("open");
  document.querySelector(".tog_inside .stick").classList.toggle("open");
  
  document.querySelector("body").classList.toggle("open-nav");
  document.querySelector("html").classList.toggle("open-nav");
  document.querySelector('#navoverlay').classList.toggle("open");
});

document.querySelector(".tog_inside").addEventListener("click", function () {
  document.querySelector(".tog_open").classList.remove("open");
  document.querySelector(".tog_open .stick").classList.remove("open");

  document.querySelector(".tog_inside").classList.toggle("open");
  document.querySelector(".tog_inside .stick").classList.toggle("open");
  
  document.querySelector("body").classList.toggle("open-nav");
  document.querySelector("html").classList.toggle("open-nav");
  document.querySelector('#navoverlay').classList.remove("open");
});

document.querySelector("#navoverlay").addEventListener("click", function () {
  document.querySelector(".tog_open").classList.remove("open");
  document.querySelector(".tog_open .stick").classList.remove("open");

  document.querySelector(".tog_inside").classList.remove("open");
  document.querySelector(".tog_inside .stick").classList.remove("open");
  
  document.querySelector("body").classList.remove("open-nav");
  document.querySelector("html").classList.remove("open-nav");
  document.querySelector('#navoverlay').classList.remove("open");
});

// nav menu end

// nav sticky
const header = document.querySelector(".main-head");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 150) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});

// header nav-slired bottom
var init = false;
var pricingCardSwiper;
function swiperCards() {
  if (window.innerWidth <= 767) {
    if (!init) {
      init = true;
      pricingCardSwiper = new Swiper(".cardSlider", {
        slidesPerView: 1,
        grabCursor: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        loop: true,
        keyboard: true,
      });
    }
  } else if (init) {
    pricingCardSwiper.destroy();
    init = false;
  }
}
swiperCards();
window.addEventListener("resize", swiperCards);


// banner-slider

var swiper1 = new Swiper(".js-banner-slider", {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    navigation: {
    nextEl: ".js-banner-slider-next",
    prevEl: ".js-banner-slider-prev",
    },
});

var swiper2 = new Swiper(".js-cardSlider", {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    navigation: {
    nextEl: ".js-cardSlider-next",
    prevEl: ".js-cardSlider-prev",
    slidesPerView: "1",
    },
            breakpoints: {
                1200: {
                    slidesPerView: 4,
                },
                992: {
                    slidesPerView: 3,
                },
                320: {
                  slidesPerView: 1.6,
                }
            }
});

// new-arrivals

var swiper3 = new Swiper(".new-arrivals-slider", {
  loop: true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  navigation: {
  nextEl: ".new-arrivals-slider-next",
  prevEl: ".new-arrivals-slider-prev",
  slidesPerView: "1",
  },
          breakpoints: {
              1200: {
                  slidesPerView: 7,
              },
              992: {
                  slidesPerView: 4,
              },
              320: {
                slidesPerView: 1.6,
              }
          }
});

pricingCardSwiper = new Swiper(".js_top_brnd_box_outr", {
  slidesPerView: "4",
  spaceBetween: 0,
  grabCursor: true,
  keyboard: true,
  loop: true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 6,
    },
    768: {
      slidesPerView: 5,
    }
  }
 
});

  var swiper4 = new Swiper(".js-testimonials", {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    navigation: {
    nextEl: ".js-testimonials-next",
    prevEl: ".js-testimonials-prev",
    slidesPerView: 1,
    },
            breakpoints: {
                1200: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 2,
                }
            }
});

// details

var swiper = new Swiper(".details-img-bottom", {
  slidesPerView: 5,
  spaceBetween: 20,
  freeMode: true,
  watchSlidesProgress: true,
    breakpoints: {
      1199: {
          spaceBetween: 13,
      },
      310: {
        spaceBetween: 13,
    },
  }
});
var swiper5 = new Swiper(".details-img-top", {
  thumbs: {
    swiper: swiper,
  },
});


// filter card

var swiper15 = new Swiper(".js-filetr-card", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// customers-viewed card

var swiper11 = new Swiper(".js-customers-viewed", {
  loop: true,
  spaceBetween: 5,
  // autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  //   },
  navigation: {
  nextEl: ".js-customers-next",
  prevEl: ".js-customers-prev",
  slidesPerView: "1",
  },
          breakpoints: {
              1200: {
                  slidesPerView: 4,
              },
              992: {
                  slidesPerView: 3,
              },
              768: {
                slidesPerView: 3,
            },
            575: {
              slidesPerView: 2,
          },
              320: {
                slidesPerView: 1.2,
                spaceBetween: 16,
              }
          }
});


// Fancybox
 Fancybox.bind('[data-fancybox]', {
});   

// Fancybox.bind('[data-fancybox="gallery"]', {
// }); 

// custome select

let index = 1;

const on = (listener, query, fn) => {
	document.querySelectorAll(query).forEach((item) => {
		item.addEventListener(listener, (el) => {
			fn(el);
		});
	});
};

on("click", ".selectBtn", (item) => {
	const next = item.target.nextElementSibling;
  const parentEle = item.target.parentElement;
  parentEle.classList.toggle("active");
	next.classList.toggle("toggle");
	next.style.zIndex = index++;
});
on("click", ".option", (item) => {
	item.target.parentElement.classList.remove("toggle");
  item.target.parentElement.parentElement.classList.remove("active")
	const parent = item.target.closest(".select").children[0];
	parent.innerText = item.target.innerText;
});

// input type number only

function isNumber(evt) {
  evt = (evt) ? evt : window.event;
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
  }
  return true;
}