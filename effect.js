<script src="effects.js"></script>
// Floating Hearts

setInterval(() => {

const heart = document.createElement("div");

heart.className = "heart";

heart.innerHTML = "❤️";

heart.style.left = Math.random() * 100 + "vw";

heart.style.fontSize = (15 + Math.random() * 25) + "px";

heart.style.animationDuration = (5 + Math.random() * 5) + "s";

document.body.appendChild(heart);

setTimeout(() => {

heart.remove();

},10000);

},300);


// Sparkles

setInterval(() => {

const star = document.createElement("div");

star.className = "sparkle";

star.innerHTML = "✨";

star.style.left = Math.random() * 100 + "vw";

star.style.top = Math.random() * 100 + "vh";

document.body.appendChild(star);

setTimeout(() => {

star.remove();

},2000);

},250);


// Rose Petals

setInterval(() => {

const rose = document.createElement("div");

rose.className = "rose";

rose.innerHTML = "🌹";

rose.style.left = Math.random()*100+"vw";

document.body.appendChild(rose);

setTimeout(()=>{

rose.remove();

},8000);

},700);
