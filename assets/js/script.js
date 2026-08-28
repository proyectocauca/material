const navbar = document.querySelector(".navbar");
const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menuBtn");

const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll(".menu a");

// Mobile menu
menuBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
});

// Close menu after selecting a section
links.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("show");
    });
});

// Scroll effects
window.addEventListener("scroll", () => {

    // Navbar appearance
    if(window.scrollY > 60){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }

    // Active menu item
    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 140;
        const height = section.offsetHeight;

        if(window.scrollY >= top &&
           window.scrollY < top + height){
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
