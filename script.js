/* =========================================================
   MTZ Films — site config
   ========================================================= */
const CONFIG = {
  phone: "+50762382712",
  phoneDisplay: "+507 6238-2712",
  whatsapp: "50762382712",
  email: "mtzfilmss@gmail.com",
  instagram: "https://instagram.com/mtzfilms",
  formEndpoint: "https://formsubmit.co/ajax/mtzfilmss@gmail.com", // swap for the hashed endpoint after activation
};

/* Films: local mp4 in media/films/ (later can be YouTube/Vimeo `embed`) */
const FILMS = [
  { id: "ali-rola",             names: "Ali & Rola",         type: ["Wedding Film", "Wedding Film"], featured: true },
  { id: "daniela-christian",    names: "Daniela & Christian", type: ["Recap", "Recap"] },
  { id: "nathalie-akram",       names: "Nathalie & Akram",   type: ["Recap", "Recap"] },
  { id: "alexandra-daniel",     names: "Alexandra & Daniel", type: ["Wedding Film", "Wedding Film"] },
  { id: "ana-ronny",            names: "Ana & Ronny",        type: ["Recap", "Recap"] },
  { id: "jossuet-stefany",      names: "Jossuet & Stefany",  type: ["Recap", "Recap"] },
  { id: "valeria-monchi",       names: "Valeria & Monchi",   type: ["Fiesta", "Party"] },
  { id: "nahomi-pedro",         names: "Nahomi & Pedro",     type: ["Wedding Film", "Wedding Film"] },
  { id: "nahomi-pedro-session", names: "Nahomi & Pedro",     type: ["Sesión de fotos", "Photo session"] },
  { id: "mariana-xv",           names: "Mariana XV",         type: ["Quinceañera", "Quinceañera"] },
];

const SERVICES = [
  { img: "media/gallery/forest.jpg",       es: ["Wedding Film", "El film completo de su boda, editado como una película."], en: ["Wedding Film", "The full film of your wedding, edited like a movie."], type: "Boda" },
  { img: "media/gallery/exit.jpg",         es: ["Recap / Highlights", "Lo mejor del día en un video corto, ideal para redes."], en: ["Recap / Highlights", "The best of the day in a short video, made for social."], type: "Boda" },
  { img: "media/gallery/casco-couple.jpg", es: ["Sesión pre-boda", "Una sesión antes de la boda, en el lugar que los representa."], en: ["Pre-wedding session", "A session before the wedding, somewhere that feels like you."], type: "Sesión pre-boda" },
  { img: "media/gallery/vows-arch.jpg",    es: ["Bodas civiles", "Ceremonias íntimas, contadas con el mismo cuidado."], en: ["Civil weddings", "Intimate ceremonies, told with the same care."], type: "Boda civil" },
  { img: "media/gallery/sunset.jpg", es: ["Bodas destino", "Playa, montaña o donde sea: vamos con ustedes."], en: ["Destination weddings", "Beach, mountains or anywhere: we'll be there."], type: "Boda destino" },
  { img: "media/films/mariana-xv.jpg",     es: ["Quinceañeras", "XV años con el mismo estilo cinematográfico."], en: ["Quinceañeras", "Quinceañeras with the same cinematic style."], type: "Quinceañera" },
];

const GALLERY = [
  { size: "wide", src: "media/gallery/dc-altar.jpg" },
  { size: "tall", src: "media/gallery/na-bride.jpg" },
  { size: "",     src: "media/gallery/ar-sweets.jpg" },
  { size: "",     src: "media/gallery/na-bw-dance.jpg" },
  { size: "wide", src: "media/gallery/dc-night.jpg" },
  { size: "",     src: "media/gallery/ar-monogram.jpg" },
  { size: "wide", src: "media/gallery/dc-bridesmaids.jpg" },
  { size: "",     src: "media/gallery/na-table.jpg" },
  { size: "",     src: "media/gallery/dc-aisle.jpg" },
  { size: "wide", src: "media/gallery/na-smoke.jpg" },
  { size: "wide", src: "media/gallery/sunset.jpg" },
  { size: "",     src: "media/gallery/details.jpg" },
  { size: "",     src: "media/gallery/bw-kiss.jpg" },
  { size: "wide", src: "media/gallery/aisle.jpg" },
  { size: "",     src: "media/gallery/car-mirror.jpg" },
  { size: "",     src: "media/gallery/first-dance.jpg" },
  { size: "",     src: "media/gallery/monogram.jpg" },
  { size: "wide", src: "media/gallery/dress-window.jpg" },
  { size: "",     src: "media/gallery/rings-low.jpg" },
  { size: "wide", src: "media/gallery/dance.jpg" },
  { size: "",     src: "media/gallery/forest.jpg" },
];

/* Reviews: add real ones only — { text, textEN?, name, event } */
const REVIEWS = [];

const FORM_SERVICES = [
  ["Wedding film", "Wedding film"], ["Recap / highlights", "Recap / highlights"], ["Teaser para redes", "Social media teaser"],
  ["Sesión pre-boda", "Pre-wedding session"], ["Drone", "Drone"], ["Ceremonia completa", "Full ceremony"],
  ["Discursos completos", "Full speeches"], ["Aún no sé", "Not sure yet"],
];

const SOCIAL_SVG = {
  instagram: '<path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4ZM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM12 3.8c2.7 0 3 0 4 .1 2.7.1 4 1.4 4.1 4.1.1 1 .1 1.3.1 4s0 3-.1 4c-.1 2.7-1.4 4-4.1 4.1-1 .1-1.3.1-4 .1s-3 0-4-.1c-2.7-.1-4-1.4-4.1-4.1-.1-1-.1-1.3-.1-4s0-3 .1-4C4 5.3 5.3 4 8 3.9c1 0 1.3-.1 4-.1ZM12 2c-2.7 0-3.1 0-4.1.1C4.3 2.2 2.2 4.3 2.1 7.9 2 8.9 2 9.3 2 12s0 3.1.1 4.1c.1 3.6 2.2 5.7 5.8 5.8 1 .1 1.4.1 4.1.1s3.1 0 4.1-.1c3.6-.1 5.7-2.2 5.8-5.8.1-1 .1-1.4.1-4.1s0-3.1-.1-4.1c-.1-3.6-2.2-5.7-5.8-5.8C15.1 2 14.7 2 12 2Z"/>',
  whatsapp: '<path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm4.5 12.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.4-.3Z"/>',
};

/* ========================================================= */

let lang = "es";
try { lang = localStorage.getItem("mtz-lang") || ((navigator.language || "").startsWith("en") ? "en" : "es"); } catch (e) {}
const t = (es, en) => (lang === "en" ? en : es);

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

/* ---------- renderers ---------- */
function renderFilms() {
  const g = $("#filmGrid"); if (!g) return;
  g.innerHTML = FILMS.map((f, i) => `
    <button class="film reveal${f.featured ? " featured" : ""}" data-i="${i}" aria-label="${esc(f.names)}">
      <img src="media/films/${f.id}.jpg" alt="" loading="lazy">
      <span class="film-play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span>
      <span class="film-txt"><small>${esc(t(...f.type))}</small><b>${esc(f.names)}</b></span>
    </button>`).join("");
}
function renderServices() {
  const g = $("#svcTiles"); if (!g) return;
  g.innerHTML = SERVICES.map((s) => {
    const [title, desc] = s[lang];
    return `<a class="svc-tile reveal" href="#quote" data-type="${esc(s.type)}">
      <img src="${s.img}" alt="" loading="lazy">
      <span class="svc-tile-txt"><b>${esc(title)}</b><small>${esc(desc)}</small><em>${t("Cotizar", "Get a quote")} →</em></span></a>`;
  }).join("");
}
function renderGallery() {
  const g = $("#galGrid"); if (!g) return;
  g.innerHTML = GALLERY.map((p, i) => `<figure class="gal-item ${p.size} reveal" data-i="${i}"><img src="${p.src}" alt="MTZ Films" loading="lazy"></figure>`).join("");
}
function renderReviews() {
  const g = $("#revGrid"); if (!g) return;
  if (!REVIEWS.length) {
    g.innerHTML = `<div class="rev-empty">${t("Muy pronto publicaremos las palabras de nuestras parejas. ¿Ya filmamos su boda? Nos encantaría leerlos.", "Our couples' words are coming soon. Did we film your wedding? We'd love to hear from you.")}
      <br><a class="btn btn-ghost btn-sm" href="${CONFIG.instagram}" target="_blank" rel="noopener">Instagram @mtzfilms</a></div>`;
    return;
  }
  g.innerHTML = REVIEWS.map((r) => `<blockquote class="rev reveal"><div class="stars">★★★★★</div><p>“${esc(lang === "en" && r.textEN ? r.textEN : r.text)}”</p><cite>— ${esc(r.name)}${r.event ? ` · ${esc(r.event)}` : ""}</cite></blockquote>`).join("");
}
function renderFormServices() {
  const g = $("#svcChecks"); if (!g) return;
  const checked = new Set($$("input:checked", g).map((i) => i.value));
  g.innerHTML = FORM_SERVICES.map(([es, en]) => `<label><input type="checkbox" name="services" value="${es}"${checked.has(es) ? " checked" : ""}> ${t(es, en)}</label>`).join("");
}

/* ---------- language (Spanish is the default in the HTML; English lives in data-en) ---------- */
function applyLang() {
  document.documentElement.lang = lang;
  $$("[data-en]").forEach((el) => {
    if (el.dataset.es === undefined) el.dataset.es = el.innerHTML;
    el.innerHTML = lang === "en" ? el.dataset.en : el.dataset.es;
  });
  $$("[data-ph-en]").forEach((el) => {
    if (el.dataset.phEs === undefined) el.dataset.phEs = el.placeholder;
    el.placeholder = lang === "en" ? el.dataset.phEn : el.dataset.phEs;
  });
  const b = $("#langBtn");
  b.textContent = lang === "en" ? "ES" : "EN";
  b.setAttribute("aria-label", lang === "en" ? "Cambiar a español" : "Switch to English");
  renderFilms(); renderServices(); renderGallery(); renderReviews(); renderFormServices();
  applyContact(); observeReveal();
}

/* ---------- contact wiring ---------- */
function waLink(msg) {
  const text = msg || t("¡Hola MTZ Films! Quiero cotizar el video de mi boda.", "Hi MTZ Films! I'd like a quote for my wedding film.");
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
}
function applyContact() {
  $$(".js-whatsapp").forEach((a) => { a.href = waLink(); a.target = "_blank"; a.rel = "noopener"; });
  $$(".js-call").forEach((a) => (a.href = `tel:${CONFIG.phone}`));
  $$(".js-email").forEach((a) => (a.href = `mailto:${CONFIG.email}`));
  $$(".js-ig").forEach((a) => { a.href = CONFIG.instagram; a.target = "_blank"; a.rel = "noopener"; });
  $$(".js-phone-text").forEach((a) => (a.textContent = `WhatsApp ${CONFIG.phoneDisplay}`));
  $$(".js-email-text").forEach((a) => (a.textContent = CONFIG.email));
  const s = $("#socials");
  if (s) s.innerHTML = [["instagram", CONFIG.instagram], ["whatsapp", waLink()]]
    .map(([k, href]) => `<a href="${href}" target="_blank" rel="noopener" aria-label="${k}"><svg viewBox="0 0 24 24">${SOCIAL_SVG[k]}</svg></a>`).join("");
}

/* ---------- lightbox (films + gallery) ---------- */
const lb = $("#lightbox"), lbBody = $("#lbBody");
function openLB(html) { lbBody.innerHTML = html; lb.hidden = false; document.body.classList.add("lb-on"); }
function closeLB() { lb.hidden = true; lbBody.innerHTML = ""; document.body.classList.remove("lb-on"); }
$("#filmGrid")?.addEventListener("click", (e) => {
  const b = e.target.closest(".film"); if (!b) return;
  const f = FILMS[b.dataset.i];
  openLB(f.embed
    ? `<iframe src="${f.embed}" allow="autoplay; fullscreen" allowfullscreen></iframe>`
    : `<video src="media/films/${f.id}.mp4" poster="media/films/${f.id}.jpg" controls autoplay playsinline></video>`);
});
$("#galGrid")?.addEventListener("click", (e) => {
  const it = e.target.closest(".gal-item"); if (!it) return;
  openLB(`<img src="${GALLERY[it.dataset.i].src}" alt="MTZ Films">`);
});
lb?.addEventListener("click", (e) => { if (e.target.closest(".lb-close") || e.target === lb) closeLB(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && lb && !lb.hidden) closeLB(); });

/* ---------- nav ---------- */
const nav = $("#nav");
addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 30), { passive: true });
$("#burger").addEventListener("click", () => nav.classList.toggle("open"));
$("#navLinks").addEventListener("click", (e) => { if (e.target.closest("a")) nav.classList.remove("open"); });
$("#langBtn").addEventListener("click", () => {
  lang = lang === "en" ? "es" : "en";
  try { localStorage.setItem("mtz-lang", lang); } catch (e) {}
  applyLang();
});

/* Service tiles pre-select the event type */
document.addEventListener("click", (e) => {
  const b = e.target.closest("a[data-type]"); if (!b || !$("#eventType")) return;
  $("#eventType").value = b.dataset.type;
});

/* ---------- reveal on scroll ---------- */
let io;
function observeReveal() {
  if (!("IntersectionObserver" in window)) { $$(".reveal").forEach((el) => el.classList.add("in")); return; }
  io ||= new IntersectionObserver((ents) => ents.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: 0.12 });
  $$(".reveal:not(.in)").forEach((el) => io.observe(el));
}

/* ---------- quote form ---------- */
const form = $("#quoteForm");
const msg = $("#formMsg");
function readForm() {
  let bad = false;
  $$("[required]", form).forEach((f) => {
    const ok = f.type === "radio" ? !!form.querySelector(`input[name="${f.name}"]:checked`) : f.checkValidity();
    (f.type === "radio" ? f.closest(".seg") : f).classList.toggle("invalid", !ok);
    if (!ok) bad = true;
  });
  if (bad) { msg.className = "form-msg err"; msg.textContent = t("Por favor completen los campos obligatorios (*).", "Please fill in the required fields (*)."); return null; }
  const fd = new FormData(form);
  const data = Object.fromEntries([...fd.entries()].filter(([k]) => k !== "services" && k !== "_honey"));
  data.services = fd.getAll("services").join(", ") || "-";
  data.language = lang.toUpperCase();
  return data;
}
if (form) {
  form.date.min = new Date().toISOString().slice(0, 10);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (form._honey.value) return;
    const data = readForm(); if (!data) return;
    data._subject = `Cotización ${data.event_type} — ${data.date} — ${data.names}`;
    data._template = "table";
    const btn = form.querySelector("button[type=submit]");
    btn.disabled = true;
    try {
      const r = await fetch(CONFIG.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(data) });
      if (!r.ok) throw new Error(r.status);
      form.reset(); renderFormServices();
      msg.className = "form-msg ok";
      msg.textContent = t("¡Gracias! Recibimos su solicitud. Les escribimos pronto con disponibilidad y cotización.", "Thank you! We received your request. We'll be in touch soon with availability and a quote.");
    } catch (err) {
      msg.className = "form-msg err";
      msg.textContent = t("Algo salió mal. Intenten por WhatsApp con el botón de abajo.", "Something went wrong. Please try WhatsApp with the button below.");
    }
    btn.disabled = false;
  });

  $("#sendWa").addEventListener("click", () => {
    const d = readForm(); if (!d) return;
    const lines = [
      t("Hola MTZ Films, quiero cotizar:", "Hi MTZ Films, I'd like a quote:"),
      `${t("Pareja", "Couple")}: ${d.names}`,
      `${t("Evento", "Event")}: ${d.event_type} — ${d.date}`,
      `${t("Ceremonia", "Ceremony")}: ${d.ceremony}`,
      `${t("Lugar ceremonia", "Ceremony venue")}: ${d.ceremony_venue || "-"}`,
      `${t("Lugar recepción", "Reception venue")}: ${d.reception_venue || "-"}`,
      `${t("Ciudad", "City")}: ${d.city}`,
      `${t("Invitados", "Guests")}: ${d.guests || "-"}`,
      `${t("Cobertura", "Coverage")}: ${d.hours || "-"}`,
      `${t("Servicios", "Services")}: ${d.services}`,
      `Email: ${d.email} · Tel: ${d.phone}`,
      d.message || "",
    ];
    window.open(waLink(lines.join("\n")), "_blank");
  });

  form.addEventListener("input", (e) => { e.target.classList.remove("invalid"); e.target.closest(".seg")?.classList.remove("invalid"); });
}

/* ---------- init ---------- */
$("#year").textContent = new Date().getFullYear();
applyLang();
$$(".section .h2, .section .kicker, .section .lead, .pillars li").forEach((el) => el.classList.add("reveal"));
observeReveal();

/* Logo: show media/logo.png if present, else keep the text wordmark */
$$(".logo-img").forEach((img) => {
  const show = () => { img.hidden = false; img.closest(".brand")?.classList.add("has-logo"); $("#intro")?.classList.add("has-logo"); };
  if (img.complete && img.naturalWidth) show(); else img.addEventListener("load", show);
});

/* ---------- intro: once per visit ---------- */
(() => {
  const intro = $("#intro"); if (!intro) return;
  let seen = false;
  try { seen = sessionStorage.getItem("mtz-intro") === "1"; sessionStorage.setItem("mtz-intro", "1"); } catch (e) {}
  const close = () => {
    if (intro.classList.contains("out")) return;
    intro.classList.add("out");
    document.body.classList.remove("intro-on");
    setTimeout(() => intro.remove(), 1300);
  };
  if (seen) { intro.remove(); document.body.classList.remove("intro-on"); return; }
  setTimeout(close, 3000);
  intro.addEventListener("click", close);
})();

/* ---------- back to top ---------- */
(() => {
  const btn = $("#toTop"); if (!btn) return;
  addEventListener("scroll", () => btn.classList.toggle("show", scrollY > 700), { passive: true });
  btn.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
})();

/* ---------- FAQ (faq.html) ---------- */
$("#faqList")?.addEventListener("click", (e) => {
  const q = e.target.closest(".faq-q"); if (!q) return;
  const item = q.parentElement; const open = !item.classList.contains("open");
  item.classList.toggle("open", open); q.setAttribute("aria-expanded", open);
});
