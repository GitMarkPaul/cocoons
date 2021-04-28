
document.addEventListener('DOMContentLoaded', function() {
    // Declarations
    let body = document.getElementsByTagName('body')[0]
    let navbarToggle = document.getElementById('navbarToggle')
    let openDrawer = document.getElementById('sidebarDrawer')
    let headerElement = document.getElementById('header')
    window.onscroll = () => { stickyHeader() };

    // Header Fixed
    function stickyHeader() {
        if (window.pageYOffset > 0) {
            headerElement.classList.add('header-fixed')
        } else {
            headerElement.classList.remove('header-fixed');
        }
    }

    // Navbar
    navbarToggle.addEventListener('click', () => {
        if (openDrawer.style.display === "none") {
            openDrawer.style.display = "block"
            body.classList.add('disabled-bodyscroll')
        } else {
            openDrawer.style.display = "none"
            body.classList.remove('disabled-bodyscroll')
        }
    })

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