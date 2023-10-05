let modaleOuverte = false;
    // Fonctionnement du bouton modifier
    let baliseModifier = document.querySelector(".btn-modifier")
    baliseModifier.addEventListener("click", () => {
        if (!modaleOuverte) {
            const modaleConteneur = document.createElement("div")
            modaleConteneur.classList.add("modale", "modaleConteneur")
            modaleConteneur.innerHTML = `
                <div class="overlayModale">
                    <div class="mangeTaModale pageModaleUn">
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

                        
                    }
                    // Fonctionnement du bouton poubelle
                    const poubelleElements = document.querySelectorAll(".poubelle");
                    poubelleElements.forEach((supprimeElement) => {
                        supprimeElement.addEventListener("click", () => {
                        const id = supprimeElement.id;
                        console.log("Vous allez supprimer l'élément ", id)

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
                        });
                    });

                        //fonctionnement du bouton 'Ajouter une photo'
                        let modifierModale = document.querySelector(".mangeTaModale");
                        let ajoutPhotos = document.querySelector(".boutonAjouter");
                        ajoutPhotos.addEventListener("click", () => {
                            const modalePageUn = document.querySelector(".pageModaleUn");
                            const modalePageUnEnString = JSON.stringify(modalePageUn);
                            sessionStorage.setItem("modalePremierePage", modalePageUnEnString);
                        const nouveauContenuModale = `
                        <div class="mangeTaModale">
                        <button class="laFlecheRetour"><i class="fa-solid fa-arrow-left fa-xl"></i></button>
                        <button class="fermeTaModale"><i class="fa-solid fa-xmark fa-xl"></i></button>
                        <h3>Ajout photo</h3>
                        <form action="#" method="post" id="renseignementsPhotos">
                            <div class="rectBleu">
                                <i class="fa-regular fa-image fa-6x"></i>
                                <button class=boutonBleuAjoutPhoto>+ Ajouter photo</button>
                                <p>jpg, png : 4mo max</p>
                            </div>
                            <label for="title">Titre</label>
                            <input type="text" name="title" id="title">
                            <label for="categories">Catégories</label>
                            <select>
                                <option value ="noValue"></option>
                                <option value ="object">Objets</option>
                                <option value ="appartements">Appartements</option>
                                <option value ="hotels">Hôtels & restaurants</option>
                            </select>
                            <div class="ligneNoire"></div>
                            <input type="submit" value="Valider" >
                            </form>
                        </div>
                        `
                        modifierModale.innerHTML = nouveauContenuModale;
                        //Fonctionnement de la flèche de retour
                        const baliseRetour = document.querySelector(".laFlecheRetour");
                        baliseRetour.addEventListener("click", () => {
                            AfficherGalerieModale(travauxGalerie)
                        });
                    })

                }
                else {
                    console.log("Les données ne sont pas valides ou ne sont pas un tableau.");
                }}