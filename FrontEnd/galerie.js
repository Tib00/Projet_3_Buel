/////////////// Récupération des différents éléments de l'API /////////////////////////
let travauxLisibles; // Déclaration de la variable travauxLisibles dans la portée globale

//Récupération des travaux dans l'API et stockage dans le LocalStorage
fetch("http://localhost:5678/api/works")
    .then(travaux => travaux.json())
    .then(travauxData => {
        travauxLisibles = travauxData; 
        localStorage.setItem("travauxLisibles", JSON.stringify(travauxLisibles));
        genererGaleriePrincipale(travauxLisibles);
    })
    .catch(error => {
        console.error('Une erreur s\'est produite lors de la récupération des données :', error);
    });

let categoriesLisibles;

//Récupération des catégories dans l'API et stockage dans le LocalStorage
fetch("http://localhost:5678/api/categories")
    .then(categories => categories.json())
    .then(categoriesData => {
        categoriesLisibles = categoriesData; 
        localStorage.setItem("categoriesLisibles", JSON.stringify(categoriesLisibles));
    })
    .catch(error => {
        console.error('Une erreur s\'est produite lors de la récupération des catégories :', error);
    });

//////////// Implantation des différents boutons de manipulation de la galerie /////
let boutonReset = document.createElement("button");
boutonReset.classList.add("button");
boutonReset.innerText = "Tous";
boutonReset.setAttribute("id", "btn-reset")
let boutonObjets = document.createElement("button");
boutonObjets.classList.add("button");
boutonObjets.innerText = "Objets";
boutonObjets.setAttribute("id", "btn-objets");
let boutonAppartements = document.createElement("button");
boutonAppartements.classList.add("button");
boutonAppartements.innerText = "Appartements";
boutonAppartements.setAttribute("id", "btn-appartements")
let boutonHetR = document.createElement("button");
boutonHetR.classList.add("button");
boutonHetR.innerText = "Hôtels & restaurants";
boutonHetR.setAttribute("id", "btn-hetr");


let placeBouton = document.querySelector(".placeButton");
placeBouton.appendChild(boutonReset);
placeBouton.appendChild(boutonObjets);
placeBouton.appendChild(boutonAppartements);
placeBouton.appendChild(boutonHetR);

//fonctionnement des boutons
let baliseObjets = document.getElementById("btn-objets");
baliseObjets.addEventListener("click", () => {
    if (travauxLisibles) {
        const objets = travauxLisibles.filter(objet => objet.categoryId === 1);
        genererGaleriePrincipale(objets);
    }
});

let baliseAppartements = document.getElementById("btn-appartements");
baliseAppartements.addEventListener("click", ()=>{
        if (travauxLisibles) {
            const appartements = travauxLisibles.filter(appartements => appartements.categoryId === 2);
            genererGaleriePrincipale(appartements); 
        }
});

let baliseHetR = document.getElementById("btn-hetr");
baliseHetR.addEventListener("click", ()=>{
    if (travauxLisibles) {
        const hetr = travauxLisibles.filter(hetr => hetr.categoryId === 3);
        genererGaleriePrincipale(hetr); 
    }
});

let baliseReset = document.getElementById("btn-reset");
baliseReset.addEventListener("click", ()=>{
    genererGaleriePrincipale(travauxLisibles);
});

//Implantation des liens
let menuNavigation = document.querySelector("header ul");
menuNavigation.innerHTML = `
<li><a href="#portfolio">projets</a></li>
<li><a href="#contact">contact</a></li>
<li><a class="logIn" href="login.html">login</a></li>
<li><i class="fa-brands fa-instagram"></i></li>
`
///////////// Implantation de la logique de connection ////////////////////////////
const token = localStorage.getItem("token");
if (token !== null) {
    const elements = document.querySelectorAll(".modeEdition");
    elements.forEach(element => {
        element.style.visibility = "visible";
    });
    menuNavigation.innerHTML = `
    <li><a href="#portfolio">projets</a></li>
    <li><a href="#contact">contact</a></li>
    <li><button class="logout">logout</button></li>
    <li><i class="fa-brands fa-instagram"></i></li>
    `
    const placeButton = document.querySelector(".placeButton")
    placeButton.innerHTML = ""
} else if (token === null) {
    const elements = document.querySelectorAll(".modeEdition");
    elements.forEach(element => {
        element.style.visibility = "hidden";
    });
}

//Fonctionnement du bouton 'logout'
let baliseLogOut = document.querySelector(".logout");
baliseLogOut.addEventListener("click", ()=>{
    localStorage.removeItem("token");
    window.location.assign("index.html");
});
////////////////////// Les fonctions d'affichage des différentes galeries ///////////////////////

 // Création de la fonction galerie principale qui générera les différentes galleries de la page
 function genererGaleriePrincipale(data) {
    let galerie = document.querySelector(".gallery");
    galerie.innerHTML = '';

    if (data && Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
            const card = document.createElement("figure");
            const cardTitle = document.createElement("figcaption");
            cardTitle.textContent = data[i].title;
            const cardImage = document.createElement("img");
            cardImage.src = data[i].imageUrl;

            card.appendChild(cardImage);
            card.appendChild(cardTitle);

            galerie.appendChild(card);
        }
    } else {
        console.log("Les données ne sont pas valides ou ne sont pas un tableau.");
    }
}

// Création de la fonction galerie pour la modale
function afficherGalerieModale(data) {
    const galerieModale = document.querySelector(".modalBody");
    if (data && Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
            const cardModale = document.createElement("div");
            cardModale.classList.add("cardModale");

            const cardImage = document.createElement("img");
            cardImage.classList.add("cardImage");
            cardImage.src = data[i].imageUrl;

            const poubelleContainer = document.createElement("button");
            poubelleContainer.classList.add("poubelle");
            poubelleContainer.type = "submit";
            poubelleContainer.id = `${i}`;
            poubelleContainer.dataset.photoId = data[i].id;
            poubelleContainer.innerHTML = `<div><i class="fa-solid fa-trash-can"></i></div>`; 

            cardModale.appendChild(cardImage);
            cardModale.appendChild(poubelleContainer);

            galerieModale.appendChild(cardModale);

            //Fonction pour attacher le gestionnaire d'événements pour ce bouton poubelle
            attacherGestionnairePoubelle(poubelleContainer);
        }
    }
}

// Mapping des catégories
function categorieMapping(data) {
    let NumberId;
    if (data === "object") {
        NumberId = 1;
    } else if (data === "appartements") {
        NumberId = 2;
    } else if (data === "hotels") {
        NumberId = 3;
    }
    return NumberId;
}
///////////////////////////////// Gestion de la modale /////////////////
const travauxGalerie = JSON.parse(localStorage.getItem("travauxLisibles"))
afficherGalerieModale(travauxGalerie)

// Fonction pour attacher le gestionnaire d'événements pour un bouton poubelle spécifique
function attacherGestionnairePoubelle(supprimeElement) {
    const token = localStorage.getItem('token');
    const photoId = supprimeElement.dataset.photoId; // Obtenez l'ID de la photo associée

    supprimeElement.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();

        // Vérifiez que vous avez obtenu un ID valide
        if (photoId) {
            const parsedPhotoId = parseInt(photoId, 10); // Convertir en entier (base 10)
            if (!isNaN(parsedPhotoId)) { // Vérifier si la conversion est réussie
                console.log("Headers de la requête :", {
                    Authorization: "Bearer " + token,
                });

                // Envoie de la requête DELETE à votre API
                fetch(`http://localhost:5678/api/works/${parsedPhotoId}`, {
                    method: 'DELETE',
                    headers: {
                        Authorization: "Bearer " + token,
                    }
                })
                    .then((response) => {
                        console.log("Headers de la réponse :", response.headers);
                        console.log("Bravo, c'est supprimé !");
                        // Rafraîchir la liste des travaux après suppression
                        fetch("http://localhost:5678/api/works")
                            .then(travaux => travaux.json())
                            .then(travauxData => {
                                travauxLisibles = travauxData;
                                localStorage.setItem("travauxLisibles", JSON.stringify(travauxLisibles));
                                let galerieModale = document.querySelector(".modalBody");
                                galerieModale.innerHTML = "";
                                afficherGalerieModale(travauxLisibles); // Réafficher la galerie
                                genererGaleriePrincipale(travauxLisibles);
                            });
                    });
            }
        }
    });
}

 // Fonctionnement du bouton 'Ajouter une photo'
 let ajoutPhotos = document.querySelector(".boutonAjouter");
 ajoutPhotos.addEventListener("click", () => {
    console.log("Bonjour, vous voulez ajouter des photos")
    const titreModale = document.querySelector(".titreModale")
    titreModale.innerText = "Ajout photo"
    const baliseRetour = document.querySelector(".laFlecheRetour");
    baliseRetour.style.visibility = "visible";
    const modalBody = document.querySelector(".modalBody")
    modalBody.style.visibility = "hidden";
    const formulaire = document.getElementById("renseignementsPhotos")
    formulaire.style.visibility = "visible";
    ajoutPhotos.style.visibility = "hidden";
})
 // Fonctionnement de la flèche de retour
 const baliseRetour = document.querySelector(".laFlecheRetour");
 baliseRetour.addEventListener("click", () => {
    console.log("Attention, vous allez réafficher la galerie !!")
    const titreModale = document.querySelector(".titreModale")
    titreModale.innerText = "Galerie photo"
    baliseRetour.style.visibility = "hidden";
    const modalBody = document.querySelector(".modalBody")
    modalBody.style.visibility = "visible";
    const formulaire = document.getElementById("renseignementsPhotos")
    formulaire.style.visibility = "hidden"
    let ajoutPhotos = document.querySelector(".boutonAjouter");
    ajoutPhotos.style.visibility = "visible";
 })

// Fonctionnement du bouton modifier
const boutonModifier = document.querySelector(".btn-modifier")
boutonModifier.addEventListener("click", (event) => {
event.preventDefault();
event.stopPropagation();
const modalOverlay = document.querySelector(".modalOverlay");
modalOverlay.style.visibility = "visible";
const modalWindow = document.querySelector(".modalWindow");
modalWindow.style.visibility = "visible";
const titreModale = document.querySelector(".titreModale")
titreModale.innerText = "Galerie photo"
const modalBody = document.querySelector(".modalBody")
modalBody.style.visibility = "visible";
const baliseRetour = document.querySelector(".laFlecheRetour");
baliseRetour.style.visibility = "hidden";
let ajoutPhotos = document.querySelector(".boutonAjouter");
ajoutPhotos.style.visibility = "visible";
})

//// Fonctionnement du bouton de fermeture de la modale
const fermerModale = document.querySelector(".fermeTaModale");
fermerModale.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    const modalOverlay = document.querySelector(".modalOverlay");
    modalOverlay.style.visibility = "hidden";
    const modalWindow = document.querySelector(".modalWindow");
    modalWindow.style.visibility = "hidden";
    const modalBody = document.querySelector(".modalBody")
    modalBody.style.visibility = "hidden";
    const formulaire = document.getElementById("renseignementsPhotos")
    formulaire.style.visibility = "hidden"
    let ajoutPhotos = document.querySelector(".boutonAjouter");
    ajoutPhotos.style.visibility = "hidden";
    const baliseRetour = document.querySelector(".laFlecheRetour");
    baliseRetour.style.visibility = "hidden";
});

//Fonctionnement du formulaire d'ajout photo
//Fonctionnement du bouton bleu "+Ajouter une photo"
const telechargerBtn = document.querySelector("#telechargerBtn");
const input = document.getElementById("selectFile");

telechargerBtn.addEventListener("click", (event) => {
    console.trace()
    console.log("Le bouton bleu est cliqué")
    event.preventDefault();
    nettoyerURLs();
    telechargerFichier();                       
    
});
function telechargerFichier() {
    
    input.click(); // Déclenche la boîte de dialogue de sélection de fichiers
    // Écoutez l'événement "change" de l'élément input de type fichier
    input.addEventListener("change", () => {
    const fichier = input.files[0]; // Récupérez le fichier sélectionné

    if (fichier) {
        // Créez un élément img pour afficher l'image
        const imgElement = document.createElement("img");
        imgElement.classList.add("imageImportee")
        imgElement.src = URL.createObjectURL(fichier);

        // Remplacez l'élément actuel par l'élément img
        const placePhoto = document.querySelector(".placePhoto");
        placePhoto.innerHTML = ""; // Effacez le contenu précédent
        placePhoto.appendChild(imgElement);
        }
    });

}
function nettoyerURLs() {
    const urls = document.querySelectorAll('a');
    urls.forEach((url) => {
        URL.revokeObjectURL(url.href);
    });
}

/// Fonction pour gérer la soumission du formulaire
const validationFinaleBtn = document.getElementById("validationFinale");
validationFinaleBtn.addEventListener("click", () => {

    console.log("validationFinaleBtn");
    const token = localStorage.getItem('token');

    // Récupérer les valeurs des champs du formulaire
    const titre = document.getElementById("title").value;
    const id = document.querySelector("#categoryElement option:checked").value;
    const imageInput = document.getElementById("selectFile");
    const imageFile = imageInput.files[0];

    // Méthode pour récupérer l'id de la catégorie sous forme de nombre
    const NumberId = categorieMapping(id);

    // Vérifier si un fichier a été sélectionné
    if (imageFile) {
        // Créer un objet FormData
        const formData = new FormData();

        // Ajouter le titre et l'ID de catégorie en tant que champs FormData
        formData.append("title", titre);
        formData.append("category", NumberId);

        // Ajouter l'image au formulaire
        formData.append("image", imageFile);

        // Effectuer la requête POST
        fetch("http://localhost:5678/api/works", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + token,
            },
            body: formData,
        })
            .then((response) => {
                if (response.status === 201) {
                    // La création a réussi, gérer ici la réponse du serveur
                    console.log("Image ajoutée avec succès !");
                    // Rafraîchir la galerie modale après l'ajout d'une image
                    fetch("http://localhost:5678/api/works")
                        .then(travaux => travaux.json())
                        .then(travauxData => {
                            travauxLisibles = travauxData;
                            localStorage.setItem("travauxLisibles", JSON.stringify(travauxLisibles));
                            genererGaleriePrincipale(travauxLisibles); // Réafficher la galerie
                            const galerieModale = document.querySelector(".modalBody");
                            galerieModale.innerHTML = ""
                            afficherGalerieModale(travauxLisibles)

                            const placePhoto = document.querySelector(".placePhoto");
                            placePhoto.innerHTML = `<i class="fa-regular fa-image fa-6x"></i>`; // Effacez le contenu précédent
                            const titrePhoto = document.getElementById("title");
                            titrePhoto.value = ""; // Réinitialiser la valeur du champ de titre à une chaîne vide
                            const categoryElem = document.getElementById("categoryElement");
                            categoryElem.selectedIndex = 0;
                            const modalOverlay = document.querySelector(".modalOverlay")
                            const modalWindow  = document.querySelector(".modalWindow")
                            modalOverlay.style.visibility = "hidden"
                            modalWindow.style.visibility = "hidden"
                            const formulaire = document.getElementById("renseignementsPhotos")
                            formulaire.style.visibility = "hidden"
                            const ajoutPhotos = document.querySelector(".boutonAjouter");
                            ajoutPhotos.style.visibility = "hidden";
                            const baliseRetour = document.querySelector(".laFlecheRetour");
                            baliseRetour.style.visibility = "hidden";
                        });

                } else {
                    // Gérer d'autres cas de réponse du serveur
                    console.error("Erreur lors de l'ajout de l'image.");
                }
            })
            .catch((error) => {
                console.error("Erreur lors de la requête POST :", error);
            });
    } else {
        console.error("Veuillez sélectionner une image.");
    }
});

// Fonction de changement de couleur pour le bouton
document.addEventListener("DOMContentLoaded", function () {
const form = document.getElementById("renseignementsPhotos");
const titleInput = document.getElementById("title");
const categoryInput = document.getElementById("categoryElement");
const submitButton = document.getElementById("validationFinale");

form.addEventListener("input", function () {
  if (titleInput.value && categoryInput.value !== "noValue") {
    submitButton.style.background = "#1D6154"; // Change la couleur du bouton en vert
  } else {
    submitButton.style.background = "#A7A7A7"; // Change la couleur du bouton en gris
  }
});
});