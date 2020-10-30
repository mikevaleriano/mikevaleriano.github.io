function windChill() {
    let temp = parseFloat(document.getElementById('dayTemp').textContent);
    let speed = parseFloat(document.getElementById('windSpeed').textContent);
    let f = 0;
    if (temp <= 50 && speed >= 3)  {
        f = Math.round((35.74 + (0.6215 * temp)) - (35.75 * (Math.pow(speed, 0.16))) + (0.4275 * (temp * (Math.pow(speed, 0.16)))));
        document.getElementById('windChill').innerHTML = "Wind Chill: " + f + " °F";
    }
    else {

    }
    
}
window.addEventListener('DOMContentLoaded', windChill);