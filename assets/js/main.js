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

var swiper = new Swiper(".discover__container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    rotate: 50,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  }

});

/*==================== SWIPER TESTIMONIAL ====================*/

var swiperTestimonial = new Swiper(".testimonial__container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 32,
  coverflowEffect: {
    rotate: 0,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  }

});


/*==================== VIDEO ====================*/


/*==================== SHOW SCROLL UP ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== SCROLL REVEAL ANIMATION ====================*/


/*==================== DARK LIGHT THEME ====================*/
