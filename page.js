
var modal = document.getElementById("myModal");

var btn = document.getElementsByClassName('close');
var cases = document.getElementsByClassName('case')
var card = document.getElementsByClassName('card')

btn.onclick = function () {
    modal.style.display = 'none'
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

for (let i = 0; i < cases.length; i++) {
    cases[i].onclick = function () {
        modal.style.display = 'block'
    }
}

for (let i = 0; i < card.length; i++) {
    card[i].onclick = function () {
        modal.style.display = 'block'
    }
}



$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });


    $('.slider1').slick({
        arrows: false,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]

    });

    $('.slider3').slick({
        arrows: false,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
    $('.carousel-vertical').slick({
        arrows: false,
        slidesToShow: 4,
        vertical: true,
        autoplay: true,
        autoplaySpeed: 500,
        infinite: true
    });
})


let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function () {
    menu.classList.toggle('active');
})

// menuBtn.addEventListener('click', function(){
// 	menuBtn.classList.toggle('active');
// 	menu.classList.toggle('active');
// })