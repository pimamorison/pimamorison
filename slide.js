let slidenum = 0
let slides = document.querySelectorAll(".mySlides");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let total_slides = 3
prev.style.display = "none";

slides[slidenum].style.display = "contents";

function plusSlides(num) {
    slides[slidenum].style.display = "none";
    slidenum += num;
    if (prev.style.display == "none") {
        prev.style.display = null;
    }
    else if (next.style.display == "none") {
        next.style.display = null;
    }

    switch (slidenum) {
        case 0:
            prev.style.display = "none";
            break
        case total_slides - 1:
            next.style.display = "none";
            break
    }
    slides[slidenum].style.display = "contents";
}
