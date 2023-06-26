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

// Récupération des travaux pour la modale 
async function getWorksModal() {
    // Récupération des travaux pour la modale
    await fetch("http://localhost:5678/api/works")
    .then(response => response.json())
    .then(dataWorksModal => {
            // Sélection de la div qui va contenir les données récupérées via l'API
            const galleryModal = document.querySelector(".modal__one-gallery"); 

            // Création des travaux via les données récupérées
            dataWorksModal.forEach((workModal) => {
                // Création des éléments nécessaires
                const cardModal = document.createElement("figure");
                const imgCardModal = document.createElement("img");
                const titleCardModal = document.createElement("figcaption");
                // On récupère les données importantes pour afficher les travaux
                cardModal.setAttribute('id', workModal.id)
                imgCardModal.src = workModal.imageUrl;
                imgCardModal.alt = workModal.title;
                imgCardModal.setAttribute('category', workModal.categoryId);
                titleCardModal.innerText = "éditer";
                // Ajout de l'icône de suppression d'un projet
                const deleteButton = document.createElement('button');
                deleteButton.classList.add('deleteButton');
                deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
                // Evènement au clic pour supprimer un projet 
                deleteButton.addEventListener("click", async (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    confirm("Voulez-vous supprimer le projet ?");
                    const id = cardModal.id;
                    /* Test de récupération de l'id du projet
                       console.log(id);
                    */
                    const monToken = localStorage.getItem("token");
                    let response = await fetch(`http://localhost:5678/api/works/${id}`, {
                        method: 'DELETE',
                        headers: {
                            accept: '*/*',
                            Authorization: `Bearer ${monToken}`,
                        }
                    });
                    if (response.ok) {
                        return false;
                    } else {
                        alert("Echec dans la suppression du projet");
                    }
                });
                // On relie les éléments img et title à leur parent card
                cardModal.appendChild(imgCardModal);
                cardModal.appendChild(titleCardModal);
                cardModal.appendChild(deleteButton);
                // On relie la card à la balise div qui contient la galerie
                galleryModal.appendChild(cardModal);
                /* Test de récupération de l'id
                   console.log(cardModal);
                */
            });
    });        
};