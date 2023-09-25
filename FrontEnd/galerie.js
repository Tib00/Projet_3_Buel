fetch("http://localhost:5678/api/works")
    .then(travaux => travaux.json())
    .then (travauxLisibles => {
function oeuvres(travauxLisibles){
    let galerie = document.querySelector(".gallery")
    galerie.innerHTML = '';
        for (let i = 0; i < travauxLisibles.length; i++) { 

        const card = document.createElement("figure");
        const cardTitle = document.createElement("figcaption");
        cardTitle.textContent = travauxLisibles[i].title;
        const cardImage = document.createElement("img");
        cardImage.src = travauxLisibles[i].imageUrl;

        card.appendChild(cardImage);
        card.appendChild(cardTitle);

        galerie.appendChild(card);
        
        }
    };
    oeuvres(travauxLisibles);
});

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
baliseObjets.addEventListener("click", ()=>{
fetch("http://localhost:5678/api/works")
    .then(travaux => travaux.json())
    .then (travaux => travaux.filter((objet)=> objet.categoryId === 1))
    .then (objet => {
        function objetSeuls(objet){
            let galerie = document.querySelector(".gallery")
            galerie.innerHTML = '';
            for(let i = 0; i < objet.length; i++){
                
                const card = document.createElement("figure");
                const cardTitle = document.createElement("figcaption");
                cardTitle.textContent = objet[i].title;
                const cardImage = document.createElement("img");
                cardImage.src = objet[i].imageUrl;

                card.appendChild(cardImage);
                card.appendChild(cardTitle);

                galerie.appendChild(card);
            }
        }
        objetSeuls(objet);
    })
});

let baliseAppartements = document.getElementById("btn-appartements");
baliseAppartements.addEventListener("click", ()=>{
fetch("http://localhost:5678/api/works")
    .then(travaux => travaux.json())
    .then (travaux => travaux.filter((appartement)=> appartement.categoryId === 2))
    .then (appartement => {
        function appartementsSeuls(appartement){
            let galerie = document.querySelector(".gallery")
            galerie.innerHTML = '';
            for(let i = 0; i < appartement.length; i++){
                
                const card = document.createElement("figure");
                const cardTitle = document.createElement("figcaption");
                cardTitle.textContent = appartement[i].title;
                const cardImage = document.createElement("img");
                cardImage.src = appartement[i].imageUrl;

                card.appendChild(cardImage);
                card.appendChild(cardTitle);

                galerie.appendChild(card);
            }
        }
        appartementsSeuls(appartement);
    })
});

let baliseHetR = document.getElementById("btn-hetr");
baliseHetR.addEventListener("click", ()=>{
fetch("http://localhost:5678/api/works")
    .then(travaux => travaux.json())
    .then (travaux => travaux.filter((hotels)=> hotels.categoryId === 3))
    .then (hotel => {
        function hotelSeuls(hotel){
            let galerie = document.querySelector(".gallery")
            galerie.innerHTML = '';
            for(let i = 0; i < hotel.length; i++){
                
                const card = document.createElement("figure");
                const cardTitle = document.createElement("figcaption");
                cardTitle.textContent = hotel[i].title;
                const cardImage = document.createElement("img");
                cardImage.src = hotel[i].imageUrl;

                card.appendChild(cardImage);
                card.appendChild(cardTitle);

                galerie.appendChild(card);
            }
        }
        hotelSeuls(hotel);
    })
});

let baliseReset = document.getElementById("btn-reset");
baliseReset.addEventListener("click", ()=>{
    fetch("http://localhost:5678/api/works")
    .then(travaux => travaux.json())
    .then (travauxLisibles => {
function oeuvres(travauxLisibles){
        let galerie = document.querySelector(".gallery")
        galerie.innerHTML = '';
            for (let i = 0; i < travauxLisibles.length; i++) { 

            const card = document.createElement("figure");
            const cardTitle = document.createElement("figcaption");
            cardTitle.textContent = travauxLisibles[i].title;
            const cardImage = document.createElement("img");
            cardImage.src = travauxLisibles[i].imageUrl;

            card.appendChild(cardImage);
            card.appendChild(cardTitle);

            galerie.appendChild(card);
        
            }
        };
        oeuvres(travauxLisibles);
    });
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
    console.log("Ok tu es identifié")

    //Mise en place de la barre noire moche
    let laBarreNoireMoche = document.createElement("div");
    laBarreNoireMoche.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>     Mode édition`;
    laBarreNoireMoche.classList.add("barreNoire")
    let placeBarre = document.querySelector("header");
    placeBarre.before(laBarreNoireMoche);

    // Nouveau menu de navigation quand connecté
        let menuNavigationConnect = document.querySelector("header ul");
        menuNavigationConnect.innerHTML = `
        <li><a href="#portfolio">projets</a></li>
        <li><a href="#contact">contact</a></li>
        <li><button class="logout">logout</button></li>
        <li><i class="fa-brands fa-instagram"></i></li>
        `

    //Disparition des boutons
    laDivDeTest.innerHTML = ``;

    //Apparition du bouton 'modifier'
    let boutonModifier = document.createElement("button");
    boutonModifier.innerHTML = `<i class="fa-regular fa-pen-to-square"></i> modifier`;
    boutonModifier.classList.add("btn-modifier");

    let placeDuBouton = document.querySelector("#portfolio h2");
    placeDuBouton.appendChild(boutonModifier);

    //Fonctionnement du bouton 'logout'
    let baliseLogOut = document.querySelector(".logout");
    baliseLogOut.addEventListener("click", ()=>{
        localStorage.removeItem("token");
        window.location.assign("index.html");
    });
}
else{
    console.log("You shall not pass !");
}
