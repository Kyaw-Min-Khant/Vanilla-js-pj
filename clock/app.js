const hour = document.querySelector("#hour");
const min = document.querySelector("#min");
const second = document.querySelector("#second");
const date=document.querySelector("#date");

 const run=()=>{
const d = new Date();
date.innerText="Date  "+d.toDateString();
    hour.innerText=d.getHours();
    min.innerText=d.getMinutes();
    second.innerText=d.getSeconds();
 }
 setInterval(run,1000)