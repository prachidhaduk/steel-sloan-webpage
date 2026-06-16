// slider section
var swiper = new Swiper(".slider-section .sliderSwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// tabinng js   
var swiper = new Swiper(".tab-product-carts .productSwiper", {

    slidesPerView: 1,
    spaceBetween: 20,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {

        0: {
            slidesPerView: 2,
        },

        768: {
            slidesPerView: 3,
        },

        1024: {
            slidesPerView: 4,
        }
    }
});

// tabing section img
var swiper = new Swiper('.product-cart-img .mySwiper', {
    cssMode: true,
    slidesPerView: 1,
    spaceBetween: 1,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


// tabing
$(document).ready(function () {

    $('.tab-top-list .tab-btn').click(function () {

        var tab_id = $(this).attr('data-tab');

        $('.tab-top-list .tab-btn').removeClass('current');
        $('.tab-product-carts').removeClass('current');

        $(this).addClass('current');
        $('#' + tab_id).addClass('current');

    });

});


// review swiper
var swiper = new Swiper('.customer-review-carts .reviewSwiper', {
    cssMode: true,
    loop: true,
    spaceBetween: 10,

    pagination: {
        el: ".swiper-pagination",
    },

    mousewheel: true,
    keyboard: true,

    breakpoints: {
        0: {
            slidesPerView: 1,
            centeredSlides: true, // Mobile only
        },

        768: {
            slidesPerView: 3,
            centeredSlides: false,
        },

        1024: {
            slidesPerView: 5,
            centeredSlides: false,
        }
    }
});

// Jewelry swiper
var swiper = new Swiper('.jewelry-category-carts .jewelrySwiper', {
    cssMode: true,
    spaceBetween: 0,
    slidesPerView: 1.2,
    pagination: {
        el: ".swiper-pagination",
    },

    mousewheel: true,
    keyboard: true,

    breakpoints: {
        768: {
            slidesPerView: 3.2,
        },
    }
});

// gallery section
let gallerySwiper;

function gallerySlider() {

    if (window.innerWidth < 767) {

        // destroy swiper on mobile
        if (gallerySwiper) {
            gallerySwiper.destroy(true, true);
            gallerySwiper = undefined;
        }
    } else {
        if (!gallerySwiper) {

            gallerySwiper = new Swiper(".gallery-category-carts .gallerySwiper", {

                cssMode: true,
                slidesPerView: 1,
                spaceBetween: 0,

                pagination: {
                    el: ".swiper-pagination",
                },

                mousewheel: true,
                keyboard: true,

                breakpoints: {

                    768: {
                        slidesPerView: 3,
                    },

                    1024: {
                        slidesPerView: 3,
                    },

                    1446: {
                        slidesPerView: 3,
                    },
                },

            });

        }
    }
}
gallerySlider();
window.addEventListener("resize", gallerySlider);


// product img gold-sliver
const productImages = document.querySelectorAll('.product-options img');

productImages.forEach(img => {

    img.addEventListener('click', () => {

        productImages.forEach(item => {
            item.classList.remove('active');
        });
        img.classList.add('active');

    });

});

// search btn
const searchBtn = document.querySelector('.header-menu-left button:first-child');
const searchContent = document.querySelector('.search-btn');
const searchRemove = document.querySelector('.search-remove');

searchBtn.addEventListener('click', () => {
    searchContent.classList.add('open');
});

searchRemove.addEventListener('click', () => {
    searchContent.classList.remove('open');
});

// mobile navbar
const menuBtn = document.querySelector('.menu-btn');
const drawer = document.querySelector('.m-menu-drawer');
const hamburger = document.querySelector('.m-hamburger-box');
const backdrop = document.querySelector('.m-menu-drawer__backdrop');

menuBtn.addEventListener('click', () => {
    drawer.classList.toggle('active');
    hamburger.classList.toggle('active');
});

backdrop.addEventListener('click', () => {
    drawer.classList.remove('active');
    hamburger.classList.remove('active');
});

// navbar menu
const mobMenuBtns = document.querySelectorAll('.m-menu-mobile__toggle-button');
const mHeaderMenu = document.querySelectorAll('.m-header-menu');
const backBtns = document.querySelectorAll('.back-button');

mobMenuBtns.forEach(mobMenuBtn => {
    mobMenuBtn.addEventListener('click', () => {
        mHeaderMenu.forEach(headerMenu => {
            headerMenu.classList.add('open');
        });
    });
});
backBtns.forEach(backBtn => {
    backBtn.addEventListener('click', () => {
        mHeaderMenu.forEach(headerMenu => {

            headerMenu.classList.remove('open');
        });
    });
});

// cart menu
const cartBtn = document.querySelector('.header-menu-left .header-cart');
const cartContent = document.querySelector('.main-cart');
const cartCloseBtn = document.querySelector('.cart-close_btn');

cartBtn.addEventListener('click', () => {
    cartContent.classList.toggle('open');
});

cartCloseBtn.addEventListener('click', () => {
    cartContent.classList.remove('open');
});

// product cart 
const productImg = document.querySelectorAll('.product-img img');
const productTitle = document.querySelectorAll('.product-title h3');
const productPrice = document.querySelectorAll('.product-price');

const productBtns = document.querySelector('.product-btn button');


// mobile cart
const mcartBtn = document.querySelector('.m-header-right .header-cart');
const mcartContent = document.querySelector('.main-cart');
const mcartCloseBtn = document.querySelector('.cart-close_btn');

mcartBtn.addEventListener('click', () => {
    mcartContent.classList.toggle('open');
});

mcartCloseBtn.addEventListener('click', () => {
    mcartContent.classList.remove('open');
});
