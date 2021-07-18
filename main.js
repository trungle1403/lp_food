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
