/*==================== SHOW MENU ====================*/

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/

if(navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/*===== MENU HIDDEN =====*/

if(navClose){
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*==================== REMOVE MENU MOBILE ====================*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== CHANGE BACKGROUND HEADER ====================*/

function scrollHeader(){
  const header =document.getElementById('header')
  if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

/*==================== SWIPER DISCOVER ====================*/

// var swiper = new Swiper(".discover__container", {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: "auto",
//   loop: true,
//   coverflowEffect: {
//     rotate: 50,
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable:true,
//   }

// });

var swiper = new Swiper(".discover__container", {
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  mousewheel: true,
  keyboard: true,
});

/*==================== SWIPER TESTIMONIAL ====================*/

var swiper2 = new Swiper(".mySwiper", {
  cssMode: true,
  loop:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  mousewheel: true,
  keyboard: true,
});


/*==================== GOOGLE MAPS ====================*/

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const laGolosa = { lat: -0.099, lng: 51.546 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: laGolosa,
    });
  // The marker, positioned at laGolosa
  const marker = new google.maps.Marker({
    position: laGolosa,
    map: map,
    });
}


      /*==================== VIDEO ====================*/


      /*==================== SHOW SCROLL UP ====================*/


      /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


      /*==================== SCROLL REVEAL ANIMATION ====================*/


      /*==================== DARK LIGHT THEME ====================*/
