/* ============ EDIT YOUR CONTENT HERE ============ */
const PHOTOS = [
  // img: put files in assets/images/ and write e.g. "assets/images/us1.jpg"
  {
    img: "assets/images/us6.jpg",
    cap: "The day we met",
    date: "26 Nov 2022",
    story: "Isa to sa memories ko di pa ata tayo masyado legal dito",
  },
  {
    img: "assets/images/us8.jpg",
    cap: "Our first family dinner",
    date: "23 Oct 2022",
    story: "Yes! sinama na yung pinaka pogi sa family dinner wahahahah",
  },
  {
    img: "assets/images/us12.jpg",
    cap: "That ride together",
    date: "20 Apr 2024",
    story: "Alam mo naman basta ganto naeenjoy ko pag kasama ka mwa",
  },
  {
    img: "assets/images/us1.jpg",
    cap: "My favorite pic",
    date: "",
    story: "Pwede bang makalimutan ko yung baby naten eh love na love ko kayo",
  },
];
const LETTERS = [
  {
    t: "Why I love you",
    b: "Mahal kita hindi lamang dahil sa mga ngiti mong nagpapasaya sa akin, kundi dahil kahit sa mga araw na hindi ka masaya, ikaw pa rin ang taong pipiliin ko. Hindi ko man maipaliwanag nang buo kung bakit ikaw, ang alam ko lang ay sa dami ng taong maaari kong mahalin,",
  },
  { t: "Open when you miss me", 
    b: "Kung sakaling hinahanap mo ang presensya ko, ipikit mo muna ang mga mata mo at isipin mong mahigpit kitang niyayakap habang ibinubulong na mahal na mahal kita. Maaaring hindi ako palaging nasa tabi mo, pero tandaan mong kahit gaano kalayo ang pagitan natin, palagi kang may lugar sa puso ko." },
  { t: "Open when you're sad", 
    b: "Alam kong may mga araw na parang ang bigat-bigat ng mundo at kahit anong pilit mong ngumiti ay may lungkot pa ring nakatago sa likod nito. Sana maalala mong hindi mo kailangang maging matatag palagi dahil nandito ako upang damayan ka, pakinggan ka, at mahalin ka kahit sa pinakamahihirap mong araw." },
  { t: "Open when you feel insecure", 
    b: "Sana makita mo ang sarili mo sa mga mata ko, dahil doon makikita mo kung gaano ka kaganda, kahalaga, at karapat-dapat mahalin. Hindi mo kailangang ikumpara ang sarili mo sa iba dahil walang sinuman ang makakapalit sa kung sino ka, at para sa akin, ikaw ay higit pa sa sapat." },
  { t: "My favorite memories", 
    b: "Sa dami ng alaala nating nabuo, kahit ang pinakasimpleng sandali kasama ka ay nagiging espesyal at hindi ko malilimutan. Kung bibigyan man ako ng pagkakataong balikan ang nakaraan, hindi ko babaguhin ang kahit ano dahil gusto kong maranasan muli ang bawat pagkakataong ikaw ang kasama ko." },
  { t: "Our future together", 
    b: "Hindi ko alam kung ano ang eksaktong naghihintay sa atin, pero sana sa bawat bukas ay magkasama pa rin nating haharapin ang mundo. Pangarap kong makasama ka sa maliliit na bagay, sa mga pagsubok, sa mga tagumpay, at balang araw, kapag matanda na tayo, ikaw pa rin ang taong hahawakan ko habang sinasabi kong ikaw ang pinakamagandang desisyon ng puso ko." },
];
const REASONS = [
  // add up to 100; missing ones show a placeholder
  "Ang paraan ng pagtawa mo kahit sa simpleng bagay.",
  "Pinapasaya mo ang mga ordinaryong araw na para bang espesyal na okasyon.",
  "Ang kabaitan mo sa lahat kahit pagod ka na.",
  "Ang ngiti mong kayang baguhin ang buong araw ko.",
  "Ang boses mong hinding-hindi ako nagsasawang pakinggan.",
  "Ang mga mata mong lagi kong gustong titigan.",
  "Ang paraan ng pag-aalala mo sa akin.",
  "Dahil kahit simpleng mensahe mo ay napapangiti mo ako.",
  "Ang pagiging ikaw kahit walang ibang nakatingin.",
  "Dahil ginagawa mong magaan ang lahat kapag kasama kita.",
  "Ang maliliit mong kilos na hindi mo alam na napapansin ko.",
  "Dahil hindi mo kailangang maging perpekto para maging espesyal sa akin.",
  "Ang paraan ng pagbanggit mo sa pangalan ko.",
  "Dahil mas nagiging maganda ang araw ko kapag nakakausap kita.",
  "Ang pagiging makulit mo na hindi ko kailanman pagsasawaan.",
  "Dahil kaya mong patawanin ako kahit malungkot ako.",
  "Ang mga kuwento mong gusto kong pakinggan nang paulit-ulit.",
  "Dahil komportable akong maging totoo kapag kasama kita.",
  "Ang paraan ng pagngiti mo kapag masaya ka.",
  "Dahil ikaw ang paborito kong pahinga sa magulong mundo.",
  "Ang lambing mong kahit minsan ay hindi mo namamalayan.",
  "Dahil pinaparamdam mong mahalaga ako.",
  "Ang pagiging matatag mo kahit marami kang pinagdaraanan.",
  "Dahil gusto kong malaman ang bawat maliit na detalye tungkol sa iyo.",
  "Ang paraan ng pag-aalaga mo sa mga taong mahalaga sa iyo.",
  "Dahil kahit tahimik lang tayo ay masaya na ako.",
  "Ang pagiging mahiyain mo sa mga hindi mo inaasahang pagkakataon.",
  "Dahil ikaw ang una kong gustong kausapin kapag may nangyari sa araw ko.",
  "Ang simpleng presensya mo na nagbibigay sa akin ng kapayapaan.",
  "Dahil ginagawa mong maganda ang mga bagay na dati ay ordinaryo lamang.",
  "Ang paraan ng pagtingin mo sa akin.",
  "Dahil gusto kong makita kang maabot ang lahat ng pangarap mo.",
  "Ang pagiging totoo mo sa nararamdaman mo.",
  "Dahil hindi ako nagsasawang humanga sa iyo.",
  "Ang mga tampo mong gusto kong suyuin.",
  "Dahil gusto kong maging dahilan ng mga ngiti mo.",
  "Ang paraan ng pakikinig mo kahit sa pinakamahaba kong kuwento.",
  "Dahil tanggap mo ako pati ang mga kapintasan ko.",
  "Ang pagiging ikaw na hindi kayang gayahin ng kahit sino.",
  "Dahil ikaw ang paborito kong bahagi ng bawat araw.",
  "Ang mga simpleng good morning at good night mo.",
  "Dahil gusto kong malaman kung kumusta ang araw mo.",
  "Ang paraan ng pagtawa mo na nakakahawa.",
  "Dahil kahit malayo ka ay kaya mong ipadama na malapit ka.",
  "Ang pagiging maalalahanin mo sa maliliit na bagay.",
  "Dahil gusto kong alagaan ka kapag pagod ka na.",
  "Ang mga pangarap mong gusto kong suportahan.",
  "Dahil gusto kong maging ligtas na lugar mo.",
  "Ang paraan ng pagiging excited mo sa mga bagay na gusto mo.",
  "Dahil ikaw ang taong gusto kong makasama sa mga simpleng sandali.",
  "Ang mga kakaibang ugali mo na lalo kong minamahal.",
  "Dahil kahit sa pinakatahimik mong araw ay gusto pa rin kitang makausap.",
  "Ang paraan ng pagpapakita mo ng pagmamahal.",
  "Dahil gusto kong maging bahagi ng mga masasayang alaala mo.",
  "Ang pagiging mapagbigay mo sa mga taong nangangailangan.",
  "Dahil gusto kong makita kang masaya kahit hindi ako ang dahilan.",
  "Ang paraan ng pag-aalala mo kung nakakain na ako.",
  "Dahil sa iyo, mas naniniwala ako sa magandang pag-ibig.",
  "Ang mga simpleng bagay na ginagawa mong hindi malilimutan.",
  "Dahil ikaw ang taong hindi ko kailangang piliting mahalin.",
  "Ang paraan ng pagyakap mo na parang wala nang ibang mahalaga.",
  "Dahil gusto kong sabayan ang bawat hakbang mo sa buhay.",
  "Ang pagiging malambing mo kahit sa pinakamaliit na paraan.",
  "Dahil gusto kong marinig ang lahat ng kuwento mo.",
  "Ang mga pagkakataong napapangiti mo ako nang hindi mo alam.",
  "Dahil gusto kong ipagmalaki ka sa buong mundo.",
  "Ang paraan ng pagiging matapang mo sa kabila ng takot.",
  "Dahil gusto kong maging sandalan mo sa mga panahong mahina ka.",
  "Ang pagiging simple mo na siyang nagpapaganda sa iyo.",
  "Dahil hindi ko kailangang magpanggap kapag kasama kita.",
  "Ang bawat alaala nating gusto kong balikan.",
  "Dahil gusto kong gumawa pa ng maraming alaala kasama ka.",
  "Ang paraan ng pagpapatawad at pag-unawa mo.",
  "Dahil kahit may pagkukulang ka ay mahalaga ka pa rin sa akin.",
  "Ang pagiging inspirasyon mo sa akin araw-araw.",
  "Dahil gusto kong makita ang lahat ng bersiyon mo.",
  "Ang mga bagay na nagpapasaya sa iyo na gusto ko ring matutunan.",
  "Dahil gusto kong maging bahagi ng kinabukasan mo.",
  "Ang paraan ng pagpaparamdam mo na hindi ako nag-iisa.",
  "Dahil ikaw ang pahinga na hindi ko alam na kailangan ko.",
  "Ang mga simpleng sandaling kasama ka na nagiging espesyal.",
  "Dahil gusto kong mahalin ka kahit sa mga araw na hindi mo mahal ang sarili mo.",
  "Ang pagiging natatangi mo sa sarili mong paraan.",
  "Dahil gusto kong maging dahilan para mas maniwala ka sa sarili mo.",
  "Ang paraan ng pag-aalaga mo kahit hindi mo ito ipinagmamalaki.",
  "Dahil gusto kong maranasan ang maraming unang pagkakataon kasama ka.",
  "Ang pagiging paborito kong tao kahit sa pinakakaraniwang araw.",
  "Dahil gusto kong hawakan ang kamay mo sa bawat pagsubok.",
  "Ang paraan ng pagngiti mo kapag nahihiya ka.",
  "Dahil gusto kong makasama ka kahit walang espesyal na plano.",
  "Ang bawat maliit na bagay na bumubuo sa pagkatao mo.",
  "Dahil ikaw ang taong gusto kong piliin sa bawat araw.",
  "Ang paraan ng pagpapagaan mo sa mabibigat kong nararamdaman.",
  "Dahil gusto kong makita kang tuparin ang lahat ng pangarap mo.",
  "Ang pagiging ikaw ang pinakamagandang bahagi ng buhay ko.",
  "Dahil kahit ilang beses kitang makilala ay ikaw pa rin ang pipiliin ko.",
  "Ang katotohanang hindi mo kailangang gumawa ng kahit ano para maging mahalaga sa akin.",
  "Dahil sa dami ng tao sa mundo, ikaw ang hinahanap ng puso ko.",
  "Ang bawat segundo na kasama kita ay gusto kong pahabain.",
  "Dahil ikaw ang paborito kong tao, lugar, at pakiramdam.",
  "Dahil ikaw ay ikaw, at iyon pa lang ay sapat nang dahilan para mahalin kita.",
];
const TIMELINE = [
  {
    img: "assets/images/us3.jpg",
    h: "First hiking",
    d: "",
    t: "Kahit mangitim at pagod g lang basta ikaw yow",
  },
  {
    img: "assets/images/us4.jpg",
    h: "My First surprise",
    d: "",
    t: "First surprise ko nung bday ko tnx love you",
  },
  {
    img: "assets/images/us5.jpg",
    h: "Sweet Pic",
    d: "",
    t: "Wala ang pogi ko lang dito hehehehe",
  },
  {
    img: "assets/images/us7.jpg",
    h: "Church together",
    d: "",
    t: "1st date sa church? kalimutan ko na nyahahah",
  },
  {
    img: "assets/images/us9.jpg",
    h: "Kiddie Pic?",
    d: "",
    t: "eto edit mo ang cute kaya sasama ko dito",
  },
  {
    img: "assets/images/us10.jpg",
    h: "Where we are now",
    d: "Today",
    t: "And I'd still choose you.",
  },
];
const HIDDEN_LETTER =
  "You found the hidden letter! Write your secret words here. I knew you'd explore every corner. 💗";
/* ================================================ */

const $ = (s) => document.querySelector(s);
const rot = () => (Math.random() * 6 - 3).toFixed(1) + "deg";
const ph = (img, label) =>
  img
    ? `<img src="${img}" alt="${label}" loading="lazy">`
    : `<span>your photo here</span>`;

/* floating hearts & petals (capped for mobile performance) */
function floater() {
  const box = $("#floaters");
  if (box.children.length > 14) return;
  const e = document.createElement("span");
  e.className = "f";
  e.textContent = ["❤", "♡", "🌸", "✿", "💗"][(Math.random() * 5) | 0];
  e.style.cssText = `left:${Math.random() * 100}%;font-size:${14 + Math.random() * 16}px;animation-duration:${9 + Math.random() * 8}s;--dx:${Math.random() * 80 - 40}px;--r:${Math.random() * 360}deg`;
  box.appendChild(e);
  setTimeout(() => e.remove(), 17000);
}
setInterval(floater, 1100);

/* modal */
function openModal(html) {
  $("#modalBody").innerHTML = html;
  $("#modal").classList.remove("hidden");
}
function closeModal() {
  $("#modal").classList.add("hidden");
}
$(".close").onclick = closeModal;
$("#modal").onclick = (e) => {
  if (e.target.id === "modal") closeModal();
};
addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
document.addEventListener("click", (e) => {
  const s = e.target.closest("[data-secret]");
  if (s) openModal(`<h3>A little secret</h3><p>${s.dataset.secret}</p>`);
});

/* 1. opening */
$("#envelope").onclick = function () {
  if (this.classList.contains("open")) return;
  this.classList.add("open");
  setTimeout(() => $("#openGift").classList.remove("hidden"), 2200);
};
$("#openGift").onclick = () => {
  audio
    .play()
    .then(() => mb.classList.add("on"))
    .catch(() => {});
  $("#opening").style.cssText = "opacity:0;transition:opacity .8s";
  setTimeout(() => {
    $("#opening").classList.add("hidden");
    $("#journal").classList.remove("hidden");
    document.body.classList.remove("locked");
    scrollTo(0, 0);
    observe();
  }, 800);
};

/* build sections */
$("#polaroids").innerHTML = PHOTOS.map(
  (p, i) =>
    `<button class="polaroid" style="--rot:${rot()}" data-i="${i}"><div class="ph">${ph(p.img, p.cap)}</div><div class="cap">${p.cap}</div><div class="date">${p.date}</div></button>`,
).join("");
$("#polaroids").onclick = (e) => {
  const b = e.target.closest(".polaroid");
  if (!b) return;
  const p = PHOTOS[b.dataset.i];
  openModal(
    `<div class="ph">${ph(p.img, p.cap)}</div><h3>${p.cap}</h3><div class="date">${p.date}</div><p>${p.story}</p>`,
  );
};

$("#envs").innerHTML = LETTERS.map(
  (l, i) => `<button class="mini" data-i="${i}"><span>${l.t}</span></button>`,
).join("");
$("#envs").onclick = (e) => {
  const b = e.target.closest(".mini");
  if (!b) return;
  const l = LETTERS[b.dataset.i];
  openModal(
    `<h3>${l.t}</h3><p class="letter-text">${l.b}</p><p class="letter-text">Always yours, Mark</p>`,
  );
};

$("#hearts").innerHTML=Array.from({length:100},(_,i)=>`<button class="h" data-i="${i}" aria-label="Reason ${i+1}">♥\uFE0E</button>`).join("");
$("#hearts").onclick = (e) => {
  const b = e.target.closest(".h");
  if (!b) return;
  b.classList.add("read");
  const i = +b.dataset.i;
  openModal(
    `<h3>Reason #${i + 1}</h3><p>${REASONS[i] || "Write reason #" + (i + 1) + " here. 💗"}</p>`,
  );
};

$("#timeline").innerHTML = TIMELINE.map(
  (t) =>
    `<article class="entry" style="--rot:${rot()}"><h3>${t.h}</h3><div class="date">${t.d}</div><div class="ph">${ph(t.img, t.h)}</div><p class="cap">${t.t}</p></article>`,
).join("");
$("#hiddenLetter").onclick = () =>
  openModal(
    `<h3>A hidden letter</h3><p class="letter-text">${HIDDEN_LETTER}</p>`,
  );

/* final surprise */
function sparkle(x, y) {
  for (let i = 0; i < 10; i++) {
    const s = document.createElement("span");
    s.className = "spark";
    s.textContent = "✦";
    s.style.cssText = `left:${x}px;top:${y}px;--dx:${Math.random() * 200 - 100}px;--r:${Math.random() * 360}deg;font-size:${10 + Math.random() * 14}px`;
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 2500);
  }
}
$("#bigHeart").onclick = (e) => sparkle(e.clientX, e.clientY);
$("#lastBtn").onclick = (e) => {
  $("#lastMsg").classList.remove("hidden");
  e.target.classList.add("hidden");
  const r = $("#bigHeart").getBoundingClientRect();
  for (let i = 0; i < 5; i++)
    setTimeout(
      () => sparkle(r.left + r.width / 2, r.top + r.height / 2),
      i * 250,
    );
};

/* scroll reveal: pages "turn" into view */
function observe() {
  const io = new IntersectionObserver(
    (es) =>
      es.forEach((x) => {
        if (x.isIntersecting) {
          x.target.classList.add("in");
          io.unobserve(x.target);
        }
      }),
    { threshold: 0.12 },
  );
  document.querySelectorAll(".page").forEach((p) => io.observe(p));
}

/* music (no autoplay) */
const audio = $("#audio"),
  mb = $("#music");
mb.onclick = () => {
  if (audio.paused) {
    audio
      .play()
      .then(() => mb.classList.add("on"))
      .catch(() =>
        openModal("<p>Add your song at assets/music/song.mp3 🎵</p>"),
      );
  } else {
    audio.pause();
    mb.classList.remove("on");
  }
};
