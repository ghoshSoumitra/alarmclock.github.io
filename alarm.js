// audio section
const alarmsound=new Audio();
alarmsound.src='alarm.mp3.mp3';
alarmsound.loop=true;




// for displaying current time:

function displayTime() {
  var time = new Date();
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  if(hours<10||minutes<10||seconds<10){
  if(hours<10){
    document.getElementById("current").innerHTML = "0"+hours + ":" + minutes + ":" + seconds;
  }
  if(minutes<10){
    document.getElementById("current").innerHTML = hours + ":"+"0" + minutes + ":" + seconds;
  }
  if(seconds<10){
    document.getElementById("current").innerHTML = hours + ":" + minutes + ":" +"0"+ seconds;
  }
 
  
}
else{
  document.getElementById("current").innerHTML = hours + ":" + minutes + ":" + seconds;
    }
}

setInterval(displayTime, 1000);

// creating an EventListener on set alarm button
const setAlarm=document.getElementById('setButton');
setAlarm.addEventListener('click',createalarm);
// function for setting alarm
function createalarm(e){
  const alarm=document.getElementById('local').valueAsNumber;
 const alarmtime=new Date(alarm);
  // console.log(alarmtime);
  // console.log(alarm)
  // getting the set time
  const newalarm=new Date(alarmtime.getUTCFullYear(),alarmtime.getUTCMonth(),alarmtime.getUTCDate(),alarmtime.getUTCHours(),alarmtime.getUTCMinutes(),alarmtime.getUTCSeconds());
  // console.log(newalarm)
  const diff=newalarm.getTime()-(new Date()).getTime();
  if(diff<0){
    alert('Invalid Date');
    return;
  }
  setTimeout(initalarm,diff);
alert('Successfully set the Alarm')
}
// initializing the alarm
 function initalarm(){
  console.log('hii')
  alarmsound.play();
  document.getElementById('snooze').style.display='';
 }
//  canceling the alarm
  function cancelalarm(){
  alarmsound.pause();
  alarmsound.currentTime=0;
  document.getElementById('snooze').style.display='none';
 }
//  snooze function
 function snooze(){
  cancelalarm();
  document.getElementById('snooze').style.display='';
  setTimeout(initalarm,60000);
  
 }
