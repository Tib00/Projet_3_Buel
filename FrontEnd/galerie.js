{fetch("http://localhost:5678/api/works")
    .then(travaux => travaux.json())
    .then (travaux => console.table(travaux))
}
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