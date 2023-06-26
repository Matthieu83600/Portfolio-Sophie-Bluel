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
        modalContainer.classList.toggle("active"); // Ajoute la class active pour afficher la modale
        modalOne.style.display = "flex"; // Affiche la modale "Galerie photo"
        modalTwo.style.display = "none"; // Masque la modale "Ajout photo"
    };

// Evènement pour accéder à la deuxième modale ou revenir à la première modale
    // Sélection du bouton "Ajouter photo"
    const nextModal = document.querySelector(".modal__one-addbutton");
    // Evènement sur le bouton  "Ajouter photo" au clic
    nextModal.addEventListener("click", openNextModal);
    // Fonction lié au bouton "Ajouter photo"
    function openNextModal() {
        modalOne.style.display = "none"; // Masque modale "Galerie photo"
        modalTwo.style.display = "flex"; // Affiche modale "Ajout photo"
    };

    // Sélection de l'icône de retour
    const returnModal = document.querySelector(".return__modal-one");
    // Evènement au clic sur l'icône
    returnModal.addEventListener("click", returnFirstModal);
    // Fonction liée à l'icône de retour
    function returnFirstModal() {
        modalOne.style.display = "flex"; // Affiche modale "Galerie photo"
        modalTwo.style.display = "none"; // Masque modale "Ajout photo"
    };