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
