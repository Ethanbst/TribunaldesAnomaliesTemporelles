// Sélectionnez tous les éléments avec la classe "bloc"
const blocs = document.querySelectorAll('.bloc');

// Parcourez chaque élément et ajoutez des gestionnaires d'événements pour "hover"
blocs.forEach(bloc => {
    bloc.addEventListener('mouseenter', () => {
        bloc.classList.add('bloc-hover');
    });

    bloc.addEventListener('mouseleave', () => {
        bloc.classList.remove('bloc-hover');
    });
});



// Sélectionnez tous les éléments avec la classe "bloc_titre"
const blocs2 = document.querySelectorAll('.bloc_titre');

// Parcourez chaque élément et ajoutez des gestionnaires d'événements pour "hover"
blocs2.forEach(bloc_titre => {
    bloc_titre.addEventListener('mouseenter', () => {
        bloc_titre.classList.add('bloc-hover');
    });

    bloc_titre.addEventListener('mouseleave', () => {
        bloc_titre.classList.remove('bloc-hover');
    });
});



const bt1 = document.querySelectorAll('.bouton_lien');

// Parcourez chaque élément et ajoutez des gestionnaires d'événements pour "hover"
bt1.forEach(bouton_lien => {
    bouton_lien.addEventListener('mouseenter', () => {
        bouton_lien.classList.add('bouton_lien_hover');
    });

    bouton_lien.addEventListener('mouseleave', () => {
        bouton_lien.classList.remove('bouton_lien_hover');
    });
});


document.addEventListener("keypress", function(e) { //Si touche entrer pressée on active active la fonction de validation des id
    if (e.key === "Enter") {
        validateLogin();
    }
});


function validateLogin() { //Action du bouton login
    console.log("Fonction validateLogin appelée");
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Vérifiez d'abord si les champs sont remplis
    if (username.trim() === "" || password.trim() === "") {
        // Affichez un message d'erreur si les champs sont vides
        document.getElementById("errorText").textContent = "Veuillez remplir tous les champs.";
        return; // Arrêtez la fonction si les champs ne sont pas remplis
    }

    // Exemple : Paires identifiant-mot de passe valides
    var validCredentials = {
        "ethan": "22104587",
        "admin": "admin",
        "utilisateur3": "motdepasse3"
    };

    if (validCredentials.hasOwnProperty(username) && validCredentials[username] === password) {
        // Authentification réussie, redirigez l'utilisateur vers la page souhaitée
        console.log("Redirection effectuée");
        window.location.href = "index.html";
    } else {
        // Affichez un message d'erreur
        document.getElementById("errorText").textContent = "Identifiant ou mot de passe incorrect.";
    }
}

        // Attendez 5 secondes avant de masquer l'écran de chargement
        setTimeout(function() {
            var loader = document.getElementById('loader');
            loader.style.display = 'none';
        }, 1000); // 5000 millisecondes (5 secondes)