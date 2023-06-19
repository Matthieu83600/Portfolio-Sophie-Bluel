// Création de la fonction pour vérifier si l'utilisateur est connecté
async function checkUserConnected () {
    const token = localStorage.getItem('token');
    /* Vérification présence token
       console.log(token);
    */
   const userConnected = token != null && token != undefined && token != '';
   
   if (userConnected) {
      // Si l'utilisateur est connecté 
      const loginLink = document.querySelector(".login__link");
      loginLink.textContent = "logout";
      loginLink.addEventListener("click", userLogOut);

      const navEdition = document.getElementById('navEdition');
      navEdition.style.display = 'flex';

      const buttonModify = document.querySelector(".buttonModify");
      buttonModify.style.display = 'block';

      const buttonModifyOne = document.querySelector(".buttonModifyOne");
      buttonModifyOne.style.display = 'block';

      const buttonModifyTwo = document.querySelector(".buttonModifyTwo");
      buttonModifyTwo.style.display = 'block';

      const filtersSection = document.querySelector(".filters");
      filtersSection.style.display = 'none';
      
   } else {
      // Si l'utilisateur est déconnecté
      const loginLink = document.querySelector(".login__link");
      loginLink.textContent = "login";

      const navEdition = document.getElementById('navEdition');
      navEdition.style.display = 'none';

      const buttonModify = document.querySelector(".buttonModify");
      buttonModify.style.display = 'none';

      const buttonModifyOne = document.querySelector(".buttonModifyOne");
      buttonModifyOne.style.display = 'none';

      const buttonModifyTwo = document.querySelector(".buttonModifyTwo");
      buttonModifyTwo.style.display = 'none';

      const filtersSection = document.querySelector(".filters");
      filtersSection.style.display = 'flex';
   }
}

// Fonction de déconnexion
async function userLogOut() {
   // Nettoyage du localStorage
   localStorage.clear();
   // Rechargement de la page 
   window.location.reload();
}