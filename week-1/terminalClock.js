function getTime() {
    const currentDate = new Date();
    let hour = currentDate.getHours();
    let minute = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let time = `${hour}:${minute}:${seconds} AM`;
    if(hour=>12){
        if(hour>12){
            hour-=12;
        }
        time = `${hour}:${minute}:${seconds} PM`;
    }
    return time;
}
setInterval(()=>console.log(getTime()),1000);
