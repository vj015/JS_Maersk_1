console.log("alrm")
let alarm = document.getElementById("alarm_btn");
alarm.addEventListener('click',ringalarm);
function ringalarm(e){
    e.preventDefault();
    let time = document.getElementById("alarm");
    let alarmtime = new Date(time.value);
     let timenow = new Date();
     let diff = alarmtime-timenow;
     if(diff>=0)
    {
        setTimeout(() => {
            console.log("ringing now")
            ring();
        }, diff);
    }
}
var audio = new Audio('https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3');
function ring()
{
   
    audio.play();
}
function updatClock()
{
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();
    if(currentMinutes<10)
    {
        currentMinutes = "0"+currentMinutes;
    }
    if(currentSeconds<10)
    {
        currentSeconds = "0"+currentSeconds;
    }
    if(currentHour<10)
    {
        currentHour = "0"+currentHour;
    }
    let dayofTime;
    if(currentHour<12)
    {
        dayofTime = "AM";
    }
    else{
        dayofTime = "PM";
    }
    let str = currentHour + ":" + currentMinutes + ":" + currentSeconds + " " + dayofTime;
    document.getElementById("tym").innerHTML = str;
}
