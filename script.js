function colorClock(){
  var date = new Date();
  
  // CLOCK
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  
  // DATE
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();
  
  // MONTH
  var monthIndex = new Array();
  monthIndex[0] = "January";
  monthIndex[1] = "February";
  monthIndex[2] = "March";
  monthIndex[4] = "May";
  monthIndex[5] = "June";
  monthIndex[6] = "July";
  monthIndex[7] = "August";
  monthIndex[8] = "September";
  monthIndex[9] = "October";
  monthIndex[10] = "November";
  monthIndex[11] = "December";
  var currentMonth = monthIndex[date.getMonth()];

  if (hours <= 9) {
    hours = "0" + hours;
  }
  if (minutes <= 9) {
    minutes = "0" + minutes;
  }
  if (seconds <= 9) {
    seconds = "0" + seconds;
  }

  var clockFace = hours + ':' + minutes + ':' + seconds;
  var hexColor = '#' + seconds + minutes + hours;
  
  var fullDate =  currentMonth + '/' + day + '/' + year;

  document.getElementById('clock').innerHTML = clockFace;
  document.body.style.background = hexColor;
  
  document.getElementById('current-date').innerHTML = fullDate;

  setTimeout(function() {
    colorClock();
  }, 1000);
}

colorClock();
