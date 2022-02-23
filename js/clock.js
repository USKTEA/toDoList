const clock = document.querySelector(".clock");


function getclock() { 
    const today = new Date;
    const hour = String(today.getHours()).padStart(2,"0");
    const minute = String(today.getMinutes()).padStart(2,"0");
    const second = String(today.getSeconds()).padStart(2,"0"); 
    const timer = `${hour}:${minute}:${second}`;
    clock.innerText = timer; 
}

getclock(); 
setInterval(getclock,500);

