{fetch("http://localhost:5678/api/works")
    .then(travaux => travaux.json())
    .then (travaux => console.table(travaux))
}
//const categories = await fetch("http:/localhost:5678/categories")
//const categoriesLisibles = await categories.json();
let galerie = document.querySelector(".gallery")
    galerie.innerHTML = '';

//async function travaux(){
//    const travaux = await fetch("http://localhost:5678/api/works")
//    const travauxLisibles = await travaux.json();
//
//
//    const card = document.createElement("figure");
//    const cardTitle = document.createElement("figcaption");
//    cardTitle.textContent = travauxLisibles[0].title;
//    const cardImage = document.createElement("img");
//    cardImage.src = travauxLisibles[0].imageUrl;
//
//    card.appendChild(cardImage);
//    card.appendChild(cardTitle);
//
//    galerie.appendChild(card);
//
//};
//
//travaux();
//async function travaux(){
//        const travaux = await fetch("http://localhost:5678/api/works")
//        const travauxLisibles = await travaux.json();
//        return(travauxLisibles)
//}
//travaux();
//
//for (let i = 0; i < travauxLisibles.length; i++) {
//    function ouvrages(travauxLisibles){
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
//    }
//    ouvrages();
//};

const travaux = "";
//Boucle de génération de la galerie
async function oeuvres(){
        travaux = await fetch("http://localhost:5678/api/works")
        const travauxLisibles = await travaux.json();

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
oeuvres();

//création et mise en place des boutons
let laDivDeTest = document.createElement("div");
laDivDeTest.classList.add("laDivDeTest")
let boutonReset = document.createElement("button");
boutonReset.classList.add("button");
boutonReset.innerText = "Tous";
let boutonObjets = document.createElement("button");
boutonObjets.classList.add("button");
boutonObjets.innerText = "Objets";
boutonObjets.setAttribute("id", "btn-objets")
let boutonAppartements = document.createElement("button");
boutonAppartements.classList.add("button");
boutonAppartements.innerText = "Appartements";
let boutonHetR = document.createElement("button");
boutonHetR.classList.add("button");
boutonHetR.innerText = "Hôtels & restaurants";


let placeBouton = document.querySelector("#portfolio h2");
placeBouton.after(laDivDeTest);
laDivDeTest.appendChild(boutonReset);
laDivDeTest.appendChild(boutonObjets);
laDivDeTest.appendChild(boutonAppartements);
laDivDeTest.appendChild(boutonHetR);

//fonctionnement des boutons
let baliseObjets = document.getElementById("btn-objets");
baliseObjets.addEventListener("click", ()=>{
   const objetsSeuls = oeuvres.filter(function (oeuvres){
    return oeuvres.category.id === 1;
   })
   document.querySelector(".gallery").innerHTML = '';
   oeuvres(objetsSeuls)
})




