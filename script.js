const navLinks = document.querySelectorAll('a[href*="#"]');

for (let link of navLinks) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        
        const sectionID = link.getAttribute('href').substr(1);
        
        document.getElementById(sectionID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

let burgerMenu = document.querySelector('.burger-btn');
let overlay = document.querySelector('.navbar');

burgerMenu.addEventListener('click', function() {
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
});
