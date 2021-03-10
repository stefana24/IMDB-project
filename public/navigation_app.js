const nav = function(){
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');

    burger.addEventListener('click',function(){
        navLinks.classList.toggle('nav-active');
    })

}

nav();

