// ===== Language strings for archive page =====
const archiveI18n = {
  en: {
    "site.title": "Archive — Abhipray",
    "archive.header.title": "Abhipray Archive",
    "archive.header.subtitle": "Journey through two decades of musical memories and heartfelt testimonials from the Sawai Gandharva Bhimsen Mahotsav.",
    "archive.header.description": "Browse through handwritten and typed testimonials from festival attendees",
    "archive.filter.title": "Browse by Mahotsav (50th - 70th)",
    "archive.filter.subtitle": "Select a festival edition to view abhiprays from that year",
    "archive.filter.all": "All Mahotsav",
    "archive.filter.select_mahotsav": "Select Mahotsav",
    "archive.famous_personalities": "Famous Personalities",
    "archive.loading": "Loading abhiprays...",
    "archive.no_results.title": "No Abhiprays Found",
    "archive.no_results.message": "No abhiprays are available for the selected mahotsav. Try selecting a different year.",
    "archive.no_results.reset": "Show All Abhiprays",
    "archive.modal.title": "Abhipray Details",
    "archive.modal.details": "Details",
    "archive.modal.mahotsav": "Mahotsav:",
    "archive.modal.year": "Year:",
    "archive.modal.language": "Language:",
    "archive.modal.submitted": "Submitted:",
    "archive.modal.id": "ID:",
    "archive.modal.text_content": "Text Content",
    "archive.modal.download": "Download Image",
    "common.close": "Close"
  },
  hi: {
    "site.title": "संग्रह — अभिप्राय",
    "archive.header.title": "अभिप्राय संग्रह",
    "archive.header.subtitle": "सवाई गंधर्व भीमसेन महोत्सव की दो दशकों की संगीतमय यादों और हृदयस्पर्शी प्रशंसापत्रों की यात्रा।",
    "archive.header.description": "त्योहार में उपस्थित लोगों के हस्तलिखित और टाइप किए गए प्रशंसापत्रों को देखें",
    "archive.filter.title": "महोत्सव के अनुसार ब्राउज़ करें (50वां - 70वां)",
    "archive.filter.subtitle": "उस वर्ष के अभिप्राय देखने के लिए फेस्टिवल संस्करण चुनें",
    "archive.filter.all": "सभी महोत्सव",
    "archive.filter.select_mahotsav": "महोत्सव चुनें",
    "archive.famous_personalities": "विशिष्ट व्यक्तित्व",
    "archive.loading": "अभिप्राय लोड हो रहे हैं...",
    "archive.no_results.title": "कोई अभिप्राय नहीं मिला",
    "archive.no_results.message": "चयनित महोत्सव के लिए कोई अभिप्राय उपलब्ध नहीं है। कृपया कोई अन्य वर्ष चुनें।",
    "archive.no_results.reset": "सभी अभिप्राय दिखाएं",
    "archive.modal.title": "अभिप्राय विवरण",
    "archive.modal.details": "विवरण",
    "archive.modal.mahotsav": "महोत्सव:",
    "archive.modal.year": "वर्ष:",
    "archive.modal.language": "भाषा:",
    "archive.modal.submitted": "प्रस्तुत:",
    "archive.modal.id": "आईडी:",
    "archive.modal.text_content": "पाठ सामग्री",
    "archive.modal.download": "छवि डाउनलोड करें",
    "common.close": "बंद करें"
  },
  mr: {
    "site.title": "संग्रह — अभिप्राय",
    "archive.header.title": "अभिप्राय संग्रह",
    "archive.header.subtitle": "सवाई गंधर्व भीमसेन महोत्सवातील दोन दशकांच्या संगीतमय आठवणी आणि मनापासून दिलेल्या प्रशंसापत्रांचा प्रवास।",
    "archive.header.description": "सणाला उपस्थित राहिलेल्या लोकांची हस्तलिखित आणि टाइप केलेली प्रशंसापत्रे पहा",
    "archive.filter.title": "महोत्सवानुसार ब्राउझ करा (50वा - 70वा)",
    "archive.filter.subtitle": "त्या वर्षाचे अभिप्राय पाहण्यासाठी फेस्टिव्हल आवृत्ती निवडा",
    "archive.filter.all": "सर्व महोत्सव",
    "archive.filter.select_mahotsav": "महोत्सव निवडा",
    "archive.famous_personalities": "प्रसिद्ध व्यक्तिमत्त्वे",
    "archive.loading": "अभिप्राय लोड होत आहेत...",
    "archive.no_results.title": "कोणतेही अभिप्राय आढळले नाहीत",
    "archive.no_results.message": "निवडलेल्या महोत्सवासाठी कोणतेही अभिप्राय उपलब्ध नाहीत। कृपया वेगळे वर्ष निवडा।",
    "archive.no_results.reset": "सर्व अभिप्राय दाखवा",
    "archive.modal.title": "अभिप्राय तपशील",
    "archive.modal.details": "तपशील",
    "archive.modal.mahotsav": "महोत्सव:",
    "archive.modal.year": "वर्ष:",
    "archive.modal.language": "भाषा:",
    "archive.modal.submitted": "सबमिट केले:",
    "archive.modal.id": "आयडी:",
    "archive.modal.text_content": "मजकूर सामग्री",
    "archive.modal.download": "प्रतिमा डाउनलोड करा",
    "common.close": "बंद करा"
  }
};

// ===== Merge archive translations with main i18n =====
if (typeof i18n !== 'undefined') {
    // Main i18n exists, merge archive page translations
    Object.keys(archiveI18n).forEach(lang => {
        if (i18n[lang]) {
            Object.assign(i18n[lang], archiveI18n[lang]);
        } else {
            i18n[lang] = archiveI18n[lang];
        }
    });
} else {
    // If main i18n doesn't exist, use archive translations
    window.i18n = archiveI18n;
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

// ===== Sample data (replace with actual API calls) =====
const sampleAbhiprays = [
  {
    id: "ABH-50-001",
    mahotsav: 50,
    year: 2002,
    imageUrl: "assets/images/abhiprays/50th/abhipray-001.jpg",
    isApproved: true
  },
  {
    id: "ABH-70-001",
    mahotsav: 70,
    year: 2022,
    imageUrl: "assets/images/abhiprays/70th/abhipray-001.jpg",
    isApproved: true
  },
  {
    id: "ABH-70-002",
    mahotsav: 70,
    year: 2022,
    imageUrl: "assets/images/abhiprays/70th/abhipray-002.jpg",
    isApproved: true
  },
  {
    id: "ABH-69-001",
    mahotsav: 69,
    year: 2021,
    imageUrl: "assets/images/abhiprays/69th/abhipray-001.jpg",
    isApproved: true
  },
  {
    id: "ABH-69-002",
    mahotsav: 69,
    year: 2021,
    imageUrl: "assets/images/abhiprays/69th/abhipray-002.jpg",
    isApproved: true
  },
  {
    id: "ABH-68-001",
    mahotsav: 68,
    year: 2020,
    imageUrl: "assets/images/abhiprays/68th/abhipray-001.jpg",
    isApproved: true
  },
  {
    id: "ABH-67-001",
    mahotsav: 67,
    year: 2019,
    imageUrl: "assets/images/abhiprays/67th/abhipray-001.jpg",
    isApproved: true
  },
  {
    id: "ABH-66-001",
    mahotsav: 66,
    year: 2018,
    imageUrl: "assets/images/abhiprays/66th/abhipray-001.jpg",
    isApproved: true
  }
];

// ===== Global variables =====
let currentAbhiprays = [];
let filteredAbhiprays = [];
let currentPage = 1;
const itemsPerPage = 12;
let currentFilter = 'all';

// ===== Store original switchLanguage function and extend it =====
let originalSwitchLanguage = null;

// Enhanced language switching for archive page
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
                const str = i18n[lang]?.[key];
                if (typeof str === "string") el.textContent = str;
            });
        }
        
        // Set active button
        if (typeof setActiveLangButton === 'function') {
            setActiveLangButton(lang);
        } else {
            // Fallback button highlighting
            $(".lang-btn").removeClass("active");
            $(`.lang-btn[data-lang='${lang}']`).addClass("active");
        }
        
        document.title = i18n[lang]["site.title"] || document.title;
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
        $(".lang-btn").off("click.archive").on("click.archive", function(){
            const lang = $(this).data("lang");
            window.switchLanguage(lang);
        });
    };
    
    // Try immediate initialization
    initLang();
    
    // Also try after a short delay to ensure main.js is loaded
    setTimeout(initLang, 50);
}

// ===== Populate mahotsav select dropdown =====
function populateMahotsavSelect() {
  const select = document.getElementById('mahotsavSelect');
  if (!select) return;
  
  // Clear existing options except the first one
  while (select.children.length > 1) {
    select.removeChild(select.lastChild);
  }
  
  // Add mahotsav options (reverse order for latest first)
  Object.keys(mahotsavData)
    .sort((a, b) => b - a)
    .forEach(mahotsav => {
      const data = mahotsavData[mahotsav];
      const option = document.createElement('option');
      option.value = mahotsav;
      option.textContent = `${data.name} (${data.year})`;
      select.appendChild(option);
    });
}

// ===== Load abhiprays (simulated API call) =====
async function loadAbhiprays() {
  try {
    showLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In real implementation, this would be an API call
    // const response = await fetch('/api/abhiprays/');
    // const data = await response.json();
    
    currentAbhiprays = sampleAbhiprays.filter(abhipray => abhipray.isApproved);
    filteredAbhiprays = [...currentAbhiprays];
    
    renderAbhiprays();
    
  } catch (error) {
    console.error('Error loading abhiprays:', error);
    showError('Failed to load abhiprays. Please try again later.');
  } finally {
    showLoading(false);
  }
}

// ===== Show/hide loading state =====
function showLoading(show) {
  const loadingState = document.getElementById('loadingState');
  const archiveGrid = document.getElementById('archiveGrid');
  const noResults = document.getElementById('noResults');
  
  if (show) {
    loadingState.style.display = 'block';
    archiveGrid.style.display = 'none';
    noResults.style.display = 'none';
  } else {
    loadingState.style.display = 'none';
  }
}

// ===== Render abhiprays grid =====
function renderAbhiprays() {
  const grid = document.getElementById('archiveGrid');
  const noResults = document.getElementById('noResults');
  const paginationContainer = document.getElementById('paginationContainer');
  
  if (filteredAbhiprays.length === 0) {
    grid.style.display = 'none';
    noResults.style.display = 'block';
    paginationContainer.style.display = 'none';
    return;
  }
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredAbhiprays.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageAbhiprays = filteredAbhiprays.slice(startIndex, endIndex);
  
  // Clear grid
  grid.innerHTML = '';
  
  // Render abhipray cards
  pageAbhiprays.forEach(abhipray => {
    const card = createAbhiprayCard(abhipray);
    grid.appendChild(card);
  });
  
  // Show grid and pagination
  grid.style.display = 'flex';
  noResults.style.display = 'none';
  
  if (totalPages > 1) {
    renderPagination(totalPages);
    paginationContainer.style.display = 'block';
  } else {
    paginationContainer.style.display = 'none';
  }
}

// ===== Create abhipray card =====
function createAbhiprayCard(abhipray) {
  const col = document.createElement('div');
  col.className = 'col-lg-4 col-md-6';
  
  const mahotsavInfo = mahotsavData[abhipray.mahotsav];
  
  col.innerHTML = `
    <div class="card h-100 border-0 shadow-sm abhipray-card" data-abhipray-id="${abhipray.id}">
      <div class="card-img-top-wrapper" style="height: 250px; overflow: hidden; position: relative;">
        <img src="${abhipray.imageUrl}" 
             class="card-img-top h-100 w-100" 
             style="object-fit: cover; cursor: zoom-in; transition: transform 0.3s ease;" 
             alt="Abhipray from ${mahotsavInfo.name}" 
             onclick="openImageModal('${abhipray.id}')"
             onmouseover="this.style.transform='scale(1.05)'"
             onmouseout="this.style.transform='scale(1)'">
        <div class="position-absolute top-0 start-0 m-2">
          <span class="badge bg-maroon text-white">${mahotsavInfo.name}</span>
        </div>
        <div class="position-absolute top-0 end-0 m-2">
          <span class="badge bg-light text-dark">${mahotsavInfo.year}</span>
        </div>
      </div>
      
      <div class="card-body text-center py-2">
        <h6 class="card-title text-maroon mb-1">${mahotsavInfo.name}</h6>
        <small class="text-muted">Year ${mahotsavInfo.year}</small>
      </div>
    </div>
  `;
  
  return col;
}

// ===== Format date =====
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
}

// ===== Render pagination =====
function renderPagination(totalPages) {
  const pagination = document.getElementById('pagination');
  pagination.innerHTML = '';
  
  // Previous button
  const prevLi = document.createElement('li');
  prevLi.className = `page-item ${currentPage === 1 ? 'disabled' : ''}`;
  prevLi.innerHTML = `
    <a class="page-link" href="#" onclick="changePage(${currentPage - 1})" aria-label="Previous">
      <span aria-hidden="true">&laquo;</span>
    </a>
  `;
  pagination.appendChild(prevLi);
  
  // Page numbers
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, currentPage + 2);
  
  if (startPage > 1) {
    const firstLi = document.createElement('li');
    firstLi.className = 'page-item';
    firstLi.innerHTML = `<a class="page-link" href="#" onclick="changePage(1)">1</a>`;
    pagination.appendChild(firstLi);
    
    if (startPage > 2) {
      const ellipsisLi = document.createElement('li');
      ellipsisLi.className = 'page-item disabled';
      ellipsisLi.innerHTML = `<span class="page-link">...</span>`;
      pagination.appendChild(ellipsisLi);
    }
  }
  
  for (let i = startPage; i <= endPage; i++) {
    const li = document.createElement('li');
    li.className = `page-item ${i === currentPage ? 'active' : ''}`;
    li.innerHTML = `<a class="page-link" href="#" onclick="changePage(${i})">${i}</a>`;
    pagination.appendChild(li);
  }
  
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      const ellipsisLi = document.createElement('li');
      ellipsisLi.className = 'page-item disabled';
      ellipsisLi.innerHTML = `<span class="page-link">...</span>`;
      pagination.appendChild(ellipsisLi);
    }
    
    const lastLi = document.createElement('li');
    lastLi.className = 'page-item';
    lastLi.innerHTML = `<a class="page-link" href="#" onclick="changePage(${totalPages})">${totalPages}</a>`;
    pagination.appendChild(lastLi);
  }
  
  // Next button
  const nextLi = document.createElement('li');
  nextLi.className = `page-item ${currentPage === totalPages ? 'disabled' : ''}`;
  nextLi.innerHTML = `
    <a class="page-link" href="#" onclick="changePage(${currentPage + 1})" aria-label="Next">
      <span aria-hidden="true">&raquo;</span>
    </a>
  `;
  pagination.appendChild(nextLi);
}

// ===== Change page =====
function changePage(page) {
  const totalPages = Math.ceil(filteredAbhiprays.length / itemsPerPage);
  if (page < 1 || page > totalPages) return;
  
  currentPage = page;
  renderAbhiprays();
  
  // Scroll to top of archive grid
  document.getElementById('archiveGrid').scrollIntoView({ 
    behavior: 'smooth', 
    block: 'start' 
  });
}

// ===== Filter by mahotsav =====
function filterByMahotsav(mahotsav) {
  console.log('Filtering by mahotsav:', mahotsav, 'Type:', typeof mahotsav); // Debug log
  
  currentFilter = mahotsav;
  currentPage = 1;
  
  if (mahotsav === 'all') {
    filteredAbhiprays = [...currentAbhiprays];
    console.log('Showing all abhiprays:', filteredAbhiprays.length); // Debug log
  } else {
    filteredAbhiprays = currentAbhiprays.filter(abhipray => {
      console.log('Checking abhipray mahotsav:', abhipray.mahotsav, 'against filter:', mahotsav); // Debug log
      return abhipray.mahotsav === mahotsav;
    });
    console.log('Filtered abhiprays:', filteredAbhiprays.length); // Debug log
  }
  
  renderAbhiprays();
  
  // Update UI
  document.getElementById('mahotsavSelect').value = mahotsav;
  updateFilterButtons();
}

// ===== Update filter buttons =====
function updateFilterButtons() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.filter === currentFilter.toString()) {
      btn.classList.add('active');
    }
  });
}

// ===== Reset filters =====
function resetFilters() {
  filterByMahotsav('all');
}

// ===== Image zoom functionality =====
function toggleImageZoom(imgElement) {
  if (imgElement.style.transform === 'scale(2)') {
    // Zoom out
    imgElement.style.transform = 'scale(1)';
    imgElement.style.cursor = 'zoom-in';
    imgElement.style.transition = 'transform 0.3s ease';
  } else {
    // Zoom in
    imgElement.style.transform = 'scale(2)';
    imgElement.style.cursor = 'zoom-out';
    imgElement.style.transition = 'transform 0.3s ease';
  }
}

// ===== Open image modal for zooming =====
function openImageModal(abhiprayId) {
  const abhipray = currentAbhiprays.find(a => a.id === abhiprayId);
  if (!abhipray) return;
  
  const mahotsavInfo = mahotsavData[abhipray.mahotsav];
  
  // Update modal content
  document.getElementById('modalMahotsav').textContent = mahotsavInfo.name;
  document.getElementById('modalYear').textContent = mahotsavInfo.year;
  document.getElementById('modalId').textContent = abhipray.id;
  
  // Set the image for zooming
  const modalImage = document.getElementById('modalImage');
  modalImage.src = abhipray.imageUrl;
  modalImage.style.display = 'block';
  
  // Hide text content section since we only have images
  document.getElementById('modalTextContent').style.display = 'none';
  
  // Hide download button
  document.getElementById('modalDownload').style.display = 'none';
  
  // Show modal
  const modal = new bootstrap.Modal(document.getElementById('abhiprayModal'));
  modal.show();
}

// ===== Initialize archive page =====
function initArchive() {
  populateMahotsavSelect();
  loadAbhiprays();
  bindEvents();
  
  // Apply URL parameters if any
  const urlParams = new URLSearchParams(window.location.search);
  const yearParam = urlParams.get('year');
  const mahotsavParam = urlParams.get('mahotsav');
  
  if (yearParam) {
    const mahotsav = Object.keys(mahotsavData).find(key => mahotsavData[key].year == yearParam);
    if (mahotsav) {
      filterByMahotsav(parseInt(mahotsav));
    }
  } else if (mahotsavParam) {
    filterByMahotsav(parseInt(mahotsavParam));
  }
}

// ===== Bind events =====
function bindEvents() {
  // Mahotsav select change
  document.getElementById('mahotsavSelect').addEventListener('change', function() {
    const value = this.value === 'all' ? 'all' : parseInt(this.value);
    filterByMahotsav(value);
    console.log('Selected mahotsav:', value); // Debug log
  });
  
  // Filter button clicks
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const filter = this.dataset.filter === 'all' ? 'all' : parseInt(this.dataset.filter);
      filterByMahotsav(filter);
    });
  });
  
  // Prevent pagination link default behavior
  document.addEventListener('click', function(e) {
    if (e.target.closest('.page-link')) {
      e.preventDefault();
    }
  });
}

// ===== Show error message =====
function showError(message) {
  const alertDiv = document.createElement('div');
  alertDiv.className = 'alert alert-danger position-fixed';
  alertDiv.style.cssText = 'top: 120px; right: 20px; z-index: 1050; min-width: 300px;';
  alertDiv.innerHTML = `
    <div class="d-flex align-items-center">
      <div class="me-2">
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
        </svg>
      </div>
      <div class="flex-grow-1">${message}</div>
      <button type="button" class="btn-close btn-close-white ms-2" onclick="this.parentElement.parentElement.remove()"></button>
    </div>
  `;
  
  document.body.appendChild(alertDiv);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    if (alertDiv.parentElement) {
      alertDiv.remove();
    }
  }, 5000);
}

// ===== Handle URL parameters on page load =====
function handleUrlParameters() {
  const urlParams = new URLSearchParams(window.location.search);
  const yearParam = urlParams.get('year');
  const mahotsavParam = urlParams.get('mahotsav');
  
  if (mahotsavParam && mahotsavData[mahotsavParam]) {
    filterByMahotsav(parseInt(mahotsavParam));
  } else if (yearParam) {
    const mahotsav = Object.keys(mahotsavData).find(key => mahotsavData[key].year == yearParam);
    if (mahotsav) {
      filterByMahotsav(parseInt(mahotsav));
    }
  }
}

// ===== Make functions globally available =====
window.changePage = changePage;
window.filterByMahotsav = filterByMahotsav;
window.resetFilters = resetFilters;
window.openImageModal = openImageModal;
window.toggleImageZoom = toggleImageZoom;

// ===== Initialize on page load =====
$(function() {
    // IMPORTANT: Initialize language FIRST before other functionality
    const currentLang = localStorage.getItem("abhipray_lang") || "en";
    
    // Apply language immediately
    switchLanguage(currentLang);
    
    // Initialize archive functionality
    initArchive();
    handleUrlParameters();
    
    // Setup language button event handlers
    $(".lang-btn").off("click.archive").on("click.archive", function(){
        const lang = $(this).data("lang");
        switchLanguage(lang);
    });
});

// ===== Handle browser back/forward buttons =====
window.addEventListener('popstate', function() {
  handleUrlParameters();
});
