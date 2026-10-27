const translations = {
  en: {
    "page-title": "Biography Cody Festerling",
    "name": "Cody Festerling",
    "role": "Math Teacher",
    "bio": `He was born near Chicago. Later his family moved to Colorado. He completed his university studies at Northwestern University near Chicago. He has taught in primary schools in Colorado for twenty years. In addition, he has taught for twelve years in the US Peace Corps in different countries--Kenya, Belize, Kiribati, Gambia, Ethiopia, and now Kosovo. This is his third year of teaching English here with a counterpart.

Currently, he has also been working with the chemistry teacher to help provide equipment for the school's lab. He has been living with a host family in Pozharan and has enjoyed his time here very much.`,

    "birthday-title": "Birthday",
    "birthday-value": "???",
    "residence-title": "Residence",
    "residence-value": "Colorado",
    "working-since-title": "Working Since",
    "working-since-value": "2022?",
    "position-title": "Position",
    "position-value": "???",
    "back-button": "Back"
  },

  sq: {
    "page-title": "Biografia Cody Festerling",
    "name": "Cody Festerling",
    "role": "Mësues i Matematikës",
    "bio": `Ai ka lindur afër Chicagos. Më vonë familja e tij u zhvendos në Colorado. Studimet universitare i kreu në Northwestern University pranë Chicagos. Ka dhënë mësim në shkolla fillore në Colorado për njëzet vjet. Përveç kësaj, ka shërbyer për dymbëdhjetë vjet në US Peace Corps në vende të ndryshme -- Kenya, Belize, Kiribati, Gambia, Etiopi dhe tani në Kosovë. Ky është viti i tij i tretë duke dhënë mësim anglisht këtu me një bashkëpunëtor.

Aktualisht po punon edhe me mësuesen e kimisë për të ndihmuar në pajisjen e laboratorit të shkollës. Ai jeton me një familje pritëse në Pozharan dhe ka shijuar shumë kohën e tij këtu.`,

    "birthday-title": "Ditëlindja",
    "birthday-value": "???",
    "residence-title": "Vendbanimi",
    "residence-value": "Colorado",
    "working-since-title": "Punon që nga",
    "working-since-value": "2022?",
    "position-title": "Pozita",
    "position-value": "???",
    "back-button": "Kthehu"
  }
};

let currentLang = "en";

const toggle = document.getElementById("langToggle");

function applyLanguage(lang) {
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.title = translations[lang]["page-title"];
}

toggle.addEventListener("change", () => {
  currentLang = toggle.checked ? "sq" : "en";
  applyLanguage(currentLang);
});

// default load
applyLanguage(currentLang);