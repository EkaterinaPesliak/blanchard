//Hero swiper

// const container = document.querySelector(".container")
const swiperHero = new Swiper('.hero__swiper-container', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 2000,
  autoplay: {
    delay: 2000
  },
  effect: "fade",
  allowTouchMove: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: '.swiper-bullet-pagination',
    type: 'bullets',
    clickable: true
  }

})



//Burger

/*

const burger = document.querySelector('.burger');
if (burger) {
  const nav = document.querySelector('.header__nav-div');
  burger.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    burger.classList.toggle('_active');
    nav.classList.toggle('_active');
  })
}

*/

document.querySelector(".burger").addEventListener("click", function() {
  document.querySelector(".header__nav-div").classList.add("active");
  document.querySelector('body').classList.add('.lock');

})
document.querySelector(".header__nav-close").addEventListener("click", function() {
  document.querySelector(".header__nav-div").classList.remove("active");
})



/*
const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const navItems = nav?.querySelectorAll('a');
const body = document.body;
const header = document?.querySelector('.header');


burger?.addEventListener('click', () => {
  body.classList.toggle('stop-scroll');
  burger?.classList.toggle('burger--active');
  nav?.classList.toggle('nav--visible');
});

navItems.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.remove('stop-scroll');
    burger?.classList.remove('burger--active');
    nav?.classList.remove('nav--visible');
  })
})
*/

//Form

document.querySelector(".header__search-hidden-btn").addEventListener("click", function() {
  document.querySelector(".header__search-hidden-form").classList.add("header__search-hidden-form-active");
  this.classList.add("active");
})
document.querySelector(".header__search-hidden-form-close").addEventListener("click", function() {
   let form = document.querySelector(".header__search-hidden-form");
  form.classList.remove("header__search-hidden-form-active");
    form.querySelector("input").value = "";
    document.querySelector(".header__search-hidden-btn").classList.remove("active")
});

document.addEventListener("click", function(e) {
  let target = e.target;
  let form = document.querySelector(".header__search-hidden-form");
  if (!target.closest(".header__form-container")) {
  form.classList.remove("header__search-hidden-form-active");
    form.querySelector("input").value = "";
    document.querySelector(".header__search-hidden-btn").classList.remove("active")
  }
})

//Dropdown menu
const params = {
  btnClassName: "js-header-dropdown-btn",
  dropClassName: "js-header-drop",
  activeClassName: "is-active",
  disabledClassName: "is-disabled"
};

function onDisable(evt) {
  if (evt.target.classList.contains(params.disabledClassName)) {
    evt.target.classList.remove(
      params.disabledClassName,
      params.activeClassName
    );
    evt.target.removeEventListener("animationend", onDisable);
  }
}
function setMenuListener() {
  document.body.addEventListener("click", (evt) => {
    const activeElements = document.querySelectorAll(
      `.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`
    );

    if (
      activeElements.length &&
      !evt.target.closest(`.${params.activeClassName}`)
    ) {
      activeElements.forEach((current) => {
        if (current.classList.contains(params.btnClassName)) {
          current.classList.remove(params.activeClassName);
        } else {
          current.classList.add(params.disabledClassName);
        }
      });
    }

    if (evt.target.closest(`.${params.btnClassName}`)) {
      const btn = evt.target.closest(`.${params.btnClassName}`);
      const path = btn.dataset.path;
      const drop = document.querySelector(
        `.${params.dropClassName}[data-target="${path}"]`
      );

      btn.classList.toggle(params.activeClassName);

      if (!drop.classList.contains(params.activeClassName)) {
        drop.classList.add(params.activeClassName);
        drop.addEventListener("animationend", onDisable);
      } else {
        drop.classList.add(params.disabledClassName);
      }
    }
  });
}

setMenuListener();


//Select

const select = document.querySelector('.selectCustom');
const choices = new Choices(select, {
  searchEnabled: false,
  itemSelectText: '',
});

//Accordion

document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.catalog__right-item');

  accordions.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const control = self.querySelector('.catalog__right-btn');
      const content = self.querySelector('.catalog__right-content');

      self.classList.toggle('open');

      //если открыт аккордеон
      if (self.classList.contains('open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
      } else {
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
      }
    })
  })
})

//Tabs

document.addEventListener('DOMContentLoaded', function() {

  document.querySelectorAll('.catalog__right-link').forEach (function(tabsBtn) {
      tabsBtn.addEventListener('click', function(event) {
          const path = event.currentTarget.dataset.path;
          document.querySelectorAll('.catalog__container-left').forEach(function(tabContent) {
              tabContent.classList.remove('catalog__container-left--active')
          })
          document.querySelector(`[data-target="${path}"]`).classList.add('catalog__container-left--active')
      })
  })
  })

//Map

ymaps.ready(init);
function init() {
const mapElem = document.querySelector('#map');
const myMap = new ymaps.Map(
  "map",
  {
    center: [55.75846806898367, 37.60108849999989],
    zoom: 14,
    controls: [] /* Убираем элементы управления*/
  },
  {
    suppressMapOpenBlock: true, /* Убираем элементы управления*/
  }
);

myMap.behaviors.disable('scrollZoom');

const myPlacemark = new ymaps.Placemark(
  [55.75846806898367, 37.60108849999989],
  {},
  {
    iconLayout: "default#image",
    iconImageHref: "img/location.svg",
    iconImageSize: [40, 40],
    iconImageOffset: [-20, -40],
  }
);

myMap.geoObjects.add(myPlacemark);
myMap.container.fitToViewport();
}

//Swiper Events

const swiperEvents = new Swiper('.events__swiper-container', {
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 40,
  loop: false,
  navigation: {
      nextEl: '.events__swiper-button-next',
      prevEl: '.events__swiper-button-prev',
  },
  pagination: {
      el: '.events__swiper-pagination',
      clickable: true
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 38,
      slidesPerGroup: 1,
  },
    700: {
      slidesPerView: 2,
      spaceBetween: 38,
      slidesPerGroup: 2,
  },

      1000: {
          slidesPerView: 3,
          spaceBetween: 27,
          slidesPerGroup: 3,
      },
      1761: {
          slidesPerView: 3,
          spaceBetween: 50,
          slidesPerGroup: 3,
      },
  }
});

//Swiper Projects

const swiperProjects = new Swiper('.projects__swiper-container', {
  slidesPerView: 3,
  slidesPerGroup: 1,
  // spaceBetween: 50,
  loop: false,
  navigation: {
      nextEl: '.projects__swiper-button-next',
      prevEl: '.projects__swiper-button-prev',
  },
  breakpoints: {
      300: {
      slidesPerView: 1,
      spaceBetween: 33.97,
      slidesPerGroup: 1,
      },
      500: {
          slidesPerView: 2,
          spaceBetween: 33.97,
          slidesPerGroup: 2,
      },
      1008: {
          slidesPerView: 2,
          spaceBetween: 50,
          slidesPerGroup: 2,
      },
      1750: {
          slidesPerView: 3,
          spaceBetween: 50,
          slidesPerGroup: 3,
      }
  },
});


//Swiper Galery

const swiper = new Swiper('.gallery__swiper-container', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  loop: false,
  navigation: {
    nextEl: '.nav-next',
    prevEl: '.nav-prev',
  },
  pagination: {
    el: '.gallery__pagination',
    type: 'fraction',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 50,
      slidesPerGroup: 1,
  },
    480: {
        slidesPerView: 2,
        spaceBetween: 50,
        slidesPerGroup: 2,
    },
    1280: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
    },
    //1760: {
    //    slidesPerView: 3,
    //    spaceBetween: 50,
    //    slidesPerGroup: 3,
    //}
  }
});


//Form
document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate('.contacts__form');
  const selector = document.querySelector("input[type='tel']");
  const im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

  validation
    .addField('.input-name', [{
        rule: 'minLength',
        value: 3,
        errorMessage: "Недопустимый формат"
      },
      {
        rule: 'maxLength',
        value: 5,
        errorMessage: "Недопустимый формат"
      }
    ])

    .addField('.input-tel', [{
      rule: "function",
      validator: function (name, value) {
        const phone = selector.inputmask.unmaskedvalue();
        return phone.length === 10
      },
      errorMessage: 'Недопустимый формат',
    }]);
})



//scroll off

const btnOff = document.querySelector('.scroll-off');
const btnOn = document.querySelector('.scroll-on');
const btnMenu = document.querySelector('.scroll-on-menu');
const body = document.body;
const navItems = document.querySelectorAll('.scroll-on-menu');

btnOff.addEventListener('click', (e) => {
  body.classList.add('disable-scroll');
})

btnOn.addEventListener('click', (e) => {
  body.classList.remove('disable-scroll');
})

/*
btnMenu.addEventListener('click'), (e) => {
  body.classList.remove('disable-scroll');
  document.querySelector(".header__nav-div").classList.remove("active");
}*/

navItems.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.remove('disable-scroll');
    document.querySelector(".header__nav-div").classList.remove("active");
    /*burger?.classList.remove('burger--active');
    nav?.classList.remove('nav--visible');*/
  })
})
