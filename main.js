//set months and weekdays
const months = ['jan', 'feb', 'mar', 'april', 'may', 'iune', 'july', 'aug', 'sep', 'oct', 'nov', 'dec'];
const weekDays = ['sun', 'mon', 'tue', 'wen', 'thus', 'fri', 'str'];

//get elements
let giveaway = document.querySelector('.giveaway');
let deadLine = document.querySelector('.deadLine');
let items = document.querySelectorAll('.deadLine h4');

//set future Time
let futureData = new Date(2023, 7, 1, 12, 00, 00);
//console.log(futureData);
let year = futureData.getFullYear();
//console.log(year);
let month = futureData.getMonth();
//console.log(month);
month = months[month]; //return with num
//console.log(month);  
let day = futureData.getDate();
//console.log(day);
let hours = futureData.getHours();
//console.log(hours);
let minutes = futureData.getMinutes();
//console.log(minutes);
let weekDay = futureData.getDay();
//console.log(weekDay); return num
weekDay = weekDays[weekDay];
//console.log(weekDay);
giveaway.innerHTML = `giveaway end on ${weekDay}, ${day}  ${month}  ${year}  ${hours}:${minutes}am`;
//future time in ms
let futureTime = futureData.getTime();
//console.log(futureTime);

//make function to get remaining time
function getReamin() {
    //get the today Data
    let today = new Date().getTime();
    //console.log(today);
    let diff = futureTime - today;
    // console.log(diff);
    let oneDay = 24 * 60 * 60 * 1000;
    let oneHr = 60 * 60 * 1000;
    let oneMin = 60 * 1000;
    let onrSec = 1000;
    // diff in days 
    let days = diff / oneDay;
    //console.log(days);
    days = Math.floor(days);
    //console.log(days);
    //let hours = diff/oneHr;
    //console.log(hours);
    let hours = (diff % oneDay) / oneHr;
    //console.log(hours);
    hours = Math.floor(hours);
    //console.log(hours);
    let minutes = (diff % oneHr) / oneMin;
    minutes = Math.floor(minutes);
    //console.log(minutes);
    let seconds = (diff % oneMin) / onrSec;
    seconds = Math.floor(seconds);
    // console.log(seconds);

    //create values array
    const values = [days, hours, minutes, seconds];

    //format
    function format(x) {
        if (x < 10) {
            return x = `0${x}`;
        }
        return x;
    }
    items.forEach(function (item, index) {
        item.innerHTML = format(values[index]);
    });
    if (diff < 0) {
        clearInterval(cutDown);
        deadLine.innerHTML = `<h2>Sorry items has expired</h2>`;
    }
}
let cutDown = setInterval(getReamin, 1000);
getReamin();
