window.addEventListener("DOMContentLoaded", (event) => {
    // console.log("DOM entièrement chargé et analysé");
    initWorks();
    
  });
// Fonction qui récupère les appels à l'API et les initialise
async function initWorks() {
    getWorks();
    getWorksModal();
    await getCategories();

    checkUserConnected();
}