function colorClock(){
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  /*contitions for a add 0*/
  if (hours <= 9) {
    hours = '0' + hours;
  }
  
  if (minutes <= 9) {
    minutes = '0' + minutes;
  }
  
  if (seconds <= 9) {
    seconds = '0' + seconds;
  }
  
  var clockFace = hours + ':' + minutes + ':' + seconds;
var hexColor = '#' + hours + minutes + seconds;  document.getElementById('clock').innerHTML = clockFace;
/*set time a run clock*/
setTimeout(function() {
  colorClock();
}, 1000);
document.body.style.background = hexColor;
document.body.style.color = 'white';
}
colorClock();