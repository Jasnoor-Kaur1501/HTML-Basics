/* reveal animation */
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("active");
}
});
},{threshold:0.12});

reveals.forEach(r=>observer.observe(r));

/* science card toggle */
document.querySelectorAll(".science-card").forEach(card=>{
card.addEventListener("click",()=>{
card.classList.toggle("active");
});
});

/* map scroll focus */
document.querySelectorAll(".map-point").forEach(point=>{
point.addEventListener("click",()=>{
const name = point.innerText.toLowerCase();

document.querySelectorAll(".brew-section h2").forEach(h2=>{
if(h2.innerText.toLowerCase().includes(name)){
h2.parentElement.scrollIntoView({behavior:"smooth"});
}
});
});
});

/* brew simulator */
const grind=document.getElementById("grind");
const time=document.getElementById("time");
const result=document.getElementById("brew-result");

function update(){
if(!grind||!time||!result)return;

if(grind.value==1 && time.value==1)
result.innerText="Under extracted";
else if(grind.value==3 && time.value==3)
result.innerText="Over extracted";
else
result.innerText="Balanced";
}

grind?.addEventListener("input",update);
time?.addEventListener("input",update);
