const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".menu a");

const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menuBtn");

// Open / close mobile menu
menuBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
});

// Close menu after clicking a link
links.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("show");
    });
});

// Scroll behavior
window.addEventListener("scroll", () => {

    if(window.scrollY > 60){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 140;

        if(window.scrollY >= top){
            current = section.id;
        }

    });

    links.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});
