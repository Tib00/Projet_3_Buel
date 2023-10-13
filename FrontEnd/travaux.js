let travauxLisibles; // Déclaration de la variable travauxLisibles dans la portée globale

//Récupération des travaux dans l'API et stockage dans le LocalStorage
fetch("http://localhost:5678/api/works")
    .then(travaux => travaux.json())
    .then(travauxData => {
        travauxLisibles = travauxData; 
        localStorage.setItem("travauxLisibles", JSON.stringify(travauxLisibles));
        oeuvres(travauxLisibles);
    });

let categoriesLisibles;

//Récupération des catégories dans l'API et stockage dans le LocalStorage
fetch("http://localhost:5678/api/categories")
.then(categories => categories.json())
.then(categoriesData => {
    categoriesLisibles = categoriesData; 
    localStorage.setItem("categoriesLisibles", JSON.stringify(categoriesLisibles));
});

    // Création de la fonction oeuvres qui générera les différentes galleries
    function oeuvres(data) {
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

//création et mise en place des boutons
let laDivDeTest = document.createElement("div");
laDivDeTest.classList.add("laDivDeTest")
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


let placeBouton = document.querySelector("#portfolio h2");
placeBouton.after(laDivDeTest);
laDivDeTest.appendChild(boutonReset);
laDivDeTest.appendChild(boutonObjets);
laDivDeTest.appendChild(boutonAppartements);
laDivDeTest.appendChild(boutonHetR);

//fonctionnement des boutons
let baliseObjets = document.getElementById("btn-objets");
baliseObjets.addEventListener("click", () => {
    if (travauxLisibles) {
        const objets = travauxLisibles.filter(objet => objet.categoryId === 1);
        oeuvres(objets);
    }
});

let baliseAppartements = document.getElementById("btn-appartements");
baliseAppartements.addEventListener("click", ()=>{
        if (travauxLisibles) {
            const appartements = travauxLisibles.filter(appartements => appartements.categoryId === 2);
            oeuvres(appartements); 
        }
});

let baliseHetR = document.getElementById("btn-hetr");
baliseHetR.addEventListener("click", ()=>{
    if (travauxLisibles) {
        const hetr = travauxLisibles.filter(hetr => hetr.categoryId === 3);
        oeuvres(hetr); 
    }
});

let baliseReset = document.getElementById("btn-reset");
baliseReset.addEventListener("click", ()=>{
        oeuvres(travauxLisibles);
});



//Implantation des liens
let menuNavigation = document.querySelector("header ul");
menuNavigation.innerHTML = `
<li><a href="#portfolio">projets</a></li>
<li><a href="#contact">contact</a></li>
<li><a href="login.html">login</a></li>
<li><i class="fa-brands fa-instagram"></i></li>
`
//Ici la modale
// Sélectionnez la modale et l'overlay
const modale = document.querySelector(".modale");
const overlay = document.querySelector(".overlayModale");
const modalePageUn = document.getElementById("pageModaleUn")
const modalePageDeux = document.getElementById("pageModaleDeux")
modale.style.display = "none";
overlay.style.display = "none";
modalePageUn.style.display = "none";
modalePageDeux.style.display = "none";

//Vérification du token en localStorage
if(localStorage.getItem("token") !== null){

    //Mise en place de la barre noire moche
    let laBarreNoireMoche = document.createElement("div");
    laBarreNoireMoche.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>     Mode édition`;
    laBarreNoireMoche.classList.add("barreNoire")
    let placeBarre = document.querySelector("header");
    placeBarre.before(laBarreNoireMoche);

    // Menu de navigation quand connecté
    let menuNavigationConnect = document.querySelector("header ul");
    menuNavigationConnect.innerHTML = `
    <li><a href="#portfolio">projets</a></li>
    <li><a href="#contact">contact</a></li>
    <li><button class="logout">logout</button></li>
    <li><i class="fa-brands fa-instagram"></i></li>
    `

    //Disparition des boutons
    laDivDeTest.innerHTML = ``;

    //Fonctionnement du bouton 'logout'
    let baliseLogOut = document.querySelector(".logout");
    baliseLogOut.addEventListener("click", ()=>{
        localStorage.removeItem("token");
        window.location.assign("index.html");
    });
    

    //Apparition du bouton 'modifier'
    let boutonModifier = document.createElement("button");
    boutonModifier.innerHTML = `<i class="fa-regular fa-pen-to-square"></i> modifier`;
    boutonModifier.classList.add("btn-modifier");

    let placeDuBouton = document.querySelector("#portfolio h2");
    placeDuBouton.appendChild(boutonModifier);

    //Ici la modale
    // Sélectionnez la modale et l'overlay
    const modale = document.querySelector(".modale");
    const overlay = document.querySelector(".overlayModale");
    const modalePageUn = document.getElementById("pageModaleUn")
    const modalePageDeux = document.getElementById("pageModaleDeux")
    modale.style.display = "none";
    overlay.style.display = "none";
    modalePageUn.style.display = "none";
    modalePageDeux.style.display = "none";

    // Fonctionnement du bouton modifier
    boutonModifier.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        // Lecture du sessionStorage ici
        const travauxGalerie = JSON.parse(localStorage.getItem("travauxLisibles"));

        modale.style.display = "block";
        overlay.style.display = "block";
        modalePageUn.style.display = "block";
        modalePageDeux.style.display = "none";

        // Affichage de la galerie
        let galerieNulle = document.querySelector(".modaleGalerie")
        galerieNulle.innerHTML = "";
        AfficherGalerieModale(travauxGalerie);
    });


    function AfficherGalerieModale(data) {
        let galerieModale = document.querySelector(".modaleGalerie");
    
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
    
                const poubelleIcon = document.createElement("div");
                poubelleIcon.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    
                poubelleContainer.appendChild(poubelleIcon);
    
                cardModale.appendChild(cardImage);
                cardModale.appendChild(poubelleContainer);
    
                galerieModale.appendChild(cardModale);
                
                // Attacher le gestionnaire d'événements pour ce bouton poubelle
                attacherGestionnairePoubelle(poubelleContainer);
            }
        }
    }
    
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
                        if (response.status === 204) {
                            console.log("Bravo, c'est supprimé !");
                            // Rafraîchir la liste des travaux après suppression
                            fetch("http://localhost:5678/api/works")
                                .then(travaux => travaux.json())
                                .then(travauxData => {
                                    travauxLisibles = travauxData;
                                    localStorage.setItem("travauxLisibles", JSON.stringify(travauxLisibles));
                                });
                        } else {
                            // Gérez les erreurs ou les cas où l'élément n'a pas pu être supprimé
                            console.error("Erreur lors de la suppression de l'élément.");
                        }
                    })
                    .catch((error) => {
                        console.error("Erreur lors de la suppression de l'élément :", error);
                    });
                } else {
                    console.error("ID non valide : La conversion en entier a échoué.");
                }
            } else {
                console.error("ID non valide.");
            }
        });
    }
        // Fonctionnement du bouton de fermeture de la modale
        const fermerModale = document.getElementById("fermeTaModaleUn");
        fermerModale.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            modale.style.display = "none";
            overlay.style.display = "none";
        });
        //const overlayFermetureModale = document.querySelector(".overlayModale");
        //overlayFermetureModale.addEventListener("click", () => {
        //    modale.style.display = "none";
        //    overlay.style.display = "none";
        //});

        // Fonctionnement du bouton 'Ajouter une photo'
        let ajoutPhotos = document.querySelector(".boutonAjouter");
        ajoutPhotos.addEventListener("click", () => {
        modalePageUn.style.display = "none";
        modalePageDeux.style.display = "block";        

        // Fonctionnement de la flèche de retour
        const baliseRetour = document.querySelector(".laFlecheRetour");
        baliseRetour.addEventListener("click", () => {
            modalePageUn.style.display = "block";
            modalePageDeux.style.display = "none";
        });
        //// Fonctionnement du bouton fermer la modale
        const fermerModale = document.getElementById("fermeTaModaleDeux");
        fermerModale.addEventListener("click", () => {
        modale.style.display = "none";
        overlay.style.display = "none";
        });
        //Fonctionnement du bouton bleu "+Ajouter une photo"
        const telechargerBtn = document.querySelector("#telechargerBtn");
        telechargerBtn.addEventListener("click", (event) => {
            event.preventDefault();
            nettoyerURLs();
            telechargerFichier();
        });
        function telechargerFichier() {
            const input = document.getElementById("selectFile");
            
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
            
            input.click(); // Déclenche la boîte de dialogue de sélection de fichiers
        }
        function nettoyerURLs() {
            const urls = document.querySelectorAll('a');
            urls.forEach((url) => {
                URL.revokeObjectURL(url.href);
            });
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
        /// Fonction pour gérer la soumission du formulaire
        document.getElementById("renseignementsPhotos").addEventListener("submit", (event) => {
            event.preventDefault(); // Empêche le rechargement de la page par défaut
        
            //récupère le token
            const token = localStorage.getItem('token');

            // Récupérer les valeurs des champs du formulaire
            const titre = document.getElementById("title").value;
            const id = document.querySelector("#categoryElement option:checked").value;
            const imageInput = document.getElementById("selectFile");
            const imageFile = imageInput.files[0];

            // Vérifier que le titre est une chaîne de caractères (string)
            if (typeof titre === 'string' || titre instanceof String) {
                // Le titre est une chaîne de caractères valide
            } else {
                console.error("Le titre n'est pas une chaîne de caractères valide.");
                return; // Arrêter l'exécution de la fonction
            }

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
        })
    })
}