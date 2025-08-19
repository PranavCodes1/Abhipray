// ===== Language strings for famous personalities page =====
const famousI18n = {
  en: {
    "famous.title": "Famous Personalities — Abhipray",
    "famous.header.title": "Famous Personalities",
    "famous.header.subtitle": "Discover abhiprays by renowned artists, gurus, and dignitaries who have graced the Sawai Gandharva Bhimsen Mahotsav.",
    "famous.header.archive_cta": "View All Archive",
    "famous.filter.title": "Browse Famous Personalities",
    "famous.filter.subtitle": "Filter by mahotsav edition to view specific year personalities",
    "famous.filter.all_mahotsav": "All Mahotsav",
    "famous.loading": "Loading famous personalities...",
    "famous.no_results.title": "No Personalities Found",
    "famous.no_results.message": "No famous personalities found for the selected filters. Try adjusting your selection.",
    "famous.no_results.reset": "Show All Personalities",
    "famous.modal.title": "Famous Personality Abhipray",
    "famous.modal.personality": "Personality:",
    "famous.modal.mahotsav": "Mahotsav:",
    "famous.modal.year": "Year:",
    "famous.modal.id": "ID:",
    "common.close": "Close"
  },
  hi: {
    "famous.title": "विशिष्ट व्यक्तित्व — अभिप्राय",
    "famous.header.title": "विशिष्ट व्यक्तित्व",
    "famous.header.subtitle": "प्रसिद्ध कलाकारों, गुरुओं और गणमान्य व्यक्तियों के अभिप्राय देखें जिन्होंने सवाई गंधर्व भीमसेन महोत्सव को आशीर्वाद दिया है।",
    "famous.header.archive_cta": "सभी संग्रह देखें",
    "famous.filter.title": "विशिष्ट व्यक्तित्व ब्राउज़ करें",
    "famous.filter.subtitle": "महोत्सव संस्करण के अनुसार फ़िल्टर करके विशिष्ट वर्ष के व्यक्तित्व देखें",
    "famous.filter.all_mahotsav": "सभी महोत्सव",
    "famous.loading": "विशिष्ट व्यक्तित्व लोड हो रहे हैं...",
    "famous.no_results.title": "कोई व्यक्तित्व नहीं मिला",
    "famous.no_results.message": "चयनित फ़िल्टर के लिए कोई प्रसिद्ध व्यक्तित्व नहीं मिला। अपना चयन समायोजित करने का प्रयास करें।",
    "famous.no_results.reset": "सभी व्यक्तित्व दिखाएं",
    "famous.modal.title": "प्रसिद्ध व्यक्तित्व अभिप्राय",
    "famous.modal.personality": "व्यक्तित्व:",
    "famous.modal.mahotsav": "महोत्सव:",
    "famous.modal.year": "वर्ष:",
    "famous.modal.id": "आईडी:",
    "common.close": "बंद करें"
  },
  mr: {
    "famous.title": "प्रसिद्ध व्यक्तिमत्त्वे — अभिप्राय",
    "famous.header.title": "प्रसिद्ध व्यक्तिमत्त्वे",
    "famous.header.subtitle": "प्रसिद्ध कलाकार, गुरु आणि मान्यवरांचे अभिप्राय पहा ज्यांनी सवाई गंधर्व भीमसेन महोत्सवाला आशीर्वाद दिला आहे।",
    "famous.header.archive_cta": "सर्व संग्रह पहा",
    "famous.filter.title": "प्रसिद्ध व्यक्तिमत्त्वे ब्राउझ करा",
    "famous.filter.subtitle": "विशिष्ट वर्षाच्या व्यक्तिमत्त्वे पाहण्यासाठी महोत्सव आवृत्तीनुसार फिल्टर करा",
    "famous.filter.all_mahotsav": "सर्व महोत्सव",
    "famous.loading": "प्रसिद्ध व्यक्तिमत्त्वे लोड होत आहेत...",
    "famous.no_results.title": "कोणतीही व्यक्तिमत्त्वे आढळली नाहीत",
    "famous.no_results.message": "निवडलेल्या फिल्टरसाठी कोणतीही प्रसिद्ध व्यक्तिमत्त्वे आढळली नाहीत। तुमची निवड समायोजित करण्याचा प्रयत्न करा।",
    "famous.no_results.reset": "सर्व व्यक्तिमत्त्वे दाखवा",
    "famous.modal.title": "प्रसिद्ध व्यक्तिमत्त्व अभिप्राय",
    "famous.modal.personality": "व्यक्तिमत्त्व:",
    "famous.modal.mahotsav": "महोत्सव:",
    "famous.modal.year": "वर्ष:",
    "famous.modal.id": "आयडी:",
    "common.close": "बंद करा"
  }
};

// ===== Merge famous personalities translations with main i18n =====
if (typeof i18n !== 'undefined') {
    // Main i18n exists, merge famous personalities page translations
    Object.keys(famousI18n).forEach(lang => {
        if (i18n[lang]) {
            Object.assign(i18n[lang], famousI18n[lang]);
        } else {
            i18n[lang] = famousI18n[lang];
        }
    });
} else {
    // If main i18n doesn't exist, use famous personalities translations
    window.i18n = famousI18n;
}

// ===== Mahotsav data with year mapping (50th to 70th) =====
const mahotsavData = {
  50: { year: 2002, name: "50th Mahotsav" },
  51: { year: 2003, name: "51st Mahotsav" },
  52: { year: 2004, name: "52nd Mahotsav" },
  53: { year: 2005, name: "53rd Mahotsav" },
  54: { year: 2006, name: "54th Mahotsav" },
  55: { year: 2007, name: "55th Mahotsav" },
  56: { year: 2008, name: "56th Mahotsav" },
  57: { year: 2009, name: "57th Mahotsav" },
  58: { year: 2010, name: "58th Mahotsav" },
  59: { year: 2011, name: "59th Mahotsav" },
  60: { year: 2012, name: "60th Mahotsav" },
  61: { year: 2013, name: "61st Mahotsav" },
  62: { year: 2014, name: "62nd Mahotsav" },
  63: { year: 2015, name: "63rd Mahotsav" },
  64: { year: 2016, name: "64th Mahotsav" },
  65: { year: 2017, name: "65th Mahotsav" },
  66: { year: 2018, name: "66th Mahotsav" },
  67: { year: 2019, name: "67th Mahotsav" },
  68: { year: 2020, name: "68th Mahotsav" },
  69: { year: 2021, name: "69th Mahotsav" },
  70: { year: 2022, name: "70th Mahotsav" }
};

// ===== Sample famous personalities data =====
const sampleFamousPersonalities = [
  {
    id: "FAM-60-001",
    mahotsav: 60,
    year: 2012,
    personalityName: "Pt. Jasraj",
    imageUrl: "assets/images/famous/60th/pt-jasraj-001.jpg",
    isApproved: true
  },
  {
    id: "FAM-65-001",
    mahotsav: 65,
    year: 2017,
    personalityName: "Ustad Zakir Hussain",
    imageUrl: "assets/images/famous/65th/zakir-hussain-001.jpg",
    isApproved: true
  },
  {
    id: "FAM-58-001",
    mahotsav: 58,
    year: 2010,
    personalityName: "Pt. Hariprasad Chaurasia",
    imageUrl: "assets/images/famous/58th/hariprasad-chaurasia-001.jpg",
    isApproved: true
  }
];

// ===== Global variables =====
let currentFamousPersonalities = [];
let filteredPersonalities = [];
let currentPage = 1;
const itemsPerPage = 12;
let currentMahotsavFilter = 'all';

// ===== Store original switchLanguage function and extend it =====
let originalSwitchLanguage = null;

// Enhanced language switching for famous personalities page
window.switchLanguage = function(lang) {
    // Call main.js switchLanguage if it exists
    if (typeof window.switchLanguage.original === 'function') {
        window.switchLanguage.original(lang);
    } else {
        // Basic language switching if main.js is not loaded
        if (!i18n[lang]) return;
        localStorage.setItem("abhipray_lang", lang);
        
        // Apply translations
        if (typeof applyTranslations === 'function') {
            applyTranslations(lang);
        } else {
            // Fallback translation application
            document.querySelectorAll("[data-i18n]").forEach(el => {
                const key = el.getAttribute("data-i18n");
                const str = i18n[lang][key];
                if (typeof str === "string") el.textContent = str;
            });
        }
        
        // Set active button
        if (typeof setActiveLangButton === 'function') {
            setActiveLangButton(lang);
        } else {
            // Fallback button highlighting
            document.querySelectorAll(".lang-btn").forEach(btn => btn.classList.remove("active"));
            document.querySelectorAll(".lang-btn[data-lang='" + lang + "']").forEach(btn => btn.classList.add("active"));
        }
        
        document.title = i18n[lang]["famous.title"] || document.title;
        document.documentElement.lang = lang;
    }
};

// ===== Enhanced language initialization =====
function ensureLanguageConsistency() {
    const currentLang = localStorage.getItem("abhipray_lang") || "en";
    
    // Wait for DOM and main.js to be ready
    const initLang = () => {
        // Store original switchLanguage if it exists
        if (typeof switchLanguage === 'function' && !window.switchLanguage.original) {
            window.switchLanguage.original = switchLanguage;
        }
        
        // Apply current language
        if (typeof window.switchLanguage === 'function') {
            window.switchLanguage(currentLang);
        }
        
        // Setup language button event handlers
        document.querySelectorAll(".lang-btn").forEach(btn => {
            btn.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                window.switchLanguage(lang);
            });
        });
    };
    
    // Try immediate initialization
    initLang();
    
    // Also try after a short delay to ensure main.js is loaded
    setTimeout(initLang, 50);
}

// ===== Populate filter dropdowns =====
function populateFilters() {
  const mahotsavSelect = document.getElementById('mahotsavFilter');
  
  // Clear existing options except first
  while (mahotsavSelect.children.length > 1) {
    mahotsavSelect.removeChild(mahotsavSelect.lastChild);
  }
  
  // Get unique mahotsavs from data and sort (latest first)
  const mahotsavs = [...new Set(currentFamousPersonalities.map(p => p.mahotsav))].sort((a, b) => b - a);
  
  mahotsavs.forEach(mahotsav => {
    const data = mahotsavData[mahotsav];
    if (data) {
      const option = document.createElement('option');
      option.value = mahotsav;
      option.textContent = data.name + " (" + data.year + ")";
      mahotsavSelect.appendChild(option);
    }
  });
}

// ===== Load famous personalities =====
async function loadFamousPersonalities() {
  try {
    showLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    currentFamousPersonalities = sampleFamousPersonalities.filter(p => p.isApproved);
    filteredPersonalities = [...currentFamousPersonalities];
    
    populateFilters();
    renderPersonalities();
    
  } catch (error) {
    console.error('Error loading famous personalities:', error);
  } finally {
    showLoading(false);
  }
}

// ===== Show/hide loading state =====
function showLoading(show) {
  const loadingState = document.getElementById('loadingState');
  const famousGrid = document.getElementById('famousGrid');
  const noResults = document.getElementById('noResults');
  
  if (show) {
    loadingState.style.display = 'block';
    famousGrid.style.display = 'none';
    noResults.style.display = 'none';
  } else {
    loadingState.style.display = 'none';
  }
}

// ===== Render personalities grid =====
function renderPersonalities() {
  const grid = document.getElementById('famousGrid');
  const noResults = document.getElementById('noResults');
  
  if (filteredPersonalities.length === 0) {
    grid.style.display = 'none';
    noResults.style.display = 'block';
    return;
  }
  
  // Clear grid
  grid.innerHTML = '';
  
  // Render personality cards
  filteredPersonalities.forEach(personality => {
    const card = createPersonalityCard(personality);
    grid.appendChild(card);
  });
  
  // Show grid
  grid.style.display = 'flex';
  noResults.style.display = 'none';
}

// ===== Create personality card =====
function createPersonalityCard(personality) {
  const col = document.createElement('div');
  col.className = 'col-lg-4 col-md-6';
  
  const mahotsavInfo = mahotsavData[personality.mahotsav];
  
  col.innerHTML = '<div class="card h-100 border-0 shadow-sm famous-card" data-personality-id="' + personality.id + '">' +
    '<div class="card-img-top-wrapper" style="height: 280px; overflow: hidden; position: relative;">' +
    '<img src="' + personality.imageUrl + '" class="card-img-top h-100 w-100" style="object-fit: cover; cursor: zoom-in; transition: transform 0.3s ease;" alt="Abhipray by ' + personality.personalityName + '" onclick="openFamousModal(\'' + personality.id + '\')">' +
    '<div class="position-absolute top-0 start-0 m-2">' +
    '<span class="badge bg-maroon text-white">' + mahotsavInfo.name + '</span>' +
    '</div>' +
    '<div class="position-absolute top-0 end-0 m-2">' +
    '<span class="badge bg-light text-dark">' + mahotsavInfo.year + '</span>' +
    '</div>' +
    '<div class="position-absolute bottom-0 start-0 end-0 p-3" style="background: linear-gradient(transparent, rgba(0,0,0,0.7));">' +
    '<h6 class="text-white mb-0 fw-bold">' + personality.personalityName + '</h6>' +
    '</div>' +
    '</div>' +
    '<div class="card-body text-center py-3">' +
    '<h6 class="card-title text-maroon mb-1">' + personality.personalityName + '</h6>' +
    '<small class="text-muted">' + mahotsavInfo.name + ' • ' + mahotsavInfo.year + '</small>' +
    '</div>' +
    '</div>';
  
  return col;
}

// ===== Filter by mahotsav =====
function filterByMahotsav(mahotsav) {
  currentMahotsavFilter = mahotsav;
  currentPage = 1;
  
  if (mahotsav === 'all') {
    filteredPersonalities = [...currentFamousPersonalities];
  } else {
    filteredPersonalities = currentFamousPersonalities.filter(personality => {
      return personality.mahotsav === parseInt(mahotsav);
    });
  }
  
  renderPersonalities();
  document.getElementById('mahotsavFilter').value = mahotsav;
}

// ===== Reset filters =====
function resetFilters() {
  filterByMahotsav('all');
}

// ===== Open famous personality modal =====
function openFamousModal(personalityId) {
  const personality = currentFamousPersonalities.find(p => p.id === personalityId);
  if (!personality) return;
  
  const mahotsavInfo = mahotsavData[personality.mahotsav];
  
  // Update modal content
  document.getElementById('modalPersonality').textContent = personality.personalityName;
  document.getElementById('modalMahotsav').textContent = mahotsavInfo.name;
  document.getElementById('modalYear').textContent = mahotsavInfo.year;
  document.getElementById('modalId').textContent = personality.id;
  
  // Set the image
  const modalImage = document.getElementById('modalImage');
  modalImage.src = personality.imageUrl;
  modalImage.style.display = 'block';
  
  // Show modal
  const modal = new bootstrap.Modal(document.getElementById('famousModal'));
  modal.show();
}

// ===== Image zoom functionality =====
function toggleImageZoom(imgElement) {
  if (imgElement.style.transform === 'scale(2)') {
    imgElement.style.transform = 'scale(1)';
    imgElement.style.cursor = 'zoom-in';
  } else {
    imgElement.style.transform = 'scale(2)';
    imgElement.style.cursor = 'zoom-out';
  }
}

// ===== Initialize famous personalities page =====
function initFamousPersonalities() {
  loadFamousPersonalities();
  bindEvents();
}

// ===== Bind events =====
function bindEvents() {
  // Mahotsav filter change
  const mahotsavFilter = document.getElementById('mahotsavFilter');
  if (mahotsavFilter) {
    mahotsavFilter.addEventListener('change', function() {
      const value = this.value;
      filterByMahotsav(value);
    });
  }
}

// ===== Make functions globally available =====
window.filterByMahotsav = filterByMahotsav;
window.resetFilters = resetFilters;
window.openFamousModal = openFamousModal;
window.toggleImageZoom = toggleImageZoom;

// ===== Initialize on page load =====
$(function() {
    // IMPORTANT: Initialize language FIRST before other functionality
    const currentLang = localStorage.getItem("abhipray_lang") || "en";
    
    console.log('Famous personalities page loading...');
    console.log('Current language:', currentLang);
    
    // Apply language immediately
    switchLanguage(currentLang);
    
    // Initialize famous personalities functionality
    initFamousPersonalities();
});
