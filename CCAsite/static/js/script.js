console.log("Project loaded successfully!");

// ==========================
// Highlight active navigation link
// ==========================
const currentPage = location.pathname.split("/").pop();
document.querySelectorAll("nav ul li a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

// ==========================
// Event gallery data
// ==========================

///const events = {
   // annual: [
        //{ src: "images/annual1.jpg", caption: "Annual Day Photo 1" },
        //{ src: "images/annual2.jpg", caption: "Annual Day Photo 2" },
        //{ src: "images/annual3.jpg", caption: "Annual Day Photo 3" },
        //{ src: "images/annual4.jpg", caption: "Annual Day Photo 4" },
      //  { src: "images/annual5.jpg", caption: "Annual Day Photo 5" }
    //],
    //sports: [
        //{ src: "images/sports1.jpg", caption: "Sports Day Photo 1" },
        //{ src: "images/sports2.jpg", caption: "Sports Day Photo 2" },
        //{ src: "images/sports3.jpg", caption: "Sports Day Photo 3" },
        //{ src: "images/sports4.jpg", caption: "Sports Day Photo 4" },
      //  { src: "images/sports5.jpg", caption: "Sports Day Photo 5" }
    //],
    //cultural: [
        //{ src: "images/cultural1.jpg", caption: "Cultural Event Photo 1" },
        //{ src: "images/cultural2.jpg", caption: "Cultural Event Photo 2" },
        //{ src: "images/cultural3.jpg", caption: "Cultural Event Photo 3" },
      //  { src: "images/cultural4.jpg", caption: "Cultural Event Photo 4" },
    //    { src: "images/cultural5.jpg", caption: "Cultural Event Photo 5" }
  //  ]
//};
// ==========================
// Lightbox variables
// ==========================
let currentEvent = [];
let currentIndex = 0;
let autoSlideInterval = null;

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const closeBtn = document.getElementById('closeBtn');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// ==========================
// Functions
// ==========================
function showSlide(index) {
    if (!currentEvent.length) return;
    currentIndex = (index + currentEvent.length) % currentEvent.length;
    lightboxImage.src = currentEvent[currentIndex].src;
    lightboxCaption.textContent = currentEvent[currentIndex].caption;
}

function startAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => showSlide(currentIndex + 1), 3000);
}

function openLightbox(eventName) {
    currentEvent = events[eventName] || [];
    currentIndex = 0;
    showSlide(currentIndex);
    lightbox.classList.add('active');
    startAutoSlide();
}

function closeLightbox() {
    lightbox.classList.remove('active');
    clearInterval(autoSlideInterval);
}

// ==========================
// Event listeners
// ==========================
document.querySelectorAll('.gallery figure').forEach(figure => {
    figure.addEventListener('click', () => {
        const eventName = figure.dataset.event;
        openLightbox(eventName);
    });
});

closeBtn.addEventListener('click', closeLightbox);

prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
    startAutoSlide();
});

nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
    startAutoSlide();
});