const hamButton = document.querySelector('.ham');
const mainNav = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {mainNav.classList.toggle('responsive')}, false);

window.onresize = () => {
    if (window.innerWidth > 760)
        mainNav.classList.remove('responsive')
};