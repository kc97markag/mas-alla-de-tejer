const translations = {
  es: {
    heroEyebrow: "CREACIONES HECHAS A MANO",
    heroTitle: "Tejemos ideas<br><em>que abrazan.</em>",
    intro: "Cada puntada transforma hilos, imaginación y mucho amor en piezas únicas, creadas especialmente para ti.",
    primaryCta: "Conoce nuestras creaciones →", storyCta: "Nuestra historia ↓",
    artNote: "Cada puntada,<br>una pequeña aventura.",
    promiseOne: "IMAGINACIÓN", promiseTwo: "COLOR", promiseThree: "HECHO A MANO", promiseFour: "AMOR",
    storyEyebrow: "MÁS QUE HILOS", storyTitle: "Hay un universo<br>en cada creación.",
    storyText: "En Más Allá de Tejer creemos que lo hecho a mano tiene una magia especial: guarda tiempo, intención y cariño. Muy pronto encontrarás aquí nuestras creaciones favoritas.",
    soonEyebrow: "PRÓXIMAMENTE", soonTitle: "Un rincón lleno<br>de <em>creaciones únicas.</em>",
    soonText: "Mientras preparamos esta galería, síguenos para conocer cada nueva aventura tejida.",
    footerTagline: "Every stitch is woven with love.",
    pageTitle: "Más Allá de Tejer | Hecho con amor"
  },
  en: {
    heroEyebrow: "HANDMADE CREATIONS",
    heroTitle: "We weave ideas<br><em>that give hugs.</em>",
    intro: "Every stitch turns yarn, imagination, and lots of love into unique pieces, made especially for you.",
    primaryCta: "Discover our creations →", storyCta: "Our story ↓",
    artNote: "Every stitch,<br>a little adventure.",
    promiseOne: "IMAGINATION", promiseTwo: "COLOR", promiseThree: "HANDMADE", promiseFour: "LOVE",
    storyEyebrow: "MORE THAN YARN", storyTitle: "There is a universe<br>in every creation.",
    storyText: "At Más Allá de Tejer, we believe handmade pieces hold a special kind of magic: time, intention, and care. Our favorite creations will soon be here.",
    soonEyebrow: "COMING SOON", soonTitle: "A little corner full<br>of <em>unique creations.</em>",
    soonText: "While we prepare this gallery, follow us to discover every new woven adventure.",
    footerTagline: "Every stitch is woven with love.",
    pageTitle: "Más Allá de Tejer | Made with love"
  }
};

const picker = document.querySelector("#language-select");
const preferredLanguage = localStorage.getItem("mat-language") || "es";

function setLanguage(language) {
  const copy = translations[language];
  document.documentElement.lang = language;
  document.title = copy.pageTitle;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.innerHTML = copy[element.dataset.i18n];
  });
  picker.value = language;
  localStorage.setItem("mat-language", language);
}

picker.addEventListener("change", (event) => setLanguage(event.target.value));
setLanguage(preferredLanguage);
