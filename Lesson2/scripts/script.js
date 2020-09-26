
let actualDate = new Date();
let year = actualDate.getFullYear();
let modified = document.lastModified;
document.getElementById("lastUpdate").textContent = modified;
document.getElementById("currentYear").textContent = year;
