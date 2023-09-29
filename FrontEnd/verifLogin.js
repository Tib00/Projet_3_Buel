//Implantation des liens
let menuNavigation = document.querySelector("header ul");
menuNavigation.innerHTML = `
<li><a href="#portfolio">projets</a></li>
<li><a href="#contact">contact</a></li>
<li><a href="login.html">login</a></li>
<li><i class="fa-brands fa-instagram"></i></li>
`

// Fonction pour supprimer tous les messages d'erreur
function supprimerMessagesErreur() {
    const messagesErreur = document.querySelectorAll(".error");
    messagesErreur.forEach(message => {
        message.remove();
    });
}

//fonction de génération de la balise d'erreur
function genererMessageErreur(){
    console.log("Erreur dans l’identifiant ou le mot de passe");
    let baliseErreur = document.createElement("p");
    baliseErreur.classList.add("error")
    baliseErreur.textContent = "Erreur dans l’identifiant ou le mot de passe";
    let placeBalise = document.getElementById("mdp");
    placeBalise.appendChild(baliseErreur)
}

//Fonctionnement du bouton envoyer
let baliseSubmit = document.querySelector("form")
    baliseSubmit.addEventListener("submit", (event)=>{
        //Empêchement du fonctionnement par défaut
        event.preventDefault();

        // Supprimer les messages d'erreur existants
        supprimerMessagesErreur();

        //récupération des champs
        const mail = document.getElementById("mail").value;
        const pass = document.getElementById("pass").value;
        console.log(mail.trim());
        console.log(pass);

        //Vérification du champ mail et mot de passe
        if(mail === '' || pass === ''){
            genererMessageErreur();
        }
        else{
            let regexMail = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+");
            let verifMail = regexMail.test(mail.trim());
            console.log(verifMail);

            let regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
            let verifPass = regexPass.test(pass);
            console.log(verifPass);

            if(verifMail !== true || verifPass !== true){
                genererMessageErreur();
            }
            else if(verifMail === true && verifPass === true){
                fetch("http://localhost:5678/api/users/login", {
                    method: 'POST',
                    headers:{'Content-Type': 'application/json'},
                    body:JSON.stringify({
                    "email" : mail,
                    "password" : pass
                    })
                })
                .then(response => {
                    if (!response.ok) {

                        console.log("Statut de la réponse :", response.status);
                        if (response.status === 404) {
                            console.log("La ressource n'a pas été trouvée (404)");
                            genererMessageErreur();
                        } else if (response.status === 500) {
                            console.log("Erreur interne du serveur (500)");
                            genererMessageErreur();
                        } else {
                            console.log("Erreur inattendue");
                            genererMessageErreur();
                        }
                        throw new Error("Erreur de la requête");
                    }
                    return response.json();
                })
                .then(accessCode => {
                        localStorage.setItem("token", accessCode.token);
                        
                        // Rediriger après avoir ajouté le token au localStorage
                        window.location.assign("http://127.0.0.1:5500/Portfolio-architecte-sophie-bluel/FrontEnd/index.html");

                });

            }
        };
    });