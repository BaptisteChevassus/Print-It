// Récupération des éléments du DOM nécessaires au carrousel
const dotsContainer = document.querySelector(".dots");
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

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

// Génération dynamique d'un dot par slide, le premier étant actif par défaut
for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("dot_selected");
    dotsContainer.appendChild(dot);
}

// Récupération de tous les dots créés pour pouvoir les manipuler ensuite
const dots = document.querySelectorAll(".dot");

// Clic sur la flèche droite : passe à la slide suivante (boucle sur la première à la fin)
arrowRight.addEventListener("click", function() {
    // On retire la sélection visuelle du dot actuel
    dots[currentIndex].classList.remove("dot_selected");

    // Mise à jour de l'index : retour à 0 si on était sur la dernière slide
    if (currentIndex === slides.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }

    // Mise à jour de l'image et du texte affichés
    bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
    bannerText.innerHTML = slides[currentIndex].tagLine;

    // Activation visuelle du nouveau dot
    dots[currentIndex].classList.add("dot_selected");
});

// Clic sur la flèche gauche : passe à la slide précédente (boucle sur la dernière au début)
arrowLeft.addEventListener("click", function() {
    // On retire la sélection visuelle du dot actuel
    dots[currentIndex].classList.remove("dot_selected");

    // Mise à jour de l'index : retour à la dernière slide si on était sur la première
    if (currentIndex === 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex--;
    }

    // Mise à jour de l'image et du texte affichés
    bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
    bannerText.innerHTML = slides[currentIndex].tagLine;

    // Activation visuelle du nouveau dot
    dots[currentIndex].classList.add("dot_selected");
});