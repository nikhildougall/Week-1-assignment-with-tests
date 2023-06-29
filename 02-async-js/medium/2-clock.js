function printTime() {
    console.clear();
    let currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    console.log("Time in HH:MM::SS format is- " + hours + ":" + minutes + ":" + seconds);
    if(hours < 12){
        console.log("Time in HH:MM::SS AM/PM format is- " + hours + ":" + minutes + ":" + seconds + " AM");
    }else{
        console.log("Time in HH:MM::SS AM/PM format is- " + hours + ":" + minutes + ":" + seconds + " PM");

    }
}

setInterval(printTime, 1000)