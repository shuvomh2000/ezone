const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Community", "Online Shop", "E-Sports", "Streaming"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});
$(function () {
    'use strict'

    // count down timer

    $('.main_timer').countdown('2022/05/30', function(event) {
        // $(this).html(event.strftime('%w weeks %d days %H:%M:%S'));

        $(this).html(event.strftime('<div class="single_counter">%d <span>days</span></div> <div class="single_counter">%H <span>hours</span></div> <div class="single_counter">%M <span>minutes</span></div> <div class="single_counter">%S <span>seconds</span></div>'));
      });

    // slick slider (flash sale)
    $('.sale_slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: false,
        prevArrow: false
    });
    // slick slider (stream)
    $('.stream_slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: false,
        prevArrow: false
    });
    // slick slider (product)
    $('.product_slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: false,
        prevArrow: false
    });
    // slick slider (player)
    $('.player_slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: false,
        prevArrow: false
    });


    // counter part start
    // $(selector).countMe(delay,speed)
    // $(".counter_up").countMe();

    $('.counter_up').counterUp();


    $('.counting').counterUp();



    // venobox(player)
    $('.img_venobox').venobox({});

    // countdown timer
    $('#example').showTimer({
        wrapper_id: "myCountdown"
    });



})