document.addEventListener("DOMContentLoaded", function () {
    const firstNavItem = document.querySelector(".nav ul li:first-child a");
    const megaMenu = document.getElementById("mega-menu");
    const navItems = document.querySelectorAll(".nav ul li:not(:first-child)");
    const megaMenuInner = document.querySelector(".mega-menu__inner");
    let isHovered = false;
    firstNavItem.addEventListener("mouseenter", function () {
        megaMenu.classList.add("is-active");
        firstNavItem.classList.add("active");
    });
    megaMenu.addEventListener("mouseleave", function (event) {
        if (!isHovered && event.relatedTarget !== megaMenuInner) {
            megaMenu.classList.remove("is-active");
            firstNavItem.classList.remove("active");
        }
    });
    navItems.forEach(function (item) {
        item.addEventListener("mouseenter", function () {
            megaMenu.classList.remove("is-active");
            firstNavItem.classList.remove("active");
            isHovered = true;
        });
    });
    megaMenuInner.addEventListener("mouseenter", function () {
        isHovered = false;
    });
    megaMenuInner.addEventListener("mouseleave", function () {
        megaMenu.classList.remove("is-active");
        firstNavItem.classList.remove("active");
    });

    // menu mobile active

    function animations() {
        const menuToggleOpen = document.querySelector(".hambuger");
        const menuToggleClose = document.querySelector(".close-nav");
        // const menu = document.querySelector(".nav");

        const tl = gsap.timeline({
            paused: true,
        });
        if (window.innerWidth <= 1023) {
            tl.to(".nav, .nav-outer", {
                x: 0,
                duration: 0.6,
                ease: "expo.inOut",
            });

            tl.from(".nav ul li", {
                y: 40,
                opacity: 0,
                duration: 0.4,
                ease: "expo.out",
                stagger: 0.1,
            });

            tl.from(".contact", {
                y: 40,
                opacity: 0,
                duration: 0.4,
                ease: "expo.out",
            });
            tl.from(".social-wrap", {
                y: 40,
                opacity: 0,
                duration: 0.4,
                ease: "expo.out",
            });
            menuToggleOpen.addEventListener("click", () => tl.play());
            menuToggleClose.addEventListener("click", () => tl.reverse());
        }
    }
    window.addEventListener("resize", animations);
    animations();
});

const activeSubmenuMB = document.querySelector(".mb-item");
activeSubmenuMB.addEventListener("click", () => {
    activeSubmenuMB.classList.toggle("active-sub");
});

// slider
const swiper = new Swiper(".swiper", {
    loop: true,
    autoplayDisableOnInteraction: false,
    slidesPerView: 1,
    // autoHeight: true,
    autoplay: {
        delay: 5000,
    },
    // autoplay: false,
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: "true",
        type: "bullets",
        renderBullet: function (index, className) {
            return (
                '<span class="' +
                className +
                '">' +
                "<i></i>" +
                "<b></b>" +
                "</span>"
            );
        },
    },
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
});
