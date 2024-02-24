const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 100);
});
// circle skills 
const circles= document.querySelectorAll('.circle');

circles.forEach(elem => {
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots * marked / 100);
    var points = "";
    var rotate = 360/ dots;

    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;
    const pointsmarked = elem.querySelectorAll(".points");
    for (let i = 0; i < percent; i++) {
        pointsmarked[i].classList.add('marked');
    }
});
// Active navbar 
let menuli = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');
function activeMenu() {
    let lem = section.length;
    while (--lem && window.scrollY + 97 < section[lem].offsetTop) {}
        menuli.forEach(sec => sec.classList.remove('active'));
        menuli[lem].classList.add('active');
    
}
activeMenu();
window.addEventListener("scroll", activeMenu);


// nav bar 
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");


menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-times");
    navlist.classList.toggle("open");
    header.style.backgroundColor ="#2a2a2a";
}
window.onscroll= () => {
    menuIcon.classList.remove("fa-times");
    navlist.classList.remove("open");
}