//fetch("http://localhost:5678/api/works")
//    .then(travaux => travaux.json())
//    .then (travauxLisibles => {
//function oeuvres(travauxLisibles){
//    let galerie = document.querySelector(".gallery")
//    galerie.innerHTML = '';
//        for (let i = 0; i < travauxLisibles.length; i++) { 
//
//        const card = document.createElement("figure");
//        const cardTitle = document.createElement("figcaption");
//        cardTitle.textContent = travauxLisibles[i].title;
//        const cardImage = document.createElement("img");
//        cardImage.src = travauxLisibles[i].imageUrl;
//
//        card.appendChild(cardImage);
//        card.appendChild(cardTitle);
//
//        galerie.appendChild(card);
//        
//        }
//    };
//    oeuvres(travauxLisibles);
//});
//
////création et mise en place des boutons
//let laDivDeTest = document.createElement("div");
//laDivDeTest.classList.add("laDivDeTest")
//let boutonReset = document.createElement("button");
//boutonReset.classList.add("button");
//boutonReset.innerText = "Tous";
//boutonReset.setAttribute("id", "btn-reset")
//let boutonObjets = document.createElement("button");
//boutonObjets.classList.add("button");
//boutonObjets.innerText = "Objets";
//boutonObjets.setAttribute("id", "btn-objets");
//let boutonAppartements = document.createElement("button");
//boutonAppartements.classList.add("button");
//boutonAppartements.innerText = "Appartements";
//boutonAppartements.setAttribute("id", "btn-appartements")
//let boutonHetR = document.createElement("button");
//boutonHetR.classList.add("button");
//boutonHetR.innerText = "Hôtels & restaurants";
//boutonHetR.setAttribute("id", "btn-hetr");
//
//
//let placeBouton = document.querySelector("#portfolio h2");
//placeBouton.after(laDivDeTest);
//laDivDeTest.appendChild(boutonReset);
//laDivDeTest.appendChild(boutonObjets);
//laDivDeTest.appendChild(boutonAppartements);
//laDivDeTest.appendChild(boutonHetR);
//
////fonctionnement des boutons
//let baliseObjets = document.getElementById("btn-objets");
//baliseObjets.addEventListener("click", ()=>{
//fetch("http://localhost:5678/api/works")
//    .then(travaux => travaux.json())
//    .then (travaux => travaux.filter((objet)=> objet.categoryId === 1))
//    .then (objet => {
//        function objetSeuls(objet){
//            let galerie = document.querySelector(".gallery")
//            galerie.innerHTML = '';
//            for(let i = 0; i < objet.length; i++){
//                
//                const card = document.createElement("figure");
//                const cardTitle = document.createElement("figcaption");
//                cardTitle.textContent = objet[i].title;
//                const cardImage = document.createElement("img");
//                cardImage.src = objet[i].imageUrl;
//
//                card.appendChild(cardImage);
//                card.appendChild(cardTitle);
//
//                galerie.appendChild(card);
//            }
//        }
//        objetSeuls(objet);
//    })
//});
//
//let baliseAppartements = document.getElementById("btn-appartements");
//baliseAppartements.addEventListener("click", ()=>{
//fetch("http://localhost:5678/api/works")
//    .then(travaux => travaux.json())
//    .then (travaux => travaux.filter((appartement)=> appartement.categoryId === 2))
//    .then (appartement => {
//        function appartementsSeuls(appartement){
//            let galerie = document.querySelector(".gallery")
//            galerie.innerHTML = '';
//            for(let i = 0; i < appartement.length; i++){
//                
//                const card = document.createElement("figure");
//                const cardTitle = document.createElement("figcaption");
//                cardTitle.textContent = appartement[i].title;
//                const cardImage = document.createElement("img");
//                cardImage.src = appartement[i].imageUrl;
//
//                card.appendChild(cardImage);
//                card.appendChild(cardTitle);
//
//                galerie.appendChild(card);
//            }
//        }
//        appartementsSeuls(appartement);
//    })
//});
//
//let baliseHetR = document.getElementById("btn-hetr");
//baliseHetR.addEventListener("click", ()=>{
//fetch("http://localhost:5678/api/works")
//    .then(travaux => travaux.json())
//    .then (travaux => travaux.filter((hotels)=> hotels.categoryId === 3))
//    .then (hotel => {
//        function hotelSeuls(hotel){
//            let galerie = document.querySelector(".gallery")
//            galerie.innerHTML = '';
//            for(let i = 0; i < hotel.length; i++){
//                
//                const card = document.createElement("figure");
//                const cardTitle = document.createElement("figcaption");
//                cardTitle.textContent = hotel[i].title;
//                const cardImage = document.createElement("img");
//                cardImage.src = hotel[i].imageUrl;
//
//                card.appendChild(cardImage);
//                card.appendChild(cardTitle);
//
//                galerie.appendChild(card);
//            }
//        }
//        hotelSeuls(hotel);
//    })
//});
//
//let baliseReset = document.getElementById("btn-reset");
//baliseReset.addEventListener("click", ()=>{
//    fetch("http://localhost:5678/api/works")
//    .then(travaux => travaux.json())
//    .then (travauxLisibles => {
//function oeuvres(travauxLisibles){
//        let galerie = document.querySelector(".gallery")
//        galerie.innerHTML = '';
//            for (let i = 0; i < travauxLisibles.length; i++) { 
//
//            const card = document.createElement("figure");
//            const cardTitle = document.createElement("figcaption");
//            cardTitle.textContent = travauxLisibles[i].title;
//            const cardImage = document.createElement("img");
//            cardImage.src = travauxLisibles[i].imageUrl;
//
//            card.appendChild(cardImage);
//            card.appendChild(cardTitle);
//
//            galerie.appendChild(card);
//        
//            }
//        };
//        oeuvres(travauxLisibles);
//    });
//});
//
////Implantation des liens
//let menuNavigation = document.querySelector("header ul");
//menuNavigation.innerHTML = `
//<li><a href="#portfolio">projets</a></li>
//<li><a href="#contact">contact</a></li>
//<li><a href="login.html">login</a></li>
//<li><i class="fa-brands fa-instagram"></i></li>
//`
//
////Vérification du token en localStorage
//if(localStorage.getItem("token") !== null){
//    console.log("Ok tu es identifié")
//
//    //Mise en place de la barre noire moche
//    let laBarreNoireMoche = document.createElement("div");
//    laBarreNoireMoche.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>     Mode édition`;
//    laBarreNoireMoche.classList.add("barreNoire")
//    let placeBarre = document.querySelector("header");
//    placeBarre.before(laBarreNoireMoche);
//
//    // Nouveau menu de navigation quand connecté
//        let menuNavigationConnect = document.querySelector("header ul");
//        menuNavigationConnect.innerHTML = `
//        <li><a href="#portfolio">projets</a></li>
//        <li><a href="#contact">contact</a></li>
//        <li><button class="logout">logout</button></li>
//        <li><i class="fa-brands fa-instagram"></i></li>
//        `
//
//    //Disparition des boutons
//    laDivDeTest.innerHTML = ``;
//
//    //Apparition du bouton 'modifier'
//    let boutonModifier = document.createElement("button");
//    boutonModifier.innerHTML = `<i class="fa-regular fa-pen-to-square"></i> modifier`;
//    boutonModifier.classList.add("btn-modifier");
//
//    let placeDuBouton = document.querySelector("#portfolio h2");
//    placeDuBouton.appendChild(boutonModifier);
//
//    //Fonctionnement du bouton 'logout'
//    let baliseLogOut = document.querySelector(".logout");
//    baliseLogOut.addEventListener("click", ()=>{
//        localStorage.removeItem("token");
//        window.location.assign("index.html");
//    });
//    //Fonctionnement du bouton modifier
//    let body = document.querySelector(".body")
//    let baliseModifier = document.querySelector(".btn-modifier")
//    baliseModifier.addEventListener("click", ()=>{
//    console.log("Bonjour");
//    body.innerHTML = `
//    <div class="modale tiensTaModale">
//        <div class="modale overlayModale">
//            <div class="modale mangeTaModale">
//                <button class="fermeTaModale"><i class="fa-solid fa-xmark"></i></button>
//                <p>Coucou</p>
//                <p>Tu veux voir ma modale ?</p>
//            </div>
//        </div>
//    </div>
//    `
//    const fermetureModale = document.querySelector(".tiensTaModale");
//    const elementDeLaModale = document.querySelectorAll("modale");
//
//    elementDeLaModale.forEach(trigger => { trigger.addEventListener("click", ()=>{
//        fermetureModale.classList.toggle("active")
//    })
//        
//    });
//    });
//    
//}
//else{
//    console.log("You shall not pass !");
//}

let travauxLisibles; // Déclaration de la variable travauxLisibles dans la portée globale

//Récupération des travaux dans l'API et stockage dans le LocalStorage
fetch("http://localhost:5678/api/works")
    .then(travaux => travaux.json())
    .then(travauxData => {
        travauxLisibles = travauxData; 
        localStorage.setItem("travauxLisibles", JSON.stringify(travauxLisibles));
        oeuvres(travauxLisibles);
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
// Sélectionnez la modale et l'overlay
const modale = document.querySelector(".modale");
const overlay = document.querySelector(".overlayModale");
modale.style.display = "none";
overlay.style.display = "none";

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
    modale.style.display = "none";
    overlay.style.display = "none";
    //Fonction d'affichage de la gallerie
    let travauxGalerie = JSON.parse(localStorage.getItem("travauxLisibles"));
    AfficherGalerieModale(travauxGalerie)

    // Fonctionnement du bouton modifier
    boutonModifier.addEventListener("click", () => {
        modale.style.display = "block";
        overlay.style.display = "block";

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
        poubelleContainer.type = "button";
        poubelleContainer.id = `${i}`;

        const poubelleIcon = document.createElement("div");
        poubelleIcon.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;

        poubelleContainer.appendChild(poubelleIcon);

        cardModale.appendChild(cardImage);
        cardModale.appendChild(poubelleContainer);

        galerieModale.appendChild(cardModale);
        }
    }

    }
    // Fonctionnement du bouton de fermeture de la modale
    const fermerModale = document.getElementById("fermeTaModaleUn");
    fermerModale.addEventListener("click", () => {

        modale.style.display = "none";
        overlay.style.display = "none";
    });
    //const overlayFermetureModale = document.querySelector(".overlayModale");
    //overlayFermetureModale.addEventListener("click", () => {
    //    modale.style.display = "none";
    //    overlay.style.display = "none";
    //});

    // Fonctionnement du bouton poubelle
    const token = localStorage.getItem('token');
    const poubelleElements = document.querySelectorAll(".poubelle");
    poubelleElements.forEach((supprimeElement) => {
        supprimeElement.addEventListener("click", () => {
            const id = supprimeElement.id;
            console.log("Token :", token);
            console.log("ID :", id);
    
        console.log("Vous allez supprimer l'élément ", id)

        // Vérifiez que vous avez obtenu un ID valide
        if (id) {
            // Envoie de la requête DELETE à votre API
            fetch(`http://localhost:5678/api/works/16`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer : ` + token,
                }
            })
            .then((response) => {
                console.log(headers)
                if (response.status === 200) {
                    // L'élément a été supprimé avec succès, vous pouvez mettre à jour l'affichage ici
                    // Par exemple, en supprimant visuellement l'élément de la page
                    supprimeElement.parentElement.remove();
                } else {
                    // Gérez les erreurs ou les cas où l'élément n'a pas pu être supprimé
                    console.error("Erreur lors de la suppression de l'élément.");
                }
            })
            .catch((error) => {
                console.error("Erreur lors de la suppression de l'élément :", error);
                console.log(headers)
            });
        } else {
            console.error("ID non valide.");
        }
        
        });
    });

    // Fonctionnement du bouton 'Ajouter une photo'
    let ajoutPhotos = document.querySelector(".boutonAjouter");
    ajoutPhotos.addEventListener("click", () => {
        const nouveauContenuModale = `
            <div class="mangeTaModale">
            <button class="laFlecheRetour"><i class="fa-solid fa-arrow-left fa-xl"></i></button>
            <button class="fermeTaModale" id="fermeTaModaleDeux"><i class="fa-solid fa-xmark fa-xl"></i></button>
            <h3>Ajout photo</h3>
            <form action="" method="post" enctype="multipart/form-data" id="renseignementsPhotos">
                <div class="rectBleu">
                    <div class="placePhoto">
                        <i class="fa-regular fa-image fa-6x"></i>
                    </div>
                    <input type="file" id="selectFile" style="display: none;">
                    <button onclick="telechargerFichier()" class="boutonBleuAjoutPhoto" id="telechargerBtn">+ Ajouter image</button>
                    <p>jpg, png : 4mo max</p>
                </div>
                <label for="title">Titre</label>
                <input type="text" name="title" id="title">
                <label for="categories">Catégories</label>
                <select id="categoryElement">
                    <option value="noValue"></option>
                    <option value="object">Objets</option>
                    <option value="appartements">Appartements</option>
                    <option value="hotels">Hôtels & restaurants</option>
                </select>
                <div class="ligneNoire"></div>
                <input type="submit" value="Valider" id="validationFinale">
            </form>
            </div>
            `;

            // Stockez le contenu de la modale actuelle dans le sessionStorage
            const modalePageUn = document.querySelector(".pageModaleUn");
            const modalePageUnHTML = modalePageUn.innerHTML;
            sessionStorage.setItem("modalePremierePage", modalePageUnHTML);

            // Mettez à jour le contenu de la modale avec le nouveau contenu
            const modifierModale = document.querySelector(".mangeTaModale");
            modifierModale.innerHTML = nouveauContenuModale;

            // Fonctionnement de la flèche de retour
            const baliseRetour = document.querySelector(".laFlecheRetour");
            baliseRetour.addEventListener("click", () => {
                const modalePageUnHTML = sessionStorage.getItem("modalePremierePage");
                const modale = document.querySelector(".mangeTaModale");
                modale.innerHTML = modalePageUnHTML;
            });
            // Fonctionnement du bouton fermer la modale
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
            //fonctionnement du bouton validation finale
            // Fonction asynchrone pour gérer la soumission du formulaire
            document.getElementById("renseignementsPhotos").addEventListener("submit", async (event) => {
                event.preventDefault(); // Empêche le rechargement de la page par défaut

                // Récupérer les valeurs des champs du formulaire
                const titre = document.getElementById("title").value;
                const id = document.querySelector("#categoryElement option:checked").value;
                const imageInput = document.getElementById("selectFile");
                const imageFile = imageInput.files[0];

                const NumberId = categorieMapping(id);
                console.log(titre, id, NumberId, imageFile);

                // Vérifier que tous les champs obligatoires sont remplis
                if (titre && NumberId && imageFile) {
                    // Créer une promesse pour la lecture du fichier
                    const imageData = await readFileAsync(imageFile);

                    if (imageData) {
                        const formData = new FormData();
                        formData.append("title", titre);
                        formData.append("category", NumberId);
                        formData.append("image", imageData);

                        try {
                            // Effectuer la requête POST
                            const response = await fetch("http://localhost:5678/api/works", {
                                method: "POST",
                                headers: {
                                    Authorization: `Bearer ` + token,
                                },
                                body: formData,
                            });
                            console.log(titre, id, NumberId, imageFile);
                            if (response.status === 201) {
                                // La création a réussi (statut 201), vous pouvez gérer ici la réponse du serveur
                                console.log("Image ajoutée avec succès !");
                            } else {
                                // Gérer d'autres cas de réponse du serveur en fonction de votre API
                                console.error("Erreur lors de l'ajout de l'image.");
                            }
                        } catch (error) {
                            console.error("Erreur lors de la requête POST :", error);
                        }
                    } else {
                        console.error("Erreur lors de la lecture de l'image.");
                    }
                } else {
                    console.error("Veuillez remplir tous les champs obligatoires.");
                }
            });

            // Fonction utilitaire pour lire le contenu du fichier en tant que données base64 (promesse)
            function readFileAsync(file) {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = () => {
                        resolve(reader.result);
                    };
                    reader.onerror = reject;
                    reader.readAsDataURL(file);
                });
            }
    })
}