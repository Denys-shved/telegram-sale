document.addEventListener("DOMContentLoaded", function () {

    const left = document.querySelector('.signals__form');
    TweenLite.to(left, 4, { x: 40, ease: Bounce.easeOut });

    const right = document.querySelector('.signals__img');
    TweenLite.from(right, 2, { opacity: 0, x: 100 });

    const scrolFunction = function () {
        if (pageYOffset > 400) {
            TweenLite.fromTo(earning, 2, { opacity: 0, y: 200 }, { opacity: 1, y: 0 });
            window.removeEventListener('scroll', scrolFunction);
        }
    };

    const earning = document.querySelector('.earnings__limiter');
    window.addEventListener('scroll', scrolFunction);
});
