"use stric";
document.addEventListener('DOMContentLoaded', function(){ 
  const newYear = "12 Feb 2021";
  const newYearDate = new Date(newYear);

  const dayElem = document.querySelector('#day p');
  const hourElem = document.querySelector('#hour p');
  const minuteElem = document.querySelector('#minute p');
  const secondElem = document.querySelector('#second p');
  let firstLoad = true;

  function countDown() {
    const currentDate = new Date();
    const timeGap = (newYearDate - currentDate) / 1000;

    const daysCountDown = Math.floor(timeGap / 3600 / 24);
    const hoursCountDown = Math.floor(timeGap / 3600) % 24;
    const minutesCountDown = Math.floor(timeGap / 60) % 60;
    const secondsCountDown = Math.floor(timeGap % 60);
    if(firstLoad) {
      animationValue(dayElem, 0, formatTime(daysCountDown), 1000);
      animationValue(hourElem, 0, formatTime(hoursCountDown), 1000);
      animationValue(minuteElem, 0, formatTime(minutesCountDown), 1000);
      animationValue(secondElem, 0, formatTime(secondsCountDown), 1000);
      firstLoad = false;
    } else {
      dayElem.innerHTML = formatTime(daysCountDown);
      hourElem.innerHTML = formatTime(hoursCountDown);
      minuteElem.innerHTML = formatTime(minutesCountDown);
      secondElem.innerHTML = formatTime(secondsCountDown);
    }
  }
  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  };
  setInterval(countDown, 1000);

  function animationValue( elem, start, end, duration) {
      const range = end - start;
      let current = start;
      const increment = end > start? 1 : -1;
      let stepTime = Math.abs(Math.floor(duration / range));
      if(range !== 0) {
        const timer = setInterval(function() {
          current += increment;
          elem.innerHTML = current;
          if (current == end) {
              clearInterval(timer);
          }
      }, stepTime);
      }
      
  };
}, false);

