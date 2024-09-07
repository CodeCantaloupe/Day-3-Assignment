let links = document.querySelector(".links");

let cardImg1 = document.querySelector(".card:nth-child(1) img");
let cardImg2 = document.querySelector(".card:nth-child(2) img");
let cardImg3 = document.querySelector(".card:nth-child(3) img");

let toggle = true

function toggler_onClick() {
    links.classList.toggle("display")
}

setInterval(() => {
    if (toggle) {
        cardImg1.setAttribute("src", "./img/s22.webp");
        cardImg2.setAttribute("src", "./img/s32.webp");
        cardImg3.setAttribute("src", "./img/s33.webp");
        toggle = false;
    } else {
        cardImg1.setAttribute("src", "./img/s11.webp");
        cardImg2.setAttribute("src", "./img/s12.webp");
        cardImg3.setAttribute("src", "./img/s21.webp");
        toggle = true;s
    }
}, 3000);