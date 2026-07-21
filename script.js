// Loading Complete
setTimeout(() => {
document.getElementById("loading").style.display = "none";
},4000);


// Password

function checkPassword(){

let pass=document.getElementById("password").value;

if(pass==="Aazm"){

document.body.style.transition="1.5s";

document.body.style.opacity="0";

setTimeout(()=>{

window.location.href="welcome.html";

},1500);

}

else{

document.getElementById("error").innerHTML="❌ Wrong Password";

}

}


// Floating Hearts

setInterval(()=>{

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-20px";

heart.style.fontSize=(20+Math.random()*30)+"px";

heart.style.animation="fly 8s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

},500);


// Sparkles

setInterval(()=>{

let star=document.createElement("div");

star.innerHTML="✨";

star.style.position="fixed";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.fontSize="18px";

star.style.opacity=".8";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},1500);

},300);
@keyframes fly{

0%{

transform:translateY(0) scale(.5);

opacity:1;

}

100%{

transform:translateY(-120vh) scale(1.5);

opacity:0;

}

}
