
document.addEventListener('DOMContentLoaded', function() {
    // Declarations
    const navbarToggle = document.getElementById('navbarToggle')

    // Navbar
    navbarToggle.addEventListener('click', () => {
        const openDrawer = document.getElementById('sidebarDrawer')

        if (openDrawer.style.display === "none") {
            openDrawer.style.display = "block"
        } else {
            openDrawer.style.display = "none"
        }
    })


    // AOS Initialized
    AOS.init();

    // Gallery Swiper
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 5,
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