// Amount of seconds in a day and the date
var dailySec = 86400;
var today = new Date(Date.now());

// Total seconds elapsed today
// Multiply hours by 3600 + mulitply minutes by 60 + seconds + milliseconds divide total by 1000 
// the above total gets divided by 86400 (total amount of seconds in a day) 
// to get the percent value total amount is multiplied by 100
var secElapsed = (today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds() + today.getMilliseconds() / 1000) / 86400;
var elapsedPercentage = secElapsed * 100;

// Display number in HTML
let secTotalElemennt = document.getElementById('secTotal');
secTotalElemennt.innerHTML = Math.floor(elapsedPercentage) + "%";

// Adjust browsers height by percentage value
let classBg = document.getElementById('bg');
classBg.style.height = elapsedPercentage + "vh";