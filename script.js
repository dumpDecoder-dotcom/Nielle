/* ============ EDIT YOUR CONTENT HERE ============ */
const PHOTOS = [ // img: put files in assets/images/ and write e.g. "assets/images/us1.jpg"
  {img:"", cap:"The day we met", date:"01 Jan 2024", story:"Write the story of this moment here."},
  {img:"", cap:"Our first picture", date:"14 Feb 2024", story:"Write the story of this moment here."},
  {img:"", cap:"That silly day", date:"20 Apr 2024", story:"Write the story of this moment here."},
  {img:"", cap:"My favorite smile", date:"05 Aug 2024", story:"Write the story of this moment here."},
];
const LETTERS = [
  {t:"Why I love you", b:"Write your letter here. Tell her all the reasons, big and small."},
  {t:"Open when you miss me", b:"Write your letter here."},
  {t:"Open when you're sad", b:"Write your letter here."},
  {t:"Open when you feel insecure", b:"Write your letter here."},
  {t:"My favorite memories", b:"Write your letter here."},
  {t:"Our future together", b:"Write your letter here."},
];
const REASONS = [ // add up to 100; missing ones show a placeholder
  "The way you laugh when you think nobody is listening.",
  "You make ordinary days feel like holidays.",
  "You are kind to everyone, even when you're tired.",
];
const TIMELINE = [
  {h:"When we first met", d:"Date", t:"Write what you remember."},
  {h:"Our first conversation", d:"Date", t:"What did we talk about?"},
  {h:"Our first picture together", d:"Date", t:"Describe it."},
  {h:"Our favorite moments", d:"Dates", t:"Write a few."},
  {h:"Important dates", d:"Dates", t:"Anniversaries, firsts..."},
  {h:"Where we are now", d:"Today", t:"And I'd still choose you."},
];
const HIDDEN_LETTER = "You found the hidden letter! Write your secret words here. I knew you'd explore every corner. 💗";
/* ================================================ */

const $ = s => document.querySelector(s);
const rot = () => (Math.random()*6-3).toFixed(1)+"deg";
const ph = (img,label) => img ? `<img src="${img}" alt="${label}" loading="lazy">` : `<span>your photo here</span>`;

/* floating hearts & petals (capped for mobile performance) */
function floater(){
  const box=$("#floaters"); if(box.children.length>14) return;
  const e=document.createElement("span"); e.className="f";
  e.textContent=["❤","♡","🌸","✿","💗"][Math.random()*5|0];
  e.style.cssText=`left:${Math.random()*100}%;font-size:${14+Math.random()*16}px;animation-duration:${9+Math.random()*8}s;--dx:${Math.random()*80-40}px;--r:${Math.random()*360}deg`;
  box.appendChild(e); setTimeout(()=>e.remove(),17000);
}
setInterval(floater,1100);

/* modal */
function openModal(html){ $("#modalBody").innerHTML=html; $("#modal").classList.remove("hidden"); }
function closeModal(){ $("#modal").classList.add("hidden"); }
$(".close").onclick=closeModal;
$("#modal").onclick=e=>{ if(e.target.id==="modal") closeModal(); };
addEventListener("keydown",e=>{ if(e.key==="Escape") closeModal(); });
document.addEventListener("click",e=>{
  const s=e.target.closest("[data-secret]"); if(s) openModal(`<h3>A little secret</h3><p>${s.dataset.secret}</p>`);
});

/* 1. opening */
$("#envelope").onclick=function(){
  if(this.classList.contains("open")) return;
  this.classList.add("open");
  setTimeout(()=>$("#openGift").classList.remove("hidden"),2200);
};
$("#openGift").onclick=()=>{
  $("#opening").style.cssText="opacity:0;transition:opacity .8s";
  setTimeout(()=>{
    $("#opening").classList.add("hidden"); $("#journal").classList.remove("hidden");
    document.body.classList.remove("locked"); scrollTo(0,0); observe();
  },800);
};

/* build sections */
$("#polaroids").innerHTML=PHOTOS.map((p,i)=>`<button class="polaroid" style="--rot:${rot()}" data-i="${i}"><div class="ph">${ph(p.img,p.cap)}</div><div class="cap">${p.cap}</div><div class="date">${p.date}</div></button>`).join("");
$("#polaroids").onclick=e=>{ const b=e.target.closest(".polaroid"); if(!b) return; const p=PHOTOS[b.dataset.i];
  openModal(`<div class="ph">${ph(p.img,p.cap)}</div><h3>${p.cap}</h3><div class="date">${p.date}</div><p>${p.story}</p>`); };

$("#envs").innerHTML=LETTERS.map((l,i)=>`<button class="mini" data-i="${i}"><span>${l.t}</span></button>`).join("");
$("#envs").onclick=e=>{ const b=e.target.closest(".mini"); if(!b) return; const l=LETTERS[b.dataset.i];
  openModal(`<h3>${l.t}</h3><p class="letter-text">${l.b}</p><p class="letter-text">Always yours ❤️</p>`); };

$("#hearts").innerHTML=Array.from({length:100},(_,i)=>`<button class="h" data-i="${i}" aria-label="Reason ${i+1}">❤</button>`).join("");
$("#hearts").onclick=e=>{ const b=e.target.closest(".h"); if(!b) return; b.classList.add("read");
  const i=+b.dataset.i; openModal(`<h3>Reason #${i+1}</h3><p>${REASONS[i]||"Write reason #"+(i+1)+" here. 💗"}</p>`); };

$("#timeline").innerHTML=TIMELINE.map(t=>`<article class="entry" style="--rot:${rot()}"><h3>${t.h}</h3><div class="date">${t.d}</div><div class="ph"><span>your photo here</span></div><p class="cap">${t.t}</p></article>`).join("");
$("#hiddenLetter").onclick=()=>openModal(`<h3>A hidden letter</h3><p class="letter-text">${HIDDEN_LETTER}</p>`);

/* final surprise */
function sparkle(x,y){ for(let i=0;i<10;i++){ const s=document.createElement("span"); s.className="spark"; s.textContent="✦";
  s.style.cssText=`left:${x}px;top:${y}px;--dx:${Math.random()*200-100}px;--r:${Math.random()*360}deg;font-size:${10+Math.random()*14}px`;
  document.body.appendChild(s); setTimeout(()=>s.remove(),2500); } }
$("#bigHeart").onclick=e=>sparkle(e.clientX,e.clientY);
$("#lastBtn").onclick=e=>{ $("#lastMsg").classList.remove("hidden"); e.target.classList.add("hidden");
  const r=$("#bigHeart").getBoundingClientRect(); for(let i=0;i<5;i++) setTimeout(()=>sparkle(r.left+r.width/2,r.top+r.height/2),i*250); };

/* scroll reveal: pages "turn" into view */
function observe(){ const io=new IntersectionObserver(es=>es.forEach(x=>{ if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target);} }),{threshold:.12});
  document.querySelectorAll(".page").forEach(p=>io.observe(p)); }

/* music (no autoplay) */
const audio=$("#audio"), mb=$("#music");
mb.onclick=()=>{ if(audio.paused){ audio.play().then(()=>mb.classList.add("on")).catch(()=>openModal("<p>Add your song at assets/music/song.mp3 🎵</p>")); } else { audio.pause(); mb.classList.remove("on"); } };
