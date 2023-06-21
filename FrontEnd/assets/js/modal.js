// Gestion de l'ouverture/fermeture au clic de la modale
    // Conteneur des modales
    const modalContainer = document.querySelector(".modal__container");
    // Déclencheurs ouverture/fermeture modales
    // Bouton "modifier", overlay de la modale, icône croix modales
    const modalTriggers = document.querySelectorAll(".modal__trigger");
    // Modale "Galerie Photo"
    const modalOne = document.querySelector(".modal__one");
    // Modale "Ajout Photo"
    const modalTwo = document.querySelector(".modal__two");

    // Evènement sur les déclencheurs 
    modalTriggers.forEach(trigger => trigger.addEventListener("click", openAndCloseModal));

    // Fonction liée au clic des déclencheurs ouverture/fermeture modale
    function openAndCloseModal() {
        modalContainer.classList.toggle("active");
        modalOne.style.display = "flex";
        modalTwo.style.display = "none";
    }