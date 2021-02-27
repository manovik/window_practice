const timer = (id, deadline, saleEndDateId, saleEndMonthId) => {

  function getTimeRemaining(endTime) {
    const time = Date.parse(endTime) - Date.parse(new Date());

    const seconds = Math.floor((time / 1000) % 60),
          minutes = Math.floor((time / 1000 / 60) % 60),
          hours = Math.floor((time / 1000 / 60 / 60) % 24),
          days = Math.floor((time / 1000 / 60 / 60 / 24));

    return {
      'seconds': addZero(seconds),
      'minutes': addZero(minutes),
      'hours': addZero(hours),
      'days': addZero(days),
      'total': addZero(time)
    }
  }

  function addZero(num) {
    return num < 10 ? `0${num}` : num;
  }

  function updateTimer (selector, endTime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timerId = setInterval(updateClock, 1000);

      function updateClock() {
        const time = getTimeRemaining(endTime)

        days.textContent = time.days;
        hours.textContent = time.hours;
        minutes.textContent = time.minutes;
        seconds.textContent = time.seconds;

        if(time.total <= 0) {
          days.textContent = "00";
          hours.textContent = "00";
          minutes.textContent = "00";
          seconds.textContent = "00";
          clearInterval(timerId);
        }
      }
    }

    function showDeadline(dlDate, dateElement, monthElement) {
      const dateEl = document.querySelector(dateElement),
            monthEl = document.querySelector(monthElement);
      const deadline = new Date(dlDate);
      const month = [
        'января', 
        'февраля', 
        'марта', 
        'аперля', 
        'мая', 
        'июня', 
        'июля', 
        'августа', 
        'сентября', 
        'октября', 
        'ноября', 
        'декабря'];
  
      dateEl.textContent = `${deadline.getDate()}`;
      monthEl.textContent = `${month[deadline.getMonth()]}`;
    }

    showDeadline(deadline, saleEndDateId, saleEndMonthId)

    updateTimer (id, deadline);
}

export default timer;