let secSection=document.querySelector(".sec-section");
let minSection=document.querySelector(".min-section");
for(let i=1;i<=30;i++){
    // Second pointers
    let secDiv = document.createElement("div");
    secDiv.setAttribute("class", "secDiv");

    let smDiv = document.createElement("div");
    let smDiv2 = document.createElement("div");
    smDiv.setAttribute("class", "smDiv");
    smDiv2.setAttribute("class", "smDiv");
    if(i%5==0){
        smDiv.style.width="1.25rem";
        smDiv2.style.width="1.25rem";
    }
    if(i==30){
        smDiv.setAttribute("id","red");
    }
    secDiv.appendChild(smDiv);
    secDiv.appendChild(smDiv2);
    
    secSection.appendChild(secDiv);

    // Apply rotation for circular positioning
    secDiv.style.transform = `rotate(${6 * i}deg)`;

    
    // Minute pointers
    let minDiv=document.createElement("div");
    minDiv.setAttribute("class","minDiv");
    let mmDiv=document.createElement("div");
    let mmDiv2=document.createElement("div");
    mmDiv.setAttribute("class","mmDiv");
    mmDiv2.setAttribute("class","mmDiv");
    if(i%5==0){
        mmDiv.style.width="0.75rem";
        mmDiv2.style.width="0.75rem";
    }
    if(i==30){
        mmDiv.setAttribute("id","red");
    }
    minDiv.appendChild(mmDiv);
    minDiv.appendChild(mmDiv2);
    minSection.appendChild(minDiv);
    minDiv.style.transform=`rotate(${6*i}deg)`;
}

let hourSec=document.querySelector(".hour-section");
let minSec=document.querySelector(".min");
let secSec=document.querySelector(".sec");

//main implementation
setInterval(()=>{
    let d=new Date();
    let h=d.getHours();
    let hour=0;
    h>12?hour=h%12:hour=h;
    let min=d.getMinutes();
    let sec=d.getSeconds();
    minSection.style.transform=`rotate(${min*6}deg)`;
    secSection.style.transform=`rotate(${sec*6}deg)`;
    if(hour.toString().length==1){
        hourSec.innerText="0"+hour;
    }else{
        hourSec.innerText=hour;            
    }
    let p=document.querySelector("#amPm");
    h>12?p.innerText="PM":p.innerText="AM";
    if(min.toString().length==1){
        minSec.innerText="0"+min;
    }else{
        minSec.innerText=min;
    }    
    if(sec.toString().length==1){
        secSec.innerText="0"+sec;
    }else{
        secSec.innerText=sec;
    }
  
},1000);