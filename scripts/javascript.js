window.Koalendar = window.Koalendar || function () { (Koalendar.props = Koalendar.props || []).push(arguments) };
Koalendar('init');

function openGallery(index) {
    currentIndex = index;
    document.getElementById("galleryModal").classList.remove("hidden");
    updateImage();
}

const images = [
    "assets/images/barba_perfilada.webp",
    "assets/images/corte_moderno.webp",
    "assets/images/fade_profesional.webp",
];

let currentIndex = 0;

function openGallery(index) {
    currentIndex = index;
    document.getElementById("galleryModal").classList.remove("hidden");
    updateImage();
}

function closeGallery() {
    document.getElementById("galleryModal").classList.add("hidden");
}

function updateImage() {
    document.getElementById("galleryImage").src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}