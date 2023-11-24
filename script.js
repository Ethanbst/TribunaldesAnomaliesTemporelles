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
// Animation du bouton login
bt1.forEach(bouton_lien => {
    bouton_lien.addEventListener('mouseenter', () => {
        bouton_lien.classList.add('bouton_lien_hover');
    });

    bouton_lien.addEventListener('mouseleave', () => {
        bouton_lien.classList.remove('bouton_lien_hover');
    });
});

// Animation du bouton de lancement
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
        window.location.href = "admin.html";
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
    },/*aleatoire()*/); // temps de chargement en millisecondes aléatoire

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



//SCRIPT PAGE ADMIN

    // Appelez la fonction lorsque la page est chargée
    window.onload = mettreAJourRAM;
    window.onload= mettreAJourGPU('.GPU');

//Génère une valeur aléatoire entre 600 et 1020 et la remplace dans .RAM
function mettreAJourRAM() {
  // Sélectionne l'élément div avec la classe "RAM"
  var divRAM = document.querySelector('.RAM');

  // Met à jour le texte de l'élément toutes les 1 seconde
  setInterval(function() {
    // Génère un nombre aléatoire entre 600 et 630
    var valeurAleatoire = Math.floor(Math.random() * 420) + 600;

    // Remplace le texte de l'élément div par la valeur aléatoire
    divRAM.textContent = valeurAleatoire;
  }, 1000); // 1000 millisecondes équivalent à 1 seconde
}

//Génère une valeur aléatoire entre 10 et 100 et la remplace dans .GPU
function mettreAJourGPU(selecteur) {
    // Sélectionne tous les éléments avec la classe spécifiée (par exemple, ".RAM")
    var elementsRAM = document.querySelectorAll(selecteur);
  
    // Met à jour le texte de chaque élément toutes les 1 seconde
    setInterval(function() {
      elementsRAM.forEach(function(element) {
        // Génère un nombre aléatoire entre 600 et 630
        var valeurAleatoire = Math.floor(Math.random() * 88) + 10;
  
        // Remplace le texte de l'élément par la valeur aléatoire
        element.textContent = valeurAleatoire;
      });
    }, 1000); // 1000 millisecondes équivalent à 1 seconde
  }



  // Animation du button de controle
const bt3 = document.querySelectorAll('.button_normal');
bt3.forEach(button_normal => {
    button_normal.addEventListener('mouseenter', () => {
        button_normal.classList.add('button_normal_hover');
    });

    button_normal.addEventListener('mouseleave', () => {
        button_normal.classList.remove('button_normal_hover');
    });
});



  // Animation du div flux temp
  window.onload= anim_flux();

  function anim_flux(){
    const bf = document.querySelectorAll('#bloc_flux');
    var num = 0;
    setInterval(() => {
        bf.forEach(bloc_flux => {
                if(num === 0){
                    bloc_flux.id ='bloc_flux';
                    num = 1;
                }

                else{
                    bloc_flux.id ='bloc_flux_style2';
                    num = 0;
                }
            });
    }, 500);


  }

  window.onload= mettreAJourGPU('.utilisation');

  //Génère une valeur aléatoire entre 120 et 180 et la remplace dans .GPU
function mettreAJourGPU(selecteur) {
    // Sélectionne tous les éléments avec la classe spécifiée (par exemple, ".RAM")
    var elementsRAM = document.querySelectorAll(selecteur);
  
    // Met à jour le texte de chaque élément toutes les 1 seconde
    setInterval(function() {
      elementsRAM.forEach(function(element) {
        // Génère un nombre aléatoire entre 600 et 630
        var valeurAleatoire = Math.floor(Math.random() * 60) + 120;
  
        // Remplace le texte de l'élément par la valeur aléatoire
        element.textContent = valeurAleatoire;
      });
    }, 1000); // 1000 millisecondes équivalent à 1 seconde
  }