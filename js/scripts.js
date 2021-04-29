
document.addEventListener('DOMContentLoaded', function() {
    // Declarations
    let body = document.querySelector('.preload')
    let nav = document.querySelector(".navbar")
    let navMenu = document.querySelector(".navbar-menu")
    let headerElement = document.getElementById('header')
    window.onscroll = () => { stickyHeader() }
    document.getElementById("year").innerHTML = new Date().getFullYear()

    // Header Fixed
    function stickyHeader() {
        if (window.pageYOffset > 0) {
            headerElement.classList.add('header-fixed')
        } else {
            headerElement.classList.remove('header-fixed');
        }
    }

    // Sidebar Drawer
    window.addEventListener("load", () => {
        document.body.classList.remove("preload");
    });

    document.querySelector('.sidebar-toggler').addEventListener("click", () => {
        nav.classList.add("nav-open");
        navMenu.style.display = 'block';
        body.classList.add('disabled-bodyscroll');
    });

    document.querySelector(".nav-overlay").addEventListener("click", () => {
        nav.classList.remove("nav-open");
        navMenu.style.display = 'none';
        body.classList.remove('disabled-bodyscroll');
    });

    // AOS Initialized
    AOS.init();

    // Gallery Swiper
    let swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 5,
        dynamicBullets: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        // init: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
        }
    });
});