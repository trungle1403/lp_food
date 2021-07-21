var btn = document.querySelector('.btn-menu');
var menu = document.querySelector('.menu');
btn.addEventListener('click', () => {
    menu.classList.toggle('active');
    btn.classList.toggle('active');
})

window.addEventListener('scroll',function(){
    var header = document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY>0);
})


//menu active
// $(document).ready(function() {
    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();
        //Show/hide menu on scroll
        // if (scrollDistance >= 850) {
        //     $('.header').fadeIn();
        // } else {
        //     $('.header').fadeOut();
        // }
        // Assign active class to nav links while scolling
        $('.page-section').each(function(i) {
                if ($(this).position().top <= scrollDistance) {
                    $('.menu a.active').removeClass('active');
                    $('.menu a').eq(i).addClass('active');
                }
        });
    }).scroll();
// });

