let timerId = setInterval(function sliderMooving() {
    document.querySelector(".swiper-button-next").dispatchEvent(new Event("click"));
}, 7000);



