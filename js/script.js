var mainNav = document.getElementById('navbar');
var navBtn = document.getElementById('mobile-menu');

navBtn.addEventListener('click',()=>{
    mainNav.classList.toggle('nav-toggle')
    navBtn.classList.toggle("fa-times")
});