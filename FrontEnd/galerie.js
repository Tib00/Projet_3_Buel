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

    let modaleOuverte = false;
    // Fonctionnement du bouton modifier
    let baliseModifier = document.querySelector(".btn-modifier")
    baliseModifier.addEventListener("click", () => {
        if (!modaleOuverte) {
            const modaleConteneur = document.createElement("div")
            modaleConteneur.classList.add("modale", "modaleConteneur")
            modaleConteneur.innerHTML = `
                <div class="modale overlayModale">
                    <div class="modale mangeTaModale">
                        <button class="fermeTaModale"><i class="fa-solid fa-xmark fa-xl"></i></button>
                        <h3>Galerie photo</h3>
                        <div class="modaleGalerie"></div>
                        <div class="ligneNoire"></div>
                        <button class="boutonAjouter">Ajouter une photo</button>
                    </div>
                </div>
            `;

            const placeModale = document.getElementById("introduction")
            placeModale.insertAdjacentElement("beforebegin", modaleConteneur);
    
            const fermerModale = document.querySelector(".fermeTaModale")
            fermerModale.addEventListener("click", () => {
                modaleConteneur.style.display = "none";
                modaleOuverte = false;
            });
            modaleOuverte = true;

            //Fonction d'affichage de la gallerie
            let travauxGalerie = JSON.parse(localStorage.getItem("travauxLisibles"));

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
                        poubelleContainer.id = `poubelle-${i}`;
            
                        const poubelleIcon = document.createElement("div");
                        poubelleIcon.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
            
                        poubelleContainer.appendChild(poubelleIcon);
            
                        cardModale.appendChild(cardImage);
                        cardModale.appendChild(poubelleContainer);
            
                        galerieModale.appendChild(cardModale);

                        // Fonctionnement du bouton poubelle
                        //const poubelleElements = document.querySelectorAll(".poubelle");
//
                        //poubelleElements.forEach((supprimeElement) => {
                        //supprimeElement.addEventListener("click", () => {
                        //    const id = poubelleContainer.id;
                        //    console.log("Vous allez supprimer l'élément ", id)

                        //    // Vérifiez que vous avez obtenu un ID valide
                        //    if (id) {
                        //        // Envoie de la requête DELETE à votre API
                        //        fetch(`http://localhost:5678/api/works/${id}`, {
                        //            method: 'DELETE',
                        //            headers: {
                        //                'token': localStorage.getItem("token")
                        //            }
                        //        })
                        //        .then((response) => {
                        //            if (response.status === 200) {
                        //                // L'élément a été supprimé avec succès, vous pouvez mettre à jour l'affichage ici
                        //                // Par exemple, en supprimant visuellement l'élément de la page
                        //                supprimeElement.parentElement.remove();
                        //            } else {
                        //                // Gérez les erreurs ou les cas où l'élément n'a pas pu être supprimé
                        //                console.error("Erreur lors de la suppression de l'élément.");
                        //            }
                        //        })
                        //        .catch((error) => {
                        //            console.error("Erreur lors de la suppression de l'élément :", error);
                        //        });
                        //    } else {
                        //        console.error("ID non valide.");
                        //    }
                        //    });
                        //});
                    }
                }
                else {
                    console.log("Les données ne sont pas valides ou ne sont pas un tableau.");
                }
            }
            AfficherGalerieModale(travauxGalerie)

        }
    });

}