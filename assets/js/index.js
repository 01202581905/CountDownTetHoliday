"use stric";
const newYear = "12 Feb 2021";
const newYearDate = new Date(newYear);

const dayElem = document.querySelector('#day p');
const hourElem = document.querySelector('#hour p');
const minuteElem = document.querySelector('#minute p');
const secondElem = document.querySelector('#second p');

window.onload = function () {
  function countDown() {
    const currentDate = new Date();
    const timeGap = (newYearDate - currentDate) / 1000;

    const daysCountDown = Math.floor(timeGap / 3600 / 24);
    const hoursCountDown = Math.floor(timeGap / 3600) % 24;
    const minutesCountDown = Math.floor(timeGap / 60) % 60;
    const secondsCountDown = Math.floor(timeGap % 60);

    dayElem.innerHTML = formatTime(daysCountDown);
    hourElem.innerHTML = formatTime(hoursCountDown);
    minuteElem.innerHTML = formatTime(minutesCountDown);
    secondElem.innerHTML = formatTime(secondsCountDown);
  }

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  };

  setInterval(countDown, 1000);
};
