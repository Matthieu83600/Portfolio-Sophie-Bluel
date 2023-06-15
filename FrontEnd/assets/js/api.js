// Gestion des appels à l'API 

    // Récupération des données des travaux 
    async function getWorks() {
        await fetch("http://localhost:5678/api/works")
        .then(response => response.json())
        .then(dataWorks => {
            console.table(dataWorks);
            // Sélection de la div qui va contenir les travaux 
            const gallery = document.querySelector(".gallery");
            gallery.innerHTML = "";
            //On crée les travaux à partir des données récupérées via l'API
            dataWorks.forEach((work) => {
                // Création des éléments nécessaires à l'affichage des travaux 
                const card = document.createElement("figure");
                const imgCard = document.createElement("img");
                const titleCard = document.createElement("figcaption");

                // On récupère les données importantes pour afficher les travaux
                imgCard.src = work.imageUrl;
                imgCard.alt = work.title;
                imgCard.setAttribute('category', work.categoryId);
                titleCard.innerText = work.title;

                // On relie les éléments img et title à leur parent card
                card.appendChild(imgCard);
                card.appendChild(titleCard);

                // On relie la card à la balise div qui contient la galerie
                gallery.appendChild(card);

            });
        });    
    };
