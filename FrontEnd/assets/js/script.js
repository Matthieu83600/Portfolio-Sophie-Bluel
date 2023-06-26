window.addEventListener("DOMContentLoaded", (event) => {
    // console.log("DOM entièrement chargé et analysé");
    event.preventDefault();
    event.stopPropagation();
    initWorks();
  });
// Fonction qui récupère les appels à l'API et les initialise
async function initWorks() {
    getWorks();
    await getCategories();

    checkUserConnected();
    // Affichage des travaux dans la galerie photo de la modale
    getWorksModal();
}