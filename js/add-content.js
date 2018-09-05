var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Zenith';
} else if (hourNow > 12) {
    greeting = 'Pentax';
} else if (hourNow > 0) {
    greeting = 'Canon';
} else {
    greeting = 'Olympus';
}
document.write('<p>' + greeting + '/p');   