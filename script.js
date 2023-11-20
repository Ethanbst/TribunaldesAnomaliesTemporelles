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

// Animation du buton login
bt1.forEach(bouton_lien => {
    bouton_lien.addEventListener('mouseenter', () => {
        bouton_lien.classList.add('bouton_lien_hover');
    });

    bouton_lien.addEventListener('mouseleave', () => {
        bouton_lien.classList.remove('bouton_lien_hover');
    });
});

// Animation du buton de lancement
const bt2 = document.querySelectorAll('.bouton_lancement_lien');

bt2.forEach(bouton_lancement_lien => {
    bouton_lancement_lien.addEventListener('mouseenter', () => {
        bouton_lancement_lien.classList.add('bouton_lancement_lien_hover');
    });

    bouton_lancement_lien.addEventListener('mouseleave', () => {
        bouton_lancement_lien.classList.remove('bouton_lancement_lien_hover');
    });
});


document.addEventListener("keypress", function(e) { //Si touche entrer pressée on active active la fonction de validation des id
    if (e.key === "Enter") {
        validateLogin();
    }
});


async function validateLogin() { //Action du bouton login
    console.log("Fonction validateLogin appelée");
    var username = document.getElementById("username").value; //On récupère l'id dans username
    var password = document.getElementById("password").value; //On récupère le mot de passe dans password

    const username_hash = await hashString(username); //On récupère notre username haché
    //console.log("Username hash = " + username_hash);
    const password_hash = await hashString(password); //On récupère notre password haché
    //console.log("Password hash = " + password_hash);

    // Vérifiez d'abord si les champs sont remplis
    if (username.trim() === "" || password.trim() === "") {
        // Affichez un message d'erreur si les champs sont vides
        document.getElementById("errorText").textContent = "Veuillez remplir tous les champs.";
        return; // Arrêtez la fonction si les champs ne sont pas remplis
    }

    // Exemple : Paires identifiant-mot de passe valides
    var validCredentials = {
        "7b8bd6c0abf53d22888beafc48830e1156907dd4ec7e6ea31e55a0dd6dc5a969": "7b42f2112fc150f2f9481a027e2c6666df2b9f3fc4851d05bd1b891d15d2f12b",
        "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918": "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918",
    };

    if (validCredentials.hasOwnProperty(username_hash) && validCredentials[username_hash] === password_hash) {
        // Authentification réussie, redirigez l'utilisateur vers la page souhaitée
        console.log("Redirection effectuée");
        window.location.href = "index.html";
    } else {
        // Affichez un message d'erreur
        document.getElementById("errorText").textContent = "Identifiant ou mot de passe incorrect.";
    }
}

    function aleatoire(){ //Génère un chiffre aléatoire entre 100 et 500
        var alea;
        alea = Math.floor(Math.random() * (1500 + 1));;
        console.log(alea);
        return alea; 
    }

        // Attendez 5 secondes avant de masquer l'écran de chargement
    setTimeout(function() {
        var loader = document.getElementById('loader');
        loader.style.display = 'none';
    },aleatoire()); // temps de chargement en millisecondes aléatoire


// Fonction pour hacher une chaîne
async function hashString(inputString) {
    // Convertir la chaîne en ArrayBuffer
    const encoder = new TextEncoder();
    const data = encoder.encode(inputString);

    // Calculer le hachage SHA-256
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);

    // Convertir le résultat en une chaîne hexadécimale
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashedValue = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    //console.log(inputString + "=" + hashedValue);
    return hashedValue;
  }
