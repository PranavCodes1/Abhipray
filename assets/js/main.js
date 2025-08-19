// ===== Language strings (homepage only for now) =====
const i18n = {
  en: {
    "site.title": "Abhipray — Sawai Gandharva Festival",
    "brand": "Abhipray",
    "nav.home": "Home",
    "nav.archive": "Archive",
    "nav.about": "About",
    "nav.submit": "Submit Abhipray",
    "nav.admin": "Admin",
    "hero.title": "Abhipray - Sawai Gandharva Bhimsen Mahotsav",
    "hero.subtitle": "Preserving memories, and emotions from the heart of Hindustani classical music.",
    "hero.cta": "Explore Archive",
    "section.about.title": "About the Archive",
    "section.about.text": "A living collection of handwritten and typed abhiprays spanning two decades, safeguarding cultural memories for future generations.",
    "common.learnMore": "Learn more",
    "section.contribute.title": "Contribute Your Abhipray",
    "section.contribute.text": "Share your experience of the festival — upload a scan/photo of your handwritten note or submit a typed impression.",
    "section.contribute.cta": "Submit now",
    "section.mahotsav.title": "Browse by Mahotsav (50th—70th)",
    "section.famous.title": "Famous Personalities",
    "section.famous.text": "Explore abhiprays by renowned artists, gurus, and dignitaries who blessed the festival.",
    "common.viewAll": "View all",
     "footer.rights": "© 2025 Abhipray. All Rights Reserved.",
"footer.copyright.link": "Copyright & Rights"
  },
  hi: {
    "site.title": "अभिप्राय — सवाई गंधर्व महोत्सव",
    "brand": "अभिप्राय",
    "nav.home": "मुखपृष्ठ",
    "nav.archive": "संग्रह",
    "nav.about": "परिचय",
    "nav.submit": "अभिप्राय भेजें",
    "nav.admin": "प्रशासन",
    "hero.title": "अभिप्राय - सवाई गंधर्व भीमसेन महोत्सव",
    "hero.subtitle": "हिंदुस्तानी शास्त्रीय संगीत की यादों, भावनाओं और अनुभवों को संजोने का प्रयास।",
    "hero.cta": "संग्रह देखें",
    "section.about.title": "संग्रह के बारे में",
    "section.about.text": "दो दशकों के हस्तलिखित और टाइप किए गए अभिप्रायों का जीवंत संकलन, सांस्कृतिक स्मृतियों को भावी पीढ़ियों के लिए सुरक्षित करता है।",
    "common.learnMore": "और जानें",
    "section.contribute.title": "अपना अभिप्राय साझा करें",
    "section.contribute.text": "महोत्सव का अपना अनुभव साझा करें — हस्तलिखित नोट का स्कैन/फोटो अपलोड करें या टाइप करके भेजें।",
    "section.contribute.cta": "अभी भेजें",
    "section.mahotsav.title": "महोत्सव के अनुसार ब्राउज़ करें (50वां—70वां)",
    "section.famous.title": "विशिष्ट व्यक्तित्व",
    "section.famous.text": "प्रसिद्ध कलाकारों, गुरुओं और गणमान्य व्यक्तियों के अभिप्राय देखें।",
    "common.viewAll": "सभी देखें",
     "footer.rights": "© 2025 अभिप्राय। सर्वाधिकार सुरक्षित।",
"footer.copyright.link": "कॉपीराइट और अधिकार"
  },
  mr: {
    "site.title": "अभिप्राय — सवाई गंधर्व महोत्सव",
    "brand": "अभिप्राय",
    "nav.home": "मुख्यपृष्ठ",
    "nav.archive": "संग्रह",
    "nav.about": "विषयी",
    "nav.submit": "अभिप्राय पाठवा",
    "nav.admin": "प्रशासन",
    "hero.title": "अभिप्राय - सवाई गंधर्व भीमसेन महोत्सव",
    "hero.subtitle": "हिंदुस्थानी शास्त्रीय संगीतातील आठवणी, भावना व अनुभव जतन करण्याचा उपक्रम।",
    "hero.cta": "संग्रह पहा",
    "section.about.title": "संग्रहाविषयी",
    "section.about.text": "दोन दशके पसरलेले हस्तलिखित व टाइप केलेले अभिप्राय — पुढील पिढ्यांसाठी सांस्कृतिक स्मृती जतन करणारा जिवंत संग्रह।",
    "common.learnMore": "अधिक जाणून घ्या",
    "section.contribute.title": "आपला अभिप्राय नोंदवा",
    "section.contribute.text": "महोत्सवाचा आपला अनुभव शेअर करा — हस्तलिखित पानाचा स्कॅन/फोटो अपलोड करा किंवा मजकूर पाठवा।",
    "section.contribute.cta": "आताच पाठवा",
    "section.mahotsav.title": "महोत्सवानुसार ब्राउझ करा (50वा—70वा)",
    "section.famous.title": "प्रसिद्ध व्यक्तिमत्त्वे",
    "section.famous.text": "प्रसिद्ध कलाकार, गुरू व मान्यवरांचे अभिप्राय पहा।",
    "common.viewAll": "सर्व पहा",
     "footer.rights": "© 2025 अभिप्राय। सर्व हक्क राखीव।", 
"footer.copyright.link": "कॉपीराइट आणि हक्क" }
};

// ===== Utility: apply translations to all [data-i18n] =====
function applyTranslations(lang){
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const str = i18n[lang]?.[key];
    if (typeof str === "string") {
      // Check if the string contains HTML tags
      if (str.includes('<') && str.includes('>')) {
        el.innerHTML = str; // Use innerHTML for HTML content
      } else {
        el.textContent = str; // Use textContent for plain text
      }
    }
  });
  document.documentElement.lang = lang;
}

// ===== Persist + switch language =====
function switchLanguage(lang){
  if(!i18n[lang]) return;
  localStorage.setItem("abhipray_lang", lang);
  applyTranslations(lang);
  setActiveLangButton(lang);
  // Update title attribute (for browser tab) separately if needed
  document.title = i18n[lang]["site.title"] || document.title;
}

// ===== Read saved language or default to English =====
function initLanguage(){
  const saved = localStorage.getItem("abhipray_lang") || "en";
  switchLanguage(saved);
}

// ===== Highlight active lang button (jQuery DOM manipulation) =====
function setActiveLangButton(lang){
  $(".lang-btn").removeClass("active");
  $(`.lang-btn[data-lang='${lang}']`).addClass("active");
}

// ===== Generate mahotsav buttons dynamically =====
function generateMahotsav(start=50, end=70){
  const container = document.getElementById("mahotsavList");
  if(!container) return;
  container.innerHTML = "";
  
  // Mahotsav to year mapping
  const mahotsavData = {
    50: 2002, 51: 2003, 52: 2004, 53: 2005, 54: 2006, 55: 2007, 56: 2008, 57: 2009, 58: 2010, 59: 2011,
    60: 2012, 61: 2013, 62: 2014, 63: 2015, 64: 2016, 65: 2017, 66: 2018, 67: 2019, 68: 2020, 69: 2021, 70: 2022
  };
  
  for(let m = start; m <= end; m++){
    const a = document.createElement("a");
    a.href = `archive.html?mahotsav=${m}`;
    a.className = "year-btn"; // Keep same CSS class for styling
    a.textContent = `${m}th`;
    a.title = `${m}th Mahotsav (${mahotsavData[m]})`;
    container.appendChild(a);
  }
}
// ===== Set active footer link =====
function setActiveFooterLink() {
  const currentPage = window.location.pathname.split('/').pop();
  
  $('.footer-link').removeClass('active');
  
  if (currentPage === 'copyright.html') {
    $('.footer-link[href="copyright.html"]').addClass('active');
  }
}

// ===== Update the $(function() section =====
$(function(){
  // Fade in hero texts (jQuery animation)
  $(".hero-title").fadeTo(600, 1);
  $(".hero-sub").delay(150).fadeTo(600, 1);

  // Language button clicks
  $(".lang-btn").on("click", function(){
    const lang = $(this).data("lang");
    switchLanguage(lang);
  });

  // Init
  initLanguage();
   generateMahotsav(50, 70); 
  // Set active footer link
  setActiveFooterLink();
});
