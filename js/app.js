document.addEventListener("DOMContentLoaded", function () {
    const firstNavItem = document.querySelector(".nav ul li:first-child a");
    const megaMenu = document.getElementById("mega-menu");
    const navItems = document.querySelectorAll(".nav ul li:not(:first-child)");
    const megaMenuInner = document.querySelector(".l-mega-menu__inner");
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
});
