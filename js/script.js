burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightNav = document.querySelector('.rightnav')
navList = document.querySelector('.nav-list')

burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav-resp');
    navList.classList.toggle('v-class-resp');
    rightNav.classList.toggle('v-class-resp');
})