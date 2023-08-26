document.addEventListener('DOMContentLoaded', function() {
    var carouselItem = document.querySelectorAll('.carousel-item');
    var moveRight = document.getElementById('moveRight');
    var moveLeft = document.getElementById('moveLeft');
    var total = carouselItem.length;
    var current = 0;

    carouselItem[0].classList.add('active');

    moveRight.addEventListener('click', function(e) {
        var next = current;
        current = current + 1;
        setSlide(next, current);
    });

    moveLeft.addEventListener('click', function(e) {
        var prev = current;
        current = current - 1;
        setSlide(prev, current);
    });

    function setSlide(prev, next) {
        var slide = current;
        
        if(next > total -1) {
            slide = 0;
            current = 0;
        }

        if(next < 0) {
            slide = total - 1;
            current = total -1;
        }

        carouselItem[prev].classList.remove('active');
        carouselItem[slide].classList.add('active');

        setTimeout(function() {
        }, 800);
    }
}, false);  