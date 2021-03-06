const hamButton = document.querySelector('.ham');
const mainNav = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {mainNav.classList.toggle('responsive')}, false);

window.onresize = () => {
    if (window.innerWidth > 760)
        mainNav.classList.remove('responsive')
};


let actualDay = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

let actualMonth = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

let actualDate = new Date();
let year = actualDate.getFullYear();


document.getElementById("lastUpdate").textContent = actualDay[actualDate.getDay()] + ", " + actualMonth[actualDate.getMonth()] + " " + actualDate.getDate()  + " " + actualDate.getFullYear();
document.getElementById("currentYear").textContent = year;

function banner() {
    if (actualDate.getDay() == 7) {
        document.getElementById('announcements').innerHTML= "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
    }
}

