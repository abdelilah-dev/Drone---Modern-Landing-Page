
let headerSection = document.querySelector(".header-section");
let headerContainer = document.querySelector(".header-section .container");
let headerToggleBtn = document.querySelector(".header-content .links .toggle-btn");
let toggleMenu = document.querySelector(".header-content .links ul");

window.addEventListener("DOMContentLoaded", event => {
    autoHomeEleSwitch();
    if (window.innerWidth <= 992){
        headerContainer.classList.add("container-fluid");
        headerContainer.classList.remove("container");
    }
    if (window.scrollY > 110 && !headerSection.classList.contains("fixed")) {
        headerSection.classList.add("scrolling-mode");
    }
})

window.addEventListener("resize", event => {
    if (window.innerWidth <= 992 && !headerContainer.classList.contains("container-fluid")) {
        headerContainer.classList.add("container-fluid");
        headerContainer.classList.remove("container");
    } else if (window.innerWidth > 992) {
        headerContainer.classList.remove("container-fluid");
        headerContainer.classList.add("container");
    }
})

window.addEventListener("scroll", event => {
    if (window.scrollY > 110 && !headerSection.classList.contains("fixed")) {
        headerSection.classList.add("scrolling-mode");
    } else if (window.scrollY <= 110) {
        headerSection.classList.remove("scrolling-mode");
    }
    activateMenuLinks();
});

headerToggleBtn.addEventListener("click", event => {
    event.preventDefault();
    toggleMenu.classList.toggle("active");
})


let homeImg = document.querySelectorAll(".landing-section .home-img img");
let homeSwitchBtns = document.querySelectorAll(".landing-section .moving-btn span")
let droneInfo = document.querySelectorAll(".landing-section .drone-info .item");
let currentItemIndex = 0;

homeSwitchBtns.forEach((ele, index) => {
    ele.addEventListener("click", event => {
        homeSwitchBtns.forEach(e => e.classList.remove("active"));
        homeImg.forEach(e => e.classList.remove("active"));
        droneInfo.forEach(e => e.classList.remove("active"));
        homeSwitchBtns[index].classList.add("active");
        homeImg[index].classList.add("active");
        droneInfo[index].classList.add("active")
        currentItemIndex = index + 1;
    })
})


function autoHomeEleSwitch() {
    setInterval(() => {
        if (currentItemIndex == 3) {
            currentItemIndex = 0;
        }
        homeSwitchBtns.forEach(e => e.classList.remove("active"));
        homeImg.forEach(e => e.classList.remove("active"));
        droneInfo.forEach(e => e.classList.remove("active"));
        homeSwitchBtns[currentItemIndex].classList.add("active");
        homeImg[currentItemIndex].classList.add("active");
        droneInfo[currentItemIndex].classList.add("active")
        currentItemIndex++;
    }, 5000);
}

function activateMenuLinks() {
    let menuLinks = document.querySelectorAll(".header-section .header-content .links li a");
    let featureSection = document.querySelector(".feature-section");
    let accessoriesSection = document.querySelector(".accessories-section");
    let allSections = [featureSection, accessoriesSection];
    allSections.forEach((ele, index) => {
        if (window.scrollY >= ele.offsetTop - 100) {
            menuLinks.forEach(ele => ele.classList.remove("active"));
            menuLinks[index].classList.add("active");
        } else {
            menuLinks[index].classList.remove("active");
        }
    });
}

const swiper = new Swiper(".slider-container", {
    effect: "slide",
    speed: 900,
    loop: true,
    spaceBetween: 30,
    autoplay: { delay: 4000 },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})
