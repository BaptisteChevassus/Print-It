// Récupération des éléments du DOM nécessaires au carrousel
const dotsContainer = document.querySelector(".dots");
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const banner = document.querySelector("#banner");

// Index de la slide actuellement affichée
let currentIndex = 0;

// Données des slides : image associée + texte à afficher
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Création dynamique des boutons flèches avec leurs images
const arrowLeft = document.createElement("button");
arrowLeft.classList.add("arrow", "arrow_left");
arrowLeft.innerHTML = `<img src="./assets/images/arrow_left.png" alt="Flèche gauche">`;
banner.appendChild(arrowLeft);

const arrowRight = document.createElement("button");
arrowRight.classList.add("arrow", "arrow_right");
arrowRight.innerHTML = `<img src="./assets/images/arrow_right.png" alt="Flèche droite">`;
banner.appendChild(arrowRight);

// Génération dynamique d'un dot par slide, le premier étant actif par défaut
for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("dot_selected");
    // Clic sur un dot : navigation directe vers la slide correspondante
    // stopPropagation empêche l'événement de remonter jusqu'au listener de la banner
    dot.addEventListener("click", function(e) {
        e.stopPropagation();
        goToSlide(i);
    });
    dotsContainer.appendChild(dot);
}

// Récupération de tous les dots créés pour pouvoir les manipuler ensuite
const dots = document.querySelectorAll(".dot");

// Fonction centrale de navigation : met à jour l'image, le texte et le dot actif
function goToSlide(index) {
    dots[currentIndex].classList.remove("dot_selected");
    currentIndex = index;
    bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
    bannerText.innerHTML = slides[currentIndex].tagLine;
    dots[currentIndex].classList.add("dot_selected");
}

// Délégation d'événement sur la banner : un seul listener pour les deux flèches
banner.addEventListener("click", function(e) {
    if (e.target.closest(".arrow_right")) {
        const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
        goToSlide(newIndex);
    } else if (e.target.closest(".arrow_left")) {
        const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
        goToSlide(newIndex);
    }
});